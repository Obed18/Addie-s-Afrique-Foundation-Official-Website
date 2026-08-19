import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import FAQSection from "../components/FAQSection";
import FAQ from "../components/FAQ";
import QuestionsSection from "../components/QuestionsSection";
import ExploreMore from "../components/ExploreMore";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <FAQSection />
      <FAQ />
      <QuestionsSection />
      <ExploreMore />
    </div>
  );
};

export default Home;
