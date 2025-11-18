import React from 'react'

function Masthead() {
  return (
    <header className="text-center py-6 select-none">
      <div className="tracking-[0.2em] text-xs text-zinc-900/70 mb-1">ESTABLISHED MDCCCLXXXVII • LONDON, ENGLAND</div>
      <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-none text-zinc-900">
        The London Chronicle
      </h1>
      <div className="mt-3 flex items-center justify-center gap-4 text-xs text-zinc-800">
        <span className="uppercase tracking-wide">Wednesday, 18 November 1896</span>
        <span className="w-8 h-px bg-zinc-700/50" />
        <span className="uppercase tracking-wide">Price: One Penny</span>
      </div>
    </header>
  )
}

export default Masthead
