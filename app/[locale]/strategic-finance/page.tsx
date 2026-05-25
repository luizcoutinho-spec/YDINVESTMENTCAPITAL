import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ExecutiveCTA from "@/components/home/ExecutiveCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "strategicFinancePage" });
  return { title: t("eyebrow") };
}

export default async function StrategicFinancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "strategicFinancePage" });

  type Service = { title: string; description: string; capabilities: string[] };
  type Step = { step: string; title: string; description: string };

  const services = t.raw("services") as Service[];
  const steps = t.raw("processSteps") as Step[];

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

      {/* Services */}
      <section className="bg-yd-black section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <h2 className="font-display text-display-md text-yd-off-white mb-16">
            {t("servicesHeadline")}
          </h2>
          <div className="flex flex-col gap-0">
            {services.map((service, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-yd-graphite-border"
              >
                <div className="lg:col-span-4">
                  <span className="text-[0.65rem] tracking-[0.12em] font-sans text-yd-gray-dark block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-display-sm text-yd-off-white">
                    {service.title}
                  </h3>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-body-md text-yd-gray-soft leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <ul className="flex flex-col gap-2.5">
                    {service.capabilities.map((cap, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <span className="w-3 h-px bg-yd-metallic flex-shrink-0 block" />
                        <span className="text-body-sm text-yd-gray-muted">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-yd-graphite section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <h2 className="font-display text-display-md text-yd-off-white mb-16">
            {t("processHeadline")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-yd-graphite-border">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-yd-graphite p-10 hover:bg-yd-graphite-light transition-colors duration-300"
              >
                <span className="font-display text-4xl text-yd-graphite-border block mb-6">
                  {step.step}
                </span>
                <h3 className="font-display text-xl text-yd-off-white mb-4">
                  {step.title}
                </h3>
                <p className="text-body-sm text-yd-gray-soft leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExecutiveCTA />
    </>
  );
}
