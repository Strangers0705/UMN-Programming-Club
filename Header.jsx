import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png"; // Make sure the logo path is correct
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the menu visibility

  // Toggle the menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Custom function for smooth scroll to the top with duration
  const smoothScrollToTop = (duration) => {
    const start = window.pageYOffset; // Starting position
    const startTime = performance.now(); // Timestamp of the start

    const scroll = () => {
      const currentTime = performance.now();
      const timeElapsed = currentTime - startTime; // Time elapsed since start

      // Calculate how far to scroll
      const progress = Math.min(timeElapsed / duration, 1);
      const position = start * (1 - progress); // Smoothly decrease the scroll position

      // Scroll to the calculated position
      window.scrollTo(0, position);

      if (progress < 1) {
        requestAnimationFrame(scroll); // Continue scrolling
      }
    };

    requestAnimationFrame(scroll); // Start the scroll
  };

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      const targetId = event.target.getAttribute("href")?.slice(1); // Get the target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        event.preventDefault();
        const headerHeight = document.querySelector("header").offsetHeight;
        const elementPosition = targetElement.offsetTop;

        // Adjust the scroll position to make sure it's not cut off
        const offsetPosition = elementPosition - headerHeight;

        // Smooth scroll function using window.scrollTo
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <header className="header">
      <div className="logo-container">
        {/* Logo and Title that scrolls to the top */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollToTop(600);
          }}
          className="logo-link"
        >
          <img src={logo} alt="Logo" className="logo" />
          <span className="logo-text">UMN PC</span>
        </a>
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#galeri" className="nav-link">
          Gallery
        </a>
        <a href="#profil" className="nav-link">
          Profile
        </a>
        <a href="#kegiatan" className="nav-link">
          Events
        </a>
        <a href="#faq" className="nav-link">
          FAQ
        </a>
        <a href="#keanggotaan" className="nav-link">
          Membership
        </a>
        <a href="#kontributor" className="nav-link">
          Contributors
        </a>
        <a href="#contact" className="nav-link">
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Header;
