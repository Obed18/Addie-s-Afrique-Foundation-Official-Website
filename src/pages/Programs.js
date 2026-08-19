import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import ProgramsSection from "../components/ProgramsSection";
import Initiatives from "../components/InitiativesSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <ProgramsSection />
      <Initiatives />
    </div>
  );
};

export default Home;
