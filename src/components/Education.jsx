import react from "react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 font-montserrat">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-4xl font-semibold mb-16">
          Timeline Pendidikan
        </h2>
        <div className="border-l-2 border-purple-500 pl-10">
          <div className="scroll-fade mb-12">
            <h3 className="text-xl font-bold">
              Universitas Muhammadiyah Surakarta
            </h3>
            <p className="text-purple-400">Teknik Informatika</p>
            <p className="text-slate-400">2025-2029</p>
          </div>
          <div className="scroll-fade">
            <h3 className="text-xl font-bold">SMA Negeri 2 Wonosari</h3>
            <p className="text-slate-400">2024-2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}