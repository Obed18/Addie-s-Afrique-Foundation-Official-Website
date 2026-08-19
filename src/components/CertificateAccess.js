import React from "react";
import "../styles/CertificateAccess.css";
import { motion } from "framer-motion";
import { Award } from "lucide-react";


const CertificateAccess = () => {
  return (
    <div className="certificate-body">
      <motion.div className="certificate-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="certificate-card">
          <div className="certificate-card-content">
            <h2 className="certificate-card-title">Access Your Certificate</h2>
            <p className="certificate-card-description">
              Are you a participant of the <strong> any Addie's Afrique Foundation Training Program?</strong> Your certificate is ready for download.
            </p>
            <a href="https://certificate.addiesafriquefoundation.org/" className="link-text btn-get-certificate">
              <Award size={20} /> Get Certificate
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificateAccess;