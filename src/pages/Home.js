import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/MissionVision";
import Quotes from "../components/ImpactStories";
import Impact from "../components/ImpactPrograms";
import Stats from "../components/ImpactStats";
import Stay from "../components/StayConnected";
import CertificateAccess from "../components/CertificateAccess";
import FeaturedArticle from "../components/FeaturedArticle";
import JoinTeamSection from "../components/JoinTeamSection";
import VideoShowcase from "../components/VideoShowcase";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Mission />
      <JoinTeamSection />
      <Impact />
      <VideoShowcase />
      <Stats />
      <CertificateAccess />
      <Quotes />
      <FeaturedArticle />
      <Stay />
    </div>
  );
};

export default Home;
