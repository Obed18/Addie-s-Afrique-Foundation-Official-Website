import React from "react";
import { motion } from "framer-motion";
import "../styles/ArticleSection.css";
import { User2, Calendar, Clock, Facebook, Linkedin} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ShareSection = ({ tags }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Check out this article!");

  return (
    <motion.div
      className="share-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="tags-title">Tags</h3>
      <div className="tags-container">
        {tags.map((tag) => (
          <motion.span
            key={tag}
            className="tag"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            #{tag}
          </motion.span>
        ))}
      </div>

      <h3 className="share-title">Share this article</h3>
      <div className="share-buttons">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn facebook"
        >
          <Facebook size={18} />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn twitter"
        >
          <FaXTwitter size={18} />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="share-btn linkedin"
        >
          <Linkedin size={18} />
        </a>
        <button onClick={handleCopyLink} className="share-btn copy">
          <Link size={18} />
          Copy Link
        </button>
      </div>
    </motion.div>
  );
};

const ArticleSection = ({ blog }) => {
  if (!blog) return <p>Loading...</p>;

  const getGalleryImages = (sectionImage, rotationSeed = 0) => {
    const imagePool = [
      sectionImage,
      ...blog.sections.map((entry) => entry.image),
      blog.image,
    ].filter(Boolean);

    if (imagePool.length === 0) {
      return [];
    }

    const rotatedPool = imagePool.map(
      (_, index) => imagePool[(index + rotationSeed) % imagePool.length]
    );

    const galleryImages = [];
    for (let index = 0; index < 3; index += 1) {
      galleryImages.push(rotatedPool[index % rotatedPool.length]);
    }

    return galleryImages;
  };

  const renderParagraphsWithGalleries = (section, sectionIndex) => {
    if (!section.content) return null;

    const paragraphs = Array.isArray(section.content)
      ? section.content
      : [section.content];

    const renderedBlocks = [];

    paragraphs.forEach((paragraph, paragraphIndex) => {
      renderedBlocks.push(
        <p key={`${sectionIndex}-${paragraphIndex}`}>{paragraph}</p>
      );

      const isTwoParagraphBoundary = (paragraphIndex + 1) % 2 === 0;
      if (!isTwoParagraphBoundary) {
        return;
      }

      const gallerySeed = sectionIndex * 10 + paragraphIndex;
      const galleryImages = getGalleryImages(section.image, gallerySeed);

      if (galleryImages.length > 0) {
        renderedBlocks.push(
          <div
            key={`gallery-${sectionIndex}-${paragraphIndex}`}
            className="article-inline-gallery"
          >
            {galleryImages.map((image, imageIndex) => (
              <img
                key={`${sectionIndex}-${paragraphIndex}-${imageIndex}`}
                src={image}
                alt={`article visual ${imageIndex + 1}`}
                className="article-inline-gallery-image"
              />
            ))}
          </div>
        );
      }
    });

    return renderedBlocks;
  };

  return (
    <motion.section
      className="article-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="article-container">
        <Link to="/blog" className="article-back-link">
          ← Back to Blog
        </Link>
        <span className="article-category-badge">{blog.category}</span>
        <h1 className="article-title">{blog.title}</h1>
        <div className="article-meta">
          <div className="article-item">
            <User2 size={16} /> {blog.author}
          </div>
          <div className="article-meta-item">
            <Calendar size={16} /> {blog.date}
          </div>
          <div className="article-meta-item">
            <Clock size={16} /> {blog.readTime}
          </div>
        </div>

        {blog.sections.map((section, idx) => (
          <motion.div
            key={idx}
            className="article-section-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            {section.image && (
              <div className="article-image-container">
                <img
                  src={section.image}
                  alt="blog visual"
                  className="article-image"
                />
              </div>
            )}
            {section.heading && <h2>{section.heading}</h2>}
            {renderParagraphsWithGalleries(section, idx)}
            {section.list && (
              <div className="numbered-list-container">
                {section.list.map((text, i) => (
                  <div className="list-item" key={i}>
                    <div className="number-circle">
                      <span>{i + 1}</span>
                    </div>
                    <p className="item-text">{text}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}

        <ShareSection tags={blog.tags || []} />

<div className="post-nav-container">
  {blog.prev && (
<Link to={`/blog/${blog.prev.id}`} className="link-text">
      <motion.div
        className="post-nav-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="post-nav-item-left">
          <p className="post-label">PREV POST</p>
          <h3>{blog.prev.title}</h3>
        </div>
        <img
          src={blog.prev.image || "/default.jpg"}
          alt={blog.prev.title}
          className="post-nav-image"
        />
      </motion.div>
    </Link>
  )}

  {blog.next && (
<Link to={`/blog/${blog.next.id}`} className="link-text">
      <motion.div
        className="post-nav-item"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={blog.next.image || "/default.jpg"}
          alt={blog.next.title}
          className="post-nav-image"
        />
        <div className="post-nav-item-right">
          <p className="post-label">NEXT POST</p>
          <h3>{blog.next.title}</h3>
        </div>
      </motion.div>
    </Link>
  )}
</div>
      </div>
    </motion.section>
  );
};

export default ArticleSection;
