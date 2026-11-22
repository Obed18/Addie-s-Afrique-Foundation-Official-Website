import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/ProfileSection.css";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

// Sample data for demo (replace with real data from API or state)
const teamData = [
  {
    id: "daisy-addowaah-ofori",
    name: "Miss Daisy Addowaah Ofori",
    role: "Executive Director & Co - Founder",
    about:
      "Daisy Addowaah Ofori is the visionary Co - Founder and Executive Director of Addie’s Afrique Foundation, a non-profit organization in Ghana dedicated to supporting children with and without disabilities by addressing their emotional, physical, and financial needs. Daisy's leadership and compassion drive the foundation's mission to positively impact thousands of children within the next three to five years. As a compassionate leader deeply concerned about the welfare and inclusion of children with and without disabilities, Daisy is committed to advocacy and creating a supportive environment for all. She is dedicated to building an organization that leaves an indelible, positive impact, providing life-changing opportunities for children throughout her leadership. Addie’s Afrique Foundation has been a transformative stepping stone in Daisy’s life, equipping her with valuable skills in public speaking, communication, collaboration, and leadership. Her educational journey began at Mizpah International School in Tesano, followed by Methodist Girls’ High School in Mamfe. She pursued a Bachelor’s degree in Disability and rehabilitation studies at Kwame Nkrumah Universityof Science and Technology(KNUST). Currently she’s a teaching and research assistant who as well assist with the administrative work at the Head Of Department Office at the Department of Health and Promotion and disability studies In addition to her philanthropic endeavors, Daisy is a business-oriented individual. She operates an online perfume store, Add’s Perfumery, showcasing her ambitious and entrepreneurial spirit. Daisy aspires to open an elegant perfume shop in the future, combining her business acumen with her passion for excellence. Daisy's ultimate dream is to empower children with and without disabilities, helping them to stand out and become prominent figures in society. Her dedication to making a difference is unwavering, and her contributions continue to inspire and uplift those around her.",
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
    role: "Managing Director & Co - Founder",
    about:
      "Clifford Osei Amparbeng serves as the voluntary Managing Director and also Co - founder of Addie’s Afrique Foundation. He is a dedicated leader with a strong passion for disability rights, mental health advocacy, and fostering inclusive environments, particularly in healthcare for marginalized persons with disabilities. His commitment to uplifting underserved communities has driven his involvement in impactful projects, utilizing his expertise in Community-Based Rehabilitation, Psychoeducation, and Project Management. Clifford’s deep love for mental health, along with his dedication to public health and inclusivity, has empowered the foundation to launch initiatives that address critical issues like health and education. His leadership style promotes innovation and teamwork, ensuring that every project reaches its full potential. Under his voluntary guidance, Addie’s Afrique Foundation has accomplished significant milestones, including “Let’s Hit the Street,” “Journey to the West,” and the “One Female, One Sanitary Pad” project, all of which reflect his unwavering commitment to building a more inclusive and equitable world. Through his passion for service, mental health advocacy, and inclusive health for marginalized communities, Clifford continues to inspire and create lasting positive change for those in need.",
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
    role: "General Secretary/Child wellness, Health & Advocacy Lead",
    about:
      "Desmond Dela Yatsi currently serves as the General Secretary as well as the Child Wellness Aid of Addie’s Afrique Foundation, where he meticulously oversees all organizational documentation. In this pivotal role, Desmond ensures the seamless administration of foundation activities, maintains comprehensive records, manages correspondence, and supports the Board of Directors in strategic planning and execution. His keen organizational skills and attention to detail are vital in ensuring that the foundation operates efficiently and effectively. His dedication and hard work have led him to collaborate with various organizations, including a notable tenure as a Project Manager, where he championed initiatives for Persons with Disabilities within the Akropong district in the Central Region of Ghana. In this capacity, Desmond has successfully coordinated projects, secured funding, and built strong partnerships to support the foundation’s mission. A passionate advocate for children, both with and without disabilities, Desmond is deeply committed to the empowerment of youth in rural areas. With a particular interest in psychotherapy, he leverages his social media platforms to raise awareness and advocate for children with autism and other disabilities, striving to create a more inclusive society. His efforts have positively impacted the lives of many children, providing them with the resources and support they need to thrive. Desmond holds a Bachelor of Science in Disability and Rehabilitation from Kwame Nkrumah University of Science and Technology (KNUST). His academic journey fuels his mission to build an environment where everyone is valued and no one is limited by their abilities. Desmond’s aspirations are clear: to create a world where inclusivity is the norm and every individual, regardless of their abilities, is appreciated and given equal opportunities to succeed. His vision is to foster a community where diversity is celebrated, and every person's unique contributions are recognized.",
    image: "/DelaP.jpeg",
    linkedin:
      "https://www.linkedin.com/in/desmond-yatsi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "mailto:generalsecretary@addiesafriquefoundation.org",
    instagram:
      "https://www.instagram.com/your_therapist_dela?igsh=dnBwOGVvMW1taWFj",
  },
  {
    id: "jovial-peprah-twumasiwaa",
    name: "Miss Jovial Peprah Twumasiwaa",
    role: "Chief Operations Officer",
    about: `Jovial Peprah Twumasiwaa is a graduate of Kwame Nkrumah University of Science and Technology (KNUST), where she earned a Bachelor's degree in Sociology. Her academic journey reflects a strong educational foundation and a deep passion for making a meaningful impact in society. She began her early education at Sacred Heart JHS in Sunyani and continued at Sacred Heart Senior High School in Nsoatre, Bono Region, Ghana. Known for her diligence and enthusiasm, Jovial has consistently demonstrated excellent organizational and time management skills. Her experience in event planning and coordination has significantly shaped her professional path, particularly in her role as the Operational Officer of Addie’s Afrique Foundation. In this capacity, she oversees the coordination and scheduling of meetings, appointments, and events, while also managing office supplies and equipment. Her attention to detail ensures that the foundation’s operations run efficiently and effectively. Through her work with Addie’s Afrique Foundation, Jovial has made meaningful contributions to supporting the less privileged, including individuals with and without disabilities. Her commitment to service and community development makes her an invaluable member of the organization. As a Project Manager, she played a key role in executing one of the foundation’s most impactful initiatives, “Journey to the West,” which positively affected over 200 students in a rural community in Ghana’s Western Region. Her leadership, initiative, and ability to mobilize teams highlight her strong work ethic and dedication to driving change. Jovial’s passion for helping others, combined with her unwavering commitment to excellence, positions her for continued success in her future endeavors. Her journey stands as a testament to her dedication to building a better society and continues to inspire those around her.`,
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
    role: "Financial Advisor & Western Regional Coordiator",
    about:
      "As the Financial Advisor of Addie’s Afrique Foundation, Samuel Akuffu oversees the foundation's finances and investments with meticulous attention. His career in accounting has been both challenging and fulfilling, and he brings his expertise to lead a team of talented, diverse, and committed finance professionals. Samuel is passionate about leaving a legacy through inspiration, motivation, and empowerment. His vision is to be remembered for his positive impact on future generations. Originally from Ghana, Samuel holds a Higher National Diploma (HND) in Accountancy from Takoradi Technical University (TTU) and completed his secondary education at Takoradi Senior High School. To expand his knowledge and skills, he has furthered his education with the Corporate Finance Institute and enhanced his digital skills through Quantum Learning. Before joining Addie’s Afrique Foundation, Samuel served as an Account Officer and currently works as a Revenue Supervisor at Sekondi Takoradi Metropolitan Assembly (STMA). His extensive experience includes roles as an Administrator at KofyJesseTv, Board Director at Spotlight Africa Awards and a Content Creator at Giant News Ghana. Samuel Akuffu’s commitment to financial excellence and his drive to inspire and empower others make him a valuable asset to Addie’s Afrique Foundation.",
    image: "/SamuelP.jpg",
    linkedin: "https://www.linkedin.com/in/samuel-a-1798791b9",
    email: "mailto:cfo@addiesafriquefoundation.org",
    instagram: "https://www.instagram.com/sam_dbless?igsh=a3VhaHo3Zm1pM2Fh",
  },
  {
    id: "obed-otu-ayor",
    name: "Master Obed Otu Ayor",
    role: "Chief Technology Officer",
    about:
      "Obed Otu Ayor is a dedicated Computer Science student at the Kwame Nkrumah University of Science and Technology (KNUST), Ghana. He completed his secondary education at Forces Senior High and Technical School in Burma Camp, Accra, where he studied from 2018 to 2021. Obed was admitted to KNUST in 2022, pursuing his passion for technology and problem-solving. In 2024, Obed joined Addie's Afrique Foundation committed to social impact and was appointed as the Chief Technology Officer (CTO). As CTO, he oversees the development and implementation of technology strategies that enhance the foundation's mission of supporting vulnerable children, including those with disabilities. With a strong foundation in computer science and leadership, Obed is dedicated to leveraging technology to drive innovation and create meaningful change in society.      ",
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
  //   role: "Central Regional Representative",
  //   about:
  //     "Elizabeth Buabeng Atta is a dynamic and inspiring leader whose commitment to humanitarian work continues to uplift young women and marginalized communities. A recent graduate of the Kwame Nkrumah University of Science and Technology from the School of Public Health, Elizabeth combines her academic knowledge with real-world advocacy to make a meaningful impact. As the former Public Relations Officer for Strength in Disability, her strategic efforts were instrumental in advancing the foundation’s mission and outreach. Now serving as the Central Regional Coordinator at Addie’s Afrique Foundation, Elizabeth brings her leadership and vision to the forefront. Her role as the Central Regional Representative aligns perfectly with the foundation’s mission of empowering children with and without disabilities. In this capacity, she addresses critical issues such as education, inclusion, and access to opportunities for all children, regardless of their abilities. Her academic background in public health gives her a unique perspective on the health and social challenges facing children with disabilities, equipping her with the knowledge to implement effective solutions in the region. With a deep understanding of the unique challenges in the Central Region, Elizabeth is well positioned to align local initiatives with the foundation’s core values and goals. Additionally, her expertise as a graphic designer amplifies her advocacy efforts. By creating visually engaging and accessible educational materials, Elizabeth effectively communicates complex issues in a way that resonates with both children and the larger community. Her dual role enables her to lead impactful campaigns that raise awareness about disability rights while fostering inclusivity. Elizabeth’s leadership as Central Regional Representative, combined with her academic expertise and creative talents, will drive transformative change in the region, fully aligning with Addie’s Afrique Foundation’s vision of a world where every child is empowered, supported, and valued.",
  //   image: "/lizzyP.jpeg",
  //   linkedin:
  //     "https://www.linkedin.com/in/elizabeth-atta-buabeng-b75741261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  //   email: "mailto:arhbenalizzy@gmail.com",
  //   instagram: "https://www.instagram.com/arhbena_lizzy?igsh=dXY1M2Z5dmU2Zzg3",
  // },
  {
    id: "nana-akosua-twumwaa",
    name: "Miss Nana Akosua Twumwaa",
    role: "Digital Marketing Manager",
    about:
      "Nana Akosua Twumwaa Nimako is a passionate and dedicated professional who holds Bachelor degree in Disability and Rehabilitation, Nana Akosua possesses a deep understanding of inclusive practices and social justice. With expertise in social media marketing, Nana Akosua amplifies marginalized voices and champions disability advocacy. Her strengths include: In-depth knowledge of disability and rehabilitation, Proven social media marketing expertise, Passionate advocacy for inclusive environments, Excellent communication and interpersonal skills At Addie's Afrique Organisation, Nana Akosua is committed to developing inclusive programs for children with disabilities, crafting compelling social media campaigns, fostering partnerships, and providing expertise in accessibility.",
    image: "/AkosuaP.jpg",
    linkedin:
      "https://www.linkedin.com/in/nana-akosua-twumwaa-nimako-0766b52a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "socialmanager@addiesafriquefoundation.org",
    instagram: "https://www.instagram.com/twumwaa_nimako?igsh=dXY4c3VtdTY4cmNq",
  },
  // {
  //   id: "jephthah-yaw-nsarkoh",
  //   name: "Master Jephthah Yaw Nsarkoh",
  //   role: "Greater Accra Regional Representative",
  //   about:
  //     "Master Jephthah Yaw Nsarkoh is a dedicated advocate for human and social development, with a particular focus on supporting vulnerable populations, especially persons with disabilities. Mr. Nsarkoh holds a Bachelor of Education (B.Ed.) in Community-Based Rehabilitation and Disability Studies. This academic foundation has equipped him with the necessary skills and knowledge to address the challenges faced by individuals with disabilities, ensuring they receive the support and opportunities they deserve. Mr. Nsarkoh is actively involved in initiatives that promote education and social inclusion. His role allows him to engage with various stakeholders in the education sector, advocating for policies that enhance access to quality education for all, particularly for those with disabilities. With appreciable experience in the education fraternity, Mr. Nsarkoh has facilitated numerous projects aimed at improving educational outcomes and fostering inclusive practices within schools and the society. His strong interpersonal and communication skills facilitate collaboration and engagement among stakeholders, making him a valuable asset in any team setting. As an enthusiastic advocate for social justice, Mr. Nsarkoh's efforts are instrumental in raising awareness about the rights of persons with disabilities. His dedication to human rights and social development positions him as a leading figure in advocating for the vulnerable in society.",
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
    role: "Logistics and Resource Management Lead",
    about:
      "Samuel Adu is a proud alumnus of Kwame Nkrumah University of Science and Technology (KNUST), where he earned a Bachelor of Science degree in Forest Resources Technology. With a strong passion for environmental sustainability and social impact, he has consistently demonstrated a commitment to effective systems coordination and community development. His dedication to making a meaningful difference led him to join Addie’s Afrique Foundation, a renowned non-governmental organization focused on supporting vulnerable children, including those with disabilities. Through his growth within the foundation, Samuel Adu has developed strong expertise in planning, coordination, and operational efficiency. He currently serves as the Logistics and Resource Management Lead, where he is responsible for overseeing the planning, allocation, and management of resources across field operations. In this role, he ensures that all logistical needs are met efficiently, enabling smooth execution of the foundation’s programs across various regions in Ghana and beyond.With his strong organizational abilities, attention to detail, and commitment to impact-driven work, Samuel Adu continues to play a key role in strengthening operational effectiveness and ensuring that the foundation’s initiatives reach the communities that need them most.",
    image: "/Adu.jpg",
    linkedin:
      "https://www.linkedin.com/in/samuel-adu-0836ba317?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BozSLWqTTSlusghyocZ032w%3D%3D",
    email: "mailto:logisticsmanager@addiesafriquefoundation.org",
    instagram: "instagram.com",
  },
  // {
  //   id: "perpetual-larbi",
  //   name: "Perpetual Larbi",
  //   role: "Volunteer Coordinator",
  //   about:
  //     "Perpetual Larbi is a dedicated and ambitious student pursuing a Bachelor of Science in Disability and Rehabilitation Studies. With a strong passion for advocacy and inclusivity, she is committed to empowering persons with disabilities (PWDs) and promoting equal opportunities for all. Aspiring to become a clinical psychologist, Perpetual is deeply interested in mental health and its intersection with disability rights. She is determined to use her knowledge and skills to provide psychological support, break down societal barriers, and create a more inclusive environment for individuals with disabilities. Beyond her academic journey, Perpetual actively seeks opportunities for personal and professional growth, engaging in initiatives that enhance her leadership, research, and advocacy skills. With a heart for service and a vision for change, she continues to make a meaningful impact in her field.",
  //   image: "/PerpP.jpg",
  //   linkedin:
  //     "https://www.linkedin.com/in/perpetual-larbi-9628ba278/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_verification_details%3BqVRU%2BVTCTJuEb%2BVuvdCTVQ%3D%3D",
  //   email: "mailto:larbiperpetual10@gmail.com",
  //   instagram: "instagram.com",
  // },
  // {
  //   id: "precious-konadu-sarpong",
  //   name: " Miss Precious Konadu Sarpong",
  //   role: "Health Coordinator",
  //   about:
  //     "Precious Konadu Sarpong is a highly motivated and results-driven Medical Sales Representative at 5K Pharmaceuticals, where she plays a crucial role in promoting and ensuring access to high-quality pharmaceutical products across the Eastern Region. With a strong passion for healthcare and a commitment to improving patient outcomes, she works closely with healthcare professionals, providing expert product knowledge, exceptional customer service, and tailored support to meet their needs. Her ability to build and maintain strong relationships with clients has made her an invaluable asset in the industry. She thrives in dynamic environments, combining her communication skills and strategic approach to drive sales growth while positively impacting the healthcare sector. Beyond her professional endeavors, Precious enjoys exploring new places, experiencing diverse cultures, and fostering meaningful connections with people. Her enthusiasm for personal growth and her dedication to making a difference in the medical field continue to define her journey.",
  //   image: "/account.png",
  //   linkedin: "https://www.linkedin.com/in/precious-konadu-sarpong",
  //   email: "mailto:sarpcious@gmail.com",
  //   instagram: "instagram.com",
  // },
  {
    id: " andrew-samoah",
    name: "Master Andrew Asamoah",
    role: "Research Coordinator & Fundraising Lead",
    about: "Andrew Cobby Asamoah serves as the Head of Research and Fundraising at Addie's Afrique Foundation, where he plays a key role in driving research-led programs, strengthening donor relationships, and supporting the foundation’s long-term sustainability efforts. His work focuses on generating evidence-based insights, measuring program impact, and contributing to strategies that enhance community and youth-focused interventions. He is currently pursuing a Bachelor of Science in Agricultural Engineering at Kwame Nkrumah University of Science and Technology, combining academic training with a strong commitment to social impact. Andrew is deeply dedicated to youth and child development and is motivated by the desire to create practical, sustainable solutions that empower underserved communities.",
    image: "/AndrewP.jpeg",
    linkedin: "https://www.linkedin.com/in/andrew-cobby-asamoah-97a010366",
    email: "mailto:researchcoordinator@addiesafriquefoundation.org",
    instagram: "instagram.com",
  },
  {
    id: "akua-boahemaa",
    name: "Miss Akua Boahemaa",
    role: "Head Of Regional Operations",
    about: "Akua Boahemaa Frimpong is a passionate, dedicated, and hard‑working professional with a strong drive for excellence and service delivery. She holds a Bachelor’s degree in Landscape Design and Management, and is currently pursuing a Master’s degree in Geographic Information Systems (GIS) at the Kwame Nkrumah University of Science and Technology (KNUST). She possesses good  communication skills and is highly results‑ and productivity‑oriented. Committed to service and growth, she ensures that activities and outreach are guided by clear data, effective organisation, and strong teamwork. She  builds strong relationships and coordinates teams effectively across regions. She focuses on clear goals, timely delivery, and improved efficiency. As Head of Regional Operations, she strengthens systems to expand the foundation’s reach, streamline field activities, and foster teamwork. She is driven by a passion for sustainable development and meaningful impact across Ghana.",
    image: "/BoahemaaP.jpeg",
    linkedin: "https://linkedin.com/",
    email: "mailto:headofregionaloperations@addiesafriquefoundation.org",
    instagram: "https://www.instagram.com/1_akua_boahemaa/",
  },
  {
    id: "matilda-essuman",
    name: "Miss Matilda Essuman",
    role: "Volta Regional Coordinator",
    about: "Matilda Essuman is currently pursuing a Bachelor of Public Health degree in Disease Control at the University of Health and Allied Sciences (UHAS), where she is developing the expertise and leadership skills needed to address pressing public health challenges across Africa. Her academic journey reflects a deep commitment to health equity, disease prevention, and community-centered healthcare solutions. As a passionate and driven public health advocate, Matilda has distinguished herself through her dedication to improving the well-being of underserved populations, particularly women, children, and vulnerable communities affected by neglected tropical diseases. Her strong leadership abilities, strategic thinking, and commitment to service have enabled her to contribute meaningfully to various health initiatives and advocacy programs. Matilda currently serves as the Volta Regional Coordinator and Deputy Health Coordinator for Addie’s Afrique Foundation, where she plays a pivotal role in planning, coordinating, and implementing community health interventions. Through these roles, she has contributed significantly to the foundation’s mission of empowering communities, promoting health awareness, and improving access to essential healthcare services. Her ability to coordinate programs, engage stakeholders, and mobilize volunteers has strengthened the impact of the foundation’s initiatives across the region. Beyond her work with Addie’s Afrique Foundation, Matilda has demonstrated exceptional leadership within the University of Health and Allied Sciences, serving as the Clerk of the General Assembly of the Student Representative Council (SRC). She also serves as Co-Patron of the Neglected Tropical Diseases Advocacy Club-UHAS, where she mentors and supports young advocates committed to advancing public health awareness and action. Her experience as a Community Engagement and Outreach Coordinator at ECHOHEALTH AFRICA and former Director of Public Relations for the Neglected Tropical Diseases Advocacy Club-UHAS further highlights her dedication to health advocacy, public engagement, and community development. Through these positions, she has successfully coordinated outreach programs, fostered strategic partnerships, and championed initiatives that promote health education, disease prevention, and youth participation in public health leadership. Matilda's passion for transforming health awareness into measurable community impact continues to drive her work. With a strong belief in empowering communities to become active participants in their healthcare systems, she remains committed to advancing health equity and creating sustainable solutions that improve lives. Her journey serves as an inspiration to young leaders and health advocates seeking to make a lasting difference in society.",
    image: "/matildaP.jpg",
    linkedin: "https://linkedin.com/in/matilda-essuman-752444310",
    email: "mailto:voltaregionalcoordinator@addiesafriquefoundation.org",
    instagram: "https://instagram.com",
  },
  {
    id: "otubrimpong-marcia",
    name: "Miss Otubrimpong Marcia",
    role: "Curriculum Coordinator",
    about: "Otubrimpong Marcia is the Curriculum Coordinator at Addie’s Afrique Foundation, where she supports the development and implementation of educational programs that promote literacy, inclusion, and community empowerment. She holds a BSc in Agriculture from the University of Ghana and is currently pursuing an MPhil in Agricultural Extension at the University of Ghana. Marcia is passionate about using education as a tool for social change and believes that every child deserves access to quality learning opportunities, regardless of their background or abilities. Her work is driven by a commitment to empowering underserved communities, supporting inclusive education, and creating meaningful learning experiences that help children reach their full potential. Through her role at the Foundation, she contributes to initiatives that foster literacy, personal growth, and sustainable community development.",
    image: "/Marcia.jpeg",
    linkedin: "https://www.linkedin.com/marcia-otubrimpong-334378266",
    email: "mailto:curriculumcoordinator@addiesafriquefoundation.org",
    instagram: "instagram.com",
  },
];

export default function ProfileSection() {
  const { id } = useParams();
  const profile = teamData.find((member) => member.id === id);

  if (!profile) {
    return <div className="profile-container">Profile not found.</div>;
  }

  return (
    <div className="profile-container">
      <motion.a
        href="/team"
        className="back-link"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        ← Back to Team
      </motion.a>

      <motion.div
        className="profile-card"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src={profile.image} alt={profile.name} className="profile-image" />
        <h2 className="profile-name">{profile.name}</h2>
        <p className="profile-title">{profile.role}</p>

        <div className="profile-about">
          <h3>About</h3>
          <p>{profile.about}</p>
        </div>

        <div className="profile-connect">
          <h3>Connect</h3>
          <div className="profile-icons">
            <a href={profile.linkedin}>
              <FaLinkedinIn />
            </a>
            <a href={profile.email}>
              <MdOutlineMail />
            </a>
            <a href={profile.instagram}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
