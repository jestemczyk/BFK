export const InfoBlock = (props: { title: string; text: string }) => {
  return (
    <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6 transition-all hover:border-[var(--accent-red)]/30 hover:shadow-card">
      <h3 className="mb-2 text-base font-semibold text-[var(--text-primary)]">
        {props.title}
      </h3>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        {props.text}
      </p>
    </div>
  );
};
