import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaRegEnvelope, FaRegHeart, FaPeopleArrows } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin, Linkedin
} from "lucide-react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <div className="Footer-logo">
              <img src="/aaf-footer-logo.png" alt="Addie's Afrique Foundation" />
            </div>
          </div>
          <p className="description">
            Embracing differences, empowering dreams
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1RMr2KgHxY/?mibextid=wwXIfr" className="link-text"> <Facebook /></a>
            <a href="https://www.instagram.com/addiesafriquefoundation?igsh=MXNuYnBydXhveWVjbw==" className="link-text"></a> <Instagram />
            <a href="https://x.com/AddiesAfrique?s=20" className="link-text"> <FaXTwitter size={24} /></a>
            <a href="https://www.linkedin.com/company/addie-s-afrique-foundation/" className="link-text"> <Linkedin /></a>
            <a href="https://youtube.com/@addiesafriquefoundationtv?si=7cZ3YgZ_4wDg2JMo" className="link-text"> <Youtube /></a>
          </div>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Quick Links</h3>
          <ul>
            <Link to="/about" className="side-donate-link">
              <li>About Us</li>
            </Link>
            <Link to="/programs" className="side-donate-link">
              <li>Our Programs</li>
            </Link>
            <Link to="/team" className="side-donate-link">
              <li>Our Team</li>
            </Link>
            <Link to="/gallery" className="side-donate-link">
              <li> Gallery</li>
            </Link>

            <Link to="/partnership" className="side-donate-link">
              <li>Partner</li>
            </Link>
          </ul>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Programs</h3>
          <ul>
            {/* <li>
              <Link to="/programs#little-minds-matter" className="side-donate-link">
                Little Minds Matter
              </Link>
            </li> */}
            <li>
              <Link to="/programs#support-to-the-west" className="side-donate-link">
                Support To The West
              </Link>
            </li>
            <li>
              <Link to="/programs#journey-to-the-west" className="side-donate-link">
                Journey to the West
              </Link>
            </li>
            <li>
              <Link to="/programs#1-female-1-sanitary-pad" className="side-donate-link">
                1 Female 1 Sanitary Pad
              </Link>
            </li>
            <li>
              <Link to="/programs#lets-hit-the-street" className="side-donate-link">
                Let's Hit The Street
              </Link>
            </li>
            <li>
              <Link to="/programs#breast-cancer-awareness" className="side-donate-link">
                Breast Cancer Awareness
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Stay Connected</h3>
          <p>Subscribe to our newsletter for updates and impact stories.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button>
              <FaRegEnvelope size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Addie's Afrique Foundation. All rights reserved.</p>
        <div className="footer-nav">
          <Link to="/faqs" className="side-donate-link">
            <span>FAQs</span>
          </Link>
          <Link to="/donate" className="side-donate-link">
            <span>Donate</span>
          </Link>
          <span>
            <FaPeopleArrows size={16} /> Community First
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
