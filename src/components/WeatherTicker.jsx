import React from 'react'

function WeatherTicker() {
  return (
    <div className="border-y border-zinc-800 py-2 text-xs">
      <div className="overflow-hidden">
        <div className="whitespace-nowrap animate-[scroll_30s_linear_infinite] will-change-transform">
          <span className="mx-6">Barometer steady; light fog upon the Thames</span>
          <span className="mx-6">Southwesterly breeze; lamps to be lit at six</span>
          <span className="mx-6">Fine morning promised; expect coal deliveries</span>
          <span className="mx-6">Omnibus delays near Piccadilly; avoid the Strand</span>
          <span className="mx-6">Markets brisk; tea and sugar at modest rates</span>
          <span className="mx-6">Royal Observatory reports clear heavens at dawn</span>
        </div>
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default WeatherTicker
