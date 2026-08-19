import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/JoinTeamSection.css";

const JoinTeamSection = () => {
  return (
    <section className="join-team-section">
      <motion.div
        className="join-team-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="join-team-title">
          Would you like to join our team?
        </h2>

        <p className="join-team-text">
          Join us to make a difference in the lives of vulnerable children.
          Click the button below to fill out the form to apply as a volunteer.
        </p>

      <Link to="/volunteer">
        <motion.a
          
          className="join-team-button"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply as volunteer{" "}
          <ArrowRight size={18} className="button-icon" />
        </motion.a>
        </Link>
      </motion.div>
    </section>
  );
};

export default JoinTeamSection;