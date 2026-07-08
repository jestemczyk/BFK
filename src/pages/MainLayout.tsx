import { Link, Outlet, useLocation } from "react-router";
import { NavButton } from "../components/NavButton";

export const MainLayout = () => {
  const currentPage = useLocation().pathname;
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-4">
        <div className="mx-auto flex max-w-8xl items-center justify-between">
          <Link to="/" className="flex cursor-pointer flex-col">
            <span className="text-4xl font-bold tracking-tight text-[var(--text-primary)]">
              <span className="text-[var(--accent-red)]">B</span>
              <span className="text-[var(--text-primary)]">FK</span>
            </span>
            <p className="text-xs font-light uppercase tracking-[0.2em] text-[var(--text-muted)]">
              Беларуская Філязофская Кнігарня
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
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-6 py-6">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <span>© {new Date().getFullYear()} БФК</span>
            <span className="text-[var(--accent-red)]">•</span>
            <span>Усе правы захаваны</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/jestemczyk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:underline"
            >
              GitHub
            </a>
            <span className="text-[var(--text-muted)]">|</span>
            <p className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:underline">
              svietacz1864@gmail.com
            </p>
            <span className="text-[var(--text-muted)]">|</span>
            <span className="text-[var(--text-muted)]">
              <span className="text-[var(--accent-red)]">❤</span> з Беларусі
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
