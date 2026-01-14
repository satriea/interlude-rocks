import { useState } from "react"
import { Search, XCircle } from "lucide-react"
import VideoCard from "./VideoCard"
import VideoModal from "./VideoModal"

// DATA VIDEO - Langsung merujuk ke folder public/assets/...
const videos = [
  {
    id: 1,
    title: "Welcome To The Jungle",
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
  const [activeVideo, setActiveVideo] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  // LOGIC PENCARIAN
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.band.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section id="videos" className="relative py-32 bg-black overflow-hidden">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none rotate-12 scale-150" 
           style={{ backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)' , backgroundSize: '40px 40px'}} />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HEADER & SEARCH BAR */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20">
          <header className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-red-600" />
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase italic tracking-tighter leading-none">
              LATEST <br />
              <span className="text-blue-600 [text-shadow:2px_2px_0px_#fff]">INTERLUDES</span>
            </h2>
          </header>

          <div className="relative w-full max-w-md group">
            <div className="absolute -inset-1 bg-blue-600/20 group-focus-within:bg-blue-600/40 transition-all blur-sm" />
            <div className="relative flex items-center bg-zinc-900 border-2 border-zinc-800 p-1 group-focus-within:border-blue-500 transition-all">
              <Search className="ml-3 text-zinc-500" size={18} />
              <input 
                type="text"
                placeholder="FIND SIGNAL..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-white font-mono text-xs focus:outline-none uppercase tracking-widest placeholder:text-zinc-700"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="mr-3 text-zinc-500 hover:text-red-500">
                  <XCircle size={18} />
                </button>
              )}
            </div>
            {/* Status Indicator */}
            <div className="mt-2 flex justify-between items-center px-1">
               <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-tighter">Database: Online</span>
               <span className="text-[8px] font-mono text-blue-900 uppercase tracking-tighter">Result: {filteredVideos.length} Items</span>
            </div>
          </div>
        </div>

        {/* VIDEO GRID */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredVideos.map((video) => (
              <div key={video.id} className="group relative">
                <div className="absolute -inset-2 border-2 border-blue-600/20 group-hover:border-red-600/40 transition-colors duration-500 -rotate-1" />
                <VideoCard
                  title={video.title}
                  band={video.band}
                  thumbnail={video.thumbnail}
                  videoUrl={video.videoUrl}
                  onOpen={(data) => setActiveVideo(data)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-zinc-900">
            <h3 className="text-2xl font-black text-zinc-700 uppercase italic tracking-tighter">
              No Signal Found for "{searchQuery}"
            </h3>
          </div>
        )}
      </div>

      <VideoModal 
        isOpen={!!activeVideo} 
        videoData={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </section>
  )
}