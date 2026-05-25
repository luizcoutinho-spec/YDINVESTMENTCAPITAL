import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ExecutiveCTA from "@/components/home/ExecutiveCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industriesPage" });
  return { title: t("eyebrow") };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "industriesPage" });

  type Sector = { name: string; description: string; focus: string[] };

  const sectors = t.raw("sectors") as Sector[];

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

      {/* Sectors */}
      <section className="bg-yd-black section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="flex flex-col gap-0">
            {sectors.map((sector, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-yd-graphite-border group hover:bg-yd-graphite -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 xl:-mx-28 xl:px-28 transition-colors duration-300"
              >
                <div className="lg:col-span-4">
                  <span className="text-[0.65rem] tracking-[0.12em] font-sans text-yd-gray-dark block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-display-sm text-yd-off-white">
                    {sector.name}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-body-md text-yd-gray-soft leading-relaxed">
                    {sector.description}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <ul className="flex flex-col gap-2.5">
                    {sector.focus.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span className="w-3 h-px bg-yd-metallic flex-shrink-0 block" />
                        <span className="text-body-sm text-yd-gray-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
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
