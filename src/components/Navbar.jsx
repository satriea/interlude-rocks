import { useState } from "react"
import { Menu, X, Radio } from "lucide-react" // Menambahkan icon Radio untuk vibe retro

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Videos", href: "#videos" },
  { label: "Stories", href: "#stories" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-black border-b-2 border-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* BRAND - Classic 80s Rock Style */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <Radio className="text-red-500 animate-pulse" size={24} />
          <h1 className="text-xl font-black italic tracking-tighter text-white uppercase leading-none">
            INTERLUDE
            <span className="block text-xs not-italic tracking-[0.5em] text-blue-500 group-hover:text-red-500 transition-colors">
              ROCKS-80S
            </span>
          </h1>
        </div>

        {/* DESKTOP MENU - Sharp & Clean */}
        <ul className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  relative text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400
                  hover:text-blue-400 transition-all duration-300
                  before:content-['//'] before:mr-2 before:text-red-600 before:opacity-0 hover:before:opacity-100
                "
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* Tambahan Button CTA Klasik */}
          <button className="px-5 py-1.5 border-2 border-red-600 text-red-600 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all transform hover:-skew-x-12">
            Live Now
          </button>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white p-2 hover:bg-zinc-900 rounded-lg transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU - Full Screen Overlay vibe */}
      <div className={`
        md:hidden absolute w-full bg-black border-b-4 border-red-600 transition-all duration-500 ease-in-out overflow-hidden
        ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
      `}>
        <ul className="flex flex-col px-8 py-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-black uppercase italic tracking-widest text-zinc-300 hover:text-blue-500 border-l-4 border-transparent hover:border-red-600 pl-4"
            >
              {item.label}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar