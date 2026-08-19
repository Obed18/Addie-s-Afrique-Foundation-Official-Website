import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import PartnerHero from "../components/PartnerHero";
import PartnerSection from "../components/PartnerSection";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <PartnerHero />
      <PartnerSection />
    </div>
  );
};

export default Home;
