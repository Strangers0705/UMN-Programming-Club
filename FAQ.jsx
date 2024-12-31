import React from "react";
import "../styles.css"; // Jalur relatif ke styles.css

function FAQ() {
  return (
    <section id="faq" className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        <div className="faq-item">
          <p className="faq-question">
            <strong>Q: Apa tujuan dari website ini?</strong>
          </p>
          <p className="faq-answer">
            A: Website ini dirancang untuk menghubungkan anggota, berbagi
            pengetahuan, dan menyediakan sumber daya bagi para penggemar
            pemrograman.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">
            <strong>Q: Bagaimana cara mereset kata sandi saya?</strong>
          </p>
          <p className="faq-answer">
            A: Anda dapat mereset kata sandi dengan mengklik tautan "Lupa Kata
            Sandi" di halaman login dan mengikuti petunjuk yang diberikan.
          </p>
        </div>

        {/* Pertanyaan tambahan tentang UKM Programming Club */}
        <div className="faq-item">
          <p className="faq-question">
            <strong>Q: Apa itu UKM Programming Club?</strong>
          </p>
          <p className="faq-answer">
            A: UKM Programming Club adalah organisasi mahasiswa yang bertujuan
            untuk mengembangkan keterampilan pemrograman dan mempromosikan
            pembelajaran kolaboratif dalam bidang teknologi dan pengembangan
            perangkat lunak.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">
            <strong>
              Q: Bagaimana cara menjadi anggota UKM Programming Club?
            </strong>
          </p>
          <p className="faq-answer">
            A: Anda bisa menjadi anggota dengan mendaftar melalui website kami
            atau mengikuti pertemuan pengenalan untuk mempelajari lebih lanjut
            tentang klub.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">
            <strong>
              Q: Kegiatan apa saja yang diselenggarakan oleh UKM Programming
              Club?
            </strong>
          </p>
          <p className="faq-answer">
            A: Kami menyelenggarakan workshop, hackathon, tantangan pemrograman,
            kolaborasi proyek, dan diskusi teknologi untuk membantu anggota
            meningkatkan keterampilan mereka dan berkolaborasi dalam
            proyek-proyek menarik.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">
            <strong>
              Q: Apakah saya harus menjadi ahli pemrograman untuk bergabung?
            </strong>
          </p>
          <p className="faq-answer">
            A: Tidak, semua tingkat keterampilan diterima! Apakah Anda pemula
            atau sudah berpengalaman, kami menyediakan lingkungan yang mendukung
            untuk belajar dan berkembang.
          </p>
        </div>

        <div className="faq-item">
          <p className="faq-question">
            <strong>Q: Apakah ada biaya keanggotaan?</strong>
          </p>
          <p className="faq-answer">
            A: Tidak, bergabung dengan UKM Programming Club adalah gratis. Kami
            bertujuan untuk memberikan kesempatan yang setara bagi semua
            mahasiswa tanpa memandang latar belakang finansial.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
