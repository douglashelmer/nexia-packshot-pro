# Prompts de imagem — nexIA Packshot Pro

Gere cada imagem no Nano Banana / Flux / Midjourney e salve no `public/` com o nome exato. Formato preferido: **WebP, qualidade 85, profile sRGB**. Salve em **4:5 (1080×1350)** pra galeria principal e **1:1 (1080×1080)** pra galeria de alunos — esses são os crops que `page.tsx` espera.

> **Vibe geral da landing:** dark + neon roxo/magenta com cyan secundário. As imagens de produto não precisam ter esses tons — o objetivo da galeria é mostrar **packshot vendedor real**, com variedade de nichos e estéticas. O neon vem do site, não da foto.

> **Regra de ouro:** essas imagens são a prova social visual. Se parecerem "AI slop" (plástico, fake, com mão de 6 dedos), o argumento da landing inteira cai. Investe tempo: gera 4-6 variações, escolhe a melhor.

---

## OG Image (1200×630) — `public/og.png`

Imagem de share pra WhatsApp/Twitter/LinkedIn. Pode ser feita no Figma ou pelo Nano Banana.

```
Editorial composition: a single luxury product (perfume bottle or sneaker) on a dark background, dramatic neon purple-to-cyan gradient lighting from the side, slight reflection on dark glossy surface. Text-free, generous negative space on the right side (the landing will overlay the title there).

Mood: premium, futuristic, "this is what AI can do with your product".
Style: editorial product photography meets cyberpunk aesthetic. Reference: Wallpaper magazine x Blade Runner 2049.
Lighting: rim light magenta from camera-left, cyan accent from behind, soft fill from below.
Camera: 85mm, f/2.8, eye level, product centered slightly to the left of frame.

Negative: no text, no logos, no people, no readable brand marks, no plastic-looking surfaces, no overexposed highlights.
Aspect: 1200×630.
```

---

## Galeria principal (4:5 · 1080×1350) — `public/galeria/1-12.webp`

12 packshots — mostra **variedade de nichos** e **variedade de estéticas** pra cobrir os públicos do curso. Cada um com um ângulo, fundo e clima diferentes.

### `/galeria/1.webp` — Perfume, luxo mármore

```
Luxury fragrance bottle, clear glass with amber liquid, gold-tone cap, centered on a polished white Carrara marble surface. Soft natural window light from the upper-left creating elegant gradient shadows on the marble. Faint reflection of the bottle on the marble surface. Background: out-of-focus warm beige curtain.

Style: editorial product photography for high-end fragrance brand. Reference: Tom Ford, Dior campaign aesthetic.
Camera: 100mm macro, f/4, slight downward angle, eye-level with bottle neck.

Negative: no brand text on bottle, no logos, no human hands, no plastic-looking surfaces, no oversaturated colors.
Aspect: 4:5.
```

### `/galeria/2.webp` — Tênis, fundo gradiente neon

```
A single high-end athletic sneaker (white midsole, knit upper, no recognizable brand), levitating slightly above ground, photographed against a smooth gradient background going from deep magenta at the top to electric cyan at the bottom. Subtle ground shadow under the shoe. Sharp clean light from the front-top.

Style: e-commerce hero shot meets street culture campaign. Reference: Nike SNKRS app, Hypebeast editorial.
Camera: 50mm, f/5.6, three-quarter view (showing side + front profile).

Negative: no logos, no brand swooshes, no laces tied in messy way, no scuff marks, no human.
Aspect: 4:5.
```

### `/galeria/3.webp` — Cosmético, splash de água

```
A premium skincare serum bottle (frosted glass, dropper top), photographed at the exact moment a splash of water wraps around the bottle in a dynamic arc. Crystal-clear water droplets suspended in air. Dark navy background with subtle gradient.

Style: high-end cosmetics campaign, freeze-motion product photography. Reference: La Mer, SK-II campaign.
Camera: 90mm macro, f/8, frontal angle, water splash mid-air.

Negative: no logos, no readable text, no human hands, no excess CGI-look, no rainbow refractions that look fake.
Aspect: 4:5.
```

### `/galeria/4.webp` — Suplemento, fundo escuro dramático

```
A matte black supplement jar (no labels), photographed on a dark slate stone surface, single hard light source from the side creating a strong rim light on the jar's edge. The rest is bathed in deep shadow. Some scattered protein scoops out of focus in the foreground.

Style: dramatic fitness supplement campaign, masculine, intimidating. Reference: Onnit, Athletic Greens dark editorial.
Camera: 85mm, f/4, eye level with jar, slight Dutch angle for energy.

Negative: no labels, no readable text, no muscular bodies, no overexposed highlights, no plastic-looking jar.
Aspect: 4:5.
```

### `/galeria/5.webp` — Eletrônico, cenário tech

```
A pair of premium wireless earbuds in a charging case (matte black, no brand), photographed on a dark brushed aluminum surface. Cyan lens flare from camera-left. Subtle techno-grid pattern visible in the dark background. Earbuds slightly out of case showing the LED indicator.

Style: tech product launch keynote shot. Reference: Apple AirPods Pro hero, Sony WF flagship.
Camera: 60mm macro, f/2.8, three-quarter front view.

Negative: no logos, no brand text, no human ears, no white sterile background, no fingerprints visible.
Aspect: 4:5.
```

### `/galeria/6.webp` — Roupa, modelo IA

```
A woman in her late 20s, soft natural face (avoid uncanny valley — use slight imperfections like a freckle, asymmetric hair), wearing a cream cashmere knit sweater. Studio shot against a warm beige wall, soft window light from the left. Shot from chest up, slight three-quarter angle. The sweater is the hero — soft texture visible.

Style: editorial fashion lookbook, J.Crew x The Row aesthetic. Reference: Zara studio campaign.
Camera: 85mm, f/2.5, eye-level. Soft focus on face, sharp on sweater texture.

Negative: no plastic skin, no perfect symmetry (looks fake), no jewelry, no logos, no busy patterns, no over-glossy lips.
Aspect: 4:5.
```

### `/galeria/7.webp` — Bebida, fundo praia

```
A clear glass bottle of a craft kombucha-style drink (amber color liquid, no label), partially submerged in beach sand, photographed at golden hour. Out-of-focus ocean waves in the background. Condensation droplets on the bottle. Warm sunlight creating a long shadow on the sand.

Style: lifestyle beverage campaign for premium organic brand. Reference: Health-Ade Kombucha, summer Aperol Spritz vibe.
Camera: 50mm, f/3.5, low angle (eye-level with sand).

Negative: no labels, no human hands or feet, no umbrella drinks vibe, no obvious tourist beach (Brazilian or Mediterranean style coast).
Aspect: 4:5.
```

### `/galeria/8.webp` — Acessório de moda, flatlay editorial

```
A flatlay top-down composition: a leather crossbody bag (camel color, no brand), with adjacent items — a folded silk scarf in burnt orange, gold hoop earrings, a paperback book (no title), a small bottle of fragrance. Arranged on a textured cream linen background. Soft diffused natural light.

Style: fashion editorial flatlay, magazine spread. Reference: Vogue Italia accessories shoot.
Camera: 50mm, top-down (90° angle), f/5.6.

Negative: no logos, no readable text on book, no scattered messy items, no high-contrast lighting, no people.
Aspect: 4:5.
```

### `/galeria/9.webp` — Comida, macro com fumaça

```
A single artisanal chocolate truffle, dusted with cocoa powder, photographed extreme close-up with light steam/vapor rising from it (suggesting freshness/warmth). Dark espresso wood background, single warm light from upper-left. Cocoa powder dust suspended in the air around the truffle.

Style: high-end food photography, dessert magazine cover. Reference: Bon Appétit, gourmet chocolate brand campaign.
Camera: 100mm macro, f/2.8, eye-level with truffle.

Negative: no plates, no human hands, no melted chocolate that looks fake, no excess glossy reflections, no garnish overload.
Aspect: 4:5.
```

### `/galeria/10.webp` — Móvel, cenário ambientado

```
A mid-century modern lounge chair (walnut wood frame, terracotta wool upholstery), photographed in a sunlit minimalist living room. Soft morning light from a large window casting geometric shadows on a beige wool rug. A small side table next to it with a folded throw blanket. White walls, no clutter.

Style: interior design magazine, Scandinavian minimalism. Reference: Kinfolk, Dwell magazine.
Camera: 24mm wide angle, f/4, slightly low angle.

Negative: no people, no pets, no books with readable titles, no busy wall decor, no plastic-looking wood grain.
Aspect: 4:5.
```

### `/galeria/11.webp` — Pet/produto pet, cenário lúdico

```
A small dog (Corgi or Jack Russell), playful expression, sitting next to a colorful pet toy (rope toy in pastel colors) on a soft white shag rug. Bright daylight from a window, slightly overexposed for that "Instagram pet account" vibe. The toy is the hero, the dog is the supporting actor.

Style: pet brand campaign, Chewy / BarkBox aesthetic.
Camera: 50mm, f/3.5, low angle (eye level with dog).

Negative: no dog faces that look uncanny, no logos, no toy with sharp edges or threatening look, no busy backgrounds.
Aspect: 4:5.
```

### `/galeria/12.webp` — Skincare, fundo pastel premium

```
A trio of skincare jars and a serum bottle (frosted glass, minimal aesthetic, no brand) arranged on a soft pastel lilac stepped surface. Each product at a different height level. Soft natural light from upper-right creating gentle shadows. Some real botanical leaves (eucalyptus) scattered.

Style: clean beauty brand campaign, Glossier x Drunk Elephant aesthetic. Reference: contemporary K-beauty editorial.
Camera: 60mm, f/4, slight three-quarter angle.

Negative: no logos, no readable text, no fake-looking plants, no over-saturated pastels, no human skin in frame.
Aspect: 4:5.
```

---

## Galeria de alunos (1:1 · 1080×1080) — `public/alunos/1-12.webp`

12 imagens **adicionais** que aparecem como "feitas por alunos" — devem parecer levemente menos "perfeitas" que as da galeria principal (afinal, foram feitas por alunos), mas ainda profissionais. Mistura de nichos brasileiros realistas.

**Atalho:** se tiver pressa, peça ao Nano Banana variações dos prompts 1-12 acima com format 1:1 e um aspecto "menos brand-perfect, mais artesanal lojista pequeno". Ou substitua todas pelas imagens reais dos seus alunos quando tiver — esse é o ideal.

Prompt-base reutilizável:

```
[Produto X comum no e-commerce brasileiro — escolha um nicho: brigadeiro gourmet, biquíni, ração natural, suplemento, cosmético, joia, sapato infantil, etc.], packshot product photography aesthetic, fundo neutro (branco/cinza/pastel) ou cenário simples, iluminação suave natural, slight imperfection that suggests "small store owner did this with AI tools" (not over-polished).

Style: realistic product photography for small Brazilian DTC brand — Sympla / Shopify Brasil aesthetic. Não pode parecer campanha de marca global; tem que parecer pequeno empreendedor caprichando.
Camera: 50mm, f/4, three-quarter or frontal.

Negative: no logos, no readable text, no obvious AI artifacts (extra fingers, melting edges), no faces.
Aspect: 1:1.
```

Faça 12 variações cobrindo: 4× beleza/cosmético · 2× moda/acessório · 2× food/bebida · 2× pet · 1× tech · 1× casa.

---

## Quando substituir essas imagens

- A **galeria principal** (`/galeria/`) pode ficar com IA pra sempre — é o teu portfólio demonstrativo.
- A **galeria de alunos** (`/alunos/`) deve virar **imagens reais dos seus alunos assim que tiver**. Substitua arquivo por arquivo conforme for recebendo, e atualize o array `students` em `app/page.tsx` (linha ~85) com nome/handle/nicho reais.
- O **OG image** (`/og.png`) você pode também desenhar no Figma com o título sobreposto pra ter mais controle do que aparece em previews de WhatsApp/Twitter.

---

## Como gerar em batch

**Nano Banana** (https://nano-banana.com): cole prompt → escolha aspect ratio → gera 4 variações → escolha a melhor → exporta WebP. Faça os 24 (galeria + alunos) em 1-2h.

**Flux Pro 1.1 Ultra**: melhor qualidade pra packshot fotorrealista. Use no Replicate ou via API. Custo: ~$0.06 por imagem.

**Midjourney v6.1**: ótimo pra estética editorial — use `--ar 4:5` ou `--ar 1:1`, sufixo `--style raw` pra menos "look IA".

---

## Checklist antes de subir as imagens

- [ ] Todas em WebP (não PNG, não JPG — economia de banda decisiva)
- [ ] Qualidade 85 (não 100 — não vale a pena, ninguém percebe)
- [ ] Arquivos abaixo de 250KB cada
- [ ] Nenhum logo visível, nenhum texto legível
- [ ] Nenhum rosto com aparência fake/uncanny
- [ ] Nomes exatos: `galeria/1.webp` a `galeria/12.webp` + `alunos/1.webp` a `alunos/12.webp`
- [ ] `og.png` na raiz do `public/`
