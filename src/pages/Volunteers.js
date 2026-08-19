import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Career from "../components/Career";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Career />
    </div>
  );
};

export default Home;
