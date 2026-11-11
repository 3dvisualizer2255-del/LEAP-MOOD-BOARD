export const palette = [
  ['Dark purple', '#27074A'],
  ['Neon blue', '#73FAFD'],
  ['Neon pink', '#EB3DF7'],
  ['Purple', '#8A30C7'],
  ['Black', '#000000'],
  ['White', '#FFFFFF'],
];

export default function Palette() {
  return <>{palette.map(([name, colour]) => (
    <div className="colour-chip" key={colour}>
      <i style={{ background: colour }} title={name} />
      <span>{colour}</span>
    </div>
  ))}</>;
}
