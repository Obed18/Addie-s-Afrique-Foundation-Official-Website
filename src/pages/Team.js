import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import TeamSection from "../components/TeamSection";
import Leadership from "../components/LeadershipTeam";
import Staff from "../components/StaffSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <TeamSection />
      <Leadership />
      <Staff />
    </div>
  );
};

export default Home;
