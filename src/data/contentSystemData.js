export const DEFAULT_SAMPLE_CAROUSEL = {
  topic: '5 Ways Artificial Intelligence Is Changing the Future of Work',
  rawIdea: 'How AI is fundamentally transforming professional work, replacing routine drafting, enabling solo founders to scale, and why human taste matters more than ever.',
  targetAudience: 'Startup Founders, Tech Leaders & Knowledge Workers',
  platform: 'LinkedIn',
  tone: 'Thought-Provoking & Actionable',
  slideCount: 8,
  author: {
    name: 'Aman Mathur',
    handle: '@amanmathur',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    title: 'Founder & AI Systems Architect'
  },
  slides: [
    {
      id: 1,
      type: 'hook',
      tag: '01 / HOOK',
      headline: "AI Won't Take Your Job. But Someone Using AI Might.",
      subheadline: '5 seismic shifts redefining knowledge work in 2026 and how founders can stay indispensable.',
      badge: 'Future of Work',
      note: 'Hook designed to challenge conventional anxiety and shift focus to proactive agency.'
    },
    {
      id: 2,
      type: 'problem',
      tag: '02 / SHIFT 1',
      headline: 'The Death of the Blank Canvas',
      subheadline: 'Ideation time has collapsed from 4 hours to 4 minutes. Drafting is no longer the bottleneck—curation, taste, and critical editing are.',
      badge: 'Speed of Thought',
      note: 'Contextualizes how the initial friction of content creation has been permanently eliminated.'
    },
    {
      id: 3,
      type: 'context',
      tag: '03 / SHIFT 2',
      headline: 'The 1-Person Billion-Dollar Company',
      subheadline: 'Solo founders now orchestrate autonomous AI agents for code reviews, financial reporting, and customer triage without hiring 10-person support departments.',
      badge: 'Solopreneur Scale',
      note: 'Highlights the rise of agentic leverage across early-stage startups.'
    },
    {
      id: 4,
      type: 'insight',
      tag: '04 / SHIFT 3',
      headline: 'Junior Roles Become Orchestration Roles',
      subheadline: 'Memorizing syntax is commoditized. Defining clear system prompts, validating agent outputs, and handling edge cases are the new core competencies.',
      badge: 'New Skill Stack',
      note: 'Crucial career advice for students and young professionals.'
    },
    {
      id: 5,
      type: 'insight',
      tag: '05 / SHIFT 4',
      headline: 'Multimodal Speed of Conversation',
      subheadline: 'Audio memos transform instantly into formatted reports, SQL queries, and visual slides. Analysis happens synchronously while walking your dog.',
      badge: 'Workflow Velocity',
      note: 'Demonstrates cross-modal fluidity replacing rigid keyboard entry.'
    },
    {
      id: 6,
      type: 'insight',
      tag: '06 / SHIFT 5',
      headline: 'Hyper-Personalized Client Delivery',
      subheadline: 'Standardized pitch decks and generic proposals are dead. AI customizes every deliverable to the client’s industry filings and brand voice in seconds.',
      badge: 'Custom at Scale',
      note: 'Explains the competitive advantage of precision sales outreach.'
    },
    {
      id: 7,
      type: 'takeaway',
      tag: '07 / PLAYBOOK',
      headline: 'Your 3-Point Action Playbook',
      subheadline: '1. Audit your repetitive 20% tasks. 2. Build custom GPT / Claude team projects. 3. Treat AI as your 24/7 tireless research associate.',
      badge: 'Actionable Steps',
      note: 'Practical takeaway giving immediate value to readers.'
    },
    {
      id: 8,
      type: 'cta',
      tag: '08 / NEXT STEPS',
      headline: 'Are You Building with AI or Watching from the Sidelines?',
      subheadline: 'Save this carousel for your next team standup. Repost to help another founder upgrade their workflow. What is your go-to AI tool today?',
      badge: 'Join the Discussion',
      note: 'High-engagement call-to-action driving comments and reposts.'
    }
  ]
};

export const VISUAL_THEMES = [
  {
    id: 'theme-dark',
    name: 'Obsidian Tech (Dark)',
    bgClass: 'bg-slate-950 text-white',
    cardBg: 'bg-slate-900/90 border-slate-800',
    headlineColor: 'text-white',
    subheadlineColor: 'text-slate-300',
    accentColor: 'text-indigo-400',
    badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    tagColor: 'text-indigo-400',
    dotActive: 'bg-indigo-500'
  },
  {
    id: 'theme-cyber',
    name: 'Cyber Violet',
    bgClass: 'bg-gradient-to-br from-violet-950 via-slate-950 to-indigo-950 text-white',
    cardBg: 'bg-slate-900/80 border-violet-800/40',
    headlineColor: 'text-violet-100',
    subheadlineColor: 'text-slate-300',
    accentColor: 'text-violet-400',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    tagColor: 'text-violet-400',
    dotActive: 'bg-violet-500'
  },
  {
    id: 'theme-cream',
    name: 'Editorial Cream',
    bgClass: 'bg-[#FAF7F0] text-stone-900',
    cardBg: 'bg-white border-stone-200/80 shadow-soft-sm',
    headlineColor: 'text-stone-900',
    subheadlineColor: 'text-stone-600',
    accentColor: 'text-emerald-800',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    tagColor: 'text-terracotta-500',
    dotActive: 'bg-stone-900'
  },
  {
    id: 'theme-cobalt',
    name: 'Cobalt Enterprise',
    bgClass: 'bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 text-white',
    cardBg: 'bg-slate-900/80 border-blue-800/40',
    headlineColor: 'text-blue-100',
    subheadlineColor: 'text-slate-300',
    accentColor: 'text-cyan-400',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    tagColor: 'text-cyan-400',
    dotActive: 'bg-cyan-500'
  }
];

export const RESEARCH_OUTLINE = {
  mainTopic: 'Impact of Generative AI and Autonomous Agents on Modern Knowledge Work',
  keyInsights: [
    'Cognitive offloading: AI handles boilerplate drafting, shifting human value to curation and prompt orchestration.',
    'Solopreneur leverage: Small teams achieve the technological output of 50-person enterprises using agent loops.',
    'Multimodal speed: Audio transcription and real-time vision allow content synthesis on the go.',
    'Hyper-personalization: Standard templates fail; tailored, data-rich carousel formats generate 4.2x higher engagement on LinkedIn.'
  ],
  contentOutline: [
    { stage: 'Slide 1 (Hook)', intent: 'Provocative contrast statement addressing career security vs. AI tool adoption.' },
    { stage: 'Slides 2-3 (Problem & Context)', intent: 'Shift from drafting friction to high-velocity curation.' },
    { stage: 'Slides 4-6 (Core Information)', intent: 'Agent workflows, multimodal synthesis, and personalized client deliverables.' },
    { stage: 'Slide 7 (Takeaway)', intent: 'Actionable 3-point framework founders can implement today.' },
    { stage: 'Slide 8 (Call to Action)', intent: 'Prompt audience comments, bookmarking, and network sharing.' }
  ],
  importantPoints: [
    'Always avoid generic buzzwords; use tangible examples like SEC 10-K analysis or PR code reviews.',
    'Keep slide headlines under 10 words for immediate mobile thumb-stopping power.',
    'Limit subheadlines to 2-3 concise sentences with high information density.'
  ]
};

export const RECOMMENDED_AI_TOOLS = [
  {
    name: 'ChatGPT / Claude 3.5 Sonnet',
    role: 'Deep Research & Content Structuring',
    category: 'LLM Reasoning Engine',
    description: 'Ingests raw founder thoughts, conducts contextual industry research, organizes logical arguments, and drafts punchy slide copy with strict character constraints.',
    integration: 'API webhook triggers automated drafting whenever a new thought note is tagged in Apple Notes or Notion.'
  },
  {
    name: 'Canva Automate / Bannerbear API',
    role: 'Visual Design & Carousel Rendering',
    category: 'Dynamic Image Generation',
    description: 'Takes structured JSON slide copy and dynamically populates pre-branded carousel design templates with exact typography, brand colors, and margins.',
    integration: 'REST API endpoint renders high-resolution PNG / PDF slide decks directly into Google Drive.'
  },
  {
    name: 'Make.com / n8n',
    role: 'Workflow Automation & Orchestration',
    category: 'No-Code Automation Engine',
    description: 'The glue linking idea capture, AI synthesis, image rendering, and scheduled publishing without requiring a dedicated developer.',
    integration: 'Orchestrates multi-step webhook pipeline: Founder Idea → Claude Prompt → Data Formatting → Canva Render → Notification.'
  },
  {
    name: 'Google Drive / Notion',
    role: 'Content Storage & Asset Library',
    category: 'Central Asset Repository',
    description: 'Stores generated slide decks, transcripts, raw transcripts, and post-performance analytics in organized client/topic folders.',
    integration: 'Automatically saves exported PDF and PNG files into a `Drafts for Review` folder with approval status tags.'
  }
];

export const WORKFLOW_STAGES = [
  {
    step: '1',
    title: 'Founder Idea Input',
    desc: 'Founder types or dictates a raw unpolished idea, chooses target platform, audience, and preferred tone.'
  },
  {
    step: '2',
    title: 'AI Research & Contextualization',
    desc: 'LLM engine (Claude/ChatGPT) gathers context, validates statistics, and structures the core insights.'
  },
  {
    step: '3',
    title: 'Content Structuring',
    desc: 'Transforms raw insights into a proven 5-to-10 slide storytelling arc (Hook → Context → Value → CTA).'
  },
  {
    step: '4',
    title: 'Headline & Copy Generation',
    desc: 'Applies hook copywriting formulas, optimizes character counts for mobile thumbs, and generates subcopy.'
  },
  {
    step: '5',
    title: 'Visual Design Generation',
    desc: 'Recommends high-contrast color palettes, typography pairings, aspect ratios (4:5 Portrait / 1:1 Square).'
  },
  {
    step: '6',
    title: 'Carousel Studio Preview',
    desc: 'Interactive live canvas allows founder to preview slides, toggle themes, and edit headlines in real-time.'
  },
  {
    step: '7',
    title: 'Founder Review & Refinement',
    desc: 'Founder makes final aesthetic tweaks, adjusts wording, and approves the generated slides.'
  },
  {
    step: '8',
    title: 'Export & Publishing Pipeline',
    desc: 'Exports ready-to-post PDF / PNG assets, copies markdown caption, or triggers automated Buffer / LinkedIn publishing.'
  }
];

