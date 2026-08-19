// src/components/MissionVision.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaRegHeart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import "../styles/MissionVision.css";

const cards = [
  {
    icon: <FaRegHeart />,
    title: "Community First",
    text: "We believe in the power of communities to create lasting change from within.",
  },
  {
    icon: <FaPeopleGroup />,
    title: "Inclusive Impact",
    text: "Our programs are designed to reach everyone, regardless of background or circumstance.",
  },
  {
    icon: <FaBook />,
    title: "Education & Growth",
    text: "Knowledge is the foundation of empowerment and sustainable development.",
  },
];

const MissionVision = () => {
  return (
    <section className="mission-vision">
      <motion.div
        className="text-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="title">Our Mission & Vision</h2>
        <p className="mission">
          <strong>Mission:</strong> To work towards the financial, emotional,
          and physical provision of children with and without disabilities by
          assisting them with the necessary support to adapt to an inclusive
          society.
        </p>
        <p className="vision">
          <strong>Vision:</strong> To contribute socially to the development of
          the nation and beyond by assisting children with and without
          disabilities who are in need and vulnerable. The Addie's Afrique
          Foundation aims to reach hundreds and thousands of children in the
          next two to five years.
        </p>
      </motion.div>

      <div className="card-container">
        {cards.map((card, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVision;
