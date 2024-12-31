import React, { useState, useEffect } from "react";
import fotoKegiatan1 from "../assets/foto kegiatan 1.jpg";
import fotoKegiatan2 from "../assets/foto kegiatan 2.jpg";
import fotoKegiatan3 from "../assets/foto kegiatan 3.jpg";
import fotoKegiatan4 from "../assets/foto kegiatan 4.jpg";
import fotoKegiatan5 from "../assets/foto kegiatan 5.jpg";
import fotoKegiatan6 from "../assets/foto kegiatan 6.jpg";
import "./galeri.css";

function Galeri() {
  const images = [
    fotoKegiatan1,
    fotoKegiatan2,
    fotoKegiatan3,
    fotoKegiatan4,
    fotoKegiatan5,
    fotoKegiatan6,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval); // Membersihkan interval saat komponen unmount
  }, []);

  return (
    <section id="galeri">
      <h2>Gallery</h2>
      <div className="slider-container">
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div className="slider-item" key={index}>
              <img src={img} alt={`Event ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="nav-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="nav-button next" onClick={nextSlide}>
          &#10095;
        </button>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeri;
