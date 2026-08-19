import React from "react";
import { motion } from "framer-motion";
import "../styles/questionsSection.css";
import { LuUsersRound } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";

const QuestionsSection = () => {
  return (
    <section className="questions-container">
      <motion.h2
        className="questions-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Still Have Questions?
      </motion.h2>

      <motion.p
        className="questions-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Can't find the answer you're looking for? Our team is here to help.
        Reach out to us and we'll get back to you as soon as possible.
      </motion.p>

      <div className="questions-cards">
        <motion.div
          className="questions-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="question-icon-wrapper">
            <FaRegEnvelope className="question-icon" />
          </div>
          <h3>Email Us</h3>
          <p>Get detailed answers to your questions</p>
          <a
            href="mailto:info@addiesafriquefoundation.org"
            className="email-link"
          >
            info@addiesafriquefoundation.org
          </a>
        </motion.div>

        <motion.div
          className="questions-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="question-icon-wrapper">
            <LuUsersRound className="question-icon" />
          </div>
          <h3>Join Our Community</h3>
          <p>Connect with our community for updates</p>
          <a href="https://chat.whatsapp.com/J4w1VnSPrnt9sCaMWbK9Ug?mode=gi_t" className="link-text"> <button className="follow-btn">Join Us</button> </a>
        </motion.div>
      </div>
    </section>
  );
};

export default QuestionsSection;
