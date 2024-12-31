import React, { useState, useEffect } from "react";

function Keanggotaan() {
  // State untuk menyimpan data pendaftaran
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Cek ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    handleResize(); // Periksa ukuran awal
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      // Biasanya, data akan dikirim ke server atau database di sini
      setMessage(`Pendaftaran berhasil! Selamat datang, ${name}!`);
    } else {
      setMessage("Harap isi semua field.");
    }
  };

  const sectionStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "white",
    position: "relative",
    overflow: "hidden",
  };

  const containerStyle = {
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.6)", // Transparansi untuk kotak
    borderRadius: "15px",
    padding: "50px",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
    transform: "rotateX(0deg) rotateY(0deg)",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
    width: "600px", // Default width
    maxWidth: "90%", // Responsif di layar kecil
  };

  const containerLargeStyle = {
    ...containerStyle,
    width: "800px", // Lebar lebih besar untuk layar besar
  };

  const titleStyle = {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "2em",
    color: "#00d4ff",
    textTransform: "uppercase",
    letterSpacing: "3px",
    textShadow:
      "0px 4px 6px rgba(0, 0, 0, 0.6), 0px 2px 10px rgba(255, 255, 255, 0.2)",
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "12px",
    fontSize: "1.1em",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
    width: "100%",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#ff4081",
    border: "none",
    color: "#fff",
    fontSize: "1.2em",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
    width: "100%",
  };

  const messageStyle = {
    marginTop: "20px",
    color: "#fff",
    fontSize: "1.2em",
    fontWeight: "bold",
  };

  return (
    <section id="keanggotaan" style={sectionStyle}>
      <div
        style={isLargeScreen ? containerLargeStyle : containerStyle}
        className="keanggotaan-container"
      >
        <h2 style={titleStyle}>Membership</h2>
        <p style={{ color: "#fff" }}>
          Become a member and unlock exclusive workshops, events, and resources.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            style={inputStyle}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email"
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            style={inputStyle}
            required
            pattern="[A-Za-z0-9]+" // Hanya huruf dan angka
            title="Password hanya boleh mengandung huruf dan angka" // Pesan validasi
          />
          <button type="submit" style={buttonStyle}>
            Register
          </button>
        </form>
        {message && <p style={messageStyle}>{message}</p>}
      </div>
    </section>
  );
}

export default Keanggotaan;
