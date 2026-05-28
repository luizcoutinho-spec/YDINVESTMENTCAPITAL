import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import Hero from "@/components/home/Hero";
import PositioningBar from "@/components/home/PositioningBar";
import StrategicFinanceSection from "@/components/home/StrategicFinanceSection";
import WhyYD from "@/components/home/WhyYD";
import FounderIntelligence from "@/components/home/FounderIntelligence";
import PortfolioSection from "@/components/home/PortfolioSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import InsightsSection from "@/components/home/InsightsSection";
import ExecutiveCTA from "@/components/home/ExecutiveCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("siteName"),
    description: t("siteDescription"),
  };
}

export default async function HomePage() {
  const locale = await getLocale();
  return (
    <>
      <Hero />
      {locale !== "fr" && <PositioningBar />}
      <StrategicFinanceSection />
      <WhyYD />
      <FounderIntelligence />
      <PortfolioSection />
      <IndustriesSection />
      <InsightsSection />
      <ExecutiveCTA />
    </>
  );
}
