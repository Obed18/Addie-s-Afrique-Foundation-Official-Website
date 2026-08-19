import React from "react";
import { motion } from "framer-motion";
import { FaPeopleRoof } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaHandshake } from "react-icons/fa";
import "../styles/ImpactStats.css";

const stats = [
  {
    icon: <FaPeopleRoof />,
    value: "2000+",
    label: "Lives Impacted",
    description: "Individuals who have benefited from our programs",
  },
  {
    icon: <FaHeart />,
    value: "8",
    label: "Projects Launched",
    description: "Both Rural and urban communities we actively serve",
  },
  {
    icon: <SlCalender />,
    value: "3",
    label: "Years",
    description: "Of dedicated service and community impact",
  },
  {
    icon: <FaHandshake />,
    value: "14",
    label: "Active Partners",
    description: "Passionate individuals driving change",
  },
];

const ImpactStats = () => {
  return (
    <section className="impact-section">
      <motion.h2
        className="impact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Impact by the Numbers
      </motion.h2>

      <motion.p
        className="impact-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Every number represents real lives changed, communities empowered, and
        futures brightened across Africa.
      </motion.p>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-desc">{stat.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImpactStats;
