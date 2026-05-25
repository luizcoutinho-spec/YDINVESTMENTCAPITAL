"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Pillar {
  title: string;
  description: string;
}

export default function WhyYD() {
  const t = useTranslations("whyYD");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = t.raw("pillars") as Pillar[];

  return (
    <section
      ref={ref}
      className="bg-yd-graphite section-padding py-section lg:py-section-lg border-b border-yd-graphite-border"
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-28"
            >
              <span className="eyebrow block mb-6">{t("eyebrow")}</span>
              <h2 className="font-display text-display-lg text-yd-off-white mb-8 leading-tight">
                {t("headline")}
              </h2>
              <p className="text-body-lg text-yd-gray-soft leading-relaxed mb-12">
                {t("body")}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-yd-graphite-border">
                {[
                  { value: t("stat1Value"), label: t("stat1Label") },
                  { value: t("stat2Value"), label: t("stat2Label") },
                  { value: t("stat3Value"), label: t("stat3Label") },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="font-display text-3xl text-yd-off-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-yd-gray-dark">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-0">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-8 py-8 border-b border-yd-graphite-border group hover:bg-yd-graphite-light -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-0 lg:px-0 transition-colors duration-300"
              >
                <span className="text-[0.65rem] tracking-[0.12em] font-sans text-yd-gray-dark mt-1 flex-shrink-0 w-6">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl text-yd-off-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-body-sm text-yd-gray-soft leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
