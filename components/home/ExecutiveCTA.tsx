"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExecutiveCTA() {
  const t = useTranslations("executiveCTA");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-yd-off-white section-padding py-section lg:py-section-lg relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,8,8,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(8,8,8,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[0.7rem] tracking-[0.18em] uppercase font-sans font-medium text-yd-graphite-mid block mb-6"
          >
            {t("eyebrow")}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-xl text-yd-black leading-tight mb-8"
          >
            {t("headline")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-lg text-yd-gray-mid leading-relaxed max-w-2xl mb-12"
          >
            {t("body")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center text-[0.7rem] tracking-[0.1em] uppercase font-sans font-medium text-yd-off-white bg-yd-black px-8 py-4 hover:bg-yd-graphite transition-colors duration-300"
            >
              {t("cta")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 text-[0.7rem] tracking-[0.1em] uppercase font-sans font-medium text-yd-gray-mid border border-yd-gray-mid px-8 py-4 hover:border-yd-black hover:text-yd-black transition-colors duration-300"
            >
              {t("ctaSecondary")}
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[0.65rem] tracking-[0.15em] uppercase text-yd-gray-soft font-sans mt-10"
          >
            {t("footnote")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
