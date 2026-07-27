import { useState } from "react";

const SECTION_ID = "contact";
const MAX_MESSAGE_LENGTH = 500;
const IS_FORM_ACTIVE = true;
const EMPTY_STATE = null;

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(null);
  const currentYear = new Date().getFullYear();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageLenght = formData.message.length;
    const isLongMessage = messageLenght > 100;
    console.log("Pesan Panjang? (boolean): ", isLongMessage);

    setSubmitted({ ...formData, sentAt: new Date().toLocaleString() });
  };

  return (
    <section id={SECTION_ID} className="py-24 px-6 font-josefin">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-semibold text-4xl text-center mb-16">
          Hubungi Saya
        </h2>
        <form className="scroll-fade space-y-5 max-w-lg mx-auto" onSubmit={handleSubmit}>
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
            maxLength={MAX_MESSAGE_LENGTH}
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
            <div className="scroll-fade max-w-lg mx-auto mt-8 bg-slate-900 border border-white/10 space-y-2 rounded-xl p-6">
              <p className="text-purple-400 font-semibold text-sm mb-3">Pesan Terkirim</p>
              <div className="space-y-1 text-sm">
                  <p><span className="text-slate-400">Nama:</span> {submitted.nama}</p>
                  <p><span className="text-slate-400">Email:</span> {submitted.email}</p>
                  <p><span className="text-slate-400">Pesan:</span> {submitted.message}</p>
                  <p className="text-xs text-slate-400"><span className="text-slate-400">Dikirim:</span> {submitted.sentAt}</p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
