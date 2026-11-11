import { asset } from './AreaGallery';

export default function AreaLocations({ area }) {
  return <div className="locations-layout"><div>{area.maps.map((map, index) => {
    const [x, y, x2, y2] = map.box;
    return <div className="map-card" key={index}><div className="map-image"><img src={asset(map.image)} alt={'Floor-plan excerpt: ' + map.caption} />{map.pins.map(([label, px, py]) => <span className="map-pin" key={label} style={{ left: `${(px - x) / (x2 - x) * 100}%`, top: `${(py - y) / (y2 - y) * 100}%` }} title={'Location ' + label}>{label}</span>)}</div><div className="map-caption">{map.caption} · NOT TO SCALE</div></div>;
  })}<a className="plan-preview-link" href="/assets/masterplan.jpg" target="_blank" rel="noopener noreferrer">Open complete master plan ↗</a></div><div className="location-details"><p className="eyebrow">WHERE IT BELONGS</p><h3>Location & footprint</h3><p>Match each numbered pin to the stand code and area below.</p><table className="schedule"><thead><tr><th>PIN</th><th>LOCATION / STAND</th><th>AREA</th></tr></thead><tbody>{area.sites.map(([label, code, size]) => <tr key={label}><td>{label}</td><td>{code}</td><td>{size}</td></tr>)}</tbody></table>{area.note && <div className="location-note"><strong>COORDINATION NOTE</strong>{area.note}</div>}<p className="source-label">{area.source}<br />Master plan: LEAP × DFS · 09 November 2026</p><p className="board-footnote">Pins identify the relevant plan area. The marked excerpts are location guides; use the client drawing for setting out.</p></div></div>;
}
