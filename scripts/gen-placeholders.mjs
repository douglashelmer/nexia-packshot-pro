// Generates SVG placeholders for galeria/ (12, 4:5) + alunos/ (12, 1:1) + og.svg (1200x630).
// Run: node scripts/gen-placeholders.mjs

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const galleryLabels = [
  ["Perfume", "luxo mármore"],
  ["Tênis", "neon gradient"],
  ["Cosmético", "splash"],
  ["Suplemento", "dramático"],
  ["Eletrônico", "tech"],
  ["Roupa", "modelo IA"],
  ["Bebida", "praia"],
  ["Acessório", "flatlay"],
  ["Food", "macro"],
  ["Móvel", "ambiente"],
  ["Pet", "lúdico"],
  ["Skincare", "pastel"],
];

const studentLabels = [
  "Beleza",
  "Moda",
  "Pet",
  "Food",
  "Tech",
  "Casa",
  "Beleza",
  "Moda",
  "Pet",
  "Food",
  "Tech",
  "Casa",
];

// Tech HUD palette — todas variações de azul/ciano/teal pra combinar com o design system
const palettes = [
  ["#1e9cff", "#003c7a"],
  ["#4dd0ff", "#0277cc"],
  ["#0277cc", "#001f3f"],
  ["#1e9cff", "#003366"],
  ["#4dd0ff", "#1e3a5f"],
  ["#3b82f6", "#1e293b"],
  ["#06b6d4", "#0c4a6e"],
  ["#0ea5e9", "#082f49"],
  ["#22d3ee", "#0e7490"],
  ["#38bdf8", "#0c4a6e"],
  ["#1e9cff", "#0a1428"],
  ["#67e8f9", "#155e75"],
];

function placeholderSVG({ w, h, title, subtitle, palette, idx }) {
  const [c1, c2] = palette;
  const id = `g${idx}-${Math.random().toString(36).slice(2, 7)}`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="${id}-spot" cx="50%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <pattern id="${id}-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#${id})"/>
  <rect width="100%" height="100%" fill="url(#${id}-grid)"/>
  <rect width="100%" height="100%" fill="url(#${id}-spot)"/>
  <!-- product silhouette -->
  <ellipse cx="${w * 0.5}" cy="${h * 0.58}" rx="${w * 0.24}" ry="${h * 0.16}" fill="#000" opacity="0.22"/>
  <rect x="${w * 0.34}" y="${h * 0.27}" width="${w * 0.32}" height="${h * 0.36}" rx="${w * 0.04}" fill="#ffffff" opacity="0.94"/>
  <rect x="${w * 0.34}" y="${h * 0.27}" width="${w * 0.32}" height="${h * 0.36}" rx="${w * 0.04}" fill="none" stroke="${c1}" stroke-opacity="0.55" stroke-width="2"/>
  <text x="50%" y="${h * 0.47}" text-anchor="middle" font-family="'Orbitron', system-ui, sans-serif" font-weight="900" font-size="${Math.floor(w * 0.1)}" fill="${c2}" letter-spacing="-1">
    ${idx.toString().padStart(2, "0")}
  </text>
  <text x="50%" y="${h * 0.86}" text-anchor="middle" font-family="'Orbitron', system-ui, sans-serif" font-weight="700" font-size="${Math.floor(w * 0.035)}" fill="#ffffff" letter-spacing="2">
    ${title.toUpperCase()}
  </text>
  ${
    subtitle
      ? `<text x="50%" y="${h * 0.91}" text-anchor="middle" font-family="system-ui, sans-serif" font-weight="500" font-size="${Math.floor(w * 0.028)}" fill="#ffffff" opacity="0.85">${subtitle}</text>`
      : ""
  }
  <text x="50%" y="${h * 0.96}" text-anchor="middle" font-family="'JetBrains Mono', ui-monospace, monospace" font-size="${Math.floor(w * 0.018)}" fill="#ffffff" opacity="0.6" letter-spacing="2">PLACEHOLDER · NANO BANANA</text>
  <!-- HUD corners -->
  <path d="M 10 10 L 30 10 M 10 10 L 10 30" stroke="#ffffff" stroke-width="2" opacity="0.7"/>
  <path d="M ${w - 30} 10 L ${w - 10} 10 L ${w - 10} 30" stroke="#ffffff" stroke-width="2" opacity="0.7"/>
  <path d="M 10 ${h - 30} L 10 ${h - 10} L 30 ${h - 10}" stroke="#ffffff" stroke-width="2" opacity="0.7"/>
  <path d="M ${w - 10} ${h - 30} L ${w - 10} ${h - 10} L ${w - 30} ${h - 10}" stroke="#ffffff" stroke-width="2" opacity="0.7"/>
</svg>`;
}

mkdirSync(join(root, "public", "galeria"), { recursive: true });
mkdirSync(join(root, "public", "alunos"), { recursive: true });

// Galeria (4:5 - 1080x1350)
galleryLabels.forEach(([title, subtitle], i) => {
  const svg = placeholderSVG({
    w: 1080,
    h: 1350,
    title,
    subtitle,
    palette: palettes[i % palettes.length],
    idx: i + 1,
  });
  writeFileSync(join(root, "public", "galeria", `${i + 1}.svg`), svg);
});

// Alunos (1:1 - 1080x1080)
studentLabels.forEach((niche, i) => {
  const svg = placeholderSVG({
    w: 1080,
    h: 1080,
    title: `Produto ${i + 1}`,
    subtitle: `@aluno${i + 1} · ${niche}`,
    palette: palettes[(i + 3) % palettes.length],
    idx: i + 1,
  });
  writeFileSync(join(root, "public", "alunos", `${i + 1}.svg`), svg);
});

// OG (1200x630)
const og = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="og-bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050b1a"/>
      <stop offset="100%" stop-color="#0a1428"/>
    </linearGradient>
    <linearGradient id="og-ia" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#4dd0ff"/>
      <stop offset="100%" stop-color="#1e9cff"/>
    </linearGradient>
    <linearGradient id="og-chrome" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#b9c8db"/>
      <stop offset="100%" stop-color="#6b7c95"/>
    </linearGradient>
    <radialGradient id="og-glow" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#1e9cff" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#050b1a" stop-opacity="0"/>
    </radialGradient>
    <pattern id="og-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e9cff" stroke-opacity="0.12" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#og-bg)"/>
  <rect width="1200" height="630" fill="url(#og-grid)"/>
  <rect width="1200" height="630" fill="url(#og-glow)"/>
  <text x="80" y="160" font-family="'JetBrains Mono', monospace" font-weight="500" font-size="22" fill="#4dd0ff" letter-spacing="6">· CRIE COM IA ·</text>
  <text x="80" y="290" font-family="'Orbitron', sans-serif" font-weight="900" font-size="120" letter-spacing="-2">
    <tspan fill="url(#og-chrome)">nex</tspan><tspan fill="url(#og-ia)">IA</tspan>
  </text>
  <text x="80" y="400" font-family="'Sail', cursive" font-weight="400" font-size="86" fill="#f1f7ff">Packshot</text>
  <text x="80" y="470" font-family="system-ui, sans-serif" font-weight="400" font-size="26" fill="#93a8c7">Imagens e vídeos de produto com IA</text>
  <text x="80" y="505" font-family="system-ui, sans-serif" font-weight="400" font-size="26" fill="#93a8c7">para Instagram, marketplace e TikTok.</text>
  <text x="80" y="585" font-family="'JetBrains Mono', monospace" font-size="20" fill="#5a708f" letter-spacing="3">NEXIAPACKSHOT.COM · TURMA 01 · 12x R$ 10,03</text>
  <!-- HUD corners -->
  <path d="M 30 30 L 70 30 M 30 30 L 30 70" stroke="#4dd0ff" stroke-width="2"/>
  <path d="M 1170 30 L 1130 30 M 1170 30 L 1170 70" stroke="#4dd0ff" stroke-width="2"/>
  <path d="M 30 600 L 30 560 M 30 600 L 70 600" stroke="#4dd0ff" stroke-width="2"/>
  <path d="M 1170 600 L 1170 560 M 1170 600 L 1130 600" stroke="#4dd0ff" stroke-width="2"/>
</svg>`;
writeFileSync(join(root, "public", "og.svg"), og);

console.log("✓ 24 SVG placeholders generated (12 galeria + 12 alunos) + og.svg");
