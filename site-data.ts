import { whatsappHref } from "./site-data";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref}
      aria-label="Chat with SC Games on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-400 px-5 py-3 text-sm font-black text-ink shadow-[0_0_36px_rgba(52,211,153,0.36)] transition hover:-translate-y-1 hover:bg-white"
    >
      <span className="text-lg">WA</span>
      <span className="hidden sm:inline">WhatsApp Quote</span>
    </a>
  );
}

