import React from 'react'
import Masthead from './components/Masthead'
import WeatherTicker from './components/WeatherTicker'
import LeadStory from './components/LeadStory'
import Article from './components/Article'

function App() {
  return (
    <div className="min-h-screen bg-[#f7f2e7] text-zinc-900">
      <div className="mx-auto max-w-[980px] px-4 py-8">
        <Masthead />
        <WeatherTicker />

        {/* Page grid with columns like a broadsheet */}
        <main className="mt-6">
          <div className="grid grid-cols-12 gap-6 print:gap-4">
            {/* Left rail: briefs and smalls */}
            <div className="col-span-12 md:col-span-3 border-r border-zinc-800 pr-4">
              <Article
                kicker="City & Boroughs"
                headline="Gas Lamps To Shine Brighter Along Holborn"
                subhead="Clerks applaud; cabmen reserve judgment"
                byline="Our Own Correspondent"
                body={(
                  <>
                    <p className="mb-3">Under direction of the Works Committee, a number of the city lamps are to be fitted with improved mantles, affording a cheerier glow in the evening hours. Residents of Holborn profess themselves much gratified at the trial illumination of last eve.</p>
                    <p className="mb-3">It is expected that fog, when present, will be rendered less oppressive in appearance, though some gentlemen contend that no artifice of man can yet conquer the Thames mists in their thickest humour.</p>
                  </>
                )}
              />
              <div className="my-6 border-y border-zinc-800 py-4">
                <h3 className="uppercase tracking-[0.2em] text-[10px] text-zinc-700 mb-2">Notices & Advertisements</h3>
                <ul className="space-y-3 text-[12px] leading-5">
                  <li>
                    <span className="font-semibold">Pearson & Co. Tailors.</span> Frock coats and respectable attire at modest sums. Fittings taken daily at Chancery Lane.
                  </li>
                  <li>
                    <span className="font-semibold">Patent Tonic Elixir.</span> Recommended by several physicians for the invigorating of the constitution.
                  </li>
                  <li>
                    <span className="font-semibold">Rooms To Let.</span> A neat back parlour, newly papered; apply within, 3 doors from the Baker’s Arms.
                  </li>
                </ul>
              </div>
              <Article
                kicker="From The Docks"
                headline="A Curious Chest Landed at Wapping"
                subhead="Said to contain nautical instruments of a foreign make"
                byline="A River Watcher"
                body={(
                  <>
                    <p className="mb-3">A wooden chest, securely bound with iron, was on Tuesday landed at the Wapping stairs from an inconspicuous schooner. Its markings, according to a lighterman of many years, were of a script uncommon to these parts.</p>
                    <p className="mb-3">The harbour-master, being approached, would offer no more than that all dues were paid and the matter plain. Nevertheless, a crowd of lads kept a civil curiosity.</p>
                  </>
                )}
              />
            </div>

            {/* Center: lead story */}
            <div className="col-span-12 md:col-span-6">
              <LeadStory
                headline="Extraordinary Apparatus Proposed For The Underground"
                subhead="Engineers assert a device to banish damp and deliver sweeter airs"
                imageUrl="https://i.ibb.co/1tRLzrcS/image.png"
                caption="An artist’s impression, engraved from a sketch, of the ventilating machinery as it might appear below the thoroughfare."
                body={(
                  <>
                    <p className="mb-4">At a meeting convened in the Guildhall, a company of engineers of upright reputation laid before the aldermen a scheme for the introduction of an apparatus to convey fresh airs along the tunnels of the Metropolitan Railway. The plan, said to be derived in part from French practice, hinges upon a wheel so contrived that the noisome vapours are drawn out with remarkable dispatch.</p>
                    <p className="mb-4">Merchants spoke warmly in favour, the present atmosphere being unpropitious to trade and to travellers alike. Certain thrifty members demanded assurances that costs shall not be borne by the rate-payers beyond a prudent levy.</p>
                    <p className="mb-4">A model is to be exhibited next fortnight for the satisfaction of the curious. Meanwhile, letters upon the subject, signed with the writer’s name and address, will be thankfully received at this office.</p>
                  </>
                )}
              />

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Article
                  kicker="Parliament"
                  headline="A Bill Concerning Street Musicians Debated"
                  byline="Our Gallery Reporter"
                  body={(
                    <>
                      <p className="mb-3">Members discoursed at length upon the propriety of barrel-organs in the public ways, some alleging disturbance to the infirm and others pleading for indulgence towards honest industry.</p>
                      <p className="mb-3">The matter was adjourned with no division, though Mr. P— delivered a lively anecdote touching a serenade beneath his window.</p>
                    </>
                  )}
                />
                <Article
                  kicker="Letters To The Editor"
                  headline="On The Proper Boiling Of An Egg"
                  body={(
                    <>
                      <p className="mb-3">Sir,—It has come to my notice that numerous households err in the timing of that most civilised repast item, the egg. I submit that five minutes and a half, not more, not less, produces the firm white and the mellow yolk that reason commends.</p>
                      <p className="mb-3">Yours, etc., A Constant Breakfast-Taker.</p>
                    </>
                  )}
                />
              </div>
            </div>

            {/* Right rail: international, society */}
            <div className="col-span-12 md:col-span-3 border-l border-zinc-800 pl-4">
              <Article
                kicker="Abroad"
                headline="A Telegram From The Continent"
                subhead="Reports of a mechanical exhibition of no small interest"
                byline="Special Wire"
                body={(
                  <>
                    <p className="mb-3">From Brussels arrives intelligence of an exhibition wherein sundry contrivances for the easing of domestic labour are on public view. A device described as an ‘automatic kettle’ drew particular wonder.</p>
                    <p className="mb-3">Our agent observes that English manufacturers will do well to attend, for the foreigner advances in ingenuity apace.</p>
                  </>
                )}
              />

              <div className="mt-6">
                <h3 className="uppercase tracking-[0.2em] text-[10px] text-zinc-700 mb-2">Births, Marriages & Deaths</h3>
                <ul className="text-[12px] leading-5 space-y-2">
                  <li><span className="font-semibold">BIRTH.</span> At Islington, to Mr. and Mrs. Hargrave, a son.</li>
                  <li><span className="font-semibold">MARRIAGE.</span> Mr. Chiltern to Miss A—, both of good report.</li>
                  <li><span className="font-semibold">DEATH.</span> Respectfully noted, Mr. J—, a watchmaker, much esteemed.</li>
                </ul>
              </div>

              {/* Additional right-rail content to balance the column */}
              <div className="mt-6 border-t border-zinc-800 pt-4">
                <Article
                  kicker="Shipping Intelligence"
                  headline="Arrivals & Departures Along The Thames"
                  byline="From Our River Reporter"
                  body={(
                    <>
                      <p className="mb-3">The <em>Mercury</em> (Hull) came in with grain and sundries; the <em>Perseverance</em> cleared for Lisbon with a mixed cargo. Several barges reported rough going under a contrary wind below Gravesend.</p>
                      <p className="mb-3">Pilotage fees are said to be under review; lightermen anticipate modest relief in the spring schedule.</p>
                    </>
                  )}
                />
              </div>

              <div className="mt-6">
                <Article
                  kicker="Court & Police"
                  headline="A Disturbance In Seven Dials"
                  body={(
                    <>
                      <p className="mb-3">A hawker was brought before the magistrate on the charge of causing a tumult by over-loud entreaties respecting stockings of remarkable durability. He was admonished and discharged upon a promise of quieter commerce.</p>
                      <p className="mb-3">In a separate case, a stray goat was returned to its owner, having eaten a portion of a tradesman’s account-book to the value, it is said, of several shillings.</p>
                    </>
                  )}
                />
              </div>

              <div className="mt-6 border-y border-zinc-800 py-4">
                <h3 className="uppercase tracking-[0.2em] text-[10px] text-zinc-700 mb-2">Market Reports</h3>
                <ul className="text-[12px] leading-5 space-y-2">
                  <li><span className="font-semibold">Corn Exchange.</span> Wheat steady; barley easy; oats in fair demand.</li>
                  <li><span className="font-semibold">Smithfield.</span> Beef moderate; mutton plentiful; prices generally firm.</li>
                  <li><span className="font-semibold">Metals.</span> Iron active with improved orders; copper unchanged.</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <button onClick={() => window.print()} className="inline-block border border-zinc-800 px-3 py-1 text-[12px] tracking-wide hover:bg-zinc-900 hover:text-[#f7f2e7] transition">
                  Print This Edition
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer rule and credits */}
        <footer className="mt-10 pt-6 border-t border-zinc-800 text-[11px] text-zinc-700 text-center">
          Published daily from our offices near Fleet Street. All correspondence to be addressed to The Editor.
        </footer>
      </div>

      {/* Vintage paper texture and fonts */}
      <style>{`
        @font-face {
          font-family: 'OldNews';
          src: local('Times New Roman');
          font-weight: 400;
        }
        .font-serif { font-family: OldNews, Georgia, 'Times New Roman', Times, serif; }
        body { background: #f7f2e7; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .border-zinc-800 { border-color: #0a0a0a !important; }
        }
      `}</style>
    </div>
  )
}

export default App
