import React from "react";
import "../styles/LeadershipTeam.css";
import { motion } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: "daisy-addowaah-ofori",
    name: "Miss Daisy Addowaah Ofori",
    title: "Executive Director & Co - Founder",
    description:
      "Daisy Addowaah Ofori is the visionary Co - Founder and Executive Director of Addie’s Afrique Foundation, a non-profit organization in Ghana dedicated to supporting children with and without disabilities by addressing their emotional, physical, and financial needs.",
    image: "/DaP.jpg",
    linkedin:
      "https://www.linkedin.com/in/daisy-ofori-2a5b6b275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:executivedirector@addiesafriquefoundation.org",
    instagram:
      "https://www.instagram.com/_addowaah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
  {
    id: "clifford-osei-amparbeng",
    name: "Master Clifford Osei Amparbeng",
    title: "Managing Director & Co - Founder",
    description:
      "Clifford Osei Amparbeng serves as the voluntary Managing Director and also Co - founder of Addie’s Afrique Foundation. He is a committed leader passionate about disability rights, mental health, and creating inclusive healthcare for marginalized people with disabilities.",
    image: "/cliffordP.jpg",
    linkedin:
      "https://www.linkedin.com/in/clifford-osei-amparbeng-8b446b1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:managingdirector@addiesafriquefoundation.org",
    instagram:
      "https://www.instagram.com/cliffordamparbeng?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  },
    {
    id: "desmond-yatsi",
    name: "Master Desmond Dela Yatsi",
    title: "General Secretary/Child wellness, Health & Advocacy Lead",
    description: "Desmond Dela Yatsi currently serves as the General Secretary of Addie’s Afrique Foundation, where he meticulously oversees all organizational documentation. In this pivotal role, Desmond ensures the seamless administration of foundation activities, maintains comprehensive records...",
    image: "/DelaP.jpeg",
    linkedin:
      "https://www.linkedin.com/in/desmond-yatsi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:generalsecretary@addiesafriquefoundation.org",
    instagram:
      "https://www.instagram.com/your_therapist_dela?igsh=dnBwOGVvMW1taWFj",
  },

];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function LeadershipTeam() {
  return (
    <section className="leadership-section">
      <div className="leadership-container">
        <h2 className="section-title">Leadership Team</h2>
        <p className="section-subtitle">
          Our experienced leaders bring together decades of expertise in
          development, technology, and community health.
        </p>
        <div className="card-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              className="team-card"
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div
                className="card-image"
                style={{ backgroundImage: `url(${member.image})` }}
              >
                <div className="Leadership-overlay">
                  <h3>{member.name}</h3>
                  <p className="title">{member.title}</p>
                </div>
              </div>
              <div className="card-content">
                <p>{member.description}</p>
                <div className="profile-footer">
                  <div className="profile-icons">
                    <a href={member.linkedin}>
                      <FaLinkedinIn />
                    </a>
                    <a href={member.email}>
                      <MdOutlineMail />
                    </a>
                    <a href={member.instagram}>
                      <FaInstagram />
                    </a>
                  </div>
                  <div>
                    <Link to={`/profile/${member.id}`} className="staff-link">
                      <h4 href="/team" className="read-link">
                        Read More
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
