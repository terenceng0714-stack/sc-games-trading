import { whatsappHref } from "./site-data";

export function CtaBand() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-neonBlue/25 bg-gradient-to-r from-neonBlue/15 via-neonPurple/15 to-neonRed/15 p-8 shadow-glow sm:p-10">
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-black uppercase text-neonBlue">
              Consult a Technician
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">
              Got a dead console or wandering controller? Let us fix it right the first time.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-300">
              Send the model, fault symptoms, and clear photos. A technician
              will guide you on diagnosis, repair options, and next steps.
            </p>
          </div>
          <a
            href={whatsappHref}
            className="rounded-2xl bg-white px-6 py-4 text-center font-black text-ink transition hover:-translate-y-1 hover:bg-neonBlue"
          >
            Get a Free Diagnosis Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

