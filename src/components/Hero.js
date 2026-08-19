// HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/Hero.css";

const HeroSection = () => {
  return (
    <section className="home-hero-section">
      <div className="overlay">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Embracing differences, <br />
          <span className="highlight">empowering dreams</span>
        </motion.h1>

        <motion.p
          className="hero-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Welcome to Addie's Afrique Foundation, a beacon of hope and support
          for the vulnerable and in-need children of our society.{" "}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link to="/donate" className="donate-link">
          <button className="donate-btn">
            Donate Now <FaRegHeart />
          </button>
          </Link>
          <Link to="/partnership" className="donate-link">
          <button className="involved-button">
            <AiOutlineUserAdd /> Get Involved
          </button>
          </Link>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="stat-box">
            <h3>2000+</h3>
            <p>Lives Impacted</p>
          </div>
          <div className="stat-box">
            <h3>14</h3>
            <p>Active Partners</p>
          </div>
          <div className="stat-box">
            <h3>8</h3>
            <p>Projects Launched</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
