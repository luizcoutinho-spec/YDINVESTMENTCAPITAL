"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/info@brandvakt.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone") || "—",
          subject: data.get("subject") || `Nova mensagem de ${data.get("name")}`,
          message: data.get("message"),
          _subject: `[YD Investment Capital] ${data.get("subject") || `Nova mensagem de ${data.get("name")}`}`,
          _template: "table",
        }),
      });

      const json = await res.json();

      if (json.success === "true" || json.success === true) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-yd-black section-padding pt-40 pb-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="eyebrow block mb-6">{t("eyebrow")}</span>
            <h1 className="font-display text-display-xl text-yd-off-white mb-8 leading-tight">
              {t("headline")}
            </h1>
            <p className="text-body-lg text-yd-gray-soft leading-relaxed">
              {t("body")}
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-yd-graphite section-padding py-section border-b border-yd-graphite-border">
        <div className="container-wide">
          <div className="max-w-3xl">
            {submitted ? (
              <div className="py-16">
                <div className="w-8 h-px bg-yd-metallic mb-8" />
                <h2 className="font-display text-display-md text-yd-off-white mb-4">
                  {t("form.successTitle")}
                </h2>
                <p className="text-body-lg text-yd-gray-soft leading-relaxed">
                  {t("form.successBody")}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-yd-gray-soft">
                      {t("form.nameLabel")}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder={t("form.namePlaceholder")}
                      className="bg-transparent border border-yd-graphite-border text-yd-off-white placeholder-yd-gray-dark text-body-sm px-4 py-3.5 focus:outline-none focus:border-yd-gray-mid transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-yd-gray-soft">
                      {t("form.companyLabel")}
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder={t("form.companyPlaceholder")}
                      className="bg-transparent border border-yd-graphite-border text-yd-off-white placeholder-yd-gray-dark text-body-sm px-4 py-3.5 focus:outline-none focus:border-yd-gray-mid transition-colors duration-200"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-yd-gray-soft">
                      {t("form.emailLabel")}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder={t("form.emailPlaceholder")}
                      className="bg-transparent border border-yd-graphite-border text-yd-off-white placeholder-yd-gray-dark text-body-sm px-4 py-3.5 focus:outline-none focus:border-yd-gray-mid transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-yd-gray-soft">
                      {t("form.phoneLabel")}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      placeholder={t("form.phonePlaceholder")}
                      className="bg-transparent border border-yd-graphite-border text-yd-off-white placeholder-yd-gray-dark text-body-sm px-4 py-3.5 focus:outline-none focus:border-yd-gray-mid transition-colors duration-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-yd-gray-soft">
                    {t("form.subjectLabel")}
                  </label>
                  <input
                    name="subject"
                    type="text"
                    placeholder={t("form.subjectPlaceholder")}
                    className="bg-transparent border border-yd-graphite-border text-yd-off-white placeholder-yd-gray-dark text-body-sm px-4 py-3.5 focus:outline-none focus:border-yd-gray-mid transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[0.65rem] tracking-[0.12em] uppercase font-sans text-yd-gray-soft">
                    {t("form.messageLabel")}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder={t("form.messagePlaceholder")}
                    className="bg-transparent border border-yd-graphite-border text-yd-off-white placeholder-yd-gray-dark text-body-sm px-4 py-3.5 focus:outline-none focus:border-yd-gray-mid transition-colors duration-200 resize-none"
                  />
                </div>

                {error && (
                  <p className="text-[0.65rem] tracking-[0.1em] uppercase font-sans text-red-400">
                    Falha ao enviar. Tente novamente.
                  </p>
                )}

                <div className="flex justify-start pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center text-[0.7rem] tracking-[0.1em] uppercase font-sans font-medium text-yd-off-white bg-transparent border border-yd-off-white px-8 py-4 hover:bg-yd-off-white hover:text-yd-black transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    {submitting ? t("form.submitting") : t("form.submitButton")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
