import { CtaBand } from "@/components/CtaBand";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata = {
  title: "About SC Games Holiday Plaza",
  description:
    "Learn about SC Games, a specialist gaming console micro-repair shop at Holiday Plaza, Johor Bahru."
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="About"
            title="A local repair shop built on honesty and gaming passion."
            copy="SC Games is run with the kind of practical care customers remember: explain the problem clearly, quote fairly, and repair only what makes sense."
          />
          <div className="space-y-5 rounded-[8px] border border-white/10 bg-panel/80 p-6 text-lg leading-8 text-slate-300 shadow-purpleGlow">
            <p>
              The shop supports gamers around Holiday Plaza, Johor Bahru and
              nearby Malaysia areas with console, handheld and controller
              repair services. Whether the issue is a damaged HDMI port,
              controller drift, storage corruption or a board-level fault, the
              goal is to help customers understand the repair before committing.
            </p>
            <p>
              Because the business is family-run, trust matters. Customers are
              treated with respect, devices are handled carefully, and repair
              recommendations are given honestly, even when replacement or
              waiting for parts is the better choice.
            </p>
            <p>
              At the heart of SC Games is a simple idea: games should
              be played, not left broken on a shelf. The shop helps local gamers
              get back to their favorite worlds with reliable service and clear
              communication.
            </p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

