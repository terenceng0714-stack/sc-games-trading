import Link from "next/link";
import { navItems, phoneNumber, whatsappHref } from "./site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/25 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-xl font-black text-white">SC GAMES TRADING</p>
          <p className="mt-3 max-w-md leading-7 text-slate-400">
            Gaming console, handheld and controller repair support for customers
            around Sungai Way, Selangor and nearby Malaysia areas.
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Pages</p>
          <div className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <Link
                className="text-sm text-slate-400 transition hover:text-neonBlue"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Contact</p>
          <a
            className="mt-3 block text-sm text-neonBlue"
            href={whatsappHref}
          >
            WhatsApp: +{phoneNumber}
          </a>
          <p className="mt-2 text-sm text-slate-400">
            Sungai Way / Selangor, Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
