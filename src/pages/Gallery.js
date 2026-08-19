import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/GallerySection";
import Footer from "../components/Footer";
import Button from "../components/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Gallery.css"; // <- external CSS

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    "All",
    "Education",
    "Technology",
    "Community",
    "Events",
    "Impact",
  ];

  const galleryItems = Array.from({ length: 750 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/gallery${i + 1}.jpg`,
    category: "Community",
    title: `Gallery Image ${i + 1}`,
    description: "",
    location: "",
  }));

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (id) => setLightboxImage(id);
  const closeLightbox = () => setLightboxImage(null);

  const navigateLightbox = (direction) => {
    if (lightboxImage === null) return;
    const currentIndex = filteredItems.findIndex(
      (item) => item.id === lightboxImage
    );
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }
    setLightboxImage(filteredItems[newIndex].id);
  };

  const currentLightboxItem = lightboxImage
    ? filteredItems.find((item) => item.id === lightboxImage)
    : null;

  return (
    <div className="gallery-container">
      <Navbar />

      <Hero />

      <section className="category-tabs">
        <div className="tabs">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`tab-button ${
                selectedCategory === category ? "active" : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      <section className="gallery-grid">
        {filteredItems.length > 0 ? (
          <div className="grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-item scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(item.id)}
              >
                <div
                  className="gallery-img"
                  style={{ backgroundImage: `url(${item.src})` }}
                >
                  <div className="gallery-overlay">
                    <div className="info">
                      <div className="badge">{item.category}</div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No images found in this category.</p>
          </div>
        )}
      </section>

      {lightboxImage && currentLightboxItem && (
        <div className="lightbox">
          <button onClick={closeLightbox} className="lightbox-btn close-btn">
            <X />
          </button>
          <button
            onClick={() => navigateLightbox("prev")}
            className="lightbox-btn nav-btn left"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="lightbox-btn nav-btn right"
          >
            <ChevronRight />
          </button>

          <div className="lightbox-content">
            <img
              src={currentLightboxItem.src}
              alt={currentLightboxItem.title}
            />
            <div className="lightbox-text">
              <div className="badge">{currentLightboxItem.category}</div>
              <h3>{currentLightboxItem.title}</h3>
              <p>{currentLightboxItem.description}</p>
              <span>{currentLightboxItem.location}</span>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
