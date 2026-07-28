const steps = [
  { label: "LR-Z 센서", detail: "대상 감지" },
  { label: "CUBLOC PLC", detail: "입·출력 조건" },
  { label: "카메라", detail: "촬영 트리거" },
  { label: "YOLO", detail: "객체 검출" },
  { label: "ConvNeXt", detail: "등급 분류" },
];

export default function KitechSignalFlow() {
  return (
    <figure className="mb-10 rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
      <figcaption className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
          Signal Flow
        </p>
        <p className="mt-2 font-bold text-slate-950">촬영 결과가 만들어지는 전체 흐름</p>
        <p className="mt-1 text-sm text-slate-600">
          각 경계의 입력과 출력을 순서대로 확인해 누락 지점을 좁혔습니다.
        </p>
      </figcaption>
      <ol className="grid gap-3 sm:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.label} className="relative rounded-xl border border-blue-100 bg-white p-4">
            <span className="text-xs font-bold text-blue-600">0{index + 1}</span>
            <p className="mt-2 text-sm font-bold text-slate-900">{step.label}</p>
            <p className="mt-1 text-xs text-slate-500">{step.detail}</p>
            {index < steps.length - 1 && (
              <span
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-blue-400 sm:-right-3 sm:bottom-auto sm:left-auto sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0"
                aria-hidden="true"
              >
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}
