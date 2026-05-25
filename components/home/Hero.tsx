"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-28 overflow-hidden bg-yd-black">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,243,239,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,243,239,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yd-black via-transparent to-yd-black/60 pointer-events-none" />

      {/* Subtle radial accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-yd-metallic/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container-wide section-padding">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-4 mb-10">
            <span className="block w-8 h-px bg-yd-metallic" />
            <span className="eyebrow">{t("eyebrow")}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-display text-display-2xl text-yd-off-white leading-[1.0] tracking-[-0.03em] mb-8"
          >
            {t("headline")}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-body-lg text-yd-gray-soft max-w-2xl mb-12 leading-relaxed"
          >
            {t("subheadline")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center text-[0.7rem] tracking-[0.1em] uppercase font-sans font-medium text-yd-black bg-yd-off-white px-8 py-4 hover:bg-yd-cream transition-colors duration-300"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              href={`/${locale}/strategic-finance`}
              className="inline-flex items-center justify-center gap-3 text-[0.7rem] tracking-[0.1em] uppercase font-sans font-medium text-yd-gray-soft border border-yd-graphite-border px-8 py-4 hover:border-yd-gray-mid hover:text-yd-off-white transition-colors duration-300"
            >
              {t("ctaSecondary")}
              <span className="text-lg leading-none">→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 border-t border-yd-graphite-border"
        >
          <div className="container-wide section-padding flex items-center justify-between py-5">
            <span className="text-[0.65rem] tracking-[0.15em] uppercase text-yd-gray-dark font-sans">
              Est. 2014
            </span>
            <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.12em] uppercase text-yd-gray-dark font-sans">
              <span className="block w-3 h-px bg-yd-gray-dark animate-pulse" />
              {t("scrollLabel")}
            </div>
            <span className="text-[0.65rem] tracking-[0.15em] uppercase text-yd-gray-dark font-sans">
              São Paulo · Johannesburg · London
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
