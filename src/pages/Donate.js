import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import DonateSection from "../components/DonateSection";
import DonationForm from "../components/DonationForm";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <DonateSection />
      <DonationForm />
    </div>
  );
};

export default Home;
