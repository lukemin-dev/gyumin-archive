import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata = {
  title: "イ・ギュミン | 日本語ポートフォリオ",
  description:
    "バックエンド、クラウド、業務自動化、AIビジョンの経験を紹介するイ・ギュミンの日本語ポートフォリオです。",
  alternates: {
    canonical: "/jp",
    languages: {
      "ko-KR": "/",
      "en-US": "/en",
      "ja-JP": "/jp",
    },
  },
  openGraph: {
    title: "イ・ギュミン | Backend · Cloud · Automation",
    description:
      "現場の課題を丁寧に分析し、周囲と連携しながら改善を最後までやり切るエンジニア。",
    url: "/jp",
    locale: "ja_JP",
  },
};

const achievements = [
  { value: "80/100 → 8,092/8,092", label: "フラッシュ作動・データ記録" },
  { value: "8,092個", label: "実運用で全数撮影を確認" },
  { value: "約10秒", label: "SEO分析・レポート作業" },
  { value: "6回", label: "成績優秀奨学金" },
];

const workPrinciples = [
  {
    title: "早めに共有する",
    description:
      "問題を一人で抱え込まず、状況・確認済みの内容・必要な支援を整理して早めに共有します。",
  },
  {
    title: "原因を分けて考える",
    description:
      "複雑な問題を入力、処理、出力に分解し、ログと実際の動作を照合しながら原因を特定します。",
  },
  {
    title: "再発防止まで取り組む",
    description:
      "一時的な修正で終わらせず、入力検証、例外処理、再試行、チェックポイントを仕組みに組み込みます。",
  },
  {
    title: "学びを記録する",
    description:
      "判断基準や検証条件を記録し、同じ問題に直面した人が再現できる形で知見を残します。",
  },
];

const projects = [
  {
    href: "/projects/seo-automation",
    title: "AIを活用したSEO自動化パイプライン",
    description:
      "Pythonと外部APIでデータ収集からレポート作成までを自動化し、2〜3日かかっていた作業を約10秒に短縮しました。",
  },
  {
    href: "/projects/warehouse-fire-anomaly-monitor",
    title: "倉庫火災・異常監視システム",
    description:
      "Raspberry Pi、Flask、SQLite、IsolationForest、AWS EC2を接続し、センサーからモバイル画面までの流れを実装しました。",
  },
  {
    href: "/projects/backend-interview-tracker",
    title: "バックエンド面接学習トラッカー",
    description:
      "Spring BootによるREST APIを設計し、階層化、共通例外処理、API文書、テストを整備しました。",
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
      <h2 className="text-xl font-bold tracking-tight text-slate-950">{title}</h2>
      <div className="mt-4 text-sm leading-7 text-slate-600">{children}</div>
    </section>
  );
}

export default function JapanesePortfolioPage() {
  const education = profile.education[0];

  return (
    <div className="mx-auto max-w-4xl" lang="ja">
      <header className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          日本語ポートフォリオ
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          イ・ギュミン
        </h1>
        <p className="mt-3 text-lg font-semibold text-blue-700">
          バックエンド・クラウド・業務自動化エンジニア
        </p>
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
          現場の課題を丁寧に分析し、周囲と連携しながら、改善を最後までやり切るエンジニアを目指しています。
          Python・JavaによるAPIと自動化の実装に加え、入力検証、ログ、再試行、チェックポイントを通じて、
          障害発生後も復旧できる仕組みを大切にしています。
        </p>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
          横浜のIT企業でのインターンでは、手作業で2〜3日かかっていたSEO分析・レポート業務を約10秒に短縮しました。
          現在は韓国生産技術研究院で、AIビジョンとPLCを活用した農産物自動選別システムに取り組んでいます。
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            한국어
          </Link>
          <Link href="/en" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50">
            English
          </Link>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">
            GitHub ↗
          </a>
          <a href={`mailto:${profile.email}`} className="rounded-xl px-4 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50">
            メール
          </a>
        </div>
      </header>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="主な実績">
        {achievements.map((achievement) => (
          <div key={achievement.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-2xl font-bold tracking-tight text-slate-950">{achievement.value}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">{achievement.label}</p>
          </div>
        ))}
      </section>

      <div className="mt-6 grid gap-6">
        <Section title="仕事で大切にしていること">
          <div className="grid gap-4 sm:grid-cols-2">
            {workPrinciples.map((principle) => (
              <div key={principle.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="font-bold text-slate-900">{principle.title}</h3>
                <p className="mt-2">{principle.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="実務・研究経験">
          <div className="space-y-6">
            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">韓国生産技術研究院 · AIビジョン・PLCインターン</h3>
                  <p className="mt-1 text-sm text-slate-500">韓国・光州</p>
                </div>
                <span className="text-xs text-slate-400">在職中</span>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>コンベヤー環境でYOLO物体検出モデルとConvNeXt等級分類モデルを学習・評価しています。</li>
                <li>初期検証では100個中80個でフラッシュ作動とデータ記録を確認しました。信号の流れを段階別に調べ、センサー設定を変更しました。</li>
                <li>変更後の実運用ではタマネギ8,092個すべてが同じ成功条件を満たしました。モデル学習には既存の農産物画像約14,000枚を活用しました。</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">Crosslink · AI SEO自動化インターン</h3>
                  <p className="mt-1 text-sm text-slate-500">日本・横浜</p>
                </div>
                <span className="text-xs text-slate-400">2026年1月〜2月</span>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Google Search Console、Google Sheets、Geminiの各APIをPythonで連携しました。</li>
                <li>データ収集、分析、優先順位付け、レポート作成を自動化し、2〜3日の作業を約10秒に短縮しました。</li>
                <li>入力検証、例外処理、再試行、チェックポイント、利用可能モデルの自動判定を実装しました。</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">全南大学校 · 学部研究生</h3>
                  <p className="mt-1 text-sm text-slate-500">ソフトコンピューティング・人工知能研究室</p>
                </div>
                <span className="text-xs text-slate-400">2025年9月〜2026年7月</span>
              </div>
              <p className="mt-3">
                AI・データ分析に関する論文を調査し、実験の入力条件、比較基準、実行環境、結果を同じ形式で記録しました。
                結果だけでなく、判断と検証の過程を説明できる研究記録を重視しました。
              </p>
            </div>
          </div>
        </Section>

        <Section title="主なプロジェクト">
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <Link key={project.href} href={project.href} className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50">
                <h3 className="font-bold leading-snug text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
                <p className="mt-4 text-sm font-semibold text-blue-700">プロジェクトを見る →</p>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate-500">リンク先の詳細ページは現在韓国語です。</p>
        </Section>

        <div className="grid gap-6 md:grid-cols-2">
          <Section title="学歴・受賞">
            <h3 className="font-bold text-slate-900">全南大学校 コンピュータ工学科</h3>
            <p className="mt-1">工学学士 · 2027年2月卒業予定</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>累積GPA {education?.gpa ?? "-"}</li>
              <li>学科首席経験</li>
              <li>成績優秀奨学金 6回</li>
            </ul>
            <p className="mt-3 text-xs leading-6 text-slate-500">
              2023年8月31日、2024年2月28日、2024年8月31日、2025年2月28日、
              2025年8月31日、2026年2月28日
            </p>
          </Section>

          <Section title="研修・活動">
            <ul className="list-disc space-y-2 pl-5">
              <li>AWS Master Class 修了</li>
              <li>H-Mobility 自動運転認知トラック 修了</li>
              <li>学習メンタリング 累計294.5時間</li>
              <li>大阪大学 J-SHIPプログラム参加</li>
            </ul>
          </Section>
        </div>

        <Section title="言語・コミュニケーション">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-bold text-slate-900">日本語</h3>
              <p className="mt-2">日常会話および協働場面でのコミュニケーションが可能です。</p>
              <p className="mt-2 text-xs text-slate-500">横浜での企業インターンと大阪大学J-SHIPで実際に使用しました。業務で使える表現を継続して学習しています。</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h3 className="font-bold text-slate-900">英語</h3>
              <p className="mt-2">技術文書の読解およびプロジェクトでのコミュニケーションに活用できます。</p>
              <p className="mt-2 text-xs text-slate-500">API文書、技術調査、国際交流活動で使用しました。</p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
