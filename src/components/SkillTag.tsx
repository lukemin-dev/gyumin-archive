interface SkillTagProps {
  label: string;
}

export default function SkillTag({ label }: SkillTagProps) {
  return (
    <span className="inline-block text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded font-mono">
      {label}
    </span>
  );
}
