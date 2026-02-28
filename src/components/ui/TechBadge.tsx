interface TechBadgeProps {
  label: string;
  color?: string;
}

export default function TechBadge({
  label,
  color = 'var(--color-accent-cyan)',
}: TechBadgeProps) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border transition-all duration-200 hover:scale-105"
      style={{
        color,
        borderColor: color,
        background: `${color}12`,
      }}
    >
      {label}
    </span>
  );
}