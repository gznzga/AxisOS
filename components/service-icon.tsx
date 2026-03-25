const stroke = "currentColor";

export function ServiceIcon({ type }: { type: "marketing" | "systems" | "consulting" }) {
  if (type === "marketing") {
    return (
      <svg
        className="h-10 w-10 text-axis-turquoise"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
      >
        <path
          d="M6 28V14l8-6v20l-8 6zm10-22 12 8v16l-12-8V6zm14 10 4 3v12l-4 3V16z"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="18" r="2" fill={stroke} opacity="0.9" />
      </svg>
    );
  }
  if (type === "systems") {
    return (
      <svg
        className="h-10 w-10 text-axis-turquoise"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
      >
        <rect
          x="6"
          y="8"
          width="28"
          height="24"
          rx="2"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <path
          d="M6 16h28M14 8v24M26 8v24"
          stroke={stroke}
          strokeWidth="1.2"
          opacity="0.6"
        />
        <circle cx="20" cy="28" r="2.5" fill={stroke} />
      </svg>
    );
  }
  return (
    <svg
      className="h-10 w-10 text-axis-turquoise"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 30c4-8 8-12 12-12s8 4 12 12"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M12 14h16M20 10v8"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="20" cy="22" r="3" stroke={stroke} strokeWidth="1.4" />
    </svg>
  );
}
