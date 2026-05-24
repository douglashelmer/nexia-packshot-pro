"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Camera,
  ShoppingBag,
  Film,
  UserCircle2,
  Palette,
  Layers,
  Instagram,
  Zap,
  Infinity as InfinityIcon,
  Users,
  HelpCircle,
  Award,
  Wand2,
  ImageIcon,
  Cpu,
  Image as PicIcon,
  PlayCircle,
  Box,
  TrendingUp,
  X,
} from "lucide-react";
import { LogoMark } from "../components/LogoMark";

/* ------------------------------------------------------------------ */
/*  Hooks & data                                                       */
/* ------------------------------------------------------------------ */

function useFadeUp() {
  const reduce = useReducedMotion();
  return {
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: reduce ? 0 : 0.6, ease: "easeOut" as const },
  };
}

// NOTE: placeholders em .svg. Quando gerar as imagens reais (Nano Banana),
// troque .svg por .webp e jogue os arquivos em public/galeria/.
const IMG_EXT = ".svg";

const galleryHeaders = [
  "FOTO ORIGINAL",
  "PACKSHOT DE ESTÚDIO",
  "CENA NATURAL",
  "CENA URBANA",
  "FUNDO BRANCO",
  "MODELO IA",
  "FLATLAY EDITORIAL",
  "MACRO PRODUTO",
  "REELS / TIKTOK",
  "BANNER CAMPANHA",
  "AMBIENTE LIFESTYLE",
  "CATÁLOGO MARKETPLACE",
] as const;

const gallery = galleryHeaders.map((header, i) => ({
  src: `/galeria/${i + 1}${IMG_EXT}`,
  header,
  tag: header,
}));

const workflow = [
  { icon: Box, label: "Foto do produto", desc: "ou imagem de referência" },
  { icon: Sparkles, label: "IA generativa", desc: "prompts + workflow" },
  { icon: Cpu, label: "Transformação", desc: "cenário, luz, ângulo" },
  { icon: PicIcon, label: "Packshots e cenas", desc: "marketplace + IG" },
  { icon: PlayCircle, label: "Vídeos e criativos", desc: "Reels, Shorts, Ads" },
];

const learn = [
  {
    icon: ShoppingBag,
    title: "Packshot puro pra marketplace",
    desc:
      "Imagem fundo branco, ângulos múltiplos, atende exigência do Mercado Livre, Shopee, Amazon e Magalu sem retrabalho. O tipo de foto que faz seu anúncio aparecer no topo da busca.",
  },
  {
    icon: Camera,
    title: "Cenário comercial pra Instagram",
    desc:
      "Produto em ambiente real — escritório, cozinha, praia, estúdio — com a luz e o ângulo que faz o dedo parar no feed. Estética de marca grande, sem o orçamento de marca grande.",
  },
  {
    icon: Film,
    title: "Vídeo curto pra Reels/Shorts",
    desc:
      "Animação do produto girando, zoom dramático, transições — tudo gerado por IA, em segundos, pronto pra subir como Reels, Shorts ou TikTok.",
  },
  {
    icon: UserCircle2,
    title: "Modelo IA usando seu produto",
    desc:
      "Pessoa realista (que não existe) vestindo, usando ou interagindo com o produto. Sem contratar modelo, sem direitos de imagem, sem agenda de produção.",
  },
  {
    icon: Palette,
    title: "Lifestyle e clima de marca",
    desc:
      "Mood images, banners de campanha, fundos pra stories — o conteúdo de marca que sua loja precisa pra parecer profissional sem custo de produtora.",
  },
  {
    icon: Layers,
    title: "Workflow pra catálogo inteiro",
    desc:
      "A parte que ninguém ensina: sistema de prompts, pastas e referências pra rodar 50, 100, 500 SKUs sem virar caos. Separa “fiz uma foto legal” de “meu catálogo inteiro tá pronto”.",
  },
] as const;

const students = Array.from({ length: 12 }, (_, i) => ({
  src: `/alunos/${i + 1}${IMG_EXT}`,
  product: `Produto ${i + 1}`,
  handle: `@aluno${i + 1}`,
  niche: ["Beleza", "Moda", "Pet", "Food", "Tech", "Casa"][i % 6],
}));

const forYou = [
  "Vende online (loja, marketplace, Instagram, WhatsApp) e foto sua é o que está travando a conversão",
  "Tem catálogo grande e produção física não escala — você cansou de pagar fotógrafo por SKU",
  "É freela / social media / agência e quer um serviço novo pra cobrar (R$ 300-800 por packshot)",
  "Já tentou Midjourney sozinho e ficou no aceitável — quer o que a marca grande entrega",
  "Tem produto bom mas a imagem não tá fazendo justiça (e você sabe disso)",
];

const notForYou = [
  "Quer fórmula mágica sem abrir o computador e seguir um processo",
  "Acha que “IA faz tudo sozinha sem direção” — não faz, e ninguém sério promete isso",
  "Espera assistir vídeo e nunca colocar a mão na ferramenta",
  "Procura curso de fotografia tradicional com câmera e softbox — esse é o oposto",
];

const offerIncludes = [
  { icon: Film, text: "Curso completo gravado · 8 módulos · ~12h de aula" },
  { icon: Layers, text: "Workflow oficial nexIA Packshot — prompts, pastas, referências" },
  { icon: Palette, text: "Biblioteca de prompts pra 14 nichos diferentes" },
  { icon: InfinityIcon, text: "Acesso vitalício — atualizações da turma 02 incluídas" },
  { icon: Users, text: "Comunidade fechada dos alunos" },
  { icon: Zap, text: "Bônus: mini-treino de vídeo curto pra Reels" },
];

const testimonials = Array.from({ length: 6 }, (_, i) => ({
  name: `Aluno ${i + 1}`,
  role: ["Loja de beleza", "E-commerce de moda", "Pet shop online", "Marca de food", "Loja de tech", "Loja de casa"][i],
  handle: `@aluno${i + 1}`,
  quote:
    "Depoimento placeholder — vou preencher com texto real do aluno: resultado específico, métrica, transformação.",
}));

const faqs = [
  {
    q: "Eu nunca usei IA. Vou conseguir acompanhar?",
    a: "Sim. O curso começa do zero — abrir conta, primeira imagem, primeiro prompt. Você não precisa saber Photoshop, não precisa saber inglês avançado, não precisa ter PC top. Tudo roda no navegador.",
  },
  {
    q: "Que ferramentas vou usar? Vou precisar pagar mensalidade?",
    a: "A gente usa principalmente ferramentas com plano grátis ou pago muito barato (a partir de R$ 30/mês). O curso te ensina a tirar o máximo do plano free antes de gastar a mais. Em ferramenta, você sai gastando menos do que gastaria em uma única foto profissional.",
  },
  {
    q: "Funciona pro meu nicho? Tenho um produto específico.",
    a: "A biblioteca tem prompts pra 14 nichos (perfume, cosmético, moda, eletrônico, pet, food, suplemento, joia, móvel, bebida, infantil, fitness, beleza, casa). O workflow é o mesmo pra qualquer SKU — você adapta cenário e ângulo. Se seu nicho não tá na lista, eu te ajudo a adaptar via suporte.",
  },
  {
    q: "As imagens passam em marketplace? (Mercado Livre, Shopee, Amazon)",
    a: "Sim, e tem módulo específico — fundo branco real, ângulo padronizado, resolução mínima exigida por cada plataforma. Imagem de IA não é mais bloqueada nem penalizada — o critério hoje é qualidade técnica, e o curso entrega isso.",
  },
  {
    q: "Quanto tempo até eu fazer minha primeira imagem boa?",
    a: "Aula 1, primeiro dia. Não é exagero — na primeira aula prática você já sai com um packshot do seu produto pronto. O resto do curso é refino, escala e workflow.",
  },
  {
    q: "Tem certificado?",
    a: "Tem. Certificado de conclusão emitido pela nexIA Academy, com carga horária pra você usar onde precisar.",
  },
  {
    q: "E se eu quiser pedir reembolso?",
    a: "Você manda um e-mail dentro de 7 dias dizendo “quero o reembolso”. Pronto. Sem formulário, sem ligação, sem entrevista. Devolvemos 100% em até 5 dias úteis.",
  },
];

/* ------------------------------------------------------------------ */
/*  Subcomponents                                                      */
/* ------------------------------------------------------------------ */

function HudCorners() {
  return (
    <>
      <span aria-hidden="true" className="absolute top-0 left-0 w-3 h-3 border-t border-l border-accent-2" />
      <span aria-hidden="true" className="absolute top-0 right-0 w-3 h-3 border-t border-r border-accent-2" />
      <span aria-hidden="true" className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-accent-2" />
      <span aria-hidden="true" className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-accent-2" />
    </>
  );
}

function HudWindowHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between px-3 py-1.5 border-b border-accent/30 bg-bg-soft/80">
      <span className="font-mono text-[10px] tracking-[0.18em] text-accent-2 uppercase">
        {label}
      </span>
      <span aria-hidden="true" className="flex items-center gap-1">
        <span className="w-3 h-3 inline-flex items-center justify-center text-accent-2/70">
          <X className="w-3 h-3" strokeWidth={2.5} />
        </span>
      </span>
    </div>
  );
}

function SealCursoCompleto() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-bg border-2 border-accent-2 glow-blue-soft"
    >
      <Award className="w-6 h-6 md:w-7 md:h-7 text-accent-2" />
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Page() {
  const fadeUp = useFadeUp();

  return (
    <main className="relative overflow-x-clip">
      {/* ───── NAV ───── */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-bg/80 border-b border-accent/20">
        <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <LogoMark variant="compact" className="text-lg md:text-xl" />
          <div className="hidden md:flex items-center gap-7 text-sm text-ink-dim font-mono tracking-wide">
            <a href="#galeria" className="hover:text-accent-2 transition-colors">GALERIA</a>
            <a href="#workflow" className="hover:text-accent-2 transition-colors">WORKFLOW</a>
            <a href="#aprende" className="hover:text-accent-2 transition-colors">CURSO</a>
            <a href="#alunos" className="hover:text-accent-2 transition-colors">ALUNOS</a>
            <a href="#preco" className="hover:text-accent-2 transition-colors">PREÇO</a>
          </div>
          <a
            href="#preco"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-bg hover:bg-accent-dark transition-colors font-bold text-sm font-mono tracking-wider uppercase glow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Quero entrar
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </nav>

      {/* ───── 01 · HERO ───── */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        {/* glows decorativos atrás de tudo */}
        <div className="absolute top-24 left-1/4 w-[700px] h-[700px] bg-accent/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute -top-10 right-0 w-[420px] h-[420px] bg-accent-2/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center min-h-[calc(100vh-5rem)] md:min-h-[88vh]">

            {/* ─── COL ESQUERDA (desktop) / abaixo da imagem (mobile) ─── */}
            <div className="order-2 md:order-1 text-center md:text-left max-w-xl mx-auto md:mx-0 pb-8 md:pb-0">

              {/* LOGO REAL */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-start mb-6"
              >
                <h1 className="m-0 leading-none">
                  <LogoMark variant="huge" priority />
                  <span className="sr-only">
                    nexIA Packshot — Packshots e criativos de alta qualidade para vender mais.
                  </span>
                </h1>
              </motion.div>

              {/* SUBHEAD (texto principal) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-3 mb-5 justify-center md:justify-start"
              >
                <span className="shrink-0 w-9 h-9 rounded-md tech-tile flex items-center justify-center mt-0.5">
                  <TrendingUp className="w-4 h-4 text-accent-2" aria-hidden="true" />
                </span>
                <p className="text-lg md:text-2xl text-ink font-semibold leading-snug text-balance">
                  Packshots e criativos de <span className="text-accent-2">alta qualidade</span> para vender mais
                </p>
              </motion.div>

              {/* PILL */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex justify-center md:justify-start mb-4"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent-2 bg-accent/5 glow-blue-soft">
                  <Sparkles className="w-3.5 h-3.5 text-accent-2" aria-hidden="true" />
                  <span className="text-xs md:text-sm font-medium text-ink tracking-wide">
                    Crie com Inteligência Artificial
                  </span>
                </span>
              </motion.div>

              {/* BULLETS plataformas */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="flex items-center flex-wrap gap-x-5 gap-y-2 mb-7 text-ink-dim text-sm font-medium justify-center md:justify-start"
              >
                <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-2" aria-hidden="true" />Instagram</span>
                <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-2" aria-hidden="true" />Marketplace</span>
                <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-2" aria-hidden="true" />TikTok</span>
                <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent-2" aria-hidden="true" />E-commerce</span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center md:justify-start mb-5"
              >
                <a
                  href="#preco"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-accent text-bg font-extrabold text-base font-mono tracking-wider uppercase hover:bg-accent-dark transition-colors glow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Quero entrar
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </a>
                <a
                  href="#galeria"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-accent/40 text-ink hover:border-accent-2 hover:text-accent-2 transition-colors text-sm font-mono tracking-wider uppercase font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  Ver galeria
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="text-[10px] md:text-[11px] text-ink-dimmer tracking-widest uppercase font-mono"
              >
                Acesso vitalício&nbsp;· Garantia 7 dias&nbsp;· Atualizações inclusas
              </motion.div>
            </div>

            {/* ─── COL DIREITA (desktop only) com hero-desk.webp ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="hidden md:flex order-1 md:order-2 items-center justify-center relative"
            >
              <Image
                src="/galeria/hero-desk.webp"
                alt="Demonstração: produto real em foto original transformado em packshot de estúdio, cena natural e cena urbana"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto max-h-[88vh] object-contain"
              />
            </motion.div>

            {/* ─── IMAGEM MOBILE ONLY (em cima do texto) ─── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="order-1 md:hidden -mx-5"
            >
              <Image
                src="/galeria/hero-mobi.webp"
                alt="Demonstração: produto real transformado em packshots profissionais com IA"
                width={750}
                height={1334}
                priority
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 02 · PROBLEMA ───── */}
      <section className="relative py-20 md:py-28 border-t border-accent/15 bg-bg-soft">
        <div className="absolute inset-0 circuit-bg-fine opacity-40" />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.h2
            {...fadeUp}
            className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-8 text-balance"
          >
            Foto ruim de produto não trava só a vitrine.{" "}
            <span className="text-gradient">Trava a venda.</span>
          </motion.h2>
          <motion.div {...fadeUp} className="space-y-5 text-lg text-ink-dim leading-relaxed">
            <p>
              Você posta no Instagram e o engajamento despenca. Você sobe no Mercado Livre e fica pra trás dos concorrentes com foto melhor. Você manda pro anunciante rodar tráfego e o CPM voa porque o criativo não para o dedo.
            </p>
            <p>
              Não é o produto que tá errado. <span className="text-ink">É a imagem que não está vendendo o produto.</span>
            </p>
            <p>
              E contratar fotógrafo profissional pra cada SKU custa caro, demora semanas e — depois de tudo isso — você ainda fica refém da agenda dele toda vez que muda o catálogo.
            </p>
            <p className="italic text-ink pt-2 border-l-2 border-accent-2 pl-5">
              Quem ainda não tá criando imagem de produto desse jeito, tá perdendo dinheiro todo dia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ───── 03 · GALERIA (HUD windows) ───── */}
      <section id="galeria" className="relative py-20 md:py-28 border-t border-accent/15 scroll-mt-20">
        <div className="absolute inset-0 circuit-bg-fine opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2 uppercase mb-3">
              · 12 outputs · 12 nichos ·
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance">
              Isso aqui foi gerado <span className="text-gradient">sem câmera.</span>
            </h2>
            <p className="text-lg text-ink-dim max-w-2xl mx-auto leading-relaxed">
              Todas as imagens abaixo saíram do mesmo workflow que você vai aprender. Abre em tela cheia, procura o “truque”. Não tem.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                {...fadeUp}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="group relative hud-frame rounded-lg overflow-hidden"
              >
                <HudWindowHeader label={img.header} />
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.tag}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bg via-bg/50 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeUp} className="text-center text-xs font-mono tracking-wider text-ink-dimmer mt-10 uppercase">
            12 imagens · 12 produtos diferentes · zero foto física · custo de produção R$ 0
          </motion.p>
        </div>
      </section>

      {/* ───── 04 · WORKFLOW IA (horizontal pipeline) ───── */}
      <section id="workflow" className="relative py-20 md:py-28 border-t border-accent/15 bg-bg-soft scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-40" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2 uppercase mb-3">
              · Workflow com IA ·
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
              O caminho que faz seu produto <span className="text-gradient">vender mais.</span>
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="relative hud-frame rounded-xl p-6 md:p-8"
          >
            <HudCorners />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 items-stretch">
              {workflow.map((step, i) => (
                <div key={step.label} className="flex md:items-center md:flex-col">
                  <div className="flex flex-col items-center text-center flex-1 px-1">
                    <div className={`${i === 2 ? "tech-tile-hot" : "tech-tile"} w-16 h-16 md:w-20 md:h-20 rounded-md flex items-center justify-center mb-3`}>
                      <step.icon className={`w-7 h-7 md:w-8 md:h-8 ${i === 2 ? "text-bg" : "text-accent-2"}`} aria-hidden="true" />
                      {i === 2 && (
                        <span className="absolute -mt-12 ml-12 text-[10px] font-mono font-bold tracking-widest text-bg bg-accent-2 px-1.5 py-0.5 rounded-sm">IA</span>
                      )}
                    </div>
                    <div className="font-mono text-[11px] md:text-xs tracking-wider uppercase text-ink font-bold">
                      {step.label}
                    </div>
                    <div className="text-[10px] md:text-[11px] text-ink-dimmer mt-1 leading-tight">
                      {step.desc}
                    </div>
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-accent/40 font-mono text-xl" aria-hidden="true">
                      ›
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 05 · O QUE APRENDE ───── */}
      <section id="aprende" className="relative py-20 md:py-32 border-t border-accent/15 scroll-mt-20">
        <div className="absolute inset-0 circuit-bg-fine opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2 uppercase mb-3">
              · Conteúdo do curso ·
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance">
              Você sai do curso entregando <span className="text-gradient">isso aqui.</span>
            </h2>
            <p className="text-lg text-ink-dim leading-relaxed">
              Não é lista de módulos. É o que você estará fazendo na segunda-feira de manhã depois do curso.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {learn.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="hud-frame rounded-lg p-6 hover:border-accent-2 transition-colors group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="tech-tile w-12 h-12 rounded-md flex items-center justify-center">
                    <card.icon className="w-5 h-5 text-accent-2" aria-hidden="true" />
                  </div>
                  <div className="font-mono text-lg font-extrabold text-accent/40 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold mb-3 leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p className="text-ink-dim leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 06 · ALUNOS ───── */}
      <section id="alunos" className="relative py-20 md:py-28 border-t border-accent/15 bg-bg-soft scroll-mt-20">
        <div className="absolute inset-0 circuit-bg-fine opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2 uppercase mb-3">
              · Feitos por alunos ·
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance">
              Quem fez antes de você <span className="text-gradient">já tá entregando.</span>
            </h2>
            <p className="text-lg text-ink-dim leading-relaxed">
              Imagens reais, de produtos reais, feitas por alunos das primeiras turmas. Sem retoque, sem cherry-picking.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {students.map((s, i) => (
              <motion.div
                key={s.src}
                {...fadeUp}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="group relative hud-frame rounded-lg overflow-hidden"
              >
                <HudWindowHeader label={s.niche.toUpperCase()} />
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={s.src}
                    alt={`${s.product} — ${s.handle}`}
                    fill
                    className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent p-2.5">
                    <div className="text-[11px] text-ink font-semibold">{s.product}</div>
                    <div className="text-[10px] text-ink-dimmer flex items-center gap-1 mt-0.5 font-mono">
                      <Instagram className="w-2.5 h-2.5" aria-hidden="true" />
                      {s.handle}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 07 · PRA QUEM É ───── */}
      <section className="relative py-20 md:py-32 border-t border-accent/15">
        <div className="absolute inset-0 circuit-bg-fine opacity-30" />
        <div className="relative max-w-5xl mx-auto px-5">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-center mb-12 text-balance">
            Antes de continuar, <span className="text-gradient">leia isso aqui.</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5">
            <motion.div {...fadeUp} className="hud-frame rounded-lg p-7 border-accent-2/60 glow-blue-soft">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 className="w-6 h-6 text-accent-2" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-accent-2 uppercase tracking-wider">É pra você se:</h3>
              </div>
              <ul className="space-y-4 text-ink-dim">
                {forYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-2 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="hud-frame rounded-lg p-7"
            >
              <div className="flex items-center gap-2 mb-6">
                <XCircle className="w-6 h-6 text-ink-dimmer" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-ink-dim uppercase tracking-wider">Não é pra você se:</h3>
              </div>
              <ul className="space-y-4 text-ink-dim">
                {notForYou.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-ink-dimmer shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── 08 · PREÇO + SELO ───── */}
      <section id="preco" className="relative py-20 md:py-32 border-t border-accent/15 bg-bg-soft scroll-mt-20 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/15 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2 uppercase mb-3">
              · Investimento ·
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-balance">
              Quanto custa.
            </h2>
            <p className="text-lg text-ink-dim leading-relaxed text-balance">
              Uma única foto de produto com fotógrafo profissional custa <span className="text-ink font-semibold">R$ 300 a R$ 800</span>. Estúdio com cenário e modelo passa de R$ 3.000 a diária.
              <br />
              <span className="text-accent-2 font-semibold">O curso inteiro custa menos que UMA foto avulsa.</span>
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="relative hud-frame rounded-xl p-8 md:p-10 glow-blue"
          >
            <HudCorners />

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-sm bg-accent text-bg text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
              ⚡ Turma 01 · Vagas limitadas
            </div>

            {/* Selo CURSO COMPLETO */}
            <div className="flex items-center justify-center gap-3 mb-6 mt-2">
              <SealCursoCompleto />
              <span className="font-display text-lg md:text-xl font-extrabold tracking-tight uppercase leading-tight">
                Curso<br />Completo
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="text-xs text-ink-dim mb-2 font-mono tracking-widest uppercase">12x de</div>
              <div className="font-display text-6xl md:text-7xl font-black text-gradient leading-none tabular-nums">
                R$ 10,03
              </div>
              <div className="text-sm text-ink-dim mt-3">
                ou <span className="text-ink font-semibold">R$ 97</span> à vista no PIX
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {offerIncludes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-ink-dim text-sm">
                  <item.icon className="w-4 h-4 text-accent-2 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <a
              href="#comprar"
              className="group flex items-center justify-center gap-2 w-full py-4 rounded-md bg-accent text-bg font-extrabold text-base font-mono tracking-wider uppercase hover:bg-accent-dark transition-colors glow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card"
            >
              Quero entrar agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </a>

            <div className="text-center text-[10px] text-ink-dimmer mt-5 font-mono tracking-widest uppercase">
              Pagamento seguro · Garantia 7 dias · Suporte
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── 09 · GARANTIA ───── */}
      <section className="relative py-20 md:py-24 border-t border-accent/15">
        <div className="absolute inset-0 circuit-bg-fine opacity-30" />
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <motion.div {...fadeUp} className="inline-flex items-center justify-center w-20 h-20 rounded-md tech-tile mb-6">
            <ShieldCheck className="w-10 h-10 text-accent-2" aria-hidden="true" />
          </motion.div>
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-balance">
            7 dias. <span className="text-gradient">Sem perguntas.</span>
          </motion.h2>
          <motion.p {...fadeUp} className="text-lg text-ink-dim leading-relaxed">
            Você entra, assiste o que quiser, faz o primeiro packshot. Se em até 7 dias achar que não vale o que pagou, você me responde por e-mail e eu devolvo 100% do investimento.{" "}
            <span className="italic text-ink">Sem formulário. Sem ligação. Sem perguntas.</span>
          </motion.p>
        </div>
      </section>

      {/* ───── 10 · DEPOIMENTOS ───── */}
      <section className="relative py-20 md:py-28 border-t border-accent/15 bg-bg-soft">
        <div className="absolute inset-0 circuit-bg-fine opacity-30" />
        <div className="relative max-w-6xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-12 max-w-2xl mx-auto">
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2 uppercase mb-3">
              · Depoimentos ·
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance">
              O que os alunos <span className="text-gradient">estão dizendo.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name + i}
                {...fadeUp}
                transition={{ delay: i * 0.06, duration: 0.6 }}
                className="hud-frame rounded-lg p-5 hover:border-accent-2 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-accent-2 to-accent border border-accent/60" aria-hidden="true" />
                  <div>
                    <div className="font-semibold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-ink-dimmer">{t.role}</div>
                  </div>
                </div>
                <p className="text-ink-dim text-sm leading-relaxed mb-4">“{t.quote}”</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs text-accent-2 hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 rounded font-mono"
                >
                  <Instagram className="w-3 h-3" aria-hidden="true" />
                  {t.handle}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 11 · FAQ ───── */}
      <section id="faq" className="relative py-20 md:py-28 border-t border-accent/15 scroll-mt-20">
        <div className="absolute inset-0 circuit-bg-fine opacity-30" />
        <div className="relative max-w-3xl mx-auto px-5">
          <motion.div {...fadeUp} className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-md tech-tile mb-5">
              <HelpCircle className="w-6 h-6 text-accent-2" aria-hidden="true" />
            </div>
            <p className="font-mono text-xs tracking-[0.25em] text-accent-2 uppercase mb-3">
              · FAQ ·
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-balance">
              Perguntas que <span className="text-gradient">todo mundo faz.</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="group hud-frame rounded-md overflow-hidden hover:border-accent-2 transition-colors"
              >
                <summary className="cursor-pointer px-5 py-4 flex items-center justify-between gap-4 list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-inset">
                  <span className="font-semibold text-ink text-left text-sm md:text-base">{faq.q}</span>
                  <span
                    className="text-accent-2 text-2xl group-open:rotate-45 transition-transform shrink-0 font-mono"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 pb-5 text-ink-dim leading-relaxed text-sm">{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ───── 12 · CTA FINAL ───── */}
      <section className="relative py-20 md:py-32 border-t border-accent/15 overflow-hidden">
        <div className="absolute inset-0 circuit-bg opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <motion.h2 {...fadeUp} className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-10 text-balance">
            A diferença entre quem tá ganhando e quem tá perdendo no online em 2026 é{" "}
            <span className="text-gradient">a imagem do produto.</span>
          </motion.h2>

          <motion.a
            {...fadeUp}
            transition={{ delay: 0.15, duration: 0.6 }}
            href="#comprar"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-md bg-accent text-bg font-extrabold text-base font-mono tracking-wider uppercase hover:bg-accent-dark transition-colors glow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            Quero entrar na turma 01
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
          </motion.a>

          <motion.div {...fadeUp} className="text-[10px] text-ink-dimmer mt-6 tracking-widest uppercase font-mono">
            Pagamento seguro&nbsp;· Garantia 7 dias&nbsp;· Acesso vitalício
          </motion.div>

          <motion.p {...fadeUp} className="italic text-ink-dim text-sm mt-10 max-w-xl mx-auto leading-relaxed">
            P.S. — Toda semana que você adia é mais uma semana pagando fotógrafo (ou postando foto que não converte). O curso paga ele mesmo na primeira foto que você deixa de terceirizar.
          </motion.p>
        </div>
      </section>

      {/* ───── 13 · FOOTER ───── */}
      <footer className="border-t border-accent/15 py-10 bg-bg-soft">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-dimmer">
          <LogoMark variant="compact" className="text-base opacity-80" />
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-xs">
            <a
              href="mailto:contato@nexiapackshot.com"
              className="hover:text-accent-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 rounded"
            >
              contato@nexiapackshot.com
            </a>
            <span aria-hidden="true">·</span>
            <span>© 2026 nexIA</span>
          </div>
        </div>
      </footer>

      {/* ───── STICKY MOBILE CTA ───── */}
      <div
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-bg/95 backdrop-blur-xl border-t border-accent-2/40 px-4 pt-3"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href="#preco"
          className="flex items-center justify-between gap-3 px-5 py-3 rounded-md bg-accent text-bg font-extrabold glow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <div className="text-left">
            <div className="text-[9px] opacity-80 tracking-[0.2em] uppercase font-mono">Turma 01</div>
            <div className="text-sm font-mono tracking-wider">Garantir vaga · 12x R$ 10,03</div>
          </div>
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </a>
      </div>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </main>
  );
}
