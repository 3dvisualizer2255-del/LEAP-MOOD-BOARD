import './globals.css';

export const metadata = {
  title: 'LEAP 2027 — Mood Board Proposal by FAIRPLATZ',
  description: 'A FAIRPLATZ spatial design proposal for LEAP 2027. Explore 22 architectural references, marked floor plans, materials and UAE / Saudi sourcing.',
  icons: { icon: '/assets/leap-logo.png' },
};

export const viewport = { themeColor: '#27074A' };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
