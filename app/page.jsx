'use client'
import { useState } from "react";
import Image from "next/image";
import { content } from "@/lib/content";

const DEMO_URL = "https://sora-localize-demo.vercel.app/";
const MAIL_URL = "mailto:sora.localize@gmail.com?subject=Free%20Japanese%20localization%20sample";

export default function Page() {
  const [lang, setLang] = useState('en');
  const t = (node) => node[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="flex-1">
        <Hero t={t} />
        <Why t={t} />
        <Services t={t} />
        <Process t={t} />
        <Examples t={t} />
        <DemoCTA t={t} />
        <Pricing t={t} />
        <Trust t={t} />
        <FinalCTA t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}

function Header({ lang, setLang, t }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Image src="/icon.png" alt="SORA Localize" width={32} height={32} className="rounded" />
          <span className="font-bold text-slate-900 text-lg tracking-tight">SORA Localize</span>
        </a>
        <div className="flex items-center gap-5">
          <a href="#how" className="hidden md:inline text-sm text-slate-600 hover:text-slate-900 transition">
            {t(content.nav.how)}
          </a>
          <a href="#pricing" className="hidden md:inline text-sm text-slate-600 hover:text-slate-900 transition">
            {t(content.nav.pricing)}
          </a>
          <a href="#contact" className="hidden sm:inline text-sm text-slate-600 hover:text-slate-900 transition">
            {t(content.nav.contact)}
          </a>
          <div className="flex items-center gap-0.5 bg-slate-100 rounded-full p-1">
            {['en', 'ja'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === l ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {l === 'en' ? 'EN' : '日本語'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section id="top" className="relative px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(239,68,68,0.08), transparent 70%)',
        }}
      />
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-5">
          {t(content.hero.eyebrow)}
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
          {t(content.hero.title)}
        </h1>
        <p className="mt-7 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          {t(content.hero.sub)}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-2">
          {content.hero.badges.map((b, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {t(b)}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={MAIL_URL}
            className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition shadow-sm hover:shadow"
          >
            {t(content.hero.cta_primary)}
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-full border border-slate-300 transition"
          >
            {t(content.hero.cta_secondary)}
          </a>
        </div>
      </div>
    </section>
  );
}

function Why({ t }) {
  return (
    <section className="px-6 py-20 sm:py-28 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
            {t(content.why.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t(content.why.title)}
          </h2>
        </div>
        <div className="md:col-span-7 space-y-5">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t(content.why.body1)}
          </p>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {t(content.why.body2)}
          </p>
          <div className="mt-7 pl-5 border-l-2 border-red-300">
            <p className="text-sm text-slate-600 leading-relaxed italic">
              {t(content.why.note)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services({ t }) {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
            {t(content.services.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t(content.services.title)}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(content.services.sub)}
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {content.services.categories.map((cat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-7 hover:border-slate-300 hover:shadow-sm transition"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-5">{t(cat.title)}</h3>
              <ul className="space-y-3">
                {cat.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500 shrink-0" />
                    <span>{t(it)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section id="how" className="px-6 py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 80% 20%, rgba(239,68,68,0.18), transparent 70%)',
        }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
            {t(content.process.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t(content.process.title)}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t(content.process.sub)}
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {content.process.steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-red-400 font-bold text-sm tracking-widest mb-3">{step.n}</div>
              <h3 className="text-xl font-bold text-white mb-3">{t(step.title)}</h3>
              <p className="text-slate-300 leading-relaxed">{t(step.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Examples({ t }) {
  const ex = content.examples;
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
            {t(ex.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t(ex.title)}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(ex.sub)}
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {ex.pairs.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-7 hover:shadow-sm transition"
            >
              <div className="space-y-4">
                <Row label={t(ex.label_original)} text={p.original} tone="muted" />
                <Row label={t(ex.label_ai)} text={p.ai} tone="ai" />
                <Row label={t(ex.label_proofread)} text={p.proofread} tone="proofread" />
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                  {t(ex.label_note)}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{t(p.note)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, text, tone }) {
  const styles = {
    muted: 'text-slate-500',
    ai: 'text-slate-400 line-through decoration-slate-300',
    proofread: 'text-slate-900 font-medium',
  };
  const labelStyles = {
    muted: 'text-slate-400',
    ai: 'text-slate-400',
    proofread: 'text-red-600',
  };
  return (
    <div className={tone === 'proofread' ? 'pl-3 border-l-2 border-red-400' : 'pl-3'}>
      <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${labelStyles[tone]}`}>
        {label}
      </div>
      <p className={`text-base leading-relaxed ${styles[tone]}`}>{text}</p>
    </div>
  );
}

function DemoCTA({ t }) {
  return (
    <section className="px-6 py-20 sm:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-red-900 p-10 sm:p-16">
          <div
            aria-hidden
            className="absolute inset-0 opacity-60"
            style={{
              background:
                'radial-gradient(ellipse 50% 70% at 90% 50%, rgba(239,68,68,0.35), transparent 70%)',
            }}
          />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-300 mb-4">
              {t(content.demo.eyebrow)}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {t(content.demo.title)}
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              {t(content.demo.sub)}
            </p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block px-7 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold rounded-full transition shadow-lg"
            >
              {t(content.demo.cta)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing({ t }) {
  return (
    <section id="pricing" className="px-6 py-20 sm:py-28 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
            {t(content.pricing.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t(content.pricing.title)}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(content.pricing.sub)}
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {content.pricing.tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 transition ${
                tier.highlight
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-900 hover:border-slate-300'
              }`}
            >
              <div
                className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                  tier.highlight ? 'text-red-400' : 'text-slate-400'
                }`}
              >
                {t(tier.name)}
              </div>
              <div
                className={`text-3xl font-extrabold tracking-tight mb-4 ${
                  tier.highlight ? 'text-white' : 'text-slate-900'
                }`}
              >
                {t(tier.price)}
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  tier.highlight ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {t(tier.body)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-xs text-slate-500 text-center">{t(content.pricing.note)}</p>
      </div>
    </section>
  );
}

function Trust({ t }) {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
            {t(content.trust.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t(content.trust.title)}
          </h2>
        </div>
        <ul className="md:col-span-7 grid sm:grid-cols-2 gap-x-6 gap-y-5">
          {content.trust.points.map((p, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckIcon />
              <span className="text-sm text-slate-700 leading-relaxed">{t(p)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-500 shrink-0 mt-0.5"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FinalCTA({ t }) {
  return (
    <section id="contact" className="relative px-6 py-24 sm:py-32 bg-slate-900 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.22), transparent 70%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-5">
          {t(content.finalCta.eyebrow)}
        </p>
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
          {t(content.finalCta.title)}
        </h2>
        <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {t(content.finalCta.sub)}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={MAIL_URL}
            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition shadow-lg"
          >
            {t(content.finalCta.cta_primary)}
          </a>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition backdrop-blur"
          >
            {t(content.finalCta.cta_secondary)}
          </a>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-base text-slate-300 mb-8">{t(content.contact.sub)}</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a
              href="mailto:sora.localize@gmail.com"
              className="block rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition text-left"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-red-300 mb-1">
                {t(content.contact.email_label)}
              </div>
              <div className="text-sm font-semibold text-white">sora.localize@gmail.com</div>
            </a>
            <a
              href="tel:+817044600019"
              className="block rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 p-5 transition text-left"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-red-300 mb-1">
                {t(content.contact.phone_label)}
              </div>
              <div className="text-sm font-semibold text-white">+81 70-4460-0019</div>
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              {t(content.contact.follow_label)}
            </span>
            <SocialLinks dark />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="px-6 py-8 border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/icon.png" alt="" width={20} height={20} className="rounded" />
          <span className="text-sm font-semibold text-slate-700">SORA Localize</span>
        </div>
        <p className="text-xs text-slate-500">{t(content.footer.rights)}</p>
      </div>
    </footer>
  );
}

function SocialLinks({ dark = false }) {
  const links = [
    {
      href: "https://www.linkedin.com/in/soheikuwashima-keio",
      label: "LinkedIn",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      href: "https://www.instagram.com/sora.localize?igsh=MTBpcTIxOThvZms4dQ%3D%3D&utm_source=qr",
      label: "Instagram",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="ig_grad_lp" cx="30%" cy="107%" r="150%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </radialGradient>
          </defs>
          <path
            fill="url(#ig_grad_lp)"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
          />
        </svg>
      ),
    },
    {
      href: "https://www.upwork.com/freelancers/~01ae83f7d2570981bb?mp_source=share",
      label: "Upwork",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#6FDA44" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          className={`flex items-center justify-center w-10 h-10 transition rounded-full ${
            dark ? 'bg-white hover:bg-slate-100' : 'bg-slate-100 hover:bg-slate-200'
          }`}
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}
