import React, { useState } from "react";
import { Play } from "lucide-react";
import "../styles/VideoShowcase.css";

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-section">
      <div className="video-container">
        <div className="video-header fade-in">
          <h2>Addie's Afrique Partnership Program</h2>
          <p>You can make a lasting impact in the lives of children and young people by partnering with  Addie’s Afrique Foundation.</p>
          <p>Together, we can support education, healthcare, inclusion, and empowerment for children with and without disabilities across Ghana.</p>
        </div>

        <div
          className="video-wrapper fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          {!isPlaying ? (
            <div
              className="video-thumbnail"
              onClick={() => setIsPlaying(true)}
            >
              <div className="overlay"></div>

              <div className="thumbnail-content">
                <div className="play-button">
                  <Play className="play-icon" />
                </div>
                <p>Watch</p>
              </div>
            </div>
          ) : (
            <video
              src="/videos/partners-video.mp4"
              className="video-iframe"
              controls
              autoPlay
            />
          )}
        </div>
      </div>
          <div className="video-buttons">
            <a href ="https://wa.me/233504060438" className="link-text"><button className="Contact-button">Contact Us</button></a>
            <a href ="https://addiesafriquefoundation.org/partnership" className="link-text"><button className="partner-button">Become a Partner</button></a>
          </div>
    </section>
  );
}
export default VideoShowcase;