import { CtaBand } from "@/components/CtaBand";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeader } from "@/components/SectionHeader";
import { whatsappHref } from "@/components/site-data";

export const metadata = {
  title: "Book a Repair Quote | SC Games Holiday Plaza",
  description:
    "Request a gaming console micro-repair quote from SC Games Holiday Plaza via WhatsApp."
};

export default function BookingPage() {
  return (
    <>
      <section className="px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeader
              eyebrow="Booking & Contact"
              title="Tell us what happened to your device."
              copy="WhatsApp is the fastest way to get a quote. You can also use this form layout as the base for a future backend or form service."
            />
            <a
              href={whatsappHref}
              className="mt-8 inline-flex rounded-2xl bg-neonBlue px-6 py-4 font-black text-ink shadow-glow transition hover:-translate-y-1 hover:bg-white"
            >
              Get Quote on WhatsApp
            </a>

            <div className="mt-8 rounded-[8px] border border-white/10 bg-panel/80 p-6">
              <p className="font-black text-white">Location</p>
              <p className="mt-2 leading-7 text-slate-300">
                LG 91, Lower Ground Level, Holiday Plaza, Johor Bahru,
                Malaysia. Replace this placeholder with your exact Google Maps
                embed when ready.
              </p>
              <div className="mt-5 flex h-64 items-center justify-center rounded-[8px] border border-dashed border-neonPurple/40 bg-black/35 text-center text-slate-400">
                Google Maps Placeholder
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

