# nexIA Packshot Pro — landing

Landing page do curso nexIA Packshot Pro. Next.js 15 + Tailwind 3.4 + Framer Motion 12, configurada pra **static export → Cloudflare Pages**.

## Rodar local

```bash
npm install
npm run dev
```

Abre em http://localhost:3000

## Build estático

```bash
npm run build
```

Gera tudo em `out/` — essa é a pasta que vai pro Cloudflare Pages.

## Deploy no Cloudflare Pages (Git integration)

1. Cria repo no GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   gh repo create nexia-packshot-pro --public --source . --push
   ```
2. Entra no dashboard Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**
3. Seleciona o repo `nexia-packshot-pro`
4. Build settings:
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** `20` (em Environment variables: `NODE_VERSION = 20`)
5. Deploy → cada push pra `main` faz redeploy automático

### Domínio custom

Depois do primeiro deploy, no painel do projeto Pages → **Custom domains → Set up a custom domain** → digita `nexiapackshot.com` (ou o que escolher). A Cloudflare configura DNS automaticamente se o domínio já estiver na conta.

### Deploy manual (sem GitHub) — opcional

```bash
npm run deploy
```

Roda `next build && wrangler pages deploy out --project-name=nexia-packshot-pro`. Primeira vez vai pedir login.

## O que falta preencher (placeholders)

### 1. Imagens — 24 WebP + 1 PNG

Veja [nano-banana-prompts.md](nano-banana-prompts.md) — tem os prompts prontos pra gerar em Nano Banana, Flux ou Midjourney.

- `public/galeria/1.webp` a `public/galeria/12.webp` (4:5, 1080×1350) — galeria principal
- `public/alunos/1.webp` a `public/alunos/12.webp` (1:1, 1080×1080) — feitas por alunos
- `public/og.png` (1200×630) — preview de share (WhatsApp, Twitter)

Sem essas imagens, a landing roda mas mostra placeholders quebrados na galeria.

### 2. Conteúdo de depoimentos

Em [app/page.tsx](app/page.tsx) (~linha 117), substitua o array `testimonials` pelos depoimentos reais:

```ts
const testimonials = [
  {
    name: "Nome real",
    role: "Loja / nicho",
    handle: "@instagram",
    quote: "Depoimento real (3-5 linhas)...",
  },
  // ... 5 mais
];
```

### 3. Conteúdo da galeria de alunos

Em [app/page.tsx](app/page.tsx) (~linha 85), substitua o `students` por dados reais (nome do produto, @ do aluno, nicho).

### 4. Domínio + URLs

- `app/layout.tsx`: trocar `SITE_URL` (linha 18)
- `app/sitemap.ts`: trocar URL
- `app/robots.ts`: trocar URL no sitemap
- `public/llms.txt`: atualizar URLs no final
- E-mail no footer de `app/page.tsx` (~linha 460)

### 5. Checkout

Substitua o `href="#comprar"` nos botões CTA pelo link real do Hotmart / Kiwify / Stripe quando tiver.

## Stack

- **Next.js 15** (App Router, static export)
- **React 19**
- **Tailwind 3.4** (CSS variables + theme tokens)
- **Framer Motion 12** (scroll-reveal com `useReducedMotion`)
- **Lucide React** (ícones)
- **next/font** (Inter, Space Grotesk, JetBrains Mono — auto-otimizados)

## Acessibilidade

A landing já tá compliant com Vercel Web Interface Guidelines:
- `aria-hidden` em ícones decorativos
- `focus-visible:ring` em todos os botões/links
- `text-balance` em headings
- `prefers-reduced-motion` respeitado
- Single `<h1>`, hierarquia limpa
- Safe-area-inset no sticky mobile CTA
- `<html lang="pt-BR">`

Rode Lighthouse depois de subir — meta é ≥95 em Accessibility.

## SEO + GEO

- Metadata completo (title, description, OG, Twitter)
- JSON-LD: Course, Organization, FAQPage
- `sitemap.xml` automático
- `robots.txt` automático
- `llms.txt` em `public/` (pra AI crawlers)
