export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-ai-agent",
    title: "AIエージェントとは何か？生成AIとの違いと企業へのインパクト",
    excerpt:
      "Gartnerの知見をもとに、AIエージェントの定義、生成AIとの違い、ビジネスにもたらす価値、そして導入時に押さえるべきリスクとガバナンスのポイントをわかりやすく整理します。",
    date: "2024-12-07",
    author: "Okapi Team",
    readTime: "5 min read",
    category: "Industry Insights",
  },
];

