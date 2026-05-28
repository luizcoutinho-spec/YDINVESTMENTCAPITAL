import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "../globals.css";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: {
      template: `%s | ${t("siteName")}`,
      default: t("siteName"),
    },
    description: t("siteDescription"),
    metadataBase: new URL("https://www.ydinvestmentcapital.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        pt: "/pt",
        fr: "/fr",
      },
    },
    openGraph: {
      siteName: t("siteName"),
      locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pt" | "fr")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-yd-black text-yd-off-white antialiased noise-overlay">
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
