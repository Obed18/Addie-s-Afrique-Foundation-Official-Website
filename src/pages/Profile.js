import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";

const Profile = () => {
  return (
    <div className="home">
      <Navbar />
      <ProfileSection />
    </div>
  );
};

export default Profile;
