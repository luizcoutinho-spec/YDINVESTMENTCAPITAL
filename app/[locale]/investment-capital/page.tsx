import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ExecutiveCTA from "@/components/home/ExecutiveCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "investmentCapitalPage" });
  return { title: t("eyebrow") };
}

export default async function InvestmentCapitalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "investmentCapitalPage" });

  type Criterion = { title: string; value: string; detail: string };

  const criteria = t.raw("criteria") as Criterion[];
  const valueAddItems = t.raw("valueAddItems") as string[];

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

      {/* Approach */}
      <section className="bg-yd-graphite section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-display text-display-md text-yd-off-white mb-6">
                {t("approachHeadline")}
              </h2>
              <p className="text-body-lg text-yd-gray-soft leading-relaxed">
                {t("approachBody")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-yd-graphite-border">
            {criteria.map((criterion, i) => (
              <div
                key={i}
                className="bg-yd-graphite p-10 hover:bg-yd-graphite-light transition-colors duration-300"
              >
                <p className="eyebrow mb-3">{criterion.title}</p>
                <p className="font-display text-display-sm text-yd-off-white mb-4">
                  {criterion.value}
                </p>
                <p className="text-body-sm text-yd-gray-soft leading-relaxed">
                  {criterion.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Add */}
      <section className="bg-yd-black section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-display-md text-yd-off-white mb-6">
                {t("valueAddHeadline")}
              </h2>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                {valueAddItems.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 py-4 border-b border-yd-graphite-border">
                    <span className="text-[0.65rem] tracking-[0.1em] font-sans text-yd-gray-dark w-5 flex-shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-body-md text-yd-off-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExecutiveCTA />
    </>
  );
}
