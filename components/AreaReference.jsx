import { areaURL, asset } from './AreaGallery';
import Palette from './Palette';
import AreaLocations from './AreaLocations';

export default function AreaReference({ area, next, materials, sources }) {
  return <div className="area-page-wrap">
    <div className="area-top-line"><a className="back-link" href="#areas">← Back to the collection</a><span className="area-ordinal">SPACE {area.number} / 22</span></div>
    <div className="area-title-row"><div><p className="eyebrow">{area.category} / ARCHITECTURAL REFERENCE</p><h1>{area.title}</h1></div></div>
    <figure className="reference-scene reference-still"><img src={asset(area.images[0])} alt={area.title + ' concept reference'} /><span className="scene-caption">AI-GENERATED / BOOTH + SPACE DESIGN REFERENCE</span></figure>
    {area.images.length > 1 && <div className="area-additional-references">{area.images.slice(1).map((path, index) => <img key={path} src={asset(path)} alt={area.title + ' additional reference ' + (index + 2)} />)}</div>}
    <section className="inline-mood" id="inline-mood" aria-labelledby="inline-mood-title">
      <div className="inline-mood-heading"><h2 id="inline-mood-title">Mood & materials</h2><div className="mood-words">{area.mood.split(' / ').map(word => <span key={word}>{word}</span>)}</div><div className="brand-palette"><Palette /></div></div>
      <div className="material-grid inline-material-grid">{area.materials.map(([id, use]) => {
        const material = materials.find(item => item.id === id);
        return <article className="material-card" key={id}><img src={asset(material.image)} alt={material.name + ' texture reference'} /><div><span className="mat-id">M{String(id).padStart(2, '0')}</span><h4>{material.name}</h4><p className="material-use">{use}</p><details><summary>Material details + suppliers</summary><p>{material.spec}</p><div className="regional-route"><small>UNITED ARAB EMIRATES</small><p>{material.uae}</p></div><div className="regional-route"><small>SAUDI ARABIA</small><p>{material.ksa}</p></div><div className="supplier-links">{material.refs.map(sourceId => {
          const source = sources.find(item => item[0] === sourceId);
          return source && <a href={source[3]} key={sourceId} target="_blank" rel="noopener noreferrer" title={source[1] + ': ' + source[2]}>{source[1]} ↗</a>;
        })}</div></details></div></article>;
      })}</div>
      <div className="inline-area-context"><div><span>DESIGN BRIEF</span><p>{area.brief}</p></div><div><span>LIGHTING</span><p>{area.lighting}</p></div></div>
      <p className="inline-reference-note">Proposed materials · AI-generated texture references · Confirm physical finish samples, stock and specification with the selected supplier.</p>
    </section>
    <details className="area-location-details"><summary><span>Location & sizes</span><small>{area.sites[0][1]} · {area.sites[0][2]}{area.sites.length > 1 ? ' · Multiple locations' : ''}</small><b aria-hidden="true">+</b></summary><div className="area-location-body"><AreaLocations area={area} /></div></details>
    <div className="next-reference"><a href="#areas"><span>← All 22 areas</span></a><a href={areaURL(next)}><span><small>NEXT SPACE / {next.number}</small>{next.title}</span><span className="circle-arrow">↗</span></a></div>
  </div>;
}
