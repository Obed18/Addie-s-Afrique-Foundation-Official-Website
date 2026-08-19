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
        About Addie&apos;s Afrique Foundation
      </motion.h2>
      <motion.p
        className="about-description"
        initial="hidden"
        whileInView="visible"
        variants={textVariant}
        viewport={{ once: true }}
      >
        Welcome to Addie's Afrique Foundation, a beacon of hope and support for
        the vulnerable and in-need children of our society. Founded in 2022 by
        Daisy Addowaah Ofori, formally known as 'Adds Foundation', which was
        later changed to Addie's Afrique Foundation in 2023, a passionate
        advocate for disability and rehabilitation. Addie's Afrique Foundation
        is a non-governmental organization committed to making a positive impact
        at regional, national, and international levels.{" "}
      </motion.p>
    </section>
  );
}
