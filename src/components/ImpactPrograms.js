import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/ImpactPrograms.css";

const programs = [
  {
    title: "Let's Hit The Street",
    description:
      "Little Minds Matter which was the theme for Let's Hit The Street in 2025 is an initiative by Addie's Afrique Foundation dedicated to educating and empowering parents on child mental health.",
    stats: "100+ individuals educated",
    image: "/LittleMinds.jpg",
  },
  {
    title: "Breast Cancer Awareness Program",
    description:
      "Addie’s Afrique Foundation held an online session to educate women on breast cancer prevention, early detection and support.",
    stats: "50+ individuals educated",
    image: "/BCA.jpg",
  },
  {
    title: "Let Hit The Street",
    description:
      "Addie’s Afrique Foundation and partners provided care and disability awareness to children and elderly in Atia, Ashanti Region.",
    stats: "50+ individuals supported",
    image: "/share8.jpg",
  },
  {
    title: "1 Female 1 Sanitary Pad",
    description:
      "Through its 1 Female 1 Sanitary Pad initiative, Addie’s Afrique Foundation supported over 200 girls and staff across Schools in Ghana, promoting menstrual hygiene and dignity.",
    stats: "1000+ students Impacted",
    image: "/1f1sN.jpg",
  },
  {
    title: "Support To The West",
    description:
      "Addie’s Afrique Foundation Launches Literacy and Mental Health Initiative in the Western Region.",
    stats: "100+ students Impacted",
    image: "/sttw03.jpg",
  },
  {
    title: "Empowering Girls",
    description:
      "Menstrual Hygiene Initiative at Mberedane STMA Basic School, Takoradi.",
    stats: "50+ girls Impacted",
    image: "/share26.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ImpactPrograms = () => {
  return (
    <section className="impact-program-section">
      <div className="impact-program-container">
        <motion.h2
          className="impact-program-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Impact Programs
        </motion.h2>
        <motion.p
          className="impact-program-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          From digital literacy to mental health support, our comprehensive
          programs address the diverse needs of African communities.
        </motion.p>

        <div className="program-cards">
          {programs.map((program, i) => (
            <motion.div
              className="program-card"
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                src={program.image}
                alt={program.title}
                className="program-img"
              />
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <span className="program-stats">{program.stats}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <Link to="/programs">
          <motion.button
            className="explore-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Programs
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default ImpactPrograms;
