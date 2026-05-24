/**
 * LogoMark — "nexIA Packshot" estilo cromado/metálico.
 *
 *   nex  =  chrome metálico (prata)
 *   IA   =  azul ciano com glow
 *   Packshot = cursivo (Sail) embaixo
 *
 * Variants:
 *   - "compact"  → uma linha, pra nav (sm/md)
 *   - "stacked"  → empilhado em 2 linhas (hero)
 *   - "huge"     → versão grande do hero
 */
export function LogoMark({
  variant = "compact",
  className = "",
}: {
  variant?: "compact" | "stacked" | "huge";
  className?: string;
}) {
  if (variant === "compact") {
    return (
      <span
        translate="no"
        className={`inline-flex items-baseline gap-[0.18em] font-display tracking-tight ${className}`}
      >
        <span className="font-extrabold text-chrome">nex</span>
        <span className="font-extrabold text-ia-glow">IA</span>
        <span className="font-script text-ink-dim text-[0.95em] leading-none translate-y-[0.05em]">
          Packshot
        </span>
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span
        translate="no"
        className={`inline-flex flex-col items-center leading-[0.9] font-display ${className}`}
      >
        <span className="flex items-baseline gap-[0.04em]">
          <span className="font-black text-chrome tracking-tight">nex</span>
          <span className="font-black text-ia-glow tracking-tight">IA</span>
        </span>
        <span className="font-script text-ink mt-1 text-[0.78em]">Packshot</span>
      </span>
    );
  }

  // huge — hero
  return (
    <span
      translate="no"
      className={`inline-flex flex-col items-center leading-[0.82] font-display ${className}`}
      aria-label="nexIA Packshot"
    >
      <span className="flex items-baseline gap-[0.02em] text-[clamp(64px,14vw,180px)]">
        <span className="font-black text-chrome tracking-tight">nex</span>
        <span className="font-black text-ia-glow tracking-tight">IA</span>
      </span>
      <span className="font-script text-ink text-[clamp(54px,11vw,140px)] mt-[-0.05em] tracking-wide">
        Packshot
      </span>
    </span>
  );
}
