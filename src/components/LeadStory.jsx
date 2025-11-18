import React from 'react'

function LeadStory({ headline, subhead, imageUrl, caption, body }) {
  return (
    <section className="break-inside-avoid">
      <h2 className="font-serif text-4xl leading-tight text-zinc-900">
        {headline}
      </h2>
      {subhead && (
        <p className="text-base italic text-zinc-700 mt-1">
          {subhead}
        </p>
      )}
      {imageUrl && (
        <figure className="my-4">
          <img src={imageUrl} alt="engraving" className="w-full aspect-[3/2] object-cover grayscale contrast-125" />
          {caption && (
            <figcaption className="mt-2 text-[11px] text-zinc-600 border-t border-zinc-300 pt-1">
              {caption}
            </figcaption>
          )}
        </figure>
      )}
      <div className="text-[14px] leading-[1.9] text-zinc-800">
        {body}
      </div>
    </section>
  )
}

export default LeadStory
