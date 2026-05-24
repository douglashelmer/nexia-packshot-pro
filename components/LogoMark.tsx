import Image from "next/image";

/**
 * LogoMark — agora usa a imagem real /galeria/logo.webp.
 * Mantém a mesma API (variant) pro page.tsx não precisar mudar.
 *
 *  - "compact"  → altura ~32px (nav)
 *  - "stacked"  → altura ~80px (CTAs/uso médio)
 *  - "huge"     → altura responsiva (hero)
 */
export function LogoMark({
  variant = "compact",
  className = "",
  priority = false,
}: {
  variant?: "compact" | "stacked" | "huge";
  className?: string;
  priority?: boolean;
}) {
  // Tamanhos de display por variant (a imagem nativa é ~640×280)
  const sizing = {
    compact: "h-8 md:h-9 w-auto",
    stacked: "h-16 md:h-20 w-auto",
    huge: "h-28 md:h-36 lg:h-44 w-auto",
  }[variant];

  return (
    <span
      translate="no"
      className={`inline-block leading-none ${className}`}
      aria-label="nexIA Packshot"
    >
      <Image
        src="/galeria/logo.webp"
        alt="nexIA Packshot"
        width={640}
        height={280}
        priority={priority}
        className={sizing}
      />
    </span>
  );
}
