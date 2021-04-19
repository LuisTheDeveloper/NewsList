import React from "react";
import styles from "./Home.css";
import NewsImg from "../assets/news.JPG";

export const Home = () => {
  return (
    <>
      <h3>Home</h3>
      <img className={styles.image} src={NewsImg} alt="News" />
    </>
  );
};

export default Home;
