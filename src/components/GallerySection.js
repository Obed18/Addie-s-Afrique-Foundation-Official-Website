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
Our Impact in Pictures      </motion.h2>
      <motion.p
        className="about-description"
        initial="hidden"
        whileInView="visible"
        variants={textVariant}
        viewport={{ once: true }}
      >
        Explore visual stories from our work across African communities - from
        digital literacy training to community celebrations.
      </motion.p>
    </section>
  );
}
