import { ArrowLeft, Share2, Bookmark } from "lucide-react";

const ArticleDetail = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 pb-24 selection:bg-blue-600">
      
      {/* PROGRESS BAR (Top) */}
      <div className="fixed top-0 left-0 w-1/3 h-1 bg-red-600 z-[100]" />

      {/* BACK BUTTON */}
      <nav className="max-w-7xl mx-auto px-6 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Archives
        </button>
      </nav>

      <article className="max-w-4xl mx-auto px-6">
        
        {/* CATEGORY & DATE */}
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-blue-600 text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest">
            Backstage Story
          </span>
          <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
            Published: Oct 1985 // Vol. 12
          </span>
        </div>

        {/* MAIN TITLE - Massive 80s Rock Style */}
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.85] mb-12 [text-shadow:4px_4px_0px_#2563eb]">
          {article.title}
        </h1>

        {/* HERO IMAGE / FEATURED IMAGE */}
        <div className="relative w-full h-[400px] mb-16 border-2 border-zinc-800 p-2 bg-zinc-900 shadow-[15px_15px_0px_#111]">
          <div className="w-full h-full overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale contrast-150 mix-blend-luminosity"
              alt="Feature"
            />
            <div className="absolute inset-0 bg-blue-900/20" />
          </div>
          <p className="absolute -bottom-10 left-0 text-[8px] font-mono text-zinc-600 uppercase">
            Photo by: Analog Archives // Venue: Sunset Strip, LA
          </p>
        </div>

        {/* ARTICLE CONTENT - Magazine Column Style */}
        <div className="grid md:grid-cols-12 gap-12 mt-20">
          
          {/* Sidebar Info */}
          <div className="md:col-span-3 space-y-8 border-t border-zinc-900 pt-6">
            <div>
              <h4 className="text-[10px] font-black text-white uppercase mb-2">Author</h4>
              <p className="text-xs text-blue-500 italic font-bold">Andreas Satriea</p>
            </div>
            <div className="flex flex-col gap-4">
               <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest hover:text-red-500 transition-colors">
                 <Share2 size={12} /> Share Tape
               </button>
               <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest hover:text-red-500 transition-colors">
                 <Bookmark size={12} /> Save Archive
               </button>
            </div>
          </div>

          {/* Body Text */}
          <div className="md:col-span-9 space-y-8">
            <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-red-600">
              {article.excerpt}
            </p>
            
            <p className="text-zinc-400 leading-relaxed text-lg">
              Malam itu di Los Angeles, udaranya terasa berat oleh aroma bensin dan kerinduan. Di atas panggung, amplifier Marshall meraung, memuntahkan distorsi yang akan mengubah sejarah musik selamanya. Tidak ada yang tahu bahwa riff yang mereka dengar akan menjadi anthem sebuah generasi.
            </p>

            {/* BLOCKQUOTE */}
            <blockquote className="border-y-4 border-blue-600 py-8 my-12">
              <p className="text-3xl font-black text-white uppercase italic tracking-tighter text-center leading-none">
                "Rock bukan hanya soal volume, tapi soal kejujuran yang diteriakkan di atas panggung yang gelap."
              </p>
            </blockquote>

            <p className="text-zinc-400 leading-relaxed text-lg">
              Setiap senar yang dipetik membawa beban dari ribuan mimpi yang hancur dan dibangun kembali. Di era di mana rambut lebih tinggi dari harapan, hanya kejujuran mentah dari distorsi yang bisa dipercaya.
            </p>
          </div>
        </div>

        {/* ARTICLE FOOTER / SIGN OFF */}
        <div className="mt-24 pt-12 border-t-2 border-zinc-800 flex flex-col items-center">
           <div className="text-[10px] font-mono text-zinc-600 uppercase mb-4 tracking-[0.5em]">--- End of Transmission ---</div>
           <div className="w-16 h-1 bg-red-600" />
        </div>

      </article>
    </div>
  );
};

export default ArticleDetail;