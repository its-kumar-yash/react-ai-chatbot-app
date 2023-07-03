import React from "react";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
