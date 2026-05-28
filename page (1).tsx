import { CtaBand } from "@/components/CtaBand";
import { RepairConsoleVisual } from "@/components/RepairConsoleVisual";
import { SectionHeader } from "@/components/SectionHeader";
import { address, benefits, pricing, services, whatsappHref } from "@/components/site-data";

const mapSrc =
  "https://www.google.com/maps?q=Holiday%20Plaza%20Johor%20Bahru&output=embed";

export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden border-b border-white/10 px-4 pt-28 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10 bg-grid bg-[length:42px_42px] opacity-40" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_70%_20%,rgba(27,255,181,0.14),transparent_28rem),radial-gradient(circle_at_20%_25%,rgba(53,214,255,0.18),transparent_30rem)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.06fr_0.94fr] lg:pb-28">
          <div className="fade-in">
            <p className="mb-4 inline-flex rounded-full border border-neonBlue/30 bg-neonBlue/10 px-4 py-2 text-sm font-semibold text-neonBlue shadow-glow">
              SC Games Holiday Plaza | LG 91, Johor Bahru
            </p>
            <h1 className="max-w-5xl text-4xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Don&apos;t Replace Your Board. Repair It. Chip-Level Gaming
              Console Micro-Repair Specialists.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Based in Holiday Plaza, JB. We specialize in advanced motherboard
              diagnostics, micro-soldering, and complex hardware/software
              recovery that standard retail shops can&apos;t handle.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="rounded-2xl bg-neonBlue px-6 py-4 text-center font-bold text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white"
              >
                Get a Free Diagnosis Estimate
              </a>
              <a
                href="#location"
                className="rounded-2xl border border-white/15 px-6 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-neonPurple hover:bg-white/5"
              >
                See Our Location (LG 91)
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-[8px] border border-white/10 bg-white/[0.045] p-4"
                >
                  <p className="text-sm font-black text-neonBlue">
                    {benefit.icon}
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <RepairConsoleVisual />
        </div>
      </section>

      <section
        id="specializations"
        className="px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why SC Games Is Different"
            title="Precision diagnostics before expensive replacement."
            copy="Most failed consoles do not need guesswork. They need measured testing, clean soldering, and a technician who understands board-level failure."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[8px] border border-neonRed/25 bg-neonRed/10 p-7">
              <p className="text-sm font-black uppercase text-neonRed">
                The Standard Shop Approach
              </p>
              <h2 className="mt-4 text-2xl font-black text-white">
                Replace the whole mainboard.
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                They don&apos;t have the tools. They will tell you to replace
                the entire mainboard, costing almost as much as a new console.
              </p>
            </article>
            <article className="rounded-[8px] border border-neonBlue/30 bg-neonBlue/10 p-7 shadow-glow">
              <p className="text-sm font-black uppercase text-neonBlue">
                The SC Games Precision Approach
              </p>
              <h2 className="mt-4 text-2xl font-black text-white">
                Repair the exact failing component.
              </h2>
              <p className="mt-4 leading-8 text-slate-300">
                We use thermal diagnostics, multi-meters, and micro-soldering
                to isolate and replace the exact failing component, like a
                single capacitor or IC chip, saving you hundreds of Ringgit.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Technical Specializations"
            title="Advanced console repair for failures standard counters avoid."
            copy="Each repair starts with diagnosis. From there, we decide whether the fault is port-level, component-level, firmware-level, or storage-level."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[8px] border border-line bg-panel/80 p-6 transition hover:-translate-y-1 hover:border-neonBlue/60 hover:shadow-glow"
              >
                <p className="text-sm font-bold uppercase text-neonPurple">
                  {service.platform}
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  <span className="font-bold text-white">Technical details: </span>
                  {service.description}
                </p>
                {"common" in service ? (
                  <p className="mt-4 leading-7 text-slate-400">
                    <span className="font-bold text-neonBlue">Common fixes: </span>
                    {service.common}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pricing & Services"
            title="Transparent estimates, final quote after bench diagnosis."
            copy="Micro-repair pricing depends on model, fault severity, previous repair attempts, and parts availability."
          />
          <div className="mt-10 overflow-hidden rounded-[8px] border border-white/10 bg-panel/80">
            <div className="grid grid-cols-[1fr_auto] border-b border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-black uppercase text-slate-400">
              <span>Service</span>
              <span>Estimate</span>
            </div>
            {pricing.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/10 px-5 py-5 last:border-b-0"
              >
                <span className="font-bold text-white">{item.name}</span>
                <span className="rounded-xl border border-neonBlue/30 bg-neonBlue/10 px-4 py-2 text-right font-black text-neonBlue">
                  {item.range}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="location"
        className="border-y border-white/10 bg-black/20 px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Location & Hours"
            title="Drop Off Your Gear at the Hub"
            copy="Perfect location for students and working professionals to drop off consoles after classes or work."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-5">
              <div className="rounded-[8px] border border-white/10 bg-panel/80 p-6">
                <p className="text-sm font-black uppercase text-neonBlue">
                  Address
                </p>
                <p className="mt-4 leading-8 text-slate-300">{address}</p>
              </div>
              <div className="rounded-[8px] border border-white/10 bg-panel/80 p-6">
                <p className="text-sm font-black uppercase text-neonPurple">
                  Operating Hours
                </p>
                <p className="mt-4 text-2xl font-black text-white">
                  Monday to Sunday
                </p>
                <p className="mt-2 text-xl font-bold text-neonBlue">
                  1:00 PM - 9:30 PM
                </p>
                <p className="mt-3 text-slate-400">Open Daily</p>
              </div>
            </div>
            <div className="min-h-[24rem] overflow-hidden rounded-[8px] border border-neonBlue/25 bg-panel shadow-glow">
              <iframe
                aria-label="Holiday Plaza Johor Bahru map"
                className="h-full min-h-[24rem] w-full border-0 grayscale invert"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={mapSrc}
                title="Holiday Plaza Johor Bahru map"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

