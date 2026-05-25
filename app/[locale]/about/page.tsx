import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ExecutiveCTA from "@/components/home/ExecutiveCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("eyebrow") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  type Value = { title: string; description: string };

  const values = t.raw("values") as Value[];
  const locations = t.raw("locations") as string[];

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

      {/* Mission */}
      <section className="bg-yd-graphite section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-display-md text-yd-off-white mb-6">
                {t("missionHeadline")}
              </h2>
              <p className="text-body-lg text-yd-gray-soft leading-relaxed">
                {t("missionBody")}
              </p>
            </div>
            <div>
              <h2 className="font-display text-display-md text-yd-off-white mb-6">
                {t("philosophyHeadline")}
              </h2>
              <p className="text-body-lg text-yd-gray-soft leading-relaxed">
                {t("philosophyBody")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-yd-black section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <h2 className="font-display text-display-md text-yd-off-white mb-16">
            {t("valuesHeadline")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-yd-graphite-border">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-yd-black p-10 lg:p-14 hover:bg-yd-graphite transition-colors duration-500"
              >
                <span className="text-[0.65rem] tracking-[0.12em] font-sans text-yd-gray-dark block mb-4">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl text-yd-off-white mb-4">
                  {value.title}
                </h3>
                <p className="text-body-md text-yd-gray-soft leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="bg-yd-graphite section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-display-md text-yd-off-white mb-6">
                {t("presenceHeadline")}
              </h2>
              <p className="text-body-lg text-yd-gray-soft leading-relaxed mb-10">
                {t("presenceBody")}
              </p>
              <ul className="flex flex-col gap-4">
                {locations.map((location, i) => (
                  <li key={i} className="flex items-center gap-4 py-4 border-b border-yd-graphite-border">
                    <span className="w-3 h-px bg-yd-metallic block flex-shrink-0" />
                    <span className="text-body-md text-yd-off-white">{location}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-end">
              <div className="border border-yd-graphite-border p-10 w-full">
                <p className="font-display text-display-md text-yd-off-white mb-2">2014</p>
                <p className="text-body-sm text-yd-gray-soft mb-8">Founded</p>
                <p className="font-display text-display-md text-yd-off-white mb-2">40+</p>
                <p className="text-body-sm text-yd-gray-soft mb-8">Portfolio Companies</p>
                <p className="font-display text-display-md text-yd-off-white mb-2">3</p>
                <p className="text-body-sm text-yd-gray-soft">Continents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExecutiveCTA />
    </>
  );
}
