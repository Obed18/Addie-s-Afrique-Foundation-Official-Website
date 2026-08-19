// src/components/SplashScreen.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SplashScreen.css"; // We'll define animations here

const SplashScreen = () => {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState("pulse");

  useEffect(() => {
    const pulseTimer = setTimeout(() => {
      setAnimate("spin"); // Start spinning after 3 seconds
    }, 3000);

    const spinTimer = setTimeout(() => {
      navigate("/home"); // Navigate after total 5 seconds
    }, 5000);

    return () => {
      clearTimeout(pulseTimer);
      clearTimeout(spinTimer);
    };
  }, [navigate]);

  return (
    <div className="splash-container">
      <img
        src="/FLOGO.jpg" // Change to your actual image path
        alt="Logo"
        className={`splash-image ${animate}`}
      />
    </div>
  );
};

export default SplashScreen;
