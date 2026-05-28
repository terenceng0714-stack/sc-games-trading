"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems, whatsappHref } from "./site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-xl border border-neonBlue/35 bg-neonBlue/10 font-black text-neonBlue shadow-glow">
            SC
          </span>
          <span>
            <span className="block text-sm font-black tracking-[0.2em] text-white">
              SC GAMES
            </span>
            <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Trading
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-neonBlue"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={whatsappHref}
          className="hidden rounded-xl border border-neonBlue/40 bg-neonBlue/10 px-4 py-2 text-sm font-bold text-neonBlue transition hover:bg-neonBlue hover:text-ink md:inline-flex"
        >
          WhatsApp
        </a>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex h-11 min-w-16 items-center justify-center rounded-xl border border-white/15 px-3 text-white md:hidden"
        >
          <span className="text-sm font-black leading-none">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-ink px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 px-4 py-3 font-semibold text-slate-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
