import React from "react";
import logoUMNPC from "../assets/Logo.png"; // Pastikan path logo benar

function AboutUs() {
  return (
    <>
      {/* Bagian About Us */}
      <h2 className="aboutus-title">About Us</h2>
      <section id="aboutus" className="aboutus-container">
        <p className="intro-text">Apa itu UMNPC?</p>
        <p className="description">
          Perkumpulan mahasiswa yang berfokus pada pengembangan kemampuan logika
          dan pemrograman untuk mempersiapkan anggotanya berkompetisi dalam
          ajang Competitive Programming.
        </p>
      </section>

      {/* Section Filosofi Logo */}
      <section id="philosophy" className="philosophy-container">
        <h3 className="philosophy-title">Filosofi Logo</h3>
        <div className="philosophy-content">
          <img src={logoUMNPC} alt="Logo UMNPC" className="philosophy-logo" />
          <div className="philosophy-text">
            <h4>Lumba-lumba</h4>
            <p>
              Lumba-lumba adalah hewan pintar yang mampu menerima ilmu baru,
              seperti halnya kami di UMNPC yang terus berkembang.
            </p>
            <h4 style={{ marginTop: "20px" }}>Logo UMN</h4>{" "}
            {/* Tambahkan margin-top di sini */}
            <p>
              Logo UMN melambangkan universitas yang inklusif dan mendukung
              pendidikan yang dapat diakses oleh semua orang.
            </p>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        /* Bagian judul About Us */
        .aboutus-title {
          font-family: "Orbitron", sans-serif;
          font-size: 3.5em;
          margin-bottom: 30px;
          text-transform: uppercase;
          letter-spacing: 5px;
          text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5),
            0px 2px 10px rgba(255, 255, 255, 0.2);
          text-align: center;
          position: relative;
          top: 20px;
          color: #00d4ff; /* Warna biru muda yang digunakan untuk judul */
        }

        /* Section About Us */
        #aboutus {
          padding: 2rem;
          text-align: center;
          color: #fff;
          background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          box-sizing: border-box;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Bayangan lebih halus */
          margin-bottom: 40px;
          width: 90%; /* Menyesuaikan lebar kotak dengan Kegiatan */
          max-width: 1200px; /* Membatasi lebar maksimal kotak */
          margin: 0 auto; /* Menjaga agar kotak tetap di tengah */
        }

        .intro-text {
          font-size: 1.6em;
          margin: 20px 0;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          animation: fadeIn 2s ease-in-out;
        }

        .description {
          font-size: 1.2rem;
          margin-bottom: 30px;
          line-height: 1.6;
          opacity: 0.9;
        }

        /* Section Filosofi Logo */
        #philosophy {
          background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
          color: white;
          padding: 3rem;
          text-align: center;
          box-sizing: border-box;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
          margin: 40px auto;
          width: 90%; /* Menyesuaikan lebar kotak dengan Kegiatan */
          max-width: 1200px; /* Membatasi lebar maksimal kotak */
        }

        .philosophy-title {
          font-size: 1.6em;
          margin-bottom: 30px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: white;
          text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5),
            0px 2px 10px rgba(255, 255, 255, 0.2);
        }

        .philosophy-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .philosophy-logo {
          width: 150px;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .philosophy-logo:hover {
          transform: scale(1.1);
        }

        .philosophy-text {
          max-width: 600px;
          text-align: left;
        }

        .philosophy-text h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .philosophy-text p {
          font-size: 1.1rem;
          line-height: 1.5;
          color: white;
        }

        @media (max-width: 768px) {
          #aboutus,
          #philosophy {
            padding: 2rem;
            width: 90%;
          }

          .philosophy-content {
            flex-direction: column;
            align-items: center;
          }

          h2,
          h3 {
            font-size: 2.5em;
          }

          .intro-text {
            font-size: 1.4em;
          }

          .description,
          .philosophy-text {
            font-size: 1.1em;
          }

          .philosophy-logo {
            width: 120px;
          }
        }
      `}</style>
    </>
  );
}

export default AboutUs;
