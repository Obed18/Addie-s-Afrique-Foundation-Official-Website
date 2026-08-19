import React from "react";
import { motion } from "framer-motion";
import "../styles/InitiativesSection.css";
import { CheckCircle } from "lucide-react";

const initiatives = [
  {
    title: "Let's Hit The Street",
    description:
      "Little Minds Matter which was the theme for Let's Hit The Street in 2025 is a child mental health advocacy initiative by Addie’s Afrique Foundation, carried out in Brofoyeduru, in the Central Region of Ghana.",
    impact: {
      beneficiaries: "100+ Individuals",
      communities: "1 community",
      duration: "2025",
    },
    features: [
      "Community Engagement & Dialogue",
      "Understanding Child Mental Health",
      "Early Signs & Warning Signals",
      "Positive Parenting Techniques",
      "Impact of Environment on Children",
      "Breaking Stigma",
      "Early Intervention & Support",

    ],
    image: "/LM.jpg",
  },
  {
    title: "Support To The West",
    description:
      "Comprehensive digital literacy training program designed to bridge the technology gap in rural African communities.",
    impact: {
      beneficiaries: "100+ students",
      communities: "2 communities",
      duration: "2025",
    },
    features: [
      "Writer’s Club: Encouraging creative expression and writing skills.",
      "Reading Club: Promoting reading habits and comprehension.",
      "Public Speaking Club: : Building confidence and communication skills.",
    ],
    image: "/sttw03.jpg",
  },
  {
    title: "Journey to the West",
    description:
      "Extended our reach to Western part of Ghana, with local partnerships.",
    impact: {
      beneficiaries: "400+ individuals",
      communities: "2 communities",
      duration: "2024",
    },
    features: [
      "400 books to support literacy and enhance student engagement in reading.",
      "4 whiteboards to improve classroom instruction and provide a more interactive teaching environment.",
      "Two gallons of bleach and two gallons of liquid soap to each school to aid in maintaining hygiene in the schools.",
    ],
    image: "/share48.jpg",
  },
  {
    title: "1 Female 1 Sanitary Pad",
    description:
      "Through its 1 Female 1 Sanitary Pad initiative, Addie’s Afrique Foundation supported over 200 girls and staff across Schools in Ghana, promoting menstrual hygiene and dignity.",
    impact: {
      beneficiaries: "200+ individuals",
      communities: "8 communities",
      duration: "Ongoing since 2023",
    },
    features: [
      "Improved Health: Access to sanitary pads reduces the risk of infections and promotes overall health during menstruation.",
      "Increased School Attendance: With reliable menstrual hygiene products, girls are more likely to attend school consistently, reducing absenteeism linked to menstruation.",
      "Enhanced Educational Performance: Regular school attendance can lead to better academic outcomes, as girls can focus on their studies rather than managing discomfort or stigma.",
      "Empowerment and Confidence: Having access to sanitary products fosters a sense of dignity and empowerment, helping girls feel more confident in their daily activities.",
      "Reduction of Stigma: Initiatives that provide sanitary pads can also raise awareness and promote discussions around menstrual health, helping to break societal taboos.",
      "Support for Families: Providing sanitary products can alleviate financial burdens on families, allowing them to allocate resources to other essential needs.",
    ],
    image: "/share27.jpg",
  },
  {
    title: "Let's Hit The Street",
    description:
      "Addie’s Afrique Foundation and partners provided care and disability awareness to children and elderly in Atia, Ashanti Region.",
    impact: {
      beneficiaries: "100+ individuals",
      communities: "1 community",
      duration: "2023",
    },
    features: [
      "Foodstuffs to assist with daily nutrition.",
      "Detergents and toiletries to promote hygiene and personal care.",
      "Psychoeducation sessions, focusing on mental health awareness and emotional support to help individuals cope with the psychological challenges often associated with physical disabilities.",
    ],
    image: "/share8.jpg",
  },
  {
    title: "Breast Cancer Awareness",
    description:
      "Addie’s Afrique Foundation held an online session to educate women on breast cancer prevention, early detection and support.",
    impact: {
      beneficiaries: "50+ individuals",
      communities: "Online",
      duration: "Ongoing since 2023",
    },
    features: [
      "Increased Early Detection: Higher rates of screening and early diagnosis lead to better treatment outcomes and survival rates.",
      "Enhanced Knowledge: Greater public understanding of breast cancer can empower individuals to make informed health choices.",
      "Reduction in Stigma: Increased awareness can diminish the stigma surrounding breast cancer, encouraging more open discussions and support.",
    ],
    image: "/BCA.jpg",
  },
];

const InitiativesSection = () => {
  return (
    <div className="initiatives-container">
      {initiatives.map((item, index) => (
        <motion.div
          className="initiative-card"
          key={index}
          id={item.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="initiative-text">
            <h2>
              <CheckCircle size={20} className="program-check-icon" /> {item.title}
            </h2>
            <p>{item.description}</p>
            <div className="impact-box">
              <div>
                <strong>{item.impact.beneficiaries}</strong>
                <br />
                Beneficiaries
              </div>
              <div>
                <strong>{item.impact.communities}</strong>
                <br />
                Locations
              </div>
              <div>
                <strong>{item.impact.duration}</strong>
                <br />
                Duration
              </div>
            </div>
            <ul>
              {item.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>
          <div className="initiative-image">
            <img src={item.image} alt={item.title} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default InitiativesSection;
