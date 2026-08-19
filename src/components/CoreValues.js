import React from "react";
import { motion } from "framer-motion";
import "../styles/CoreValues.css";
import { GiHumanPyramid } from "react-icons/gi";
import { MdHealthAndSafety } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";

const coreValues = [
  {
    icon: <GiHumanPyramid />,
    title: "Goal 1: No Poverty",
    description:
      "The foundation supports the elimination of poverty and its resources and this applies more to the poor children and families mostly based in vulnerable rural areas.",
  },
  {
    icon: <MdHealthAndSafety />,
    title: "Goal 3: Good Health and Well-Being",
    description:
      "The foundation believes in the health of children who are disabled or not disabled by providing both material and emotional support which helps improve their development and health status.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Goal 4: Quality Education",
    description:
      "Addie's Afrique is involved in advocating and ensuring that all children, irrespective of their abilities, can access quality education by addressing issues of exclusion.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Goal 10: Reduced Inequalities",
    description:
      "The foundation’s mission to support children with and without disabilities aligns with the goal of reducing inequalities, ensuring that vulnerable groups receive the attention and care they deserve.",
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <motion.h2
          className="core-values-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Commitment to the SDGs
        </motion.h2>

        <motion.p
          className="core-values-subtext"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          In line with the pillars of Sustainable Development Goals (SDGs) for
          the year 2030, Addie’s Afrique Foundation participates in the
          following goals:
        </motion.p>

        <div className="core-values-grid">
          {coreValues.map((value, index) => (
            <motion.div
              className="core-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
            >
              <div className="core-icon">{value.icon}</div>
              <h3 className="core-title">{value.title}</h3>
              <p className="core-desc">{value.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="bottom-paragraph">
          <p className="core-values-subtext-bottom">
            We believe that children are the future leaders of the world, and it
            is our responsibility to remove barriers and provide support,
            particularly for those who are marginalized and in greatest need. By
            aligning our efforts with these SDG goals, Addie’s Afrique
            Foundation is helping to create a more inclusive and equitable world
            for all.{" "}
          </p>
          <p className="core-values-subtext-bottom">
            This journey is not just about charity; it is about empowering the
            next generation to thrive, ensuring that no child is left behind,
            and contributing to the global effort to achieve the Sustainable
            Development Goals by 2030.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
