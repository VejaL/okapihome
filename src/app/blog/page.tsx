import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900 bg-neutral-50">
      <Header />

      <main className="flex-1 py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
              Okapi Insights
            </h1>
            <p className="text-lg text-neutral-600">
              AIエージェントの最新動向や技術トレンド、活用事例をお届けします。
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="aspect-[16/9] bg-neutral-100 flex items-center justify-center text-neutral-400 text-sm">
                  {/* Placeholder for blog image */}
                  Topic Image
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                    <span className="font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mt-auto pt-4 border-t border-neutral-100">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

