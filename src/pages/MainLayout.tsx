import { Outlet, useLocation } from "react-router";
import { NavButton } from "../components/NavButton";

export const MainLayout = () => {
  const currentPage = useLocation().pathname;
  return (
    <>
      <header className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-4">
        <div className="mx-auto max-w-8xl">
          <div className="mb-4 flex items-end justify-between cursor-pointer">
            <div className="flex flex-col items-start gap-1">
              <span className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
                <span className="text-[var(--accent-red)]">B</span>
                <span className="text-[var(--text-primary)]">FK</span>
              </span>
              <p className="text-xs font-light uppercase tracking-[0.2em] text-[var(--text-muted)]">
                Кроўю, потам, не быць скотам!
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between text-">
            <nav className="flex gap-1">
              <NavButton name="Галоўная" page="/" currentPage={currentPage} />
              <NavButton
                name="Карыстальнікі"
                page="/users"
                currentPage={currentPage}
              />
              <NavButton name="Кнігі" page="/books" currentPage={currentPage} />
              <NavButton
                name="Артыкулы"
                page="/articles"
                currentPage={currentPage}
              />
            </nav>

            <button
              className="
                group relative rounded-md border border-[var(--accent-red)]/30 px-4 py-1.5 text-sm font-medium
                text-[var(--text-secondary)] transition-all
                hover:border-[var(--accent-red)] hover:bg-[var(--accent-red-bg)] hover:text-[var(--text-primary)]
                focus:outline-none focus:ring-1 focus:ring-[var(--accent-red)]
              "
            >
              <span className="relative z-10">Увайсьці</span>
              <span className="absolute inset-0 rounded-md bg-[var(--accent-red)]/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};
