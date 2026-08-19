import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import About from "../components/AboutSection";
import Story from "../components/FoundersStory";
import Goals from "../components/CoreValues";
import Timeline from "../components/Timeline";
import CoreValues from "../components/Values";
import Stay from "../components/StayConnected";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <About />
      <Story />
      <Goals />
      <Timeline />
      <CoreValues />
      {/* <Stay /> */}
    </div>
  );
};

export default Home;
