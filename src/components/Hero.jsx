const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale contrast-125"
      >
        <source src="/videos/interluderocks.mp4" type="video/mp4" />
      </video>

      {/* NOISE & SCANLINE EFFECT (Khas TV Tabung 80-an) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]" />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-blue-900/40" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        
        {/* SMALL TOP TEXT */}
        <span className="text-red-600 font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 bg-white/5 px-4 py-1 border-x-2 border-red-600">
          Analog Experience
        </span>

        {/* MAIN TITLE - Ultra Bold & Italic 80s Style */}
        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter text-white uppercase leading-none select-none">
          ROCK <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 [text-shadow:4px_4px_0px_rgba(255,0,0,0.8)]">NEVER</span> FADES
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-zinc-400 font-medium tracking-[0.4em] text-[10px] md:text-xs uppercase">
          Exclusive Stories Test <span className="text-red-600 px-2">•</span> Raw Videos <span className="text-red-600 px-2">•</span> Pure Interludes
        </p>

        {/* ACTION BUTTONS - Boxy & Sharp */}
        <div className="mt-12 flex flex-col md:flex-row gap-6">
          <button className="group relative px-10 py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_rgba(220,38,38,1)]">
            Watch Videos
          </button>
          
          <button className="px-10 py-4 border-2 border-white/40 text-white font-black uppercase tracking-widest text-sm hover:border-red-600 hover:text-red-600 transition-all transform hover:-translate-y-1">
            Read Stories
          </button>
        </div>
      </div>

      {/* BOTTOM DECORATION */}
      <div className="absolute bottom-10 left-10 hidden md:block z-20">
        <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-tighter">
          System: Ready<br />
          Volume: Max<br />
          Vibe: 1985
        </div>
      </div>
    </section>
  )
}

export default Hero