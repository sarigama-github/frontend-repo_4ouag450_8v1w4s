import React from 'react'

function Article({ kicker, headline, subhead, body, byline }) {
  return (
    <article className="[column-fill:_balance] break-inside-avoid">
      {kicker && (
        <p className="uppercase tracking-[0.2em] text-[10px] text-zinc-700 mb-1">
          {kicker}
        </p>
      )}
      <h2 className="font-serif text-2xl leading-tight text-zinc-900">
        {headline}
      </h2>
      {subhead && (
        <p className="text-sm italic text-zinc-700 mt-1">
          {subhead}
        </p>
      )}
      {byline && (
        <p className="text-[11px] tracking-wide text-zinc-600 mt-2">By {byline}</p>
      )}
      <div className="mt-3 text-[13px] leading-6 text-zinc-800">
        {body}
      </div>
    </article>
  )
}

export default Article
