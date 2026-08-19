import React from "react";
import { motion } from "framer-motion";
import "../styles/CoreValues.css";
import { GrUserManager } from "react-icons/gr";
import { FaHandshake } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaFeather } from "react-icons/fa";

const coreValues = [
  {
    icon: <GrUserManager />,
    title: "Active Participation",
    description:
      "Active participation fosters collaboration and engagement, propelling individuals and communities toward shared goals.",
  },
  {
    icon: <FaHandshake />,
    title: "Respect",
    description:
      "Respect creates a foundation for positive interactions, understanding, and unity, fostering an inclusive environment.",
  },
  {
    icon: <HiOutlineLightBulb />,
    title: "Honesty",
    description:
      "Honesty cultivates a culture of transparency and trust, laying the groundwork for genuine connections and ethical practices.",
  },
  {
    icon: <FaFeather />,
    title: "Patience",
    description:
      "Patience enables individuals to navigate challenges with resilience, fostering understanding, growth, and enduring success.",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <motion.h2
          className="core-values-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Core Values
        </motion.h2>

        <motion.p
          className="core-values-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At Addie’s Afrique Foundation, we uphold integrity, compassion,
          inclusion, and impact-driven service in all we do.{" "}
        </motion.p>

        <div className="core-values-grid">
          {coreValues.map((value, index) => (
            <motion.div
              className="core-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <div className="core-icon">{value.icon}</div>
              <h3 className="core-title">{value.title}</h3>
              <p className="core-desc">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
