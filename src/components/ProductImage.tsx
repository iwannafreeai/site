interface Props {
  variant: "tesma" | "rezinka" | "shnur";
  className?: string;
  label?: string;
}

const palette = {
  tesma: {
    base: "from-amber-400 to-amber-600",
    accent: "#fde68a",
    glyph: "tesma",
  },
  rezinka: {
    base: "from-sky-500 to-indigo-600",
    accent: "#bae6fd",
    glyph: "rezinka",
  },
  shnur: {
    base: "from-emerald-500 to-emerald-700",
    accent: "#bbf7d0",
    glyph: "shnur",
  },
} as const;

export default function ProductImage({ variant, className, label }: Props) {
  const p = palette[variant];
  return (
    <div
      className={[
        "relative overflow-hidden rounded-xl bg-gradient-to-br p-6",
        p.base,
        className ?? "",
      ].join(" ")}
    >
      <svg
        viewBox="0 0 200 140"
        className="h-full w-full"
        role="img"
        aria-label={label ?? "Изображение продукта"}
      >
        {variant === "tesma" && (
          <g>
            {[20, 50, 80, 110].map((y, i) => (
              <rect
                key={i}
                x="10"
                y={y}
                width="180"
                height="14"
                rx="3"
                fill={p.accent}
                opacity={0.85 - i * 0.12}
              />
            ))}
          </g>
        )}
        {variant === "rezinka" && (
          <g stroke={p.accent} strokeWidth="6" fill="none">
            <path d="M0 30 Q 50 0 100 30 T 200 30" />
            <path d="M0 70 Q 50 40 100 70 T 200 70" opacity="0.85" />
            <path d="M0 110 Q 50 80 100 110 T 200 110" opacity="0.7" />
          </g>
        )}
        {variant === "shnur" && (
          <g stroke={p.accent} strokeWidth="5" strokeLinecap="round" fill="none">
            {[15, 35, 55, 75, 95, 115].map((y) => (
              <path
                key={y}
                d={`M0 ${y} Q 25 ${y - 10} 50 ${y} T 100 ${y} T 150 ${y} T 200 ${y}`}
              />
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}
