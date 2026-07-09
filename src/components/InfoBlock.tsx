import type { LucideIcon } from "lucide-react";

export const InfoBlock = (props: {
  icon: LucideIcon;
  title: string;
  text: string;
}) => {
  return (
    <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 transition-all hover:border-[var(--accent-red)]/30 hover:shadow-card">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent-red)]/10 text-[var(--accent-red)]">
        <props.icon
          size={24}
          strokeWidth={1.5}
          className="text-[var(--accent-red)]"
        />
      </div>
      <h3 className="mb-2 text-base font-semibold text-[var(--text-primary)]">
        {props.title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        {props.text}
      </p>
    </div>
  );
};
