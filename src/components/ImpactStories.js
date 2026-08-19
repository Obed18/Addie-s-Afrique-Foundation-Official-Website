import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/ImpactStories.css";
import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    text: "Once you have the opportunity to step on a greatest part of life, never turn away from the others.",
    name: "Daisy Addowaah Ofori",
    role: "Executive Director & Co - Founder",
    location: "Addie's Afrique Foundation",
    img: "/DaP.jpg",
  },
  {
    text: "Pretend you have no disability and you'll realize your strength.",
    name: "Desmond Dela Yatsi",
    role: "General Secretary/Child wellness, Health & Advocacy Lead",
    location: "Addie's Afrique Foundation",
    img: "DelP.jpg",
  },
  {
    text: "Beyond disability, lies unlimited potential. Believe in yourself, Unleash your dreams.",
    name: "Samuel Akuffu",
    role: "Financial Advisor/Western Regional Representative",
    location: "Addie's Afrique Foundation",
    img: "/SamuelP.jpg",
  },
];

const ImpactStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const { text, name, role, location, img } = testimonials[currentIndex];

  return (
    <div className="impact-stories-section">
      <motion.h2
        className="impact-stories-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Quotes of Impact
      </motion.h2>

      <motion.p
        className="impact-stories-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A powerful collection of inspiring words shared by key leaders of the
        foundation, reflecting their passion, vision, and commitment to creating
        lasting change in the communities they serve.{" "}
      </motion.p>

      <motion.div
        className="testimonial-card"
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaQuoteLeft className="quote-icon" />
        <p className="testimonial-text">{text}</p>

        <div className="testimonial-footer">
        <div className="testimonial-person">
          <img src={img} alt={name} className="profile-img" />
          <div className="user-info">
            <p className="user-name">{name}</p>
            <p className="user-role">{role}</p>
            <p className="user-location">{location}</p>
          </div>
          </div>
          <div className="nav-buttons">
            <button onClick={handlePrev}>
              <FiChevronLeft />
            </button>
            <button onClick={handleNext}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="pagination-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImpactStories;
