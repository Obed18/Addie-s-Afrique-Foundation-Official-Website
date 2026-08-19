// src/components/ExploreMore.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/ExploreMore.css";
import { Link } from "react-router-dom";
import { link } from "framer-motion/client";    

const cards = [
  {
    title: "About Us",
    description: "Learn about us",
    link: "/about",
  },
  {
    title: "Our Programs",
    description: "Discover our impact",
    link: "/programs",
  },
  {
    title: "Donate",
    description: "Support our mission",
    link: "/donate",
  },
  {
    title: "Join Us",
    description: "Volunteer opportunities",
    link: "/jobs",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 },
  }),
};

const ExploreMore = () => {
  return (
    <section className="explore-section">
      <h2 className="explore-heading">Explore More</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Link to={card.link} key={index} className="link-text">
          <motion.div
            className="card"
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </motion.div>
        </Link>
        ))}
      </div>
    </section>
  );
};

export default ExploreMore;
