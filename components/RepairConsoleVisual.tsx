export function RepairConsoleVisual() {
  return (
    <div className="fade-in float-slow relative mx-auto w-full max-w-xl">
      <div className="scanline relative overflow-hidden rounded-[8px] border border-white/10 bg-panel p-5 shadow-purpleGlow">
        <div className="rounded-[8px] border border-neonBlue/25 bg-black/55 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-neonBlue">
                Repair Bench
              </p>
              <p className="mt-1 text-2xl font-black text-white">
                Console Diagnostics
              </p>
            </div>
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-neonRed" />
              <span className="size-3 rounded-full bg-neonPurple" />
              <span className="size-3 rounded-full bg-neonBlue" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[1fr_0.8fr]">
            <div className="rounded-[8px] border border-white/10 bg-ink p-4">
              <div className="mx-auto h-36 w-52 rounded-[2rem] border-2 border-slate-500 bg-gradient-to-br from-slate-900 to-slate-700 p-4 shadow-glow">
                <div className="h-full rounded-2xl border border-neonBlue/35 bg-black/70">
                  <div className="mx-auto mt-4 h-2 w-20 rounded-full bg-neonBlue/80" />
                  <div className="mx-auto mt-7 grid w-28 grid-cols-3 gap-2">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-2 rounded-full bg-slate-500/70"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-neonPurple/25 bg-neonPurple/10 p-3">
                  <p className="text-xs text-slate-400">Issue</p>
                  <p className="font-bold text-white">HDMI Output</p>
                </div>
                <div className="rounded-xl border border-neonBlue/25 bg-neonBlue/10 p-3">
                  <p className="text-xs text-slate-400">Status</p>
                  <p className="font-bold text-neonBlue">Checking</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 rounded-[8px] border border-white/10 bg-ink p-4">
              {["Power test", "Port inspection", "Thermal check", "Quote ready"].map(
                (item, index) => (
                  <div key={item}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-slate-200">{item}</span>
                      <span className="text-neonBlue">{index < 3 ? "OK" : "Next"}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neonBlue to-neonPurple"
                        style={{ width: `${index < 3 ? 100 : 62}%` }}
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
