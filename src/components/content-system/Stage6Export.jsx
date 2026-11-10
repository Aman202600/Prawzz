import React, { useState } from 'react';
import {
  Download,
  Copy,
  CheckCircle2,
  FileCode,
  Share2,
  Sparkles,
  ExternalLink,
  Workflow,
  Printer,
  Layers,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Stage6Export({
  carousel,
  slides,
  selectedThemeId,
  onViewArchitecture
}) {
  const [copiedType, setCopiedType] = useState(null);
  const [webhookSimulated, setWebhookSimulated] = useState(false);

  // 1. Copy as Markdown Caption & Slides
  const handleCopyMarkdown = () => {
    let md = `# ${carousel.topic}\n\n`;
    md += `By ${carousel.author.name} (${carousel.author.handle})\n\n`;
    md += `Target Audience: ${carousel.targetAudience} | Platform: ${carousel.platform}\n\n---\n\n`;

    slides.forEach((s, idx) => {
      md += `### Slide ${idx + 1}: ${s.headline}\n`;
      md += `**Tag:** ${s.tag} | **Badge:** ${s.badge}\n\n`;
      md += `${s.subheadline}\n\n---\n\n`;
    });

    navigator.clipboard.writeText(md);
    setCopiedType('markdown');
    setTimeout(() => setCopiedType(null), 2500);
  };

  // 2. Download JSON Schema for Canva Bulk Create / Bannerbear
  const handleDownloadJSON = () => {
    const data = {
      meta: {
        topic: carousel.topic,
        platform: carousel.platform,
        theme: selectedThemeId,
        author: carousel.author,
        generatedAt: new Date().toISOString()
      },
      slides: slides.map((s) => ({
        slideNumber: s.id,
        tag: s.tag,
        headline: s.headline,
        subheadline: s.subheadline,
        badge: s.badge
      }))
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `carousel-${carousel.topic.toLowerCase().replace(/[^a-z0-9]/g, '-')}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setCopiedType('json');
    setTimeout(() => setCopiedType(null), 2500);
  };

  // 3. Download Standalone Printable HTML
  const handleDownloadHTML = () => {
    const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${carousel.topic}</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0b0f19; color: #fff; padding: 40px; margin: 0; }
    h1 { color: #a78bfa; margin-bottom: 30px; }
    .slide-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
    .slide-card { background: #131b2e; border: 1px solid #1f293d; border-radius: 20px; padding: 28px; aspect-ratio: 4/5; display: flex; flex-direction: column; justify-content: space-between; }
    .badge { background: rgba(167, 139, 250, 0.15); color: #c4b5fd; padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: bold; width: fit-content; }
    .headline { font-size: 20px; font-weight: 800; margin: 20px 0 10px 0; color: #f8fafc; }
    .sub { font-size: 13px; color: #94a3b8; line-height: 1.5; }
    .footer { font-size: 11px; color: #64748b; border-top: 1px solid #1e293b; padding-top: 12px; }
  </style>
</head>
<body>
  <h1>${carousel.topic}</h1>
  <div class="slide-grid">
    ${slides.map((s, i) => `
      <div class="slide-card">
        <span class="badge">${s.badge}</span>
        <div>
          <div style="font-size: 11px; color: #818cf8; font-weight: bold; margin-bottom: 6px;">SLIDE ${i + 1}</div>
          <div class="headline">${s.headline}</div>
          <div class="sub">${s.subheadline}</div>
        </div>
        <div class="footer">${carousel.author.name} • ${carousel.platform} Carousel</div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `carousel-deck.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 4. Simulate Webhook Dispatch
  const handleSimulateWebhook = () => {
    setWebhookSimulated(true);
    try {
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-xs font-bold uppercase tracking-wider border border-violet-500/20">
          <Download className="w-3.5 h-3.5" />
          <span>Stage 6 • Export & Publishing Handoff</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
          Export Content & Automate Production
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
          Export your generated carousel assets, copy formatted captions, download structured JSON for automated bulk design, or trigger your automated publishing webhook.
        </p>
      </div>

      {/* Export Action Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* 1. Copy Markdown */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="h-10 w-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center mb-3">
              <Copy className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Copy as Social Post & Markdown
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mt-1">
              Copies all slide headlines, body text, and hashtags into your clipboard ready to paste into Notion or LinkedIn post composer.
            </p>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            {copiedType === 'markdown' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Post Markdown</span>
              </>
            )}
          </button>
        </div>

        {/* 2. Download JSON Schema for Canva Bulk Create */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="h-10 w-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center mb-3">
              <FileCode className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Download Structured JSON Schema
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mt-1">
              Formatted JSON data ready for Canva Bulk Create CSV/JSON import or automated Bannerbear API generation.
            </p>
          </div>

          <button
            onClick={handleDownloadJSON}
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            {copiedType === 'json' ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">JSON Downloaded!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Schema (JSON)</span>
              </>
            )}
          </button>
        </div>

        {/* 3. Download HTML Printable Slides */}
        <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="h-10 w-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-3">
              <Printer className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Export Printable HTML Deck
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mt-1">
              Generates a standalone standalone HTML deck containing all slides rendered at 4:5 aspect ratio, ready to print to PDF.
            </p>
          </div>

          <button
            onClick={handleDownloadHTML}
            className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Download HTML Deck</span>
          </button>
        </div>

        {/* 4. Automated Webhook Simulation */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-950/60 to-slate-900 border border-violet-800/50 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="h-10 w-10 rounded-xl bg-violet-600/30 text-violet-300 border border-violet-500/40 flex items-center justify-center mb-3">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">
              Trigger Automation Pipeline (Make/n8n)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mt-1">
              Simulate dispatching a webhook payload to your Make / n8n workflow to trigger automatic Canva slide rendering and Google Drive backup.
            </p>
          </div>

          <button
            onClick={handleSimulateWebhook}
            className="w-full py-3 px-4 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-violet-600/30 transition-all active:scale-95"
          >
            {webhookSimulated ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Webhook Dispatched (Simulated)</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-violet-200" />
                <span>Simulate Webhook Trigger</span>
              </>
            )}
          </button>
        </div>

      </div>

      {/* Editable Design Handoff Concept for Canva / Figma */}
      <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
          <Layers className="w-4 h-4 text-violet-400" />
          <span>Editable Design Handoff Concept</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="font-bold text-violet-300">1. Template Key Binding</span>
            <p className="text-slate-400 leading-relaxed">
              Canva templates contain data-bind tags: <code className="text-indigo-300">#headline</code>, <code className="text-indigo-300">#subheadline</code>, <code className="text-indigo-300">#tag</code>.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="font-bold text-violet-300">2. Bulk Ingestion</span>
            <p className="text-slate-400 leading-relaxed">
              Upload the exported JSON/CSV into Canva Bulk Create. It automatically generates all slides in under 5 seconds.
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
            <span className="font-bold text-violet-300">3. Multi-Page PDF Export</span>
            <p className="text-slate-400 leading-relaxed">
              Download as standard multi-page PDF document format required for native LinkedIn Carousel uploads.
            </p>
          </div>
        </div>
      </div>

      {/* View Architecture & Tools Hub CTA */}
      <div className="pt-2 flex justify-between items-center">
        <span className="text-xs text-slate-500 font-mono">
          Stage 6 Complete
        </span>

        <button
          onClick={onViewArchitecture}
          className="px-6 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all active:scale-95"
        >
          <span>View Complete Architecture & Tools Guide</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

