import Link from "next/link";
import {
  benefits,
  pricing,
  services,
  whatsappHref
} from "@/components/site-data";
import { CtaBand } from "@/components/CtaBand";
import { SectionHeader } from "@/components/SectionHeader";
import { RepairConsoleVisual } from "@/components/RepairConsoleVisual";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 px-4 pt-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-grid bg-[length:46px_46px] opacity-35" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:pb-28">
          <div className="fade-in">
            <p className="mb-4 inline-flex rounded-full border border-neonBlue/30 bg-neonBlue/10 px-4 py-2 text-sm font-semibold text-neonBlue shadow-glow">
              Sungai Way / Selangor Console Repair
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Fast & Reliable Gaming Console Repairs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              SC GAMES TRADING helps Malaysian gamers get back online with
              honest diagnostics, practical repair advice, and careful work on
              consoles, handhelds and controllers.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                className="rounded-2xl bg-neonBlue px-6 py-4 text-center font-bold text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white"
              >
                Get Quote on WhatsApp
              </a>
              <Link
                href="/services"
                className="rounded-2xl border border-white/15 px-6 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-neonPurple hover:bg-white/5"
              >
                View Services
              </Link>
            </div>
          </div>
          <RepairConsoleVisual />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Why Local Gamers Choose Us"
            title="Repair support that feels clear, fair, and quick."
            copy="From joystick drift to no-display faults, we explain the issue before repair and keep the quote simple."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-purpleGlow transition hover:-translate-y-1 hover:border-neonBlue/50"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-neonBlue/25 bg-neonBlue/10 text-xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{benefit.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Popular Repairs"
            title="Console, handheld and controller services."
            copy="Bring in your device or message photos of the problem for a quick first estimate."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <article
                key={service.title}
                className="rounded-[8px] border border-line bg-panel/80 p-6 transition hover:-translate-y-1 hover:border-neonPurple/70"
              >
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-neonPurple">
                  {service.platform}
                </p>
                <h3 className="mt-3 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Estimated Pricing"
            title="Clear starting ranges, final quote after diagnosis."
            copy="These are editable guide prices. Exact pricing depends on device model, parts availability and fault condition."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {pricing.map((item) => (
              <div
                key={item.name}
                className="rounded-[8px] border border-white/10 bg-white/[0.045] p-5"
              >
                <p className="text-sm text-slate-400">{item.name}</p>
                <p className="mt-3 text-2xl font-black text-neonBlue">
                  {item.range}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
