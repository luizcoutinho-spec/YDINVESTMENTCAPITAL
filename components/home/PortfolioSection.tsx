"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Company {
  name: string;
  sector: string;
  region: string;
  description: string;
  outcome: string;
}

export default function PortfolioSection() {
  const t = useTranslations("portfolio");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const companies = t.raw("companies") as Company[];

  return (
    <section
      ref={ref}
      className="bg-yd-graphite section-padding py-section lg:py-section-lg border-b border-yd-graphite-border"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow block mb-4">{t("eyebrow")}</span>
            <h2 className="font-display text-display-lg text-yd-off-white leading-tight">
              {t("headline")}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href={`/${locale}/portfolio`}
              className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.1em] uppercase font-sans font-medium text-yd-gray-soft hover:text-yd-off-white transition-colors duration-200 group"
            >
              {t("cta")}
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-body-lg text-yd-gray-soft max-w-2xl mb-16"
        >
          {t("subheadline")}
        </motion.p>

        {/* Companies */}
        <div className="flex flex-col gap-0">
          {companies.map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-yd-graphite-border group hover:bg-yd-graphite-light -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 xl:-mx-28 xl:px-28 transition-colors duration-300 cursor-default"
            >
              <div className="md:col-span-3">
                <p className="font-display text-lg text-yd-off-white mb-1">
                  {company.name}
                </p>
                <p className="text-[0.65rem] tracking-[0.1em] uppercase font-sans text-yd-gray-dark">
                  {company.sector}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-body-sm text-yd-gray-soft">{company.region}</p>
              </div>
              <div className="md:col-span-4">
                <p className="text-body-sm text-yd-gray-soft leading-relaxed">
                  {company.description}
                </p>
              </div>
              <div className="md:col-span-3 md:text-right">
                <p className="text-body-sm text-yd-metallic font-medium">
                  {company.outcome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
