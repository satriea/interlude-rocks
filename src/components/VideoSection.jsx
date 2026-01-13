import { useState } from "react"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal" // Pastikan kamu membuat file VideoModal.jsx setelah ini

const videos = [
  {
    id: 1,
    title: "Welcome To The Junggle",
    band: "Guns N' Roses",
    thumbnail: "/textures/gnr1.png",
    videoUrl: "/videos/interluderocks.mp4",
  },
  {
    id: 2,
    title: "Estranged",
    band: "Guns N' Roses",
    thumbnail: "/textures/gnr2.png",
    videoUrl: "/videos/estranged.mp4", 
  },
  {
    id: 3,
    title: "Rocket Queen",
    band: "Guns N' Roses",
    thumbnail: "/textures/gnr3.png",
    videoUrl: "/videos/rocketqueen.mp4",
  },
  {
    id: 4,
    title: "Alone",
    band: "Heart",
    thumbnail: "/textures/heart1.png",
    videoUrl: "/videos/alone.mp4",
  },
  {
    id: 5,
    title: "Love Is On The Way",
    band: "Saigon Kick",
    thumbnail: "/textures/saigonkick1.png",
    videoUrl: "/videos/loveisontheway.mp4",
  },
  {
    id: 6,
    title: "Jump",
    band: "Van Halen",
    thumbnail: "/textures/jump.png",
    videoUrl: "/videos/jump.mp4",
  },
]

export default function VideoSection() {
  // State untuk mengontrol data video yang akan ditampilkan di pop-up
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <section
      id="videos"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* BACKGROUND DECORATION - Diagonal Stripes */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none rotate-12 scale-150" 
        style={{ 
          backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', 
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER - Heavy Metal Style */}
        <header className="relative mb-20">
          <div className="absolute -left-4 top-0 w-1 h-full bg-red-600" />
          
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
            LATEST <br />
            <span className="text-blue-600 [text-shadow:2px_2px_0px_#fff]">INTERLUDES</span>
          </h2>

          <div className="mt-6 flex items-center gap-4">
            <div className="h-[2px] w-24 bg-red-600" />
            <p className="text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              Vocal • Guitar • Drums • 1980s
            </p>
          </div>

          <p className="mt-8 max-w-xl text-zinc-400 font-medium leading-relaxed italic border-l-2 border-zinc-800 pl-6">
            "Potongan riff, noise, dan jiwa rock era 80’s — singkat, padat,
            dan penuh emosi yang meledak di panggung."
          </p>
        </header>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.map((video) => (
            <div key={video.id} className="group relative">
              {/* Decorative Frame Behind Card */}
              <div className="absolute -inset-2 border-2 border-blue-600/20 group-hover:border-red-600/40 transition-colors duration-500 -rotate-1" />
              
              <VideoCard
                title={video.title}
                band={video.band}
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
                onOpen={(data) => setActiveVideo(data)} // Mengirim data ke state saat diklik
              />
            </div>
          ))}
        </div>
      </div>

      {/* POP-UP MODAL PLAYER */}
      <VideoModal 
        isOpen={!!activeVideo} 
        videoData={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </section>
  )
}