export const ProfileCounter = (props: { name: string; count: number }) => {
  return (
    <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-5 text-center">
      <div className="text-3xl font-bold text-[var(--text-primary)]">
        {props.count}
      </div>
      <div className="mt-1 text-sm text-[var(--text-muted)]">{props.name}</div>
    </div>
  );
};
