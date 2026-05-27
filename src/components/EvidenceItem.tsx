import type { Evidence } from "@/types";

interface EvidenceItemProps {
  evidence: Evidence;
}

export default function EvidenceItem({ evidence }: EvidenceItemProps) {
  return (
    <div className="text-center p-4">
      <div className="text-2xl mb-2">{evidence.icon}</div>
      <p className="text-2xl font-bold font-mono text-gray-900">
        {evidence.value}
      </p>
      <p className="text-sm font-medium text-gray-700 mt-1">
        {evidence.label}
      </p>
      <p className="text-xs text-gray-500 mt-0.5">{evidence.description}</p>
    </div>
  );
}
