interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionBlock({
  title,
  children,
  className,
}: SectionBlockProps) {
  return (
    <section className={`mb-12 ${className ?? ""}`}>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">{title}</h2>
      {children}
    </section>
  );
}
