import { X } from "lucide-react"

export default function VideoModal({ isOpen, videoData, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Overlay Gelap */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
      />

      {/* Konten Modal */}
      <div className="relative w-full max-w-4xl bg-[#0a0a0a] border-2 border-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.3)] animate-in zoom-in duration-300">
        
        {/* Bar Header Modal */}
        <div className="flex items-center justify-between bg-blue-900 px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-white uppercase tracking-widest font-mono">
              Local Feed: {videoData?.band} // {videoData?.title}
            </span>
          </div>
          <button onClick={onClose} className="text-white hover:rotate-90 transition-transform">
            <X size={20} />
          </button>
        </div>

        {/* Local Video Player Frame */}
        <div className="aspect-video w-full bg-black relative flex items-center justify-center">
          <video
            autoPlay
            controls
            className="w-full h-full object-contain"
            key={videoData?.videoUrl} // Agar video me-reload saat ganti data
          >
            <source src={videoData?.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Efek Scanline CRT */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px]" />
        </div>

        {/* Bar Bawah Modal */}
        <div className="p-3 flex justify-between items-center border-t border-zinc-800">
          <span className="text-[8px] font-mono text-zinc-600 uppercase italic">
            Source: Local Drive // Tracking... OK
          </span>
          <div className="flex gap-1">
             <div className="w-8 h-1 bg-red-600" />
             <div className="w-8 h-1 bg-blue-600" />
             <div className="w-8 h-1 bg-zinc-800" />
          </div>
        </div>
      </div>
    </div>
  )
}