import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe, Smartphone, Crosshair, Brain, Microscope, Building2,
  ArrowRight, ChevronDown, Mail, Zap, Terminal, Bot, Sparkles,
  Search, Cpu, FileText, ShieldCheck, Lock, AlertTriangle,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-8 rounded-full border border-border/60 bg-card/70 backdrop-blur-xl px-6 py-3 shadow-card">
        <a href="#" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="text-muted-foreground">[</span>
          <span className="font-bold">VOID</span>
          <span className="text-primary">/</span>
          <span className="font-bold">SEC</span>
          <span className="text-muted-foreground">]</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#ai" className="hover:text-primary transition">AI_Ops</a>
          <a href="#process" className="hover:text-primary transition">Process</a>
          <a href="#about" className="hover:text-primary transition">About</a>
        </div>
        <a href="#contact" className="rounded-md border border-primary/60 text-primary px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] hover:bg-primary/10 transition">
          Contact_us
        </a>
      </nav>
    </header>
  );
}

function TickerStrip() {
  const items = [
    "CVE-2026-1337 — 0-Day RCE in FreeBSD Kernel",
    "CRITICAL: Auth bypass in enterprise VPN discovered",
    "AI-assisted fuzzing found 12 new memory corruption bugs",
    "Completed red team engagement for Tier-1 bank",
    "SQL injection chain to RCE — financial platform patched",
    "Claude-assisted code review flagged logic bypass in auth",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-primary/20 bg-card/40 py-3 overflow-hidden">
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "scroll 60s linear infinite" }}>
        {row.map((t, i) => (
          <span key={i} className="font-mono text-xs text-primary/80 flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Hero() {
  const carets = [
    { top: "18%", left: "8%", rot: 0, color: "primary", delay: "0s" },
    { top: "30%", right: "8%", rot: 180, color: "muted", delay: "0.5s" },
    { bottom: "20%", left: "12%", rot: 0, color: "primary", delay: "1s" },
    { bottom: "30%", right: "10%", rot: 180, color: "muted", delay: "1.5s" },
    { top: "60%", left: "4%", rot: 180, color: "muted", delay: "0.8s" },
    { top: "15%", right: "18%", rot: 180, color: "primary", delay: "0.3s" },
  ];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      {carets.map((c, i) => (
        <div
          key={i}
          className={c.color === "primary" ? "absolute text-primary animate-float-up" : "absolute text-muted-foreground/40 animate-float-down"}
          style={{ ...c, animationDelay: c.delay }}
        >
          <svg width="50" height="30" viewBox="0 0 50 30" fill="none" style={{ transform: `rotate(${c.rot}deg)` }}>
            <path d="M5 25 L25 5 L45 25" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-mono text-primary mb-8"
        >
          <Terminal className="w-3.5 h-3.5" />
          ~/voidsec$ ./init-engagement.sh --target world --mode offensive
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]"
        >
          We break things <span className="text-gradient">before you do.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Elite AI-augmented penetration testing and vulnerability research. We use frontier models to surface the bugs your scanners miss — then we help you fix them for good.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4 flex-wrap"
        >
          <a href="#contact" className="rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-105 transition inline-flex items-center gap-2" style={{ background: "var(--gradient-primary)" }}>
            <Zap className="w-4 h-4" /> Engage us
          </a>
          <a href="#services" className="group flex items-center gap-3 text-foreground/90 hover:text-primary transition">
            <span className="grid place-items-center w-10 h-10 rounded-full border border-border group-hover:border-primary transition">
              <ArrowRight className="w-4 h-4" />
            </span>
            View services
          </a>
        </motion.div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "200+", l: "CVEs discovered" },
    { n: "98%", l: "Critical find rate" },
    { n: "50+", l: "Clients secured" },
    { n: "0.0", l: "Breaches post-audit" },
  ];
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
        {stats.map((s, i) => (
          <div key={i} className="bg-card p-8 text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient">{s.n}</div>
            <div className="mt-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { id: "SVC_01", icon: Globe, title: "Web App Pentesting", desc: "Full-scope OWASP Top 10 and beyond. Business logic flaws, auth bypasses, IDOR chains, SSRF-to-RCE and second-order injections — we find what automated scanners never will.", tags: ["OWASP TOP 10", "BUSINESS LOGIC", "AUTH BYPASS", "SSRF"] },
    { id: "SVC_02", icon: Smartphone, title: "Mobile App Security", desc: "iOS and Android deep-dive. Runtime analysis, traffic interception, insecure data storage, reverse engineering, certificate pinning bypass and native code audits.", tags: ["ANDROID", "iOS", "FRIDA", "JADX"] },
    { id: "SVC_03", icon: Crosshair, title: "Red Team Operations", desc: "Full adversary simulation from OSINT to domain compromise. Phishing, C2 infrastructure, lateral movement and data exfiltration — we test your entire kill chain.", tags: ["C2", "LATERAL MOVEMENT", "OSINT", "COBALT STRIKE"] },
    { id: "SVC_04", icon: Brain, title: "AI Security Testing", desc: "Prompt injection, jailbreaking, model extraction, training data poisoning and adversarial inputs. We secure your AI systems against next-gen attack vectors.", tags: ["PROMPT INJECTION", "LLM JAILBREAK", "MODEL THEFT", "RAG ATTACKS"] },
    { id: "SVC_05", icon: Microscope, title: "Vulnerability Research", desc: "0-day discovery, fuzzing campaigns, binary analysis and kernel exploitation. AI-augmented research pipeline that finds bugs months before attackers do.", tags: ["0-DAY", "FUZZING", "BINARY ANALYSIS", "CVE"] },
    { id: "SVC_06", icon: Building2, title: "Secure By Design", desc: "Threat modeling, secure architecture review, SDLC integration and developer security training. We bake security in from day zero, not bolt it on at the end.", tags: ["STRIDE", "THREAT MODEL", "SDLC", "TRAINING"] },
  ];
  return (
    <section id="services" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">// CAPABILITIES</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-gradient">craft</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          We attack with the mindset of nation-state actors. Every engagement is custom, every finding is exploitable proof-of-concept.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition" />
              <div className="flex items-center justify-between mb-6">
                <Icon className="w-8 h-8 text-primary" />
                <span className="font-mono text-xs text-muted-foreground">{s.id}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] tracking-wider text-primary/80 border border-primary/20 rounded px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function AiOps() {
  const flow = [
    { icon: Search, title: "Recon → Analysis", desc: "Models process target data, identify attack surface and suggest non-obvious entry points." },
    { icon: Cpu, title: "Fuzz → Exploit", desc: "AI-guided fuzzing generates variant payloads, analyzes crashes and escalates to working PoC." },
    { icon: FileText, title: "Report → Remediate", desc: "Every finding comes with CVSS score, exploitation chain and developer-ready fix guidance." },
  ];
  return (
    <section id="ai" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">// HOW WE ATTACK</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          AI-augmented <span className="text-gradient">hacking</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          We co-pilot every engagement with frontier models. Our AI pipeline handles reconnaissance, variant analysis and exploit generation — letting our researchers focus on novel attack chains.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          {flow.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 grid place-items-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{f.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-card">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background/50">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-destructive/60" />
              <span className="w-3 h-3 rounded-full bg-primary/60" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
            </div>
            <span className="font-mono text-xs text-muted-foreground ml-3">voidsec-ai-recon.sh — bash</span>
          </div>
          <pre className="p-6 font-mono text-xs leading-relaxed text-foreground/90 overflow-x-auto">
{`voidsec@kali:~/engagement$ ./ai-recon.sh target.com

`}<span className="text-muted-foreground"># Initializing recon pipeline...</span>{`
`}<span className="text-primary">✓</span>{` API handshake complete
`}<span className="text-primary">✓</span>{` Scope loaded: 14 domains, 3 IP ranges

`}<span className="text-muted-foreground"># Enumerating attack surface</span>{`
`}<span className="text-primary">✓</span>{` Subdomains discovered: 847
`}<span className="text-primary">✓</span>{` Live endpoints: 312
`}<span className="text-primary">✓</span>{` Open ports mapped: 4,201

`}<span className="text-muted-foreground"># AI analysis: priority targets</span>{`
`}<span className="text-destructive">⚠ CRITICAL:</span>{` Legacy API endpoint found
  → /api/v1/admin/export?format=csv
  # No auth required — potential SQLi

`}<span className="text-destructive">⚠ HIGH:</span>{` JWT algorithm confusion vector
  → RS256 → HS256 downgrade possible

`}<span className="text-muted-foreground"># Launching exploit chain verification...</span>{`
`}<span className="text-primary">✓ RCE CONFIRMED</span>{` — CVE pending`}
          </pre>
        </div>
      </div>
    </section>
  );
}

function AiPartners() {
  const partners = [
    { icon: Brain, name: "Anthropic Claude", desc: "Code analysis, exploit reasoning, vulnerability research, report generation.", tag: "PRIMARY" },
    { icon: Sparkles, name: "OpenAI GPT-4o", desc: "Multimodal analysis, binary interpretation, phishing simulation, social engineering.", tag: "ACTIVE" },
    { icon: Bot, name: "Custom fine-tuned models", desc: "CVE pattern matching, exploit variant generation, CVSS scoring automation.", tag: "INTERNAL" },
    { icon: Zap, name: "AI-powered fuzzing", desc: "Intelligent corpus generation, crash triage, minimal PoC extraction via LLM.", tag: "R&D" },
  ];
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">// AI PARTNERSHIPS</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Powered by the <span className="text-gradient">best models</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          We work directly with frontier AI labs. Our researchers use cutting-edge models to discover attack vectors impossible to find manually at scale.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {partners.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 transition flex gap-6">
              <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="font-mono text-[10px] tracking-wider text-primary border border-primary/30 rounded px-2 py-0.5 shrink-0">
                    {p.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Scoping", desc: "Define targets, rules of engagement, threat model and success criteria with your team." },
    { n: "02", title: "Recon", desc: "AI-augmented OSINT, surface mapping, tech stack fingerprinting and supply chain analysis." },
    { n: "03", title: "Attack", desc: "Manual exploitation, AI-assisted fuzzing, chained vulnerability discovery and PoC development." },
    { n: "04", title: "Report", desc: "Executive summary, full technical writeups, CVSS scores, exploitation walkthroughs and remediation guide." },
    { n: "05", title: "Retest", desc: "Verify all fixes, validate security posture and issue a clean Letter of Attestation." },
  ];
  const [active, setActive] = useState(0);
  return (
    <section id="process" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">// METHODOLOGY</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          The <span className="text-gradient">engagement flow</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          Every engagement follows our battle-tested offensive methodology.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-3">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-full text-left rounded-2xl border p-6 transition ${
                active === i
                  ? "border-primary bg-primary/5 shadow-glow"
                  : "border-border bg-card hover:border-border/80"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className={`font-mono text-sm ${active === i ? "text-primary" : "text-muted-foreground"}`}>{s.n}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg uppercase tracking-wider">{s.title}</h3>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 text-muted-foreground text-sm"
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="sticky top-24 self-start">
          <div className="relative rounded-3xl border border-border bg-card p-10 overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">// PHASE_{steps[active].n}</p>
              <h3 className="text-4xl font-bold tracking-tight mb-6 uppercase">{steps[active].title}</h3>
              <p className="text-muted-foreground">{steps[active].desc}</p>
              <div className="mt-8 grid grid-cols-5 gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full ${i <= active ? "bg-primary" : "bg-border"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { q: "The most innovative penetration testing team I've ever worked with. They took 15 years off my life with their creative approaches to destroying my faith in every security control.", name: "J. Higgins", role: "CISO at CoreWeave" },
    { q: "Their AI-assisted research uncovered RCE in the FreeBSD kernel and classic text editors. The sheer depth of technical competence is invaluable for any high-stakes project.", name: "A. Nguyen", role: "Security Researcher, Google" },
    { q: "High-caliber penetration testing with world-class researchers. Security testing with an unparalleled level of quality. I don't do shout-outs often.", name: "R. Reinders", role: "CISO, Public Company" },
    { q: "The assessment market is crowded — it's hard to find firms that truly stand out. These are top-tier red teamers who know their craft.", name: "R. Kazanciyan", role: "CIO & CISO at Wiz" },
    { q: "A good red team engagement is indistinguishable from art. Another outstanding engagement — these researchers are true artists of their craft.", name: "R. Kugler", role: "VP Security at Cresta" },
    { q: "Consistently strong technical insight and excellent to collaborate with. Hands-on security work that makes a real difference.", name: "K. Hurley", role: "Co-founder / CTO at Lightspark" },
  ];
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">// WHAT THEY SAY</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          In good <span className="text-gradient">company</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.08 }}
            className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition"
          >
            <div className="text-4xl text-primary/40 font-serif leading-none mb-4">"</div>
            <p className="text-foreground/90 leading-relaxed">{t.q}</p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="font-mono text-sm">{t.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const services = [
    "Web Application Pentest",
    "Mobile Application Security",
    "Red Team Operation",
    "AI / LLM Security Testing",
    "Vulnerability Research",
    "Secure Architecture Review",
    "Incident Response",
  ];
  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary mb-4">// INITIATE ENGAGEMENT</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let's <span className="text-gradient">break your stuff</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-lg">
          We take on a limited number of engagements each quarter to maintain research quality. Reach out early.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="font-mono">ops@voidsec.io</div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
            <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Response SLA</div>
              <div className="font-mono">24h guaranteed</div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex items-center gap-4">
            <Lock className="w-5 h-5 text-primary shrink-0" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Secure comms</div>
              <div className="font-mono">PGP encrypted available</div>
            </div>
          </div>
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 flex gap-4">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-destructive mb-2">Notice</div>
              <p className="text-sm text-muted-foreground">
                All engagements require written authorization. We do not perform unauthorized testing under any circumstances. NDAs are executed before any scoping call.
              </p>
            </div>
          </div>
        </div>

        <form className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="First_name" placeholder="Ada" />
            <Field label="Last_name" placeholder="Lovelace" />
          </div>
          <Field label="Email_address" type="email" placeholder="you@company.com" />
          <Field label="Company" placeholder="Acme Inc." />
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Engagement_type
            </label>
            <select className="w-full rounded-md bg-background border border-border px-4 py-3 outline-none focus:border-primary transition font-mono text-sm">
              <option>Select service...</option>
              {services.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
              Scope & details
            </label>
            <textarea rows={5} placeholder="Briefly describe your target environment, goals and timeline..." className="w-full rounded-md bg-background border border-border px-4 py-3 outline-none focus:border-primary transition font-mono text-sm resize-none" />
          </div>
          <button type="submit" className="w-full rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition inline-flex items-center justify-center gap-2" style={{ background: "var(--gradient-primary)" }}>
            <Zap className="w-4 h-4" /> Initiate engagement
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full rounded-md bg-background border border-border px-4 py-3 outline-none focus:border-primary transition font-mono text-sm" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="font-mono text-sm">
          <span className="text-muted-foreground">[</span> VOID<span className="text-primary">/</span>SEC <span className="text-muted-foreground">]</span>
        </div>
        <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition">Privacy</a>
          <a href="#" className="hover:text-primary transition">Terms</a>
          <a href="#" className="hover:text-primary transition">Security.txt</a>
          <a href="#" className="hover:text-primary transition">PGP_Key</a>
        </div>
      </div>
      <p className="text-center text-xs font-mono text-muted-foreground/60 mt-8">© 2026 VOID/SEC // ALL RIGHTS RESERVED</p>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TickerStrip />
      <Stats />
      <Services />
      <AiOps />
      <AiPartners />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
export default Index;