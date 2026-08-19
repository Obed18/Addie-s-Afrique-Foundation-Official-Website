import React from "react";
import { motion } from "framer-motion";
import "../styles/Volunteer.css";
import { Clock } from "lucide-react";

const volunteerRoles = [
  {
    title: "TECHNICAL OFFICERS",
    duration: "Ongoing",
    description:
      "Technical Officers will handle the provision of technical support to facilitate the foundation’s events and initiatives.",
  },
  {
    title: "VOLUNTEERING COORDINATOR",
    duration: "Ongoing",
    description:
      "The volunteering coordinator will manage and support the recruitment and engagement activities of volunteers. ",
  },
  {
    title: "RESEARCH COORDINATOR",
    duration: "Ongoing",
    description: "Manage the administrative, event and logistical tasks. ",
  },
  {
    title: " COMMUNICATION STRATEGIST",
    duration: "Ongoing",
    description:
      "Creates engaging content to attract audiences, optimizes for traffic growth, and cultivates meaningful community engagement across platforms.",
  },
  {
    title: "HEAD OF REGIONAL OPERATIONS",
    duration: "Ongoing",
    description:
      "Manages all volunteering partners' activities to ensure efficient operations and engagement.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function VolunteerSection() {
  return (
    <section className="why-volunteer-section">
      <div className="why-volunteer-header">
        <h2>Volunteer Opportunities</h2>
        <p>
          Can't commit to a full-time role? Join our volunteer community and
          contribute your skills on a flexible schedule.
        </p>
      </div>
      <div className="why-volunteer-cards">
        {volunteerRoles.map((role, index) => (
          <motion.div
            key={role.title}
            className="why-volunteer-card"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <h3>{role.title}</h3>
            <p className="why-duration">
              <Clock size={16} /> {role.duration}
            </p>
            <p className="why-description">{role.description}</p>
            <button className="why-learn-more">Learn More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
