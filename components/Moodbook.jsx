'use client';

import { useEffect, useRef, useState } from 'react';
import data from '../data/moodbook.json';
import { Header, Cover, CompanyProfile, EventDetails, ReferenceDisclosure, Concept, Direction, Closing, Footer } from './ProposalSections';
import AreaGallery, { areaURL } from './AreaGallery';
import AreaReference from './AreaReference';
import MoodDialog from './MoodDialog';
import DownloadDialog from './DownloadDialog';

const homeTitle = 'LEAP 2027 — Proposal by FAIRPLATZ';
const defaultRoute = { areaId: null, mood: false, anchor: '' };

function readRoute() {
  const match = window.location.hash.match(/^#area\/([^/]+)(\/mood)?$/);
  if (match && data.areas.some(area => area.id === match[1])) return { areaId: match[1], mood: Boolean(match[2]), anchor: '' };
  return { areaId: null, mood: false, anchor: window.location.hash.slice(1) };
}

export default function Moodbook() {
  const [route, setRoute] = useState(defaultRoute);
  const [initialTab, setInitialTab] = useState('direction');
  const [downloads, setDownloads] = useState(false);
  const previousArea = useRef(null);
  const area = data.areas.find(item => item.id === route.areaId) || null;
  const next = area ? data.areas[(data.areas.indexOf(area) + 1) % data.areas.length] : null;

  useEffect(() => {
    const update = () => setRoute(readRoute());
    update(); window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  useEffect(() => {
    document.title = area ? area.title + ' — LEAP 2027 Moodbook' : homeTitle;
    if (area && previousArea.current !== area.id) { window.scrollTo({ top: 0, behavior: 'instant' }); setInitialTab('direction'); }
    else if (!area && ['areas', 'direction', 'concept', 'fairplatz'].includes(route.anchor)) requestAnimationFrame(() => document.getElementById(route.anchor)?.scrollIntoView({ behavior: previousArea.current ? 'instant' : 'smooth' }));
    else if (!area && previousArea.current) window.scrollTo({ top: 0, behavior: 'instant' });
    previousArea.current = area?.id || null;
  }, [area, route.anchor]);

  const openMood = (tab, navigate = false) => {
    setInitialTab(tab);
    if (navigate && area) window.location.hash = areaURL(area) + '/mood';
  };
  const closeMood = () => { if (area) window.location.hash = areaURL(area); };

  return <>
    <a className="skip" href="#areas">Skip to areas</a>
    <Header />
    <main id="home" hidden={Boolean(area)}>
      <Cover /><CompanyProfile /><EventDetails /><ReferenceDisclosure /><Concept />
      <AreaGallery areas={data.areas} />
      <Direction /><Closing onDownload={() => setDownloads(true)} />
    </main>
    <main id="area-page" hidden={!area}>{area && <AreaReference area={area} next={next} onMood={openMood} />}</main>
    <Footer />
    <MoodDialog area={area} open={route.mood} initialTab={initialTab} materials={data.materials} sources={data.sources} onClose={closeMood} />
    <DownloadDialog open={downloads} onClose={() => setDownloads(false)} />
  </>;
}
