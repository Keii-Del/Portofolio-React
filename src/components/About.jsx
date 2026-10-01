import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 font-montserrat">
      <div className="max-w-5xl mx-auto">
        <h2 className=" text-4xl text-center mb-12">Tentang Saya</h2>
        <div className="scroll-fade bg-slate-900 border-white/10 border p-10 rounded-xl">
          <p className="text-center leading-relaxed">
            Saya adalah mahasiswa Teknik Informatika Universitas Muhammadiyah
            Surakarta yang minat dalam pengembangan website, database, UI/UX,
            dan teknologi digital.
          </p>
        </div>
      </div>
    </section>
  );
}