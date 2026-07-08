import { Link, Outlet, useLocation } from "react-router";
import { NavButton } from "../components/NavButton";

export const MainLayout = () => {
  const currentPage = useLocation().pathname;
  return (
    <>
      <header className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-4">
        <div className="mx-auto flex max-w-8xl items-center justify-between">
          <Link to="/" className="flex cursor-pointer flex-col">
            <span className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              <span className="text-[var(--accent-red)]">B</span>
              <span className="text-[var(--text-primary)]">FK</span>
            </span>
            <p className="text-xs font-light uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Кроўю, потам, не быць скотам!
            </p>
          </Link>

          <div className="flex items-center gap-6">
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
          cursor-pointer
          group relative rounded-md border border-[var(--accent-red)]/30 px-4 py-1.5 text-sm font-medium
          text-[var(--text-secondary)] transition-all
          hover:border-[var(--accent-red)] hover:bg-[var(--accent-red-bg)] hover:text-[var(--text-primary)]
          focus:outline-none focus:ring-1 focus:ring-[var(--accent-red)]
        "
            >
              Увайсьці
            </button>
          </div>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
};
