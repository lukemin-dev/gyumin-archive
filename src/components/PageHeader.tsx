interface PageHeaderProps {
  title: string;
  description?: string;
  eyebrow?: string;
}

export default function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <header className="mb-12 max-w-3xl border-b border-stone-300 pb-8">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs text-emerald-800">
          / {eyebrow.toLowerCase()}
        </p>
      )}
      <h1 className="text-3xl font-bold tracking-[-0.035em] text-stone-950 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
