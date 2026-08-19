import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/FAQ.css";

const FAQSection = () => {
  const sections = [
    {
      title: "About Our Foundation",
      questions: [
        {
          question: "What is Addie’s Afrique Foundation?",
          answer:
            "We are a non-profit organization concerned about the welfare of children with and without disabilities. We provide emotional, physical, and financial support and also advocate for their rights.",
        },
        {
          question: "How can I get involved?",
          answer: "Join us by volunteering or donating today!",
        },
        {
          question: "How long has the foundation been operating?",
          answer:
            "The foundation has been operating since 2022, impacting lives through various programs.",
        },
      ],
    },
    {
      title: "Programs & Services",
      questions: [
        {
          question: "Where does my donation go?",
          answer:
            "Your contributions directly support our programs and initiatives.",
        },
        {
          question: "Can I partner with the foundation?",
          answer: "Absolutely! Fill out our partnership form to start.",
        },
        {
          question: "What resources do you provide?",
          answer: "We offer educational materials, workshops, and support.",
        },
      ],
    },
    {
      title: "Getting Involved",
      questions: [
        {
          question: "How can I volunteer with your organization?",
          answer:
            "You fill up through our volunteer form online. We welcome volunteers for teaching, logistics, fundraising, and more.",
        },
        {
          question: "Do you accept international volunteers?",
          answer:
            "Yes, we accept volunteers from around the world. Virtual volunteering options are also available.",
        },
        {
          question: "How can my organization partner with you?",
          answer:
            "Reach out to us via our contact page. We are always open to partnerships that align with our mission.",
        },
      ],
    },
    {
      title: "Donations & Funding",
      questions: [
        {
          question: "How are donations used?",
          answer:
            "Donations are used to fund our programs, purchase materials, and support expansion efforts.",
        },
        {
          question: "Can I specify how my donation is used?",
          answer:
            "Yes, during the donation process, you can select a specific program to support.",
        },
        {
          question: "Do you provide donation receipts?",
          answer:
            "Yes, receipts are automatically emailed after your donation is processed.",
        },
      ],
    },
    {
      title: "Impact & Results",
      questions: [
        {
          question: "How do you measure program success?",
          answer:
            "We use metrics like participant feedback, skill assessments, and long-term tracking to measure outcomes.",
        },
        {
          question: "Can I visit your programs in person?",
          answer:
            "Yes, visits can be arranged by contacting our team ahead of time.",
        },
        {
          question: "How do you ensure program sustainability?",
          answer:
            "We focus on local partnerships, training, and scalable models to ensure sustainability.",
        },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      {sections.map((section, sectionIndex) => (
        <div key={section.title} className="faq-section">
          <h2 className="faq-heading">{section.title}</h2>
          {section.questions.map((item, questionIndex) => {
            const currentIndex = `${sectionIndex}-${questionIndex}`;
            return (
              <div
                key={currentIndex}
                className="faq-item"
                onClick={() => toggleQuestion(currentIndex)}
              >
                <div className="faq-question">
                  {item.question}
                  <span className="arrow">
                    {activeIndex === currentIndex ? "▴" : "▾"}
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === currentIndex && (
                    <motion.div
                      className="faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
