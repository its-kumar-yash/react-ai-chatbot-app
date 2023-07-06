import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { ThreeCircles } from "react-loader-spinner";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={styles.loadcontainer}>
          <ThreeCircles
            height="50"
            width="50"
            color="#046cf1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
