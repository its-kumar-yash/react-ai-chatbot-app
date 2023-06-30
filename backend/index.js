const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

dotenv.config();

//call express to initialize app
const app = express();

//for request sharing
app.use(cors());
app.use(express.json());

const openaiKey = process.env.OPENAI_KEY;

//create a route
app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    res.status(400).json({
      success: false,
      message: "Prompt Required",
    });
    return;
  }

  const reqUrl = "https://api.openai.com/v1/completions";
  const reqBody = {
    model: "text-davinci-003",
    prompt,
    max_tokens: 200,
    temperature: 0.6,
  };

  try {
    const response = await axios.post(reqUrl, reqBody, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${openaiKey}`,
      },
    });

    const data = response.data;
    const answer = Array.isArray(data.choices) ? data.choices[0]?.text : "";

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

app.listen(5500, () => console.log("Server is up on 5500"));
