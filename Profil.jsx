import React from "react";

function Profil() {
  const containerStyle = {
    padding: "50px 20px",
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
    color: "#ffffff", // Warna teks putih
    textAlign: "center",
    boxSizing: "border-box",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)", // Efek bayangan
  };

  const titleStyle = {
    fontFamily: "Orbitron, sans-serif",
    fontSize: "2.5rem",
    marginBottom: "40px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#00d4ff",
    textShadow: "0 4px 6px rgba(0, 0, 0, 0.5)", // Efek bayangan teks
  };

  const contentStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "40px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  const cardStyle = {
    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", // Warna transparan untuk kontras
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
    padding: "20px",
    color: "#ffffff", // Warna teks putih
    width: "300px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textAlign: "left",
  };

  const cardHoverStyle = {
    transform: "scale(1.05)", // Efek hover
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.8)", // Bayangan lebih besar
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, cardHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, cardStyle);
  };

  return (
    <section id="profil" style={containerStyle}>
      <h2 style={titleStyle}>Profile</h2>
      <div style={contentStyle}>
        <p>
          Selamat datang di klub pemrograman kami! Kami adalah komunitas dinamis
          yang terdiri dari para coder antusias yang bersemangat untuk belajar,
          berinovasi, dan berkolaborasi. Bersama-sama, kami mengeksplorasi
          berbagai kemungkinan dalam dunia pemrograman dan saling mendukung
          untuk mencapai keunggulan.
        </p>
      </div>
      <div style={cardContainerStyle}>
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Apa yang Kami Lakukan</h3>
          <p>
            Kami mengadakan workshop coding, hackathon, kolaborasi proyek, dan
            diskusi inspiratif untuk meningkatkan keterampilan dan kreativitas.
          </p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Misi Kami</h3>
          <p>
            Menciptakan lingkungan yang inklusif di mana anggota dapat tumbuh,
            berinovasi, dan bersama-sama membentuk masa depan teknologi.
          </p>
        </div>
        <div
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3>Bergabunglah dengan Kami</h3>
          <p>
            Jadilah bagian dari perjalanan seru yang penuh dengan pembelajaran,
            pertumbuhan, dan peluang. Mari kita ciptakan masa depan bersama!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profil;
