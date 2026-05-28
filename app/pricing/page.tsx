import { CtaBand } from "@/components/CtaBand";
import { SectionHeader } from "@/components/SectionHeader";
import { pricing } from "@/components/site-data";

export const metadata = {
  title: "Estimated Repair Pricing | SC GAMES TRADING",
  description:
    "Estimated gaming console and controller repair price ranges for SC GAMES TRADING in Malaysia."
};

export default function PricingPage() {
  return (
    <>
      <section className="px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Estimated repair ranges you can edit later."
            copy="Final pricing is confirmed after diagnosis because parts, device condition and model versions can change the cost."
          />
          <div className="mt-12 overflow-hidden rounded-[8px] border border-white/10 bg-panel/80">
            <div className="grid grid-cols-[1fr_auto] border-b border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-400">
              <span>Repair Type</span>
              <span>Estimate</span>
            </div>
            {pricing.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-white/10 px-5 py-5 last:border-b-0"
              >
                <span className="font-bold text-white">{item.name}</span>
                <span className="rounded-xl border border-neonBlue/30 bg-neonBlue/10 px-4 py-2 font-black text-neonBlue">
                  {item.range}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[8px] border border-neonRed/25 bg-neonRed/10 p-5 leading-7 text-slate-300">
            Prices shown are guide ranges only. For the most accurate quote,
            send photos or a short video of the issue through WhatsApp.
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
