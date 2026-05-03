'use client'
import { useState } from "react";
import Image from "next/image";
import { content } from "@/lib/content";

const DEMO_URL = "https://sora-localize-demo.vercel.app/";
const WEB3FORMS_KEY = "ff48b850-a932-4c2d-8e67-9475c8d35284";

export default function Page() {
  const [lang, setLang] = useState('en');
  const t = (node) => node[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lang} setLang={setLang} t={t} />
      <main className="flex-1">
        <Hero t={t} />
        <Why t={t} />
        <Testimonial t={t} />
        <Services t={t} />
        <Process t={t} />
        <Examples t={t} />
        <DemoCTA t={t} />
        <Pricing t={t} />
        <After t={t} />
        <Trust t={t} />
        <FormSection t={t} lang={lang} />
        <ContactBar t={t} />
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
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-full transition"
          >
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
            href="#contact"
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
        <p className="mt-6 text-xs text-slate-500">{t(content.hero.scarcity)}</p>
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

function Testimonial({ t }) {
  const tt = content.testimonial;
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-900">{t(tt.rating)}</span>
              <span className="text-slate-300">·</span>
              <span className="text-sm text-slate-600">{t(tt.jobSuccess)}</span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-600">
              {t(tt.eyebrow)}
            </span>
          </div>
          <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed">
            "{t(tt.quote)}"
          </blockquote>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">{t(tt.attribution)}</p>
            <a
              href={tt.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-red-600 hover:text-red-700 transition"
            >
              {t(tt.profileLabel)}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
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
        <div className="mt-14 grid md:grid-cols-3 gap-5 items-stretch">
          {content.pricing.tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-7 flex flex-col transition ${
                tier.highlight
                  ? 'bg-slate-900 text-white shadow-xl ring-2 ring-red-500/40'
                  : 'bg-white border border-slate-200 text-slate-900 hover:border-slate-300'
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full whitespace-nowrap shadow-sm">
                  {t(tier.badge)}
                </div>
              )}
              <div
                className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                  tier.highlight ? 'text-red-400' : 'text-slate-400'
                }`}
              >
                {t(tier.name)}
              </div>
              <div
                className={`text-3xl font-extrabold tracking-tight mb-1 ${
                  tier.highlight ? 'text-white' : 'text-slate-900'
                }`}
              >
                {t(tier.price)}
              </div>
              {tier.priceNote && (
                <div
                  className={`text-xs mb-4 ${
                    tier.highlight ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {t(tier.priceNote)}
                </div>
              )}
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  tier.highlight ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {t(tier.body)}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-slate-500 text-center max-w-3xl mx-auto leading-relaxed">
          {t(content.pricing.note)}
        </p>
      </div>
    </section>
  );
}

function After({ t }) {
  const a = content.after;
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
            {t(a.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {t(a.title)}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(a.sub)}
          </p>
        </div>
        <ol className="mt-14 relative">
          <span
            aria-hidden
            className="hidden md:block absolute left-[19px] top-2 bottom-2 w-px bg-slate-200"
          />
          {a.steps.map((step, i) => (
            <li key={i} className="relative flex gap-5 sm:gap-7 pb-10 last:pb-0">
              <div className="flex-shrink-0 flex items-start">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center shadow-sm">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>
              <div className="pt-1.5 flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t(step.title)}</h3>
                <p className="text-slate-600 leading-relaxed">{t(step.body)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Trust({ t }) {
  return (
    <section className="px-6 py-20 sm:py-24 bg-slate-50 border-y border-slate-200/60">
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

function FormSection({ t, lang }) {
  const f = content.form;
  const [state, setState] = useState({
    company: '',
    email: '',
    sections: [],
    formats: [],
    materials: '',
    fileLink: '',
    tone: '',
    notes: '',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const toggleMulti = (key, value) => {
    setState((s) => {
      const arr = s[key];
      if (arr.includes(value)) return { ...s, [key]: arr.filter((v) => v !== value) };
      if (arr.length >= 4) return s; // hard cap at 4
      return { ...s, [key]: [...arr, value] };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const sectionsText = state.sections.map((i) => f.fields.sections.options[i].en).join(', ');
    const formatsText = state.formats.map((i) => f.fields.formats.options[i].en).join(', ');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New sample request from ${state.company || 'unknown'}`,
          from_name: 'SORA Localize LP',
          company: state.company,
          email: state.email,
          sections: sectionsText,
          formats: formatsText,
          materials: state.materials,
          file_link: state.fileLink,
          tone: state.tone,
          notes: state.notes,
        }),
      });

      const data = await res.json();
      console.log('Web3Forms response:', data);
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.message || `HTTP ${res.status}`);
      }
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
      setErrorMsg(err.message || 'Network error');
    }
  };

  if (status === 'success') {
    return (
      <section id="contact" className="px-6 py-24 sm:py-32 bg-slate-900 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(239,68,68,0.22), transparent 70%)',
          }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-600 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            {t(f.success.title)}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t(f.success.body)}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="px-6 py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(239,68,68,0.18), transparent 70%)',
        }}
      />
      <div className="relative max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-4">
            {t(f.eyebrow)}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t(f.title)}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            {t(f.sub)}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-3xl p-7 sm:p-10 shadow-2xl space-y-7"
        >
          <FormField label={t(f.fields.company.label)} required>
            <input
              type="text"
              name="company"
              required
              value={state.company}
              onChange={(e) => setState({ ...state, company: e.target.value })}
              placeholder={t(f.fields.company.placeholder)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
            />
          </FormField>

          <FormField label={t(f.fields.email.label)} required>
            <input
              type="email"
              name="email"
              required
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              placeholder={t(f.fields.email.placeholder)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
            />
          </FormField>

          <MultiSelectField
            label={t(f.fields.sections.label)}
            hint={t(f.fields.sections.hint)}
            options={f.fields.sections.options}
            selected={state.sections}
            onToggle={(idx) => toggleMulti('sections', idx)}
            t={t}
            limitMessage={t(f.limit)}
          />

          <MultiSelectField
            label={t(f.fields.formats.label)}
            hint={t(f.fields.formats.hint)}
            options={f.fields.formats.options}
            selected={state.formats}
            onToggle={(idx) => toggleMulti('formats', idx)}
            t={t}
            limitMessage={t(f.limit)}
          />

          <FormField label={t(f.fields.materials.label)} hint={t(f.fields.materials.hint)}>
            <textarea
              name="materials"
              rows={4}
              value={state.materials}
              onChange={(e) => setState({ ...state, materials: e.target.value })}
              placeholder={t(f.fields.materials.placeholder)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition resize-none"
            />
          </FormField>

          <FormField label={t(f.fields.fileLink.label)} hint={t(f.fields.fileLink.hint)}>
            <input
              type="url"
              name="file_link"
              value={state.fileLink}
              onChange={(e) => setState({ ...state, fileLink: e.target.value })}
              placeholder={t(f.fields.fileLink.placeholder)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
            />
          </FormField>

          <FormField label={t(f.fields.tone.label)}>
            <select
              name="tone"
              value={state.tone}
              onChange={(e) => setState({ ...state, tone: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition"
            >
              <option value="">—</option>
              {f.fields.tone.options.map((o, i) => (
                <option key={i} value={t(o)}>
                  {t(o)}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label={t(f.fields.notes.label)}>
            <textarea
              name="notes"
              rows={3}
              value={state.notes}
              onChange={(e) => setState({ ...state, notes: e.target.value })}
              placeholder={t(f.fields.notes.placeholder)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/40 focus:border-red-500 transition resize-none"
            />
          </FormField>

          {status === 'error' && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
              <div>{t(f.error)}</div>
              {errorMsg && <div className="mt-1 text-xs text-red-600 font-mono">{errorMsg}</div>}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full px-7 py-4 bg-red-600 hover:bg-red-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-semibold rounded-full transition shadow-sm"
          >
            {status === 'submitting' ? t(f.submitting) : t(f.submit)}
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, hint, required, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {hint && <p className="text-xs text-slate-500 mb-2">{hint}</p>}
      {children}
    </div>
  );
}

function MultiSelectField({ label, hint, options, selected, onToggle, t, limitMessage }) {
  const atLimit = selected.length >= 4;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="block text-sm font-semibold text-slate-900">{label}</label>
        <span className="text-xs text-slate-500">{hint}</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {options.map((opt, i) => {
          const isChecked = selected.includes(i);
          const disabled = !isChecked && atLimit;
          return (
            <label
              key={i}
              className={`flex items-start gap-2.5 px-3.5 py-3 border rounded-xl text-sm transition cursor-pointer ${
                isChecked
                  ? 'bg-red-50 border-red-300 text-slate-900'
                  : disabled
                  ? 'bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                disabled={disabled}
                onChange={() => onToggle(i)}
                className="mt-0.5 accent-red-600"
              />
              <span className="leading-snug">{t(opt)}</span>
            </label>
          );
        })}
      </div>
      {atLimit && <p className="mt-2 text-xs text-red-600">{limitMessage}</p>}
    </div>
  );
}

function ContactBar({ t }) {
  return (
    <section className="px-6 py-12 bg-slate-900 border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm text-slate-400 mb-6">{t(content.contact.title)}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a
            href="mailto:sora.localize@gmail.com"
            className="text-sm font-semibold text-white hover:text-red-300 transition"
          >
            sora.localize@gmail.com
          </a>
          <span className="hidden sm:inline text-slate-600">·</span>
          <a
            href="tel:+817044600019"
            className="text-sm font-semibold text-white hover:text-red-300 transition"
          >
            +81 70-4460-0019
          </a>
          <span className="hidden sm:inline text-slate-600">·</span>
          <SocialLinks dark />
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
