export default function ProjectCard({ title, description, imageUrl, linkUrl }) {
  return (
    <a className="group scroll-fade flex flex-col md:flex-row bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition focus-visible:ring-2 focus-visible:ring-purple-500 outline-none max-w-6xl mx-auto" href={linkUrl} target="_blank" rel="noopener noreferrer">
      {imageUrl && (
          <img src={imageUrl} alt={title} className="w-full md:w-2/5 shrink-0 aspect-video md:aspect-auto object-cover" loading="lazy" />
      )}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-slate-400 text-sm">{description}</p>
        <span className="mt-auto bg-purple-500 rounded-xl py-3 text-center group-hover:bg-purple-400 transition self-start px-6">Check it out</span>
      </div>
    </a>
  );
}
