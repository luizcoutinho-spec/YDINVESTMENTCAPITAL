import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const navLinks = [
    { href: `/${locale}/strategic-finance`, label: nav("strategicFinance") },
    { href: `/${locale}/investment-capital`, label: nav("investmentCapital") },
    { href: `/${locale}/industries`, label: nav("industries") },
    { href: `/${locale}/portfolio`, label: nav("portfolio") },
    { href: `/${locale}/insights`, label: nav("insights") },
    { href: `/${locale}/about`, label: nav("about") },
    { href: `/${locale}/contact`, label: nav("contact") },
  ];

  const services = t.raw("services_items") as string[];

  return (
    <footer className="bg-yd-graphite border-t border-yd-graphite-border">
      <div className="container-wide section-padding py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16 border-b border-yd-graphite-border">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="inline-block mb-5">
              <span className="font-sans text-[1.05rem] tracking-[-0.01em] text-yd-off-white leading-none whitespace-nowrap">
                <span className="font-bold">YD</span>
                <span className="font-light text-yd-gray-soft mx-2">|</span>
                <span className="font-light">Investment Capital</span>
              </span>
            </Link>
            <p className="text-body-sm text-yd-gray-soft leading-relaxed max-w-[260px]">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow mb-6">{t("navigation")}</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-yd-gray-soft hover:text-yd-off-white transition-colors duration-200 link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="eyebrow mb-6">{t("services")}</p>
            <ul className="flex flex-col gap-3">
              {services.map((service, i) => (
                <li key={i}>
                  <span className="text-body-sm text-yd-gray-soft">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow mb-6">{t("company")}</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:contact@ydinvestmentcapital.com"
                  className="text-body-sm text-yd-gray-soft hover:text-yd-off-white transition-colors duration-200"
                >
                  contact@ydinvestmentcapital.com
                </a>
              </li>
              <li>
                <p className="text-body-sm text-yd-gray-soft">
                  São Paulo, Brasil
                </p>
              </li>
              <li>
                <p className="text-body-sm text-yd-gray-soft">
                  Johannesburg, South Africa
                </p>
              </li>
              <li>
                <p className="text-body-sm text-yd-gray-soft">
                  London, United Kingdom
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="text-[0.7rem] tracking-[0.05em] text-yd-gray-dark font-sans">
            {t("copyright", { year })}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}`}
              className="text-[0.7rem] tracking-[0.05em] text-yd-gray-dark hover:text-yd-gray-soft transition-colors duration-200 font-sans"
            >
              {t("privacyPolicy")}
            </Link>
            <Link
              href={`/${locale}`}
              className="text-[0.7rem] tracking-[0.05em] text-yd-gray-dark hover:text-yd-gray-soft transition-colors duration-200 font-sans"
            >
              {t("termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
