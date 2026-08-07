/**
 * The page background: a ridgeline of metric series with a few outliers
 * marked on the top one.
 *
 * Chosen over the usual gradient blobs because it is the page's own
 * subject — the case study is about finding statistically significant
 * deviations in revenue data and explaining them. A decorative mesh
 * gradient would say nothing; this says what the work is before a word is
 * read, and it is the same visual language as the product's charts.
 *
 * Rendered as a server component: it is static SVG with CSS animation, so
 * there is no reason to ship it to the client or to re-render it.
 */

// Deterministic PRNG (mulberry32) — deliberately not Math.random(). The
// paths are generated at module scope during static export and again in
// the browser; a real random source would produce different `d` attributes
// on each and reintroduce the hydration mismatch this repo has hit before.
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const VIEW_W = 1200;
const VIEW_H = 900;
const POINTS = 46;

type Series = {
  /** Stroke path along the top edge of the band. */
  line: string;
  /** Same path closed to the baseline, for the soft fill underneath. */
  area: string;
  /** Points marked as outliers — only used on the front-most series. */
  spikes: { x: number; y: number }[];
};

/**
 * A random walk rather than independent samples per point: real metric
 * series are autocorrelated, and noise around a mean reads as static
 * rather than as data. `spikeAt` forces a large deviation at given
 * indices so the marked outliers sit on genuine excursions in the path
 * instead of being dots pasted over a smooth curve.
 */
function buildSeries(seed: number, baseline: number, amplitude: number, spikeAt: number[]): Series {
  const random = mulberry32(seed);
  const step = VIEW_W / (POINTS - 1);
  const pts: { x: number; y: number }[] = [];
  let value = 0;

  for (let i = 0; i < POINTS; i++) {
    // Pull back toward zero so the walk cannot drift off the band.
    value = value * 0.72 + (random() - 0.5) * amplitude;
    const spike = spikeAt.includes(i) ? -amplitude * 1.9 : 0;
    pts.push({ x: i * step, y: baseline + value + spike });
  }

  // Catmull-Rom through the points, emitted as cubic béziers. A polyline
  // would read as a low-poly graphic; the smoothing is what makes it look
  // like a plotted series.
  let line = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1x = p1.x + (p2.x - p0.x) / 6;
    const c1y = p1.y + (p2.y - p0.y) / 6;
    const c2x = p2.x - (p3.x - p1.x) / 6;
    const c2y = p2.y - (p3.y - p1.y) / 6;
    line += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  }

  return {
    line,
    area: `${line} L ${VIEW_W} ${VIEW_H} L 0 ${VIEW_H} Z`,
    spikes: spikeAt.map((i) => pts[i]),
  };
}

// Back to front. Depth comes from opacity and amplitude, not from color:
// four differently-tinted bands would fight the page's single accent.
// Kept deliberately faint. The background is fixed while the sections
// scroll over it, and the cards are translucent — at full strength the
// front ridge showed through body text. It should register as texture on
// a first glance and never compete with a paragraph.
const layers = [
  { series: buildSeries(11, 300, 34, []), opacity: 0.07, width: 1 },
  { series: buildSeries(29, 430, 46, []), opacity: 0.1, width: 1.2 },
  { series: buildSeries(47, 580, 58, []), opacity: 0.15, width: 1.5 },
  { series: buildSeries(73, 730, 70, [12, 27, 38]), opacity: 0.26, width: 1.8 },
];

const frontLayer = layers[layers.length - 1];

export const SignalBackground = () => (
  <div className="sig-root" aria-hidden>
    <svg
      className="sig-svg"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Fill under each band. Fades out downward so the stack never
            turns into a solid block behind the text. */}
        <linearGradient id="sig-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.13" />
          <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.03" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>

        <pattern id="sig-grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
        </pattern>

        {/* The whole composition is masked to fade toward the top of the
            viewport, where the hero headline sits. Contrast there has to
            win over decoration — an even wash across the page is what makes
            this kind of background look cheap and hurt readability. */}
        {/* White, not black. An SVG mask keys on luminance: a black stop
            hides its region no matter what stopOpacity says, so a black
            gradient here masks the entire composition away. */}
        <linearGradient id="sig-veil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="38%" stopColor="#fff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fff" stopOpacity="1" />
        </linearGradient>
        <mask id="sig-mask">
          <rect width={VIEW_W} height={VIEW_H} fill="url(#sig-veil)" />
        </mask>
      </defs>

      <g mask="url(#sig-mask)">
        <rect width={VIEW_W} height={VIEW_H} fill="url(#sig-grid)" opacity="0.35" />

        {layers.map((layer, i) => (
          <g key={i}>
            <path d={layer.series.area} fill="url(#sig-fill)" opacity={layer.opacity} />
            <path
              className="sig-line"
              d={layer.series.line}
              fill="none"
              stroke="var(--accent)"
              strokeWidth={layer.width}
              strokeOpacity={layer.opacity + 0.2}
              strokeLinecap="round"
              /* Staggered so the four lines draw in as a sequence rather
                 than as one thick pulse. */
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          </g>
        ))}

        {/* Outlier markers on the front series — the detail that makes the
            motif read as anomaly detection rather than as generic waves. */}
        {frontLayer.series.spikes.map((p, i) => (
          <g key={i} className="sig-spike" style={{ animationDelay: `${1.1 + i * 0.35}s` }}>
            <line
              x1={p.x}
              y1={p.y}
              x2={p.x}
              y2={VIEW_H}
              stroke="var(--accent)"
              strokeWidth="1"
              strokeOpacity="0.28"
              strokeDasharray="4 7"
            />
            <circle className="sig-halo" cx={p.x} cy={p.y} r="9" fill="var(--accent)" opacity="0.28" />
            <circle cx={p.x} cy={p.y} r="3.4" fill="var(--accent)" />
          </g>
        ))}
      </g>
    </svg>

    {/*
      Scoped to this component instead of the shared stylesheet: hr-cv
      imports that file too, and none of these rules concern it.
    */}
    <style>{`
      .sig-root {
        position: fixed;
        inset: 0;
        z-index: -10;
        pointer-events: none;
        overflow: hidden;
        background-color: var(--page-bg);
      }
      .sig-svg {
        position: absolute;
        /* Anchored to the bottom and overscanned: the ridgeline belongs at
           the foot of the first screen, and the extra height keeps the
           lowest band off the viewport edge on short windows. */
        left: -2%;
        bottom: 0;
        width: 104%;
        height: 105vh;
      }
      .sig-line {
        stroke-dasharray: 4000;
        stroke-dashoffset: 4000;
        animation: sig-draw 2.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .sig-spike {
        opacity: 0;
        animation: sig-appear 0.8s ease-out forwards;
      }
      .sig-halo {
        transform-box: fill-box;
        transform-origin: center;
        animation: sig-pulse 3.2s ease-in-out infinite;
      }
      @keyframes sig-draw {
        to { stroke-dashoffset: 0; }
      }
      @keyframes sig-appear {
        to { opacity: 1; }
      }
      @keyframes sig-pulse {
        0%, 100% { transform: scale(1); opacity: 0.28; }
        50% { transform: scale(1.75); opacity: 0.06; }
      }
      /* Motion here is decoration, not information — the finished frame
         carries the same meaning, so it is safe to skip entirely. */
      @media (prefers-reduced-motion: reduce) {
        .sig-line { stroke-dashoffset: 0; animation: none; }
        .sig-spike { opacity: 1; animation: none; }
        .sig-halo { animation: none; }
      }
    `}</style>
  </div>
);
