// src/components/Timeline.js
import React from "react";
import { motion } from "framer-motion";
import "../styles/Timeline.css";

const timelineData = [
  {
    year: "2026",
    title: "One Female, One Sanitary Pad",
    description:
      "One Female, One Sanitary Pad is a menstrual health and hygiene advocacy initiative by Addie’s Afrique Foundation, aimed at promoting menstrual health awareness, improving access to sanitary products, and empowering girls and young women to manage their menstrual health with dignity and confidence.",
    align: "right",
  },
  {
    year: "2026",
    title: "Let's Hit The Street",
    description:
      "Let's Hit The Street 2026 is a community outreach and advocacy initiative by Addie’s Afrique Foundation, focused on raising awareness, engaging communities, and driving positive social change through direct community interaction and education.",
    align: "left",
  },
  {
    year: "2025",
    title: "Let's Hit The Street",
    description:
      "Little Minds Matter which was the theme for Let's Hit The Street in 2025 is a child mental health advocacy initiative by Addie’s Afrique Foundation, carried out in Brofoyeduru, in the Central Region of Ghana.",
    align: "right",
  },
  {
    year: "2025",
    title: "One Female One Sanitary Pad",
    description:
      "On 28 May 2025, during World Menstrual Hygiene Day, Addie’s Afrique Foundation distributed sanitary pads and educated girls across four regions in Ghana through the 1 Female 1 Sanitary Pad Project.",
    align: "left",
  },
  {
    year: "2025",
    title: "Support To The West",
    description:
      "Addie’s Afrique Foundation Launches Literacy and Mental Health Initiative in the Western Region.",
    align: "right",
  },
  {
    year: "2024",
    title: "Journey to the West",
    description:
      "Extended our reach to the western part of Ghana with local residents.",
    align: "left",
  },
  {
    year: "2023",
    title: "Empowering Girls",
    description:
      "Menstrual Hygiene Initiative at Mberedane STMA Basic School, Takoradi.",
    align: "right",
  },
  {
    year: "2023",
    title: "1 Female 1 Sanitary Pad",
    description:
      "Through its 1 Female 1 Sanitary Pad initiative, Addie’s Afrique Foundation supported over 50 girls and staff at Life Community Special School in Kumasi, promoting menstrual hygiene and dignity.",
    align: "left",
  },
  {
    year: "2023",
    title: "Let's Hit The Street",
    description:
      "Addie’s Afrique Foundation and partners provided care and disability awareness to children and elderly in Atia, Ashanti Region.",
    align: "right",
  },
  {
    year: "2022",
    title: "Breast Cancer Awareness Program",
    description:
      "Addie’s Afrique Foundation held an online session to educate women on breast cancer prevention, early detection and support.",
    align: "left",
  },

];

const Timeline = () => {
  return (
    <div className="timeline-section">
      <motion.h2
        className="timeline-heading"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Journey
      </motion.h2>
      <p className="timeline-subheading">
        From humble beginnings to continental impact – the story of our growth
        and the communities we’ve served along the way.
      </p>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${item.align}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </div>
  );
};

export default Timeline;
