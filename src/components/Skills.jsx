import React from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/40 font-josefin">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-16">Skills</h2>
        <div className="scroll-fade grid grid-cols-2 md:grid-cols-4 gap-6">
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
  );
}
