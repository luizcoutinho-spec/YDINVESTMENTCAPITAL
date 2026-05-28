"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";

const locales = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "fr", label: "FR" },
];

export default function Navigation() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const getLocalePath = (targetLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    if (locales.some((l) => l.code === segments[0])) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    return "/" + segments.join("/");
  };

  const navLinks = [
    { href: `/${locale}/strategic-finance`, label: t("strategicFinance") },
    { href: `/${locale}/investment-capital`, label: t("investmentCapital") },
    { href: `/${locale}/industries`, label: t("industries") },
    { href: `/${locale}/portfolio`, label: t("portfolio") },
    { href: `/${locale}/insights`, label: t("insights") },
    { href: `/${locale}/about`, label: t("about") },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-yd-black/95 backdrop-blur-sm border-b border-yd-graphite-border"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 xl:px-16">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-18 md:h-20 gap-x-8 xl:gap-x-12">

            {/* Logo */}
            <Link
              href={`/${locale}`}
              className="flex items-center group shrink-0"
            >
              <span className="font-sans text-[1.05rem] tracking-[-0.01em] text-yd-off-white leading-none whitespace-nowrap">
                <span className="font-bold">YD</span>
                <span className="font-light text-yd-gray-soft mx-2">|</span>
                <span className="font-light">Investment Capital</span>
              </span>
            </Link>

            {/* Desktop Nav — centered */}
            <nav className="hidden xl:flex items-center justify-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "text-[0.6rem] tracking-[0.1em] uppercase font-sans font-medium transition-colors duration-200 link-underline whitespace-nowrap",
                      isActive
                        ? "text-yd-off-white"
                        : "text-yd-gray-soft hover:text-yd-off-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Language + CTA */}
            <div className="hidden xl:flex items-center gap-5 shrink-0">
              <div className="flex items-center gap-2.5">
                {locales.map((loc) => (
                  <Link
                    key={loc.code}
                    href={getLocalePath(loc.code)}
                    className={clsx(
                      "text-[0.6rem] tracking-[0.12em] font-sans font-medium transition-colors duration-200",
                      locale === loc.code
                        ? "text-yd-off-white"
                        : "text-yd-gray-mid hover:text-yd-gray-muted"
                    )}
                  >
                    {loc.label}
                  </Link>
                ))}
              </div>
              <Link
                href={`/${locale}/contact`}
                className="text-[0.6rem] tracking-[0.12em] uppercase font-sans font-medium text-yd-black bg-yd-off-white px-4 py-2.5 hover:bg-yd-cream transition-colors duration-200 whitespace-nowrap"
              >
                {t("scheduleAssessment")}
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden flex flex-col gap-1.5 p-2 col-start-3"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-yd-off-white origin-center"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-px bg-yd-off-white"
                transition={{ duration: 0.3 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-yd-off-white origin-center"
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-yd-black flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center section-padding">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className="font-display text-display-md text-yd-off-white hover:text-yd-metallic transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12 flex flex-col gap-6"
              >
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex text-[0.7rem] tracking-[0.12em] uppercase font-sans font-medium text-yd-black bg-yd-off-white px-6 py-3 w-fit"
                >
                  {t("scheduleAssessment")}
                </Link>
                <div className="flex items-center gap-5">
                  {locales.map((loc) => (
                    <Link
                      key={loc.code}
                      href={getLocalePath(loc.code)}
                      className={clsx(
                        "text-[0.7rem] tracking-[0.12em] font-sans font-medium",
                        locale === loc.code
                          ? "text-yd-off-white"
                          : "text-yd-gray-mid"
                      )}
                    >
                      {loc.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
