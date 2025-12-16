export function Products({
  backgroundClass = "bg-[#FAFAFA]",
}: {
  backgroundClass?: string;
}) {
  return (
    <section id="products" className={`py-24 ${backgroundClass}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-neutral-400">
            ご提供するサービス
          </p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight text-neutral-900">
            Services
          </h2>
          <p className="mt-4 text-sm text-neutral-600 max-w-3xl">
            Okapi は、AI エージェントの構築から既存エージェントの改善、業務自動化、
            UI/アプリ・クラウド基盤までをフルカスタムで提供する
            エンドツーエンドのソリューションパートナーです。
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Custom AI Agent */}
          <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              Custom AI Agent
            </p>
            <h3 className="text-lg font-bold text-neutral-900 mb-1">
              自律型AIエージェント開発
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              汎用品では到達できない、貴社業務に特化した「専用ブレイン」を構築します。
              複雑な文脈理解から自律的なタスク遂行まで、AIがただの道具ではなく“最良のパートナー”へと進化します。
            </p>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                高度な意図理解： 曖昧な指示も正確に汲み取るマルチターン対話設計
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                動的オーケストレーション： 状況に応じて最適解を導く自律フロー
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                Deep Memory： 過去の文脈を長期記憶し、対話をパーソナライズ
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                Enterprise RAG： 社内データ構造に最適化した高精度な回答生成
              </li>
            </ul>
          </div>

          {/* 2. 既存AIエージェントの改善・チューニング */}
          <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              AI Diagnostic &amp; Tuning
            </p>
            <h3 className="text-lg font-bold text-neutral-900 mb-3">
              既存エージェント診断・再構築
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              改善の限界を迎えた既存のエージェントに対し、詳細な構造解析を行います。
              複雑化した処理フローを整理し、エラー原因を即座に特定できる「デバッグ可能なAI」へと再設計します。
            </p>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                トレーサビリティの確保： 思考プロセスを逆追跡できるログ基盤の構築
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                ボトルネックの特定： 精度低下の原因箇所（Node）を迅速に検知
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                出力精度の継続的評価： 出力内容を意味論レベルで検証する評価パイプラインの構築。意図との乖離を継続的にテストし、回答品質の劣化を防止。
              </li>
            </ul>
          </div>

          {/* 3. Workflow Automation */}
          <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              Workflow Automation
            </p>
            <h3 className="text-lg font-bold text-neutral-900 mb-3">
              AI実装・業務プロセス統合
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              AIを「新しい別ツール」として導入するのではなく、既存の業務フローやシステム環境の中に自然に溶け込ませます。
              前処理から基幹システムへの連携まで、人間が介在していたプロセスをエンドツーエンドで自動化・効率化します。
            </p>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                非構造化データのマルチモーダル処理： PDF・Excel等のドキュメントから画像・音声まで、あらゆる情報を構造化データへ自動変換
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                基幹システム・SaaSとの深化連携： APIを通じた双方向同期により、Salesforceやkintone等の既存資産を活かしたままAIを統合
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                イベント駆動（Event-Driven）型基盤： クラウドネイティブな設計により、メール受信やデータ更新をトリガーとするリアルタイム処理を実現
              </li>
            </ul>
          </div>

          {/* 4. Full-Stack AI Solutions */}
          <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition">
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">
              Full-Stack AI Solutions
            </p>
            <h3 className="text-lg font-bold text-neutral-900 mb-3">
              UI/UXデザイン・アプリケーション開発
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-3">
              優れたAIも、使いやすいインターフェース（UI）がなければ業務には定着しません。
              AIエンジンを動かすためのバックエンドから、ユーザーがエージェントを指揮・監督するフロントエンドアプリまで、
              実運用に必要なすべてのレイヤーをワンストップで構築・提供します。
            </p>
            <ul className="text-sm text-neutral-600 space-y-2">
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                AIネイティブな業務インターフェース： チャット形式に留まらず、エージェントの自律的な行動（Action）を可視化・承認・制御するための専用UIを設計。
                人が介在する（Human-in-the-loop）ワークフローを直感的に実現します。
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                マルチプラットフォーム展開： Web、Mobile（Native）、Desktopまで、利用シーンに合わせた最適なアプリケーションで提供
              </li>
              <li className="flex gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                エンタープライズ級の堅牢性： 認証基盤・セキュリティ・スケーラビリティを完備した、プロダクションレベルのシステム構築
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
