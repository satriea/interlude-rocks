import { ArrowUp, Youtube, Instagram, Radio } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative border-t-4 border-blue-600 bg-black mt-24">
      {/* DECORATIVE TOP STRIP */}
      <div className="h-1 w-full bg-gradient-to-r from-red-600 via-blue-600 to-red-600 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3 items-start text-sm">

        {/* BRAND & TAGLINE */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <div className="flex items-center gap-2">
            <Radio className="text-blue-500" size={20} />
            <h3 className="text-xl font-black italic tracking-tighter text-white uppercase leading-none">
              INTERLUDE<span className="text-blue-600">-ROCKS</span>
            </h3>
          </div>
          <p className="text-zinc-500 font-medium text-xs leading-relaxed max-w-[200px] text-center md:text-left uppercase tracking-widest">
            Loud stories, raw memories & rock echoes from the 80's.
          </p>
          
          {/* SOCIALS - Boxy Style */}
          <div className="flex gap-3 pt-2">
            {[ 
              { icon: <Youtube size={18} />, label: "YT", href: "https://youtube.com" },
              { icon: <Instagram size={18} />, label: "IG", href: "https://instagram.com" }
            ].map((soc, i) => (
              <a
                key={i}
                href={soc.href}
                className="p-3 border-2 border-zinc-800 text-zinc-400 hover:border-red-600 hover:text-white hover:shadow-[4px_4px_0px_#dc2626] transition-all"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT - Terminal Style */}
        <div className="flex flex-col items-center justify-center space-y-4 font-mono text-[11px] uppercase tracking-tighter text-zinc-500">
          <div className="bg-zinc-900/50 p-6 border border-zinc-800 w-full max-w-xs space-y-3">
            <p className="flex justify-between border-b border-zinc-800 pb-2">
              <span className="text-blue-600">Email:</span>
              <a href="mailto:andreassatriea@gmail.com" className="text-zinc-300 hover:text-red-500 transition">
                andreas... @gmail.com
              </a>
            </p>
            <p className="flex justify-between">
              <span className="text-blue-600">Phone:</span>
              <a href="tel:+6281330728675" className="text-zinc-300 hover:text-red-500 transition">
                +62 813-3072...
              </a>
            </p>
          </div>
        </div>

        {/* SCROLL TO TOP - Action Button */}
        <div className="flex flex-col items-center md:items-end justify-center h-full">
          <button
            onClick={scrollToTop}
            className="
              group relative flex items-center gap-3
              px-8 py-3 bg-transparent
              border-2 border-blue-600 text-blue-500
              font-black uppercase tracking-[0.3em] text-[10px]
              hover:bg-blue-600 hover:text-white
              hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]
              transition-all duration-300
              transform hover:-skew-x-12
            "
          >
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition" />
            Top
          </button>
        </div>
      </div>

      {/* COPYRIGHT & ANALOG DETAIL */}
      <div className="bg-zinc-950 py-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} INTERLUDE-ROCKS • MASTERED IN PROBOLINGGO</p>
          <div className="flex gap-4">
            <span>Stereo</span>
            <span className="text-red-900">●</span>
            <span>Dolby System</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer