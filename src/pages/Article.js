import React from "react";
import { useParams } from "react-router-dom";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import ArticleSection from "../components/ArticleSection";
import blogPosts from "../data/blogData";

const Article = () => {
  const { id } = useParams();
  const blog = blogPosts.find((post) => post.id === id);

  return (
    <div className="home">
      <Navbar />
      {blog ? (
        <ArticleSection blog={blog} />
      ) : (
        <p style={{ padding: "2rem", textAlign: "center" }}>
          Article not found.
        </p>
      )}
    </div>
  );
};

export default Article;
