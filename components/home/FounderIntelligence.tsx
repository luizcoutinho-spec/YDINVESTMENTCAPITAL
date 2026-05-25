"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Insight {
  quote: string;
  detail: string;
}

export default function FounderIntelligence() {
  const t = useTranslations("founderIntelligence");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const insights = t.raw("insights") as Insight[];

  return (
    <section
      ref={ref}
      className="bg-yd-black section-padding py-section lg:py-section-lg border-b border-yd-graphite-border"
    >
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20"
        >
          <div>
            <span className="eyebrow block mb-4">{t("eyebrow")}</span>
            <h2 className="font-display text-display-lg text-yd-off-white leading-tight max-w-lg">
              {t("headline")}
            </h2>
          </div>
        </motion.div>

        {/* Insight grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-yd-graphite-border">
          {insights.map((insight, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-yd-black p-10 lg:p-14 group hover:bg-yd-graphite transition-colors duration-500"
            >
              <blockquote>
                <p className="font-display text-display-sm text-yd-off-white leading-tight mb-8 italic">
                  &ldquo;{insight.quote}&rdquo;
                </p>
                <div className="w-8 h-px bg-yd-metallic mb-6" />
                <p className="text-body-sm text-yd-gray-soft leading-relaxed">
                  {insight.detail}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
