import { useState, useRef } from "react"
import { Play, Pause, SkipForward, Volume2 } from "lucide-react"

const CassettePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-6 left-6 z-[9000] group">
      {/* TOOLTIP */}
      <div className="absolute -top-10 left-0 bg-red-600 text-white text-[9px] font-black px-2 py-1 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
        Now Playing: Midnight Riff
      </div>

      <div className="relative bg-zinc-900 border-2 border-zinc-800 p-3 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-center gap-4 group-hover:border-blue-600 transition-colors">
        
        {/* CASSETTE VISUAL */}
        <div className="relative w-16 h-10 bg-zinc-800 border border-zinc-700 rounded-sm flex items-center justify-center gap-2 overflow-hidden">
          {/* Cassette Tape Holes (Spinning when playing) */}
          <div className={`w-4 h-4 border-2 border-zinc-600 rounded-full flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <div className="w-1 h-1 bg-zinc-600 rounded-full" />
          </div>
          <div className={`w-4 h-4 border-2 border-zinc-600 rounded-full flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <div className="w-1 h-1 bg-zinc-600 rounded-full" />
          </div>
          
          {/* Tape Label */}
          <div className="absolute top-0 inset-x-0 h-2 bg-blue-600/30 flex justify-center">
             <div className="text-[5px] text-white/50 font-mono">SIDE A</div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex items-center gap-3">
          <button 
            onClick={togglePlay}
            className="w-8 h-8 bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-all active:translate-y-1"
          >
            {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" className="ml-0.5" />}
          </button>
          
          <div className="hidden group-hover:flex items-center gap-2 animate-in slide-in-from-left-2">
            <button className="text-zinc-500 hover:text-white"><SkipForward size={14} /></button>
            <Volume2 size={12} className="text-blue-600" />
            <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
               <div className="w-2/3 h-full bg-blue-600" />
            </div>
          </div>
        </div>

        {/* HIDDEN AUDIO ELEMENT */}
        <audio 
          ref={audioRef} 
          src="/sounds/bg-rock.mp3" // Masukkan file mp3 rock di folder public/sounds/
          loop 
        />
      </div>

      {/* MECHANICAL LABEL */}
      <div className="mt-1 flex justify-between px-1">
         <span className="text-[7px] font-mono text-zinc-600 uppercase">Auto Reverse</span>
         <span className="text-[7px] font-mono text-red-900 animate-pulse">● REC</span>
      </div>
    </div>
  )
}

export default CassettePlayer