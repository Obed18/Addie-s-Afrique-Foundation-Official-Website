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

const FeaturedArticle = ({ article = featuredArticle }) => {
  return (
    <div className="blog-section">
    <section className="blog-featured">
      {/* TEXT SIDE */}
      <motion.div
        className="blog-featured-text"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="blog-badge">Featured Article</span>

        <h2 className="blog-title">{article.title}</h2>

        <p className="blog-description">{article.description}</p>

        <div className="blog-meta">
          <span>{article.author}</span>
          <span>• {article.date}</span>
          <span>• {article.time}</span>
        </div>

        <Link
          to={`/blog/${article.id}`}
          className="blog-read-more-small"
          aria-label={`Read full article: ${article.title}`}
        >
          <button className="blog-read-more">
            Read Full Article →
          </button>
        </Link>
      </motion.div>

      {/* IMAGE SIDE */}
      <motion.img
        src={article.image}
        alt={article.title}
        className="blog-featured-img"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </section>
          <Link
            to= "/blog"
            className="blog-read-more-small"
          >
            <button className="blog-read-more middle-button">Discover more news →</button>
          </Link>
    </div>
  );
};

export default FeaturedArticle;