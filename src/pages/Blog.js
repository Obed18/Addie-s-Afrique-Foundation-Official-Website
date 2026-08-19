import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import BlogSection from "../components/BlogSection";
import Stay from "../components/StayUpdated";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Blogs />
      <BlogSection />
      <Stay />
    </div>
  );
};

export default Home;
