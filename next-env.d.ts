"use client";

import { FormEvent, useState } from "react";
import { phoneNumber } from "./site-data";

const deviceTypes = [
  "PS4 / PS5",
  "Nintendo Switch",
  "Xbox",
  "Steam Deck",
  "ROG Ally / Gaming handheld",
  "Controller",
  "Other"
];

export function QuoteForm() {
  const [name, setName] = useState("");
  const [device, setDevice] = useState(deviceTypes[0]);
  const [problem, setProblem] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hi SC Games, I would like to request a repair quote.",
      "",
      `Name: ${name || "-"}`,
      `Device: ${device}`,
      `Problem: ${problem || "-"}`
    ].join("\n");

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[8px] border border-white/10 bg-panel/85 p-6 shadow-purpleGlow"
    >
      <div className="grid gap-5">
        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-200">Name</span>
          <input
            className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-neonBlue"
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            type="text"
            value={name}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-200">Device type</span>
          <select
            className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition focus:border-neonBlue"
            onChange={(event) => setDevice(event.target.value)}
            value={device}
          >
            {deviceTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-200">
            Problem description
          </span>
          <textarea
            className="min-h-36 rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-neonBlue"
            onChange={(event) => setProblem(event.target.value)}
            placeholder="Example: PS5 turns on but no display after HDMI cable was pulled."
            value={problem}
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-bold text-slate-200">
            Upload image (optional)
          </span>
          <input
            className="rounded-xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-lg file:border-0 file:bg-neonPurple file:px-4 file:py-2 file:font-bold file:text-white"
            type="file"
            accept="image/*"
          />
        </label>
        <button
          type="submit"
          className="rounded-2xl bg-white px-6 py-4 font-black text-ink transition hover:-translate-y-1 hover:bg-neonBlue"
        >
          Send Quote Request
        </button>
        <p className="text-sm leading-6 text-slate-500">
          Image uploads cannot be attached automatically from a static website.
          After WhatsApp opens, attach the photo in the chat if needed.
        </p>
      </div>
    </form>
  );
}

