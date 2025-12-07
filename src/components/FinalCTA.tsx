import { CONTACT_CONTENT } from "@/data/landing-page";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-neutral-900 text-neutral-50 border-t border-neutral-800"
    >
      <div className="mx-auto max-w-3xl px-4 text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {CONTACT_CONTENT.title}
        </h2>
        <p className="text-lg text-neutral-300">
          {CONTACT_CONTENT.subtitle}
        </p>
        
        <div className="max-w-md mx-auto bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-left space-y-4 shadow-2xl">
          <div className="space-y-2">
            <label className="text-xs text-neutral-400 uppercase tracking-wider">
              会社名
            </label>
            <input
              type="text"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-neutral-400 uppercase tracking-wider">
              ご担当者名
            </label>
            <input
              type="text"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs text-neutral-400 uppercase tracking-wider">
              メールアドレス
            </label>
            <input
              type="email"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 transition-colors"
            />
          </div>
          <button className="w-full bg-white text-neutral-900 font-bold py-3 rounded-lg hover:bg-neutral-200 transition-colors mt-4">
            送信する
          </button>
        </div>
      </div>
    </section>
  );
}
