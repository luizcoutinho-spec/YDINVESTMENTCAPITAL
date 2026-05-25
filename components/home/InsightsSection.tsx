"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Article {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export default function InsightsSection() {
  const t = useTranslations("insights");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const articles = t.raw("articles") as Article[];

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
            transition={{ duration: 0.75 }}
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
              href={`/${locale}/insights`}
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
          className="text-body-lg text-yd-gray-soft max-w-xl mb-16"
        >
          {t("subheadline")}
        </motion.p>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-yd-graphite-border">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08 }}
              className="bg-yd-graphite p-10 lg:p-12 group hover:bg-yd-graphite-light transition-colors duration-500 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="eyebrow text-yd-metallic">{article.category}</span>
                <span className="text-[0.65rem] tracking-[0.08em] text-yd-gray-dark font-sans">
                  {article.readTime}
                </span>
              </div>
              <h3 className="font-display text-xl text-yd-off-white leading-snug mb-4 group-hover:text-yd-cream transition-colors duration-200">
                {article.title}
              </h3>
              <p className="text-body-sm text-yd-gray-soft leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.1em] uppercase font-sans text-yd-gray-dark group-hover:text-yd-metallic transition-colors duration-200">
                Read Article
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
