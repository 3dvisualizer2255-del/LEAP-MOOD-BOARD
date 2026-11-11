import { areaURL, asset } from './AreaGallery';

export default function AreaReference({ area, next, onMood }) {
  return <div className="area-page-wrap">
    <div className="area-top-line"><a className="back-link" href="#areas">← Back to the collection</a><span className="area-ordinal">SPACE {area.number} / 22</span></div>
    <div className="area-title-row"><div><p className="eyebrow">{area.category} / ARCHITECTURAL REFERENCE</p><h1>{area.title}</h1></div><a className="button primary" href={areaURL(area) + '/mood'} onClick={() => onMood('direction')}>Explore the mood <span>↗</span></a></div>
    <button className="reference-scene" onClick={() => onMood('direction', true)} aria-label={'Open ' + area.title + ' floating mood board'}><img src={asset(area.images[0])} alt={area.title + ' concept reference'} /><span className="scene-gradient" /><span className="scene-caption">AI-GENERATED / BOOTH + SPACE DESIGN REFERENCE</span><span className="scene-cta">Step inside the mood board <b>↗</b></span></button>
    <div className="reference-notes">
      <div><h2>THE DESIGN BRIEF</h2><p>{area.brief}</p></div>
      <div><h2>THE ATMOSPHERE</h2><div className="mood-words">{area.mood.split(' / ').map(word => <span key={word}>{word}</span>)}</div></div>
      <div><h2>THE FOOTPRINT</h2><p>{area.sites[0][1]} · {area.sites[0][2]}{area.sites.length > 1 && <><br />Multiple locations · see full schedule</>}</p><button className="text-button" onClick={() => onMood('location', true)}>See marked location + sizes ↗</button></div>
    </div>
    <div className="next-reference"><a href="#areas"><span>← All 22 areas</span></a><a href={areaURL(next)}><span><small>NEXT SPACE / {next.number}</small>{next.title}</span><span className="circle-arrow">↗</span></a></div>
  </div>;
}
