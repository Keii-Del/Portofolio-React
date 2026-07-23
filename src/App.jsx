import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import guwaImg from "./assets/guwa.jpg";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data terkirim: ", formData);
    setSubmitted(formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-white/10 fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70">
        <header className="flex max-w-6xl mx-auto px-6 py-4 justify-between items-center text-white">
          <p className="text-2xl text-purple-500">Pandu</p>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="" className="hover:text-purple-500">
              About
            </a>
            <a href="" className="hover:text-purple-500">
              Skills
            </a>
            <a href="" className="hover:text-purple-500">
              Education
            </a>
            <a href="" className="hover:text-purple-500">
              Contact
            </a>
          </div>
        </header>
      </div>
      <section className="min-h-screen flex items-center px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-purple-500/20 border border-purple-500">
              Open To Work
            </div>

            <h1 className="text-5xl md:text-7xl mt-6 mb-6">
              Hallo Saya{" "}
              <span className="text-purple-400 font-bold">Pandu</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8">
              Mahasiswa Teknik Informatika yang fokus pada Web Development, UI,
              Design, dan teknologi modern.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="border border-purple-500 bg-purple-500 px-6 py-3 rounded-xl hover:scale-105"
              >
                Hubungi Saya
              </a>
              <a
                href="#"
                className="border px-6 py-3 rounded-xl border-white/20"
              >
                Lihat Skill
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={guwaImg}
              className="w-72 h-72 rounded-full border-4 border-purple-500 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className=" text-4xl text-center mb-12">Tentang Saya</h2>
          <div className="bg-slate-900 border-white/10 border p-10 rounded-xl">
            <p className="text-center leading-relaxed">
              Saya adalah mahasiswa Teknik Informatika Universitas Muhammadiyah
              Surakarta yang minat dalam pengembangan website, database, UI/UX,
              dan teknologi digital.
            </p>
          </div>
        </div>
      </section>

      <section id="Skills" className="py-24 px-6 bg-slate-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-semibold mb-16">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 border border-white/20 text-center rounded-2xl p-8 hover:bg-slate-800 hover:scale-105 transition">
              HTML
            </div>
            <div className="bg-slate-900 border border-white/20 text-center rounded-2xl p-8 hover:bg-slate-800 hover:scale-105 transition">
              CSS
            </div>
            <div className="bg-slate-900 border border-white/20 text-center rounded-2xl p-8 hover:bg-slate-800 hover:scale-105 transition">
              MYSQL
            </div>
            <div className="bg-slate-900 border border-white/20 text-center rounded-2xl p-8 hover:bg-slate-800 hover:scale-105 transition">
              JavaScript
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-4xl font-semibold mb-16">
            Timeline Pendidikan
          </h2>
          <div className="border-l-2 border-purple-500 pl-10">
            <div className="mb-12">
              <h3 className="text-xl font-bold">
                Universitas Muhammadiyah Surakarta
              </h3>
              <p className="text-purple-400">Teknik Informatika</p>
              <p className="text-slate-400">2025-2029</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">SMA Negeri 2 Wonosari</h3>
              <p className="text-slate-400">2024-2025</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-semibold text-4xl text-center mb-16">
            Hubungi Saya
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              id="nama"
              placeholder="Nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/10 p-4 rounded-xl"
            />
            <input
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/10 p-4 rounded-xl"
            />
            <textarea
              id="message"
              placeholder="Pesan"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-white/10 p-4 rounded-xl"
            />
            <button
              id="submit"
              type="submit"
              className="bg-purple-500 border-purple-500 rounded-xl py-4 w-full hover:bg-purple-400 hover:scale-102 transition"
            >
              Kirim Pesan
            </button>

            {submitted && (
              <div className="text-center text-purple-400 mt-2">
                Pesan Terkirim
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="bg-slate-900/30">
        <footer className="border-t border-white/20 py-8 text-center text-slate-500">
          2026 Pandu Portofolio
        </footer>
      </section>
    </div>
  );
}

export default App;
