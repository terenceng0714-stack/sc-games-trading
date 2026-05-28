type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-neonRed">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {copy ? <p className="mt-4 leading-8 text-slate-300">{copy}</p> : null}
    </div>
  );
}
