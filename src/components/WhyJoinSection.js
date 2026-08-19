import React from "react";
import { motion } from "framer-motion";
import "../styles/WhyJoinSection.css";
import { HiUserGroup } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import "@fontsource/poppins"; // Import font

const items = [
  {
    icon: <HiUserGroup />,
    title: "Meaningful Impact",
    text: "Every day, you'll see the direct impact of your work on communities and individuals across Africa.",
  },
  {
    icon: <FaRegHandshake />,
    title: "Collaborative Culture",
    text: "Work with a diverse, passionate team committed to excellence and mutual support.",
  },
  {
    icon: <MdWorkHistory />,
    title: "Growth Opportunities",
    text: "Continuous learning, professional development, and career advancement in the development sector.",
  },
];

const WhyJoinSection = () => {
  return (
    <section className="why-join-section">
      <motion.h2
        className="why-section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Join Addie&apos;s Afrique Foundation?
      </motion.h2>

      <div className="why-cards-container">
        {items.map((item, index) => (
          <motion.div
            className="why-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-icon-circle">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoinSection;
