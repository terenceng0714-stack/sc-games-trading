import { whatsappHref } from "./site-data";

export function CtaBand() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-neonBlue/25 bg-gradient-to-r from-neonBlue/15 via-neonPurple/15 to-neonRed/15 p-8 shadow-glow sm:p-10">
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-neonBlue">
              Get Quote in 1 Minute
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Send your device model and problem on WhatsApp.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Add photos or a short video if possible. We will guide you on the
              likely repair path and estimated range.
            </p>
          </div>
          <a
            href={whatsappHref}
            className="rounded-2xl bg-white px-6 py-4 text-center font-black text-ink transition hover:-translate-y-1 hover:bg-neonBlue"
          >
            Get Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
