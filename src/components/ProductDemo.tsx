import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProductDemo() {
  return (
    <section id="product" className="py-20 bg-neutral-900 text-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle label="製品紹介" eyebrow="DEMO" />

        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Demo mock */}
          <div className="rounded-3xl bg-neutral-950 p-6 border border-neutral-800 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-neutral-400">Okapi Demo</span>
              <span className="text-[11px] rounded-full bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
                Online
              </span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="rounded-2xl bg-neutral-900 p-3">
                <div className="text-neutral-400 mb-1">ユーザー</div>
                <p className="text-neutral-100">
                  「社外向けの AI 利用ポリシーのドラフトを作成して」
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-800 p-3">
                <div className="text-neutral-400 mb-1">Okapi Agent</div>
                <p className="text-neutral-50">
                  既存の規程・契約書・社内ナレッジを参照しながら、草案を自動生成。
                  参照したドキュメントも一緒に提示します。
                </p>
              </div>
              <div className="rounded-2xl bg-neutral-900 p-3">
                <p className="text-neutral-200">
                  このデモは別ドメインで公開予定です。本番導入前の PoC
                  として利用いただけます。
                </p>
              </div>
            </div>
          </div>

          {/* Copy + buttons */}
          <div className="space-y-5 text-sm">
            <p className="text-neutral-200">
              「Okapi Demo」は、ナレッジ連携・権限管理・チャット UI
              など、エンタープライズ AI
              エージェントの基本機能を一通り触っていただけるデモ環境です。
            </p>
            <ul className="space-y-2 text-neutral-300">
              <li>・ナレッジアップロードと RAG の挙動を確認</li>
              <li>・エージェントのプロンプト / 方針をカスタマイズ</li>
              <li>・日本語業務での応答品質を事前検証</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://demo.example.com" // TODO: 换成你真实的新域名
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
              >
                新ページへ（デモを見る）
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-500 px-6 py-3 text-xs font-medium text-neutral-50 hover:bg-neutral-800 transition-colors"
              >
                導入相談をする
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

