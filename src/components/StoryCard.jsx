import React from 'react';

/**
 * @param {string} title - Judul artikel
 * @param {string} excerpt - Ringkasan cerita
 * @param {string} date - Tanggal arsip (opsional)
 * @param {function} onOpen - Fungsi untuk navigasi ke halaman detail
 */

export default function StoryCard({ title, excerpt, date, onOpen }) {
  // Kita membungkus data dalam satu objek agar mudah dikirim ke parent state
  const storyData = { title, excerpt, date };

  return (
    <article
      onClick={() => onOpen(storyData)}
      className="
        group relative
        bg-[#0a0a0a]
        border-l-4 border-zinc-800
        p-8
        transition-all duration-500
        hover:border-red-600
        hover:bg-zinc-900/50
        cursor-pointer
        active:scale-[0.98]
        select-none
      "
    >
      {/* DECORATIVE BACKGROUND NUMBER - Visual Depth */}
      <span className="absolute top-4 right-6 text-6xl font-black text-white/[0.02] italic pointer-events-none group-hover:text-blue-600/10 transition-colors duration-700">
        80s
      </span>

      {/* METADATA - Simulating a typewriter/newspaper header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse group-hover:bg-blue-500" />
          <span className="text-[10px] font-mono text-zinc-500 tracking-[0.3em] uppercase">
            Archive_{date || "1985"}
          </span>
        </div>
        <div className="h-[1px] flex-1 bg-zinc-900 group-hover:bg-blue-900/30 transition-colors" />
      </div>

      {/* TITLE - Heavy, Bold & Italic Rock Aesthetic */}
      <h3
        className="
          text-2xl md:text-3xl
          font-black
          text-white
          uppercase
          italic
          tracking-tighter
          leading-[0.9]
          mb-5
          group-hover:text-blue-500
          transition-colors
          duration-300
        "
      >
        {title}
      </h3>

      {/* EXCERPT - Content preview with custom line clamping */}
      <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-medium border-b border-zinc-900 pb-8 group-hover:text-zinc-200 transition-colors">
        "{excerpt}"
      </p>

      {/* CTA FOOTER - Analog Style Link */}
      <div className="flex justify-between items-center">
        <div
          className="
            inline-flex items-center gap-4
            text-[10px]
            font-black
            uppercase
            tracking-[0.4em]
            text-white
            group-hover:text-red-600
            transition-all
          "
        >
          Full Article
          <span className="opacity-0 group-hover:opacity-100 transition-all text-blue-500 translate-x-[-10px] group-hover:translate-x-0">
            {">>"}
          </span>
        </div>
        
        {/* Analog "Page" Label */}
        <span className="text-[9px] font-mono text-zinc-800 group-hover:text-zinc-600 uppercase">
          Pg. {Math.floor(Math.random() * 99) + 1}
        </span>
      </div>

      {/* CORNER FOLD EFFECT (Bottom Right) */}
      <div 
        className="absolute bottom-0 right-0 w-0 h-0 
                   border-t-[15px] border-t-transparent 
                   border-r-[15px] border-r-zinc-800 
                   transition-all duration-300 
                   group-hover:border-r-red-600" 
      />
    </article>
  );
}