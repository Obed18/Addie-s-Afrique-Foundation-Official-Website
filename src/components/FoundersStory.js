import React from "react";
import { motion } from "framer-motion";
import "../styles/FoundersStory.css"; // make sure this exists

const FoundersStory = () => {
  return (
    <section className="founder-section">
      <motion.div
        className="founder-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="founder-title">Our Founder's Story</h2>
        <p>
          Every movement that changes lives begins with a moment of inspiration. For Addie’s Afrique Foundation, that moment was a simple conversation between two young people who believed that every child deserves the opportunity to dream.
        </p>
        <p>
          In 2022, Miss Daisy Addowaah Ofori and Clifford Osei Amparbeng came together with a shared desire to make a difference in the lives of children with and without disabilities. Their conversation took place behind the Centre for Disability and Rehabilitation Studies at the Department of Health Promotion and Disability Studies, Kwame Nkrumah University of Science and Technology (KNUST), shortly after Daisy was crowned Miss Ghana Association of Disability and Rehabilitation Students (Miss GADRES).
        </p>
        <p>
          As they spoke about the future they hoped to create, Clifford shared an experience that had stayed with him. During a visit to Asaasetre, a remote community in Ghana’s Western Region, he met a young boy and asked him what he hoped to become when he grew up. Without hesitation, the boy replied, “I want to become a medical doctor”.
          </p>
          <p>
            Despite the challenges of living in a rural community with limited opportunities, the boy’s unwavering belief in his future deeply moved Clifford. He realised that dreams are never defined by where a child is born but by the opportunities they are given to pursue them.
            </p>
          <p>
            Daisy listened and reflected on her own childhood. Growing up, she had witnessed many children and vulnerable people whose potential was often overlooked simply because of poverty, disability, or circumstances beyond their control. Those experiences had long planted in her heart a desire to become a source of hope and opportunity for others.
          </p>
          <p>
            As they shared their stories, they discovered they were united by the same conviction: no child should have to abandon their dreams because of disability, poverty, or where they live. That conversation became more than an exchange of ideas it became the beginning of a shared mission.
          </p>
      <p>
        Motivated by that vision, they founded Add’s Foundation in 2022. As the organisation’s impact and ambition grew beyond communities and across borders, it was rebranded in 2023 as Addie’s Afrique Foundation, reflecting its commitment to building an inclusive Africa where every child can dream, belong, and thrive.
        </p>
        <p>
          Today, Addie’s Afrique Foundation exists because two people chose to believe that one conversation could become a movement. We continue to work towards a future where children with and without disabilities are empowered through education, health, leadership, advocacy, and equal opportunities.
          </p>
      <p>
        Because every child carries a dream. Every dream deserves a chance. And every act of compassion has the power to change a life.
      </p>
      </motion.div>

      {/* <motion.div
        className="founder-image-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src="/share87.jpg"
          alt="Founder with team"
          className="founder-image"
        />
      </motion.div> */}
    </section>
  );
};

export default FoundersStory;
