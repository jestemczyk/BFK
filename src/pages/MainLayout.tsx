import { Link, Outlet, useLocation } from "react-router";
import { NavButton } from "../components/NavButton";

export const MainLayout = () => {
  const currentPage = useLocation().pathname;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3 sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-8xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Левы бок: лагатып + слоган */}
          <Link to="/" className="flex cursor-pointer flex-col items-start">
            <span className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              <span className="text-[var(--accent-red)]">B</span>
              <span className="text-[var(--text-primary)]">FK</span>
            </span>
            <p className="text-[10px] font-light uppercase tracking-[0.15em] text-[var(--text-muted)] sm:text-xs sm:tracking-[0.2em]">
              Беларуская Філязофская Кнігарня
            </p>
          </Link>

          {/* Правы бок: навігацыя + кнопка */}
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-4 lg:gap-6">
            {/* Навігацыя — гарызантальны скрол на мабільных */}
            <nav className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 [&::-webkit-scrollbar]:h-0.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--border-color)]">
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

            {/* Кнопка Увайсьці — на ўсю шырыню на мабільных */}
            <button
              className="
                cursor-pointer
                w-full whitespace-nowrap rounded-md border border-[var(--accent-red)]/30 px-4 py-1.5 text-sm font-medium
                text-[var(--text-secondary)] transition-all
                hover:border-[var(--accent-red)] hover:bg-[var(--accent-red-bg)] hover:text-[var(--text-primary)]
                focus:outline-none focus:ring-1 focus:ring-[var(--accent-red)]
                sm:w-auto
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

      <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-4 sm:px-6 sm:py-6">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
          {/* Левы бок: капірайт */}
          <div className="flex flex-wrap items-center justify-center gap-1 text-[10px] text-[var(--text-muted)] sm:gap-2 sm:text-xs">
            <span>© {new Date().getFullYear()} БФК</span>
            <span className="text-[var(--accent-red)]">•</span>
            <span>Усе правы захаваны</span>
          </div>

          {/* Правы бок: спасылкі */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] sm:gap-4 sm:text-xs">
            <a
              href="https://github.com/jestemczyk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:underline"
            >
              GitHub
            </a>
            <span className="text-[var(--text-muted)]">|</span>
            <a
              href="mailto:svietacz1864@gmail.com"
              className="text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)] hover:underline"
            >
              svietacz1864@gmail.com
            </a>
            <span className="text-[var(--text-muted)]">|</span>
            <span className="whitespace-nowrap text-[var(--text-muted)]">
              <span className="text-[var(--accent-red)]">❤</span> з Беларусі
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
