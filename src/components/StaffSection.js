import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLinkedin } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "../styles/StaffSection.css";
import { Link } from "react-router-dom";

const staff = [
  {
    id: "jovial-peprah-twumasiwaa",
    name: "Miss Jovial Peprah Twumasiwaa",
    title: "Chief Operations Officer",
    location: "Kumasi, Ghana",
    image: "/JovialP.jpg",
    linkedin:
      "https://www.linkedin.com/in/jovial-peprah-024975290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:operationsofficer@addiesafriquefoundation.org",
    instagram:
      "https://www.instagram.com/peprahjovial?igsh=MWd6a2xkZTZ0bW5iag==",
  },
  {
    id: "samuel-akuffu",
    name: "Master Samuel Akuffu",
    title: "Chief Financial Advisor",
    location: "Takoradi, Ghana",
    image: "/SamuelP.jpg",
    linkedin: "https://www.linkedin.com/in/samuel-a-1798791b9",
    email: "mailto:cfo@addiesafriquefoundation.org",
    instagram: "https://www.instagram.com/sam_dbless?igsh=a3VhaHo3Zm1pM2Fh",
  },
  {
    id: "obed-otu-ayor",
    name: "Master Obed Otu Ayor",
    title: "Chief Technology Officer",
    location: "Accra, Ghana",
    image: "/Obed.jpg",
    linkedin:
      "https://www.linkedin.com/in/obed-otu-ayor-2a700926a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:cto@addiesafriquefoundation.org",
    instagram:
      "https://www.instagram.com/__obed.oa?igsh=amtrcXppNW40Ympo&utm_source=qr",
  },
  // {
  //   id: "elizabeth-atta-buabeng",
  //   name: "Miss Elizabeth Atta Buabeng",
  //   title: "Central Regional Representative",
  //   location: "Accra, Ghana",
  //   image: "/lizzyP.jpeg",
  //   linkedin:
  //     "https://www.linkedin.com/in/elizabeth-atta-buabeng-b75741261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  //   email: "mailto:arhbenalizzy@gmail.com",
  //   instagram: "https://www.instagram.com/arhbena_lizzy?igsh=dXY1M2Z5dmU2Zzg3",
  // },
  {
    id: "nana-akosua-twumwaa",
    name: "Miss Nana Akosua Twumwaa",
    title: "Digital Marketing Manager",
    location: "Kumasi, Ghana",
    image: "/AkosuaP.jpg",
    linkedin:
      "https://www.linkedin.com/in/nana-akosua-twumwaa-nimako-0766b52a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "socialmanager@addiesafriquefoundation.org",
    instagram: "https://www.instagram.com/twumwaa_nimako?igsh=dXY4c3VtdTY4cmNq",
  },
  // {
  //   id: "jephthah-yaw-nsarkoh",
  //   name: "Master Jephthah Yaw Nsarkoh",
  //   title: "Greater Accra Regional Representative",
  //   location: "Accra, Ghana",
  //   image: "/Jeph.jpg",
  //   linkedin:
  //     "https://www.linkedin.com/in/jephthah-nsarkoh-559087265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  //   email: "mailto:jephthahbrew66@gmail.com",
  //   instagram:
  //     "https://www.instagram.com/jephthahbrew66?igsh=MWx3MTlhaG1rN2kxbg==",
  // },
  {
    id: "samuel-adu",
    name: "Master Samuel Adu",
    title: "Logistics and Resource Management Lead",
    location: "Accra, Ghana",
    image: "/Adu.jpg",
    linkedin:
      "https://www.linkedin.com/in/samuel-adu-0836ba317?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BozSLWqTTSlusghyocZ032w%3D%3D",
    email: "mailto:logisticsmanager@addiesafriquefoundation.org",
    instagram: "instagram.com",
  },
  // {
  //   id: "perpetual-larbi",
  //   name: "Perpetual Larbi",
  //   title: "Volunteer Coordinator",
  //   location: "Accra, Ghana",
  //   image: "/PerpP.jpg",
  //   linkedin:
  //     "https://www.linkedin.com/in/perpetual-larbi-9628ba278/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BqVRU%2BVTCTJuEb%2BVuvdCTVQ%3D%3D",
  //   email: "mailto:Larbiperpetual10@gmail.com",
  //   instagram: "instagram.com",
  // },
  // {
  //   id: "precious-konadu-sarpong",
  //   name: " Miss Precious Konadu Sarpong",
  //   title: "Health Coordinator",
  //   location: "Accra, Ghana",
  //   image: "/account.png",
  //   linkedin: "https://www.linkedin.com/in/precious-konadu-sarpong",
  //   email: "mailto:sarpcious@gmail.com",
  //   instagram: "instagram.com",
  // },
  {
    id: " andrew-samoah",
    name: "Master Andrew Asamoah",
    title: "Research Coordinator",
    location: "Accra, Ghana",
    description: "",
    image: "/AndrewP.jpeg",
    linkedin:
      "https://www.linkedin.com/in/andrew-cobby-asamoah-97a010366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BdAQkK4vQRNO9oCMdF4f5jQ%3D%3D",
    email: "mailto:researchcoordinator@addiesafriquefoundation.org",
    instagram: "instagram.com",
  },
  {
    id: "akua-boahemaa",
    name: "Miss Akua Boahemaa",
    title: "Head Of Regional Operations",
    location: "Accra, Ghana",
    description: "",
    image: "/BoahemaaP.jpeg",
    linkedin: "linkedin.com",
    email: "mailto:headofregionaloperations@addiesafriquefoundation.org",
    instagram: "instagram.com",
  },
  {
    id: "otubrimpong-marcia",
    name: "Miss Otubrimpong Marcia",
    title: "Curriculum Coordinator ",
    location: "Accra, Ghana",
    description: "",
    image: "/Marcia.jpeg",
    linkedin: "https://www.linkedin.com/marcia-otubrimpong-334378266",
    email: "mailto:curriculumcoordinator@addiesafriquefoundation.org",
    instagram: "instagram.com",
  },
  {
    id: "matilda-essuman",
    name: "Miss Matilda Essuman",
    title: "Volta Regional Coordinator",
    location: "Volta, Ghana",
    description: "",
    image: "/matildaP.jpg",
    linkedin: "https://linkedin.com/in/matilda-essuman-752444310",
    email: "mailto:voltaregionalcoordinator@addiesafriquefoundation.org",
    instagram: "https://instagram.com",
  },
];

const StaffSection = () => {
  return (
    <section className="staff-section">
      <motion.h2
        className="staff-title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Our Staff
      </motion.h2>
      <p className="staff-subtitle">
        Dedicated professionals working across Africa to implement our programs
        and create lasting community impact.
      </p>

      <div className="staff-grid">
        {staff.map((member, index) => (
          <Link to={`/profile/${member.id}`} className="staff-link">
            <motion.div
              className="staff-card"
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="member-top">
                <img
                  src={member.image}
                  alt={member.name}
                  className="staff-image"
                />
                <div className="member-id">
                  <h3 className="staff-name">{member.name}</h3>
                  <p className="staff-role">{member.title}</p>
                  <p className="staff-location">{member.location}</p>
                </div>
              </div>
              <p className="staff-description">{member.description}</p>
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
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default StaffSection;
