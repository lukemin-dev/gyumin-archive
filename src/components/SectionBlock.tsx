interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  description?: string;
}

export default function SectionBlock({
  title,
  children,
  className,
  description,
}: SectionBlockProps) {
  return (
    <section className={`mb-14 ${className ?? ""}`}>
      <div className="mb-5">
        <h2 className="text-xl font-bold tracking-tight text-slate-950">{title}</h2>
        {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
      </div>
      {children}
    </section>
  );
}
