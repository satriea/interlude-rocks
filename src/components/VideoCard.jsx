export default function VideoCard({ title, band, thumbnail, videoUrl, onOpen }) {
  return (
    <article
      // Memicu fungsi onOpen saat kartu diklik
      onClick={() => onOpen({ title, band, videoUrl })}
      className="
        group relative
        bg-black
        overflow-hidden
        border-2 border-zinc-800
        transition-all duration-500
        hover:border-blue-500
        hover:-translate-y-2
        cursor-pointer
        shadow-[8px_8px_0px_rgba(39,39,42,1)]
        hover:shadow-[12px_12px_0px_rgba(37,99,235,1)]
        active:scale-95
      "
    >
      {/* THUMBNAIL AREA */}
      <div className="relative h-56 overflow-hidden border-b-2 border-zinc-800 group-hover:border-blue-500 transition-colors">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="
            w-full h-full object-cover
            grayscale contrast-125
            group-hover:grayscale-0 group-hover:scale-110
            transition-all duration-700
          "
        />

        {/* 80s VINTAGE FILTER OVERLAY */}
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay group-hover:bg-transparent transition-all" />

        {/* DECORATIVE BADGE (Top Right) */}
        <div className="absolute top-0 right-0 bg-red-600 text-white text-[8px] font-black px-3 py-1 uppercase tracking-tighter z-10">
          Vol. 85
        </div>

        {/* PLAY ICON / OVERLAY */}
        <div
          className="
            absolute inset-0
            flex items-center justify-center
            opacity-0 group-hover:opacity-100
            bg-black/40 backdrop-blur-[2px]
            transition-all duration-300
          "
        >
          <div
            className="
              px-6 py-2
              bg-white text-black
              font-black text-xs
              uppercase tracking-[0.3em]
              shadow-[4px_4px_0px_rgba(220,38,38,1)]
              transform -rotate-2
              group-hover:rotate-0
              transition-transform duration-300
            "
          >
            Play Tape
          </div>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="p-5 relative">
        {/* Genre Accent */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-[2px] bg-red-600 animate-pulse" />
          <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest font-mono">
            Signal: Analog Record
          </span>
        </div>

        <h3
          className="
            text-xl font-black
            text-white uppercase italic
            tracking-tighter leading-none
            group-hover:text-blue-500
            transition-colors
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2 text-[10px] text-zinc-400
            font-bold uppercase tracking-[0.3em]
          "
        >
          {band}
        </p>

        {/* FOOTER DETAIL (Tape Cassette Vibe) */}
        <div className="mt-6 flex justify-between items-end border-t border-zinc-900 pt-4">
          <div className="flex flex-col gap-1">
            <div className="text-[9px] font-mono text-zinc-600 leading-none">
              MOD: STEREO // HI-FI
            </div>
            <div className="text-[7px] font-mono text-zinc-700 leading-none">
              FREQ: 44.1KHZ
            </div>
          </div>
          <div className="px-2 py-0.5 border border-zinc-800 text-[9px] font-mono text-zinc-600 uppercase">
            Side A
          </div>
        </div>
      </div>

      {/* DECORATIVE CORNER ELEMENT */}
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-800 group-hover:bg-blue-600 transition-colors" />
    </article>
  )
}