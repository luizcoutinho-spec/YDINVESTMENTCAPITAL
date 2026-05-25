import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ExecutiveCTA from "@/components/home/ExecutiveCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insightsPage" });
  return { title: t("eyebrow") };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "insightsPage" });

  type Featured = { category: string; title: string; excerpt: string; readTime: string; date: string };
  type Article = { category: string; title: string; excerpt: string; readTime: string; date: string };

  const featured = t.raw("featured") as Featured;
  const articles = t.raw("articles") as Article[];

  return (
    <>
      {/* Hero */}
      <section className="bg-yd-black section-padding pt-40 pb-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="max-w-4xl">
            <span className="eyebrow block mb-6">{t("eyebrow")}</span>
            <h1 className="font-display text-display-xl text-yd-off-white mb-8 leading-tight">
              {t("headline")}
            </h1>
            <p className="text-body-lg text-yd-gray-soft leading-relaxed max-w-2xl">
              {t("heroBody")}
            </p>
          </div>
        </div>
      </section>

      {/* Featured article */}
      <section className="bg-yd-graphite section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <span className="eyebrow text-yd-metallic block mb-4">{featured.category}</span>
              <h2 className="font-display text-display-lg text-yd-off-white mb-6 leading-tight">
                {featured.title}
              </h2>
              <p className="text-body-lg text-yd-gray-soft leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-6">
                <span className="text-[0.65rem] tracking-[0.1em] uppercase font-sans text-yd-gray-dark">
                  {featured.date}
                </span>
                <span className="text-[0.65rem] tracking-[0.1em] uppercase font-sans text-yd-gray-dark">
                  {featured.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-yd-black section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-yd-graphite-border">
            {articles.map((article, i) => (
              <div
                key={i}
                className="bg-yd-black p-10 group hover:bg-yd-graphite transition-colors duration-500 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="eyebrow text-yd-metallic">{article.category}</span>
                  <span className="text-[0.6rem] tracking-[0.08em] text-yd-gray-dark font-sans">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-display text-xl text-yd-off-white leading-snug mb-4 group-hover:text-yd-cream transition-colors duration-200">
                  {article.title}
                </h3>
                <p className="text-body-sm text-yd-gray-soft leading-relaxed mb-8">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] tracking-[0.08em] text-yd-gray-dark font-sans">
                    {article.date}
                  </span>
                  <span className="text-[0.65rem] tracking-[0.1em] uppercase font-sans text-yd-gray-dark group-hover:text-yd-metallic transition-colors duration-200">
                    Read →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExecutiveCTA />
    </>
  );
}
