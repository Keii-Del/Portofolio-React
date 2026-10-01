import { useState, useRef } from "react";
import guwaImg from "./assets/guwa.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Contact from "./components/Contact";
import About from "./components/About";
import Bawahan from "./components/Bawahan";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const container = useRef();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // only animate if the user hasn't asked for reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // 1. Hero intro
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1 },
        });

        tl.from(".hero-badge", { y: -20, opacity: 0 })
          .from(".hero-title", { y: 40, opacity: 0 }, "-=0.4")
          .from(".hero-desc", { y: 30, opacity: 0 }, "-=0.6")
          .from(".hero-buttons", { y: 20, opacity: 0 }, "-=0.6")
          .from(
            ".hero-img",
            { scale: 0.7, opacity: 0, rotate: -10, duration: 1.2 },
            "-=0.8",
          );

        // 2. Scroll reveal for sections (About, Skills, Education, Contact)
        gsap.utils.toArray(".scroll-fade").forEach((el) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });

        // 3. Staggered reveal for project cards
        gsap.set(".project-item", { y: 50, opacity: 0 });

        ScrollTrigger.batch(".project-item", {
          start: "top 85%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.15,
              overwrite: true,
            }),
        });
      });
    },
    { scope: container },
  );

  return (
    <div ref={container} className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-white/10 fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-slate-950/70">
        <header className="flex max-w-6xl mx-auto px-6 py-4 justify-between items-center text-white font-syne ">
          <p className="text-2xl text-purple-500 font-bold">Pandu</p>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-purple-500 transition">
              About
            </a>
            <a href="#skills" className="hover:text-purple-500 transition">
              Skills
            </a>
            <a href="#education" className="hover:text-purple-500 transition">
              Education
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gudgame.314@gmail.com&su=Halo%20Pandu&body=Saya%20ingin%20menghubungi%20Anda%20mengenai..."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition"
            >
              Contact
            </a>
          </div>
        </header>
      </div>
      <section className="min-h-screen flex items-center px-6 font-syne">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="hero-badge inline-flex items-center px-6 py-2 rounded-full bg-purple-500/20 border border-purple-500">
              Open To Work{" "}
              <div className="ml-2 h-2 w-2 rounded-full bg-purple-600 animate-pulse inline-block" />
            </div>

            <h1 className="hero-title text-5xl md:text-7xl mt-6 mb-6">
              Hallo Saya{" "}
              <span className="text-purple-400 font-bold">Pandu</span>
            </h1>
            <p className="hero-desc text-slate-400 text-lg mb-8">
              Mahasiswa Teknik Informatika yang fokus pada Web Development, UI,
              Design, dan teknologi modern.
            </p>

            <div className="hero-buttons flex gap-4 ">
              <a
                href="#contact"
                className="border border-purple-500 bg-purple-500 px-6 py-3 rounded-xl hover:scale-105 transition"
              >
                Hubungi Saya
              </a>
              <a
                href="#skills"
                className="border px-6 py-3 rounded-xl border-white/20"
              >
                Lihat Skill
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={guwaImg}
              className="hero-img w-95 h-95 rounded-full border-4 border-purple-500 object-cover"
            />
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Bawahan />
    </div>
  );
}

export default App;
