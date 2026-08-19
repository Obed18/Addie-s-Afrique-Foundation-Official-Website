import React from "react";
import { motion } from "framer-motion";
import "../styles/StayConnected.css";
import { Mail } from "lucide-react";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section">
      <motion.div
        className="subscribe-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Mail size={40} color="#1e1e1e" />
      </motion.div>

      <motion.h2
        className="subscribe-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Stay Updated
      </motion.h2>

      <motion.p
        className="subscribe-subtext"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Subscribe to our newsletter to receive the latest stories, insights, and
        updates from our work across Africa.
      </motion.p>

      <motion.div
        className="subscribe-form"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe Now</button>
      </motion.div>

      <motion.p
        className="subscribe-footer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        We respect your privacy. Unsubscribe at any time.
      </motion.p>
    </section>
  );
};

export default SubscribeSection;
