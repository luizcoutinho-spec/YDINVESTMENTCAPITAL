"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function PositioningBar() {
  const t = useTranslations("positioningBar");
  const items = t.raw("items") as string[];
  const doubled = [...items, ...items];

  return (
    <section className="border-y border-yd-graphite-border bg-yd-graphite overflow-hidden py-5">
      <div className="flex">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex items-center whitespace-nowrap"
        >
          {doubled.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[0.65rem] tracking-[0.18em] uppercase font-sans font-medium text-yd-gray-soft px-10">
                {item}
              </span>
              <span className="text-yd-graphite-border">·</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
