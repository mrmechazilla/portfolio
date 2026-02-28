interface SectionTitleProps {
  label: string;
  title: string;
  color?: string;
}

export default function SectionTitle({
  label,
  title,
  color = 'var(--color-accent-cyan)',
}: SectionTitleProps) {
  return (
    <div className="mb-16">
      <p className="section-label mb-3">{label}</p>
      <h2
        className="text-4xl font-bold tracking-tight"
        style={{ color }}
      >
        {title}
      </h2>
      <div
        className="mt-4 h-px w-24"
        style={{
          background: `linear-gradient(to right, ${color}, transparent)`,
        }}
      />
    </div>
  );
}