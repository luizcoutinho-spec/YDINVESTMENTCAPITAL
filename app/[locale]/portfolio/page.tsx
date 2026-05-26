import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import ExecutiveCTA from "@/components/home/ExecutiveCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolioPage" });
  return { title: t("eyebrow") };
}

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "portfolioPage" });

  type Company = {
    name: string;
    sector: string;
    region: string;
    year: string;
    description: string;
    outcome: string;
    tags: string[];
  };

  const companies = t.raw("companies") as Company[];

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

      {/* Companies */}
      <section className="bg-yd-black section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-yd-graphite-border">
            {companies.map((company, i) => (
              <div
                key={i}
                className="bg-yd-black p-10 lg:p-14 group hover:bg-yd-graphite transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[0.65rem] tracking-[0.12em] font-sans text-yd-gray-dark block mb-2">
                      {company.year}
                    </span>
                    {company.name === "Brandvakt" ? (
                      <Image
                        src="/brandvakt-logo.png"
                        alt="Brandvakt"
                        width={160}
                        height={40}
                        className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <h3 className="font-display text-2xl text-yd-off-white">
                        {company.name}
                      </h3>
                    )}
                  </div>
                  <span className="eyebrow text-yd-gray-dark">{company.sector}</span>
                </div>
                <p className="text-body-sm text-yd-gray-soft leading-relaxed mb-8">
                  {company.description}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="p-4 border border-yd-graphite-border">
                    <p className="text-[0.6rem] tracking-[0.15em] uppercase font-sans text-yd-gray-dark mb-1">
                      Outcome
                    </p>
                    <p className="text-body-sm text-yd-metallic font-medium">
                      {company.outcome}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="text-[0.6rem] tracking-[0.1em] uppercase font-sans text-yd-gray-dark border border-yd-graphite-border px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
