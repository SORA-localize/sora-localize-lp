// All page copy in EN and JA. Default lang = en.
export const content = {
  nav: {
    contact: { en: "Contact", ja: "お問い合わせ" },
  },

  hero: {
    eyebrow: {
      en: "AI-driven · Native-refined",
      ja: "AI翻訳 × ネイティブ校正",
    },
    title: {
      en: "Localization that actually reads like Japanese.",
      ja: "日本語として、自然に読める翻訳を。",
    },
    sub: {
      en: "AI delivers the speed. Native proofreaders deliver the polish. We pair both so your product feels written, not translated.",
      ja: "AIのスピードと、ネイティブによる校正の精度。両方を組み合わせて、「翻訳された文章」ではなく「最初から日本語で書かれた文章」をお届けします。",
    },
    cta_demo: { en: "Try the Live Demo →", ja: "ライブデモを見る →" },
    cta_contact: { en: "Get in touch", ja: "お問い合わせ" },
  },

  problem: {
    title: {
      en: "AI gets the meaning. Not the feeling.",
      ja: "AIは「意味」を訳せても、「感覚」までは訳せない。",
    },
    sub: {
      en: "Modern AI translation is fast and surprisingly accurate — but it slips on tone, idiom, and the unspoken rules of polite Japanese. The result is text your readers technically understand, but never quite trust.",
      ja: "最新のAI翻訳は高速で、意味の精度も高い。しかし語感や慣用表現、敬語の機微までは捉えきれません。結果として「意味は分かるが、なぜか信頼できない」文章になってしまいます。",
    },
    examples: [
      {
        label: { en: "AI translation", ja: "AI翻訳" },
        text: {
          en: "私たちはあなたのためにここにいます。",
          ja: "私たちはあなたのためにここにいます。",
        },
        note: {
          en: "Literal translation of \"We're here for you.\" — grammatically fine, but reads as a stiff, machine-translated phrase no Japanese support team would use.",
          ja: "「We're here for you.」の直訳。文法は正しいが、日本のカスタマーサポートでは絶対に使わない不自然な表現。",
        },
      },
      {
        label: { en: "Native proofread", ja: "ネイティブ校正後" },
        text: {
          en: "いつでもお気軽にご相談ください。",
          ja: "いつでもお気軽にご相談ください。",
        },
        note: {
          en: "Same intent, but written the way a real Japanese support agent would say it. Warm, polite, expected.",
          ja: "意図は同じだが、日本のサポート担当者が実際に使う言い回しに。温かく、丁寧で、自然。",
        },
      },
    ],
  },

  process: {
    title: {
      en: "How we work.",
      ja: "ワークフロー。",
    },
    steps: [
      {
        n: "01",
        title: { en: "AI translates", ja: "AIで翻訳" },
        body: {
          en: "We run your source text through Claude Sonnet 4.6 to produce a complete, fluent first pass — fast.",
          ja: "Claude Sonnet 4.6 を用いて、原文を一括で翻訳。高速かつ流暢な初稿を作成します。",
        },
      },
      {
        n: "02",
        title: { en: "Natives proofread", ja: "ネイティブが校正" },
        body: {
          en: "A native Japanese proofreader rewrites awkward output, fixes tone, and adapts cultural nuance line by line.",
          ja: "ネイティブの校正者が一行ずつ手を入れ、不自然な箇所を修正、トーンや文化的なニュアンスを調整します。",
        },
      },
      {
        n: "03",
        title: { en: "We show our work", ja: "校正履歴を可視化" },
        body: {
          en: "Every change is highlighted with a hover-able note explaining the why. You see exactly what the human added on top of the machine.",
          ja: "すべての修正にはホバーで表示されるメモを添付。「なぜそう直したか」が一目でわかり、AIに人間が何を加えたかが透明に伝わります。",
        },
      },
    ],
  },

  demo: {
    title: {
      en: "See it for yourself.",
      ja: "実際に確かめてください。",
    },
    sub: {
      en: "We rebuilt a real e-commerce site in three modes — Original, AI-only, and Native-proofread. Toggle between them and hover any yellow underline to see exactly what we changed and why.",
      ja: "実在のECサイトを Original / AI / Proofread の3モードで再構築しました。モードを切り替え、黄色い下線にホバーすると、変更内容とその理由が即座に確認できます。",
    },
    cta: { en: "Open the demo →", ja: "デモを開く →" },
  },

  contact: {
    title: {
      en: "Talk to us.",
      ja: "お問い合わせ。",
    },
    sub: {
      en: "Send us your text, your product, or just a question. We typically reply within 24 hours.",
      ja: "翻訳したい文章、プロダクト、ご相談など、お気軽にお送りください。通常24時間以内にご返信します。",
    },
    email_label: { en: "Email", ja: "メール" },
    phone_label: { en: "Phone", ja: "電話" },
    follow_label: { en: "Follow", ja: "SNS" },
  },

  footer: {
    rights: {
      en: "© 2026 SORA Localize. All rights reserved.",
      ja: "© 2026 SORA Localize 無断転載・複製禁止",
    },
  },
};
