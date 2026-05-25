"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Card {
  title: string;
  description: string;
  items: string[];
}

export default function StrategicFinanceSection() {
  const t = useTranslations("strategicFinance");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = t.raw("cards") as Card[];

  return (
    <section
      ref={ref}
      className="bg-yd-black section-padding py-section lg:py-section-lg border-b border-yd-graphite-border"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:mb-24">
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
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end"
          >
            <p className="text-body-lg text-yd-gray-soft leading-relaxed">
              {t("subheadline")}
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-yd-graphite-border">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-yd-black p-10 lg:p-12 group hover:bg-yd-graphite transition-colors duration-500"
            >
              <div className="flex flex-col h-full min-h-[360px]">
                <span className="text-[0.65rem] tracking-[0.15em] font-sans text-yd-gray-dark mb-6">
                  0{i + 1}
                </span>
                <h3 className="font-display text-display-sm text-yd-off-white mb-4">
                  {card.title}
                </h3>
                <p className="text-body-sm text-yd-gray-soft leading-relaxed mb-10">
                  {card.description}
                </p>
                <ul className="flex flex-col gap-3 mt-auto">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="block w-3 h-px bg-yd-metallic flex-shrink-0" />
                      <span className="text-body-sm text-yd-gray-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-end"
        >
          <Link
            href={`/${locale}/strategic-finance`}
            className="inline-flex items-center gap-3 text-[0.7rem] tracking-[0.1em] uppercase font-sans font-medium text-yd-gray-soft hover:text-yd-off-white transition-colors duration-200 group"
          >
            {t("cta")}
            <span className="text-lg group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
