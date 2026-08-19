// components/AboutSection.jsx
import { motion } from "framer-motion";
import "../styles/AboutSection.css";

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutSection() {
  return (
    <section className="about-section">
      <motion.h2
        className="about-title"
        initial="hidden"
        whileInView="visible"
        variants={textVariant}
        viewport={{ once: true }}
      >
        Join Our Mission{" "}
      </motion.h2>
      <motion.p
        className="about-description"
        initial="hidden"
        whileInView="visible"
        variants={textVariant}
        viewport={{ once: true }}
      >
        Be part of a team that's creating lasting change across African
        communities. Discover opportunities to make a meaningful impact through
        your skills and passion.{" "}
      </motion.p>
    </section>
  );
}
