const CRTOverlay = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 1. BASIC SCANLINES (Garis-garis halus) */}
      <div 
        className="absolute inset-0 opacity-[0.06]" 
        style={{
          background: `linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.3) 50%)`,
          backgroundSize: '100% 4px'
        }}
      />
      
      {/* 2. MOVING SCANLINE (Garis tebal yang turun ke bawah) */}
      <div className="absolute inset-0 w-full h-24 bg-white/[0.02] animate-scanline pointer-events-none" />

      {/* 3. STATIC FLICKER (Kedipan halus seluruh layar) */}
      <div className="absolute inset-0 bg-white/5 animate-crt-flicker pointer-events-none" />

      {/* 4. VIGNETTE (Gelap di pojok-pojok layar agar fokus ke tengah) */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.6)]" />
    </div>
  )
}

export default CRTOverlay