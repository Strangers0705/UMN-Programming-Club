import React from "react";

function Kegiatan() {
  const containerStyle = {
    padding: "2rem",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    textAlign: "center",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#00d4ff",
    textShadow: "0 4px 8px rgba(0, 212, 255, 0.4)",
    marginBottom: "1.5rem",
  };

  const descriptionStyle = {
    maxWidth: "600px",
    margin: "0 auto 2rem",
    fontSize: "1.2rem",
    lineHeight: "1.8",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    justifyContent: "center",
  };

  const cardStyle = {
    background: "linear-gradient(145deg, #203a43, #0f2027)",
    borderRadius: "15px",
    boxShadow:
      "0 10px 15px rgba(0, 0, 0, 0.3), inset 0 -3px 8px rgba(0, 0, 0, 0.4)",
    padding: "1.5rem",
    color: "#fff",
    width: "300px",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    textAlign: "left",
  };

  const cardHoverStyle = {
    transform: "perspective(1000px) rotateY(10deg) rotateX(-10deg)",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "white",
  };

  const cardTextStyle = {
    fontSize: "1rem",
    lineHeight: "1.5",
    color: "#d1e8ff",
  };

  // Memperbaiki hover dengan penggunaan event target yang lebih aman
  const handleMouseEnter = (e) => {
    e.target.style.transform = cardHoverStyle.transform;
    e.target.style.boxShadow = cardHoverStyle.boxShadow;
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = "none";
    e.target.style.boxShadow =
      "0 10px 15px rgba(0, 0, 0, 0.3), inset 0 -3px 8px rgba(0, 0, 0, 0.4)";
  };

  return (
    <section id="kegiatan" style={containerStyle}>
      <h2 style={titleStyle}>Events</h2>
      <p style={descriptionStyle}>
        Kami menyelenggarakan berbagai kegiatan menarik untuk mendukung
        pengembangan kemampuan coding Anda.
      </p>
      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 style={cardTitleStyle}>Workshop Pemrograman</h3>
          <p style={cardTextStyle}>
            Belajar coding bersama mentor ahli dengan materi menarik dan
            berorientasi praktik.
          </p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 style={cardTitleStyle}>Hackathon</h3>
          <p style={cardTextStyle}>
            Berkompetisi dalam proyek coding dalam waktu terbatas untuk melatih
            kreativitas dan kerja tim.
          </p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 style={cardTitleStyle}>Belajar Bersama</h3>
          <p style={cardTextStyle}>
            Diskusi, berbagi pengetahuan, dan latihan coding secara rutin
            bersama anggota klub.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Kegiatan;
