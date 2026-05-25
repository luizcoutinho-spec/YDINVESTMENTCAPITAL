"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Sector {
  name: string;
  description: string;
}

export default function IndustriesSection() {
  const t = useTranslations("industries");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const sectors = t.raw("sectors") as Sector[];

  return (
    <section
      ref={ref}
      className="bg-yd-black section-padding py-section lg:py-section-lg border-b border-yd-graphite-border"
    >
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
          className="mb-16"
        >
          <span className="eyebrow block mb-4">{t("eyebrow")}</span>
          <h2 className="font-display text-display-lg text-yd-off-white leading-tight">
            {t("headline")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-yd-graphite-border">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bg-yd-black p-8 lg:p-10 group hover:bg-yd-graphite transition-colors duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[0.6rem] tracking-[0.12em] font-sans text-yd-gray-dark mt-1.5">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl text-yd-off-white leading-tight">
                  {sector.name}
                </h3>
              </div>
              <p className="text-body-sm text-yd-gray-soft leading-relaxed pl-8">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
