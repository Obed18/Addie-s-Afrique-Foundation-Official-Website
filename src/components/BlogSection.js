import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/BlogSection.css";

const featuredArticle = {
  id: "one-female-one-sanitary-pad-2026",
  title: "One Female, One Sanitary Pad Initiative – 2026 Impact Report",
  author: "Addie's Afrique Fondation",
  date: "May 28, 2026",
  time: "4 min read",
  description:
    "The One Female, One Sanitary Pad initiative, organised by Addie’s Afrique Foundation, has been running for the past three years, consistently creating meaningful impact in the lives of young girls across Ghana.",
  image: "/1f1s26.jpg",
};

const articles = [
  {
    id: "1-female-1-sanitary-pad-project",
    tag: "Health & Advocacy",
    title:
      "One Pad, Endless Possibilities: Help Her Stay in School in 2026",
    author: "Addie's Afrique Fondation",
    date: "February 28th, 2026",
    time: "4 min read",
  },
  {
    id: "a-pad-a-voice",
    tag: "Health & Advocacy",
    title:
      "A PAD, A VOICE, A FUTURE – THE STORY OF THE 1 FEMALE 1 SANITARY PAD PROJECT",
    author: "Addie's Afrique Fondation",
    date: "October 28th, 2024",
    time: "2 min read",
  },
  {
    id: "support-to-the-west",
    tag: "Support",
    title:
      "SUPPORT TO THE WEST- A RURAL DEVELOPMENT PROGRAM",
    author: "Addie's Afrique Fondation",
    date: "October 28th, 2024",
    time: "2 min read",
  },
  {
    id: "volunteer-opportunities",
    tag: "Volunteer",
    title:
      "Volunteer Opportunities: Exciting Volunteer Opportunities at Addie's Afrique Foundation",
    author: "Addie's Afrique Fondation",
    date: "December 20th, 2024",
    time: "2 min read",
  },
  {
    id: "internship-opportunity",
    tag: "Internship",
    title: "Internship Oportunity",
    author: "Addie's Afrique Fondation",
    date: "October 29th, 2024",
    time: "2 min read",
  },
  {
    id: "empowering-girls",
    tag: "Education",
    title: "Empowering Girls",
    author: "Addie's Afrique Fondation",
    date: "May 29th, 2023",
    time: "10 min read",
  },
  {
    id: "journey-to-the-west",
    tag: "Support",
    title: "Journey To The West",
    author: "Addie’s Afrique Foundation",
    date: "May 10th, 2023",
    time: "5 min read",
  },
  {
    id: "street-donation-campaign",
    tag: "Support",
    title: "Let’s Hit the Street Donation Campaign",
    author: "Addie’s Afrique Foundation",
    date: "March 6th, 2023",
    time: "9 min read",
  },
  {
    id: "breast-cancer-awareness",
    tag: "Education",
    title: "Breast Cancer Awareness",
    author: "Addie’s Afrique Foundation",
    date: "October 28th, 2023",
    time: "9 min read",
  },
  {
    id: "one-female-one-pad-project",
    tag: "Support",
    title: "One Female One Sanitary Pad",
    author: "Addie’s Afrique Foundation",
    date: "June 13th, 2023",
    time: "9 min read",
  },
];

export default function BlogSection() {
  return (
    <div className="blog-section">
      <div className="blog-featured">
        <motion.div
          className="blog-featured-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="blog-badge">Featured Article</span>
          <h2>{featuredArticle.title}</h2>
          <p>{featuredArticle.description}</p>
          <div className="blog-meta">
            <span>{featuredArticle.author}</span> |{" "}
            <span>{featuredArticle.date}</span> |{" "}
            <span>{featuredArticle.time}</span>
          </div>
          <Link
            to={`/blog/${featuredArticle.id}`}
            className="blog-read-more-small"
          >
            <button className="blog-read-more">Read Full Article →</button>
          </Link>
        </motion.div>
        <motion.img
          src={featuredArticle.image}
          alt="Featured"
          className="blog-featured-img"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
      </div>

      <h3 className="blog-latest-heading">Latest Articles</h3>

      <div className="blog-articles-grid">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="blog-article-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <span className="blog-tag">{article.tag}</span>
            <h4>{article.title}</h4>
            <div className="blog-meta">
              <span>{article.author}</span> | <span>{article.date}</span> |{" "}
              <span>{article.time}</span>
            </div>
            <Link to={`/blog/${article.id}`} className="blog-read-more-small">
              Read more →
            </Link>{" "}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
