import { useEffect, useRef, useState } from 'react';
import Palette from './Palette';
import { asset } from './AreaGallery';

const tabs = [['direction', 'Visual direction'], ['location', 'Location + size'], ['materials', 'Materials + sourcing']];

function VisualDirection({ area, materials, onTab }) {
  return <>
    <div className="board-grid"><div className="visual-composition"><img className="board-main" src={asset(area.images[0])} alt={area.title + ' design atmosphere'} /><div className="texture-stack">{area.materials.slice(0, 3).map(([id]) => {
      const material = materials.find(item => item.id === id);
      return <div className="floating-swatch" key={id}><img src={asset(material.image)} alt={material.name + ' texture'} /><span>M{String(id).padStart(2, '0')}</span></div>;
    })}</div></div><div className="board-statement"><p className="eyebrow">THE FEELING</p><h3>{area.mood.split(' / ').map((word, index) => <span key={word}>{index > 0 && <br />}{index === 1 ? <em>{word[0] + word.slice(1).toLowerCase()}</em> : word[0] + word.slice(1).toLowerCase()}</span>)}</h3><p>{area.brief}</p><div className="light-note"><span>LIGHT AS ARCHITECTURE</span><p>{area.lighting}</p></div></div></div>
    <div className="board-bottom"><div className="brand-palette"><Palette /></div><button className="secondary-button" onClick={() => onTab('materials')}>Explore {area.materials.length} materials ↗</button></div>
    {area.images.length > 1 && <div className="more-reference">{area.images.slice(1).map((path, index) => <div key={path}><img src={asset(path)} alt={area.title + ' additional concept ' + (index + 2)} /><p>ADDITIONAL REFERENCE / {index + 2}</p></div>)}</div>}
    <p className="board-footnote">These spatial renderings and material textures are AI-generated design references created from the client’s briefs. The client supplied the area requirements, locations, sizes and brand direction. Develop the design against the confirmed footprint and selected finish samples.</p>
  </>;
}

function Locations({ area, onTab }) {
  return <div className="locations-layout"><div>{area.maps.map((map, index) => {
    const [x, y, x2, y2] = map.box;
    return <div className="map-card" key={index}><div className="map-image"><img src={asset(map.image)} alt={'Floor-plan excerpt: ' + map.caption} />{map.pins.map(([label, px, py]) => <span className="map-pin" key={label} style={{ left: `${(px - x) / (x2 - x) * 100}%`, top: `${(py - y) / (y2 - y) * 100}%` }} title={'Location ' + label}>{label}</span>)}</div><div className="map-caption">{map.caption} · NOT TO SCALE</div></div>;
  })}<a className="plan-preview-link" href="/assets/masterplan.jpg" target="_blank" rel="noopener noreferrer">Open complete master plan ↗</a></div><div className="location-details"><p className="eyebrow">WHERE IT BELONGS</p><h3>Location & footprint</h3><p>Match each numbered pin to the stand code and area below.</p><table className="schedule"><thead><tr><th>PIN</th><th>LOCATION / STAND</th><th>AREA</th></tr></thead><tbody>{area.sites.map(([label, code, size]) => <tr key={label}><td>{label}</td><td>{code}</td><td>{size}</td></tr>)}</tbody></table>{area.note && <div className="location-note"><strong>COORDINATION NOTE</strong>{area.note}</div>}<p className="source-label">{area.source}<br />Master plan: LEAP × DFS · 09 November 2026</p><p className="board-footnote">Pins identify the relevant plan area. The marked excerpts are location guides; use the client drawing for setting out.</p><button className="text-button" onClick={() => onTab('materials')}>See the material palette ↗</button></div></div>;
}

function Materials({ area, materials, sources }) {
  return <>
    <div className="materials-intro"><div><p className="eyebrow">TOUCH / FINISH / LIGHT</p><h3>The material palette</h3></div><p>Proposed finishes with UAE and Saudi supply routes. Open a material’s details for its specification and supplier links.</p></div>
    <div className="material-grid">{area.materials.map(([id, use]) => {
      const material = materials.find(item => item.id === id);
      return <article className="material-card" key={id}><img src={asset(material.image)} alt={material.name + ' texture reference'} /><div><span className="mat-id">M{String(id).padStart(2, '0')}</span><h4>{material.name}</h4><p className="material-use">{use}</p><details><summary>Specification + sources</summary><p>{material.spec}</p><div className="regional-route"><small>UNITED ARAB EMIRATES</small><p>{material.uae}</p></div><div className="regional-route"><small>SAUDI ARABIA</small><p>{material.ksa}</p></div><div className="supplier-links">{material.refs.map(sourceId => {
        const source = sources.find(item => item[0] === sourceId);
        return source && <a href={source[3]} key={sourceId} target="_blank" rel="noopener noreferrer" title={source[1] + ': ' + source[2]}>{sourceId} ↗</a>;
      })}</div></details></div></article>;
    })}</div>
    <p className="suppliers-note">Regional supply routes were researched for the design book on 11 November 2026. Exact stock, finish, lead time, fire performance and application suitability require supplier confirmation. AI-generated material textures illustrate the intended look. Obtain physical product samples from the selected suppliers.</p>
  </>;
}

export default function MoodDialog({ area, open, initialTab, materials, sources, onClose }) {
  const dialog = useRef(null);
  const [tab, setTab] = useState('direction');
  useEffect(() => {
    if (!dialog.current) return;
    if (open && area) { setTab(initialTab); if (!dialog.current.open) dialog.current.showModal(); dialog.current.scrollTop = 0; }
    else if (dialog.current.open) dialog.current.close();
  }, [open, area, initialTab]);
  const changeTab = id => {
    setTab(id); dialog.current.scrollTop = 0;
    requestAnimationFrame(() => dialog.current?.querySelector('#tab-' + id)?.focus({ preventScroll: true }));
  };
  return <dialog ref={dialog} id="mood-dialog" className="mood-dialog" aria-labelledby="mood-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => {
    if (event.target !== dialog.current) return;
    const rect = dialog.current.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
  }}>{area && <>
    <div className="mood-header"><div className="mood-header-top"><div><p className="eyebrow">SPACE {area.number} / FLOATING MOOD BOARD</p><h2 id="mood-title">{area.title}</h2></div><button className="icon-button mood-close" aria-label="Close mood board" onClick={onClose}>×</button></div><div className="mood-tabs" role="tablist" aria-label="Area details">{tabs.map(([id, label], index) => <button className={'mood-tab ' + (tab === id ? 'active' : '')} id={'tab-' + id} key={id} role="tab" aria-selected={tab === id} aria-controls="mood-panel" tabIndex={tab === id ? 0 : -1} onClick={() => changeTab(id)} onKeyDown={event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? 2 : (index + (event.key === 'ArrowRight' ? 1 : 2)) % 3;
      changeTab(tabs[next][0]);
    }}>{label}</button>)}</div></div>
    <div id="mood-panel" className="mood-body" role="tabpanel" aria-labelledby={'tab-' + tab}>{tab === 'location' ? <Locations area={area} onTab={changeTab} /> : tab === 'materials' ? <Materials area={area} materials={materials} sources={sources} /> : <VisualDirection area={area} materials={materials} onTab={changeTab} />}</div>
  </>}</dialog>;
}
