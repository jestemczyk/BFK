import type { LucideIcon } from "lucide-react";
import { Link } from "react-router";

export const ProfileNav = (props: {
  icon: LucideIcon;
  title: string;
  counter: number;
  subtitle: string;
  route: string;
}) => {
  return (
    <Link
      to={props.route}
      className="group block cursor-pointer rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 transition-all hover:border-[var(--accent-red)]/30 hover:shadow-card"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <props.icon
            size={24}
            strokeWidth={1.5}
            className="text-[var(--accent-red)]"
          />
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            {props.title}
          </h2>
          <span className="rounded-full bg-[var(--accent-red)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--accent-red)]">
            {props.counter}
          </span>
        </div>
        <span className="text-sm text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent-red)]">
          Перайсьці →
        </span>
      </div>
      <p className="mt-2 text-sm text-[var(--text-muted)]">{props.subtitle}</p>
    </Link>
  );
};
