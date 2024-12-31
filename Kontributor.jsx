import React from "react";
import umnPcLogo from "../assets/UMN PC.png"; // Mengimpor gambar

function Kontributor() {
  return (
    <section id="kontributor">
      <h2>Contributors</h2>
      <img
        src={umnPcLogo}
        alt="UMN PC Logo"
        className="kontributor-logo"
      />{" "}
      {/* Menampilkan gambar */}
    </section>
  );
}

export default Kontributor;
