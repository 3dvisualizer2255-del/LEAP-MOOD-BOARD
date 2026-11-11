import { useMemo, useState } from 'react';

const categories = [
  ['ALL', 'All areas'], ['STAGES', 'Stages'], ['LOUNGES', 'Lounges'],
  ['ACTIVATIONS', 'Activations'], ['FOOD + BEVERAGE', 'Food & beverage'], ['OTHER', 'Work & more'],
];
const other = ['WORK + MEDIA', 'HOSPITALITY', 'RETAIL'];
const matches = (area, category) => category === 'ALL' || (category === 'OTHER' ? other.includes(area.category) : area.category === category);
export const asset = path => path.startsWith('/') ? path : '/' + path;
export const areaURL = area => '#area/' + area.id;

export default function AreaGallery({ areas }) {
  const [category, setCategory] = useState('ALL');
  const [query, setQuery] = useState('');
  const results = useMemo(() => areas.filter(area => matches(area, category) &&
    `${area.title} ${area.category} ${area.sites.flat().join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())
  ), [areas, category, query]);

  return <section className="areas-section" id="areas">
    <div className="section-heading"><div><p className="eyebrow">THE SPATIAL COLLECTION</p><h2>Find your <em>space.</em></h2></div><p>Choose an area. See the reference.<br />Step inside its material mood board.</p></div>
    <div className="collection-controls">
      <div className="filters" role="group" aria-label="Filter areas">{categories.map(([id, label]) => <button key={id} className={'filter ' + (id === category ? 'active' : '')} aria-pressed={id === category} onClick={() => setCategory(id)}>{label}<span>{areas.filter(area => matches(area, id)).length}</span></button>)}</div>
      <label className="search-box"><span aria-hidden="true">⌕</span><input type="search" placeholder="Find an area or stand…" aria-label="Find an area or stand" value={query} onChange={event => setQuery(event.target.value)} /></label>
    </div>
    <div className="collection-meta"><span id="result-count" aria-live="polite">{results.length} BRIEFED {results.length === 1 ? 'AREA' : 'AREAS'}</span><span>REFERENCE → MOOD → LOCATION + MATERIALS</span></div>
    <div className="area-grid" id="area-grid">{results.map(area => <a className="area-card" href={areaURL(area)} key={area.id} aria-label={'View ' + area.title + ' reference'}>
      <div className="card-image"><img src={asset(area.images[0])} alt={area.title + ' architectural concept'} loading="lazy" /><span className="card-tag">{area.category}</span><span className="image-origin">AI CONCEPT REFERENCE</span><span className="card-index">{area.number} / 22</span></div>
      <div className="card-content"><div><h3>{area.title}</h3><p>{area.sites[0][1]} · {area.sites[0][2]}{area.sites.length > 1 ? ' · Multiple locations' : ''}</p></div><span className="card-arrow" aria-hidden="true">↗</span></div>
    </a>)}</div>
    {!results.length && <div id="empty-state"><h3>No matching spaces</h3><p>Try another name, stand code or category.</p><button className="text-button" onClick={() => { setCategory('ALL'); setQuery(''); }}>Show all areas ↗</button></div>}
  </section>;
}
