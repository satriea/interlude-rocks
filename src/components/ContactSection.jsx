import { Send, MapPin, Phone } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6">
        
        {/* WANTED POSTER CONTAINER */}
        <div className="bg-[#e2e2e2] p-8 md:p-12 shadow-[20px_20px_0px_#2563eb] border-4 border-[#c0c0c0] relative rotate-1">
          
          {/* RIPPED PAPER EDGE EFFECT (Decorative) */}
          <div className="absolute top-0 left-0 w-full h-2 bg-black/10 flex">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex-1 h-full bg-[#000] opacity-20 mx-[1px]" />
            ))}
          </div>

          <header className="text-center mb-12">
            <h2 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter leading-none mb-2">
              WANTED
            </h2>
            <div className="h-1 w-full bg-black mb-1" />
            <div className="h-4 w-full bg-black flex items-center justify-center">
               <span className="text-[10px] text-white font-black tracking-[0.5em] uppercase">For Loud Collaborations</span>
            </div>
            <div className="h-1 w-full bg-black mt-1" />
          </header>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* LEFT SIDE: INFO */}
            <div className="space-y-8">
              <div className="border-4 border-black p-4 grayscale hover:grayscale-0 transition-all duration-500 rotate-[-2deg]">
                <img 
                  src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-full h-48 object-cover"
                />
                <p className="mt-4 text-center font-mono text-xs font-black text-black uppercase">
                  Subject: Andreas Satriea<br/>
                  Alias: The Riff Maker
                </p>
              </div>

              <div className="space-y-4 font-mono text-black">
                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span className="text-xs font-bold uppercase underline decoration-2">Probolinggo, East Java</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} />
                  <span className="text-xs font-bold uppercase underline decoration-2">+62 813-3072-8675</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: FORM */}
            <form className="flex flex-col gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-black uppercase tracking-widest">Name / Band Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-4 border-black p-2 focus:outline-none focus:border-blue-600 font-bold text-black placeholder:text-black/30"
                  placeholder="IDENTIFY YOURSELF..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-black uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b-4 border-black p-2 focus:outline-none focus:border-blue-600 font-bold text-black placeholder:text-black/30"
                  placeholder="GIGS / RECORDING / NOISE?"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black text-black uppercase tracking-widest">Message</label>
                <textarea 
                  rows="4"
                  className="w-full bg-transparent border-b-4 border-black p-2 focus:outline-none focus:border-blue-600 font-bold text-black placeholder:text-black/30 resize-none"
                  placeholder="LEAVE YOUR TESTIMONY..."
                />
              </div>

              <button className="mt-4 bg-black text-white p-4 font-black uppercase tracking-[0.3em] hover:bg-blue-600 hover:shadow-[10px_10px_0px_#dc2626] transition-all flex items-center justify-center gap-3 active:translate-y-2">
                <Send size={18} /> Send Telegram
              </button>
            </form>
          </div>

          {/* DECORATIVE STAMP */}
          <div className="absolute -bottom-10 -right-4 w-24 h-24 border-4 border-red-600 rounded-full flex items-center justify-center rotate-12 opacity-80 pointer-events-none">
             <div className="text-[10px] font-black text-red-600 text-center uppercase tracking-tighter">
                APPROVED<br/>BY ROCK<br/>1985
             </div>
          </div>

        </div>

        {/* BOTTOM TAGS */}
        <div className="mt-20 flex justify-center gap-8 opacity-30">
           <span className="text-[10px] font-mono text-white uppercase tracking-[1em]">Warning: High Volume Area</span>
        </div>

      </div>
    </section>
  )
}

export default ContactSection