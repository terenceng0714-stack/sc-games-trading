import { CtaBand } from "@/components/CtaBand";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/components/site-data";

export const metadata = {
  title: "Repair Services | SC GAMES TRADING",
  description:
    "PlayStation, Nintendo Switch, Xbox, Steam Deck, ROG Ally, controller, HDMI, screen, battery and joystick repair services in Selangor, Malaysia."
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Repair Services"
            title="Specialist help for consoles, controllers and gaming handhelds."
            copy="Choose the closest issue below, then send the device model and symptoms through WhatsApp for a quick first quote."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[8px] border border-white/10 bg-panel/80 p-6 transition hover:-translate-y-1 hover:border-neonBlue/60 hover:shadow-glow"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-neonPurple/30 bg-neonPurple/10 text-sm font-black text-neonPurple">
                  {service.platform.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  {service.platform}
                </p>
                <h2 className="mt-3 text-xl font-black text-white">
                  {service.title}
                </h2>
                <p className="mt-3 leading-7 text-slate-300">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
