const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Groq = require("groq-sdk");

dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 4000;
// Middleware
app.use(cors());
app.use(express.json());

// Initialize Groq client
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.get("/", async (req, res) => {
  res.status(200).send({
    message: "Hello, world!",
  });
});

// Main route for chat completions
app.post("/", async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages) || !messages.length) {
    res.status(400).json({
      success: false,
      message: "Messages Required",
    });
    return;
  }

  // Convert messages to the format expected by Groq
  const formattedMessages = messages.map(item => ({
    role: item.from === "ai" ? "assistant" : "user",
    content: item.text
  }));

  // Add system message at the beginning
  formattedMessages.unshift({
    role: "system",
    content: "The assistant is helpful, creative, clever, and very friendly."
  });

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: "llama-3.3-70b-versatile", // Updated to the latest model from the docs
      max_tokens: 3000,
      temperature: 0.6,
    });

    const answer = chatCompletion.choices[0]?.message?.content || "";

    res.status(200).json({
      success: true,
      data: answer.trim(),
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong",
      error: err,
    });
  }
});

app.listen(port, () => console.log("Server is up on 5500"));