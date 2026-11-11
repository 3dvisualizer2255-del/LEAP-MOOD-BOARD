import { useEffect, useRef } from 'react';

export default function DownloadDialog({ open, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    if (open && !dialog.current.open) dialog.current.showModal();
    if (!open && dialog.current.open) dialog.current.close();
  }, [open]);
  return <dialog ref={dialog} id="download-dialog" className="download-dialog" aria-labelledby="download-title" onCancel={event => { event.preventDefault(); onClose(); }} onClick={event => {
    if (event.target !== dialog.current) return;
    const rect = dialog.current.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
  }}><button className="icon-button dialog-close" aria-label="Close downloads" onClick={onClose}>×</button><p className="eyebrow">THE COMPLETE COLLECTION</p><h2 id="download-title">Make it<br /><em>your own.</em></h2><p>All 22 briefed areas, plan references and proposed UAE / Saudi materials.</p>
    <a className="download-row" href="/assets/LEAP-2027-Moodbook.pdf" download><span><strong>Full mood book</strong><small>PDF · 27 pages · 18.9 MB</small></span><span>↓</span></a>
    <a className="download-row" href="/assets/LEAP-2027-Editable-Moodbook.pptx" download><span><strong>Editable design book</strong><small>PowerPoint · 27 slides · 17.3 MB</small></span><span>↓</span></a>
    <p className="fine-print">The PowerPoint keeps text, images and layouts separately editable. Concept renders remain image references.</p>
  </dialog>;
}
