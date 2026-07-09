import { Link } from "react-router";
import { InfoBlock } from "../components/InfoBlock";

export const MainPage = () => {
  return (
    <div className="mx-auto max-w-8xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <section className="mb-12 text-center sm:mb-16 lg:mb-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex items-center justify-center gap-2 sm:mb-6">
            <span className="h-px w-8 bg-[var(--accent-red)] sm:w-12" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--accent-red)]">
              Філязофія безь межаў
            </span>
            <span className="h-px w-8 bg-[var(--accent-red)] sm:w-12" />
          </div>

          <h1 className="mb-4 text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl md:text-5xl lg:text-6xl">
            Стварай. Думай.
            <br />
            <span className="text-[var(--accent-red)]">Прасьвятляйся</span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-sm text-[var(--text-secondary)] sm:text-base lg:text-lg">
            БФК — гэта адкрытая прастора, дзе кожны можа дадаваць кнігі, пісаць
            крытыку і артыкулы, дзяліцца думкамі і разам шукаць праўду.
            <br className="hidden sm:block" />
            <span className="text-[var(--text-muted)]">
              Бяз абмежаваньняў. Бяз цэнзуры. Для ўсіх.
            </span>
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              to="/books"
              className="
                w-full rounded-md border border-[var(--border-color)] bg-transparent px-6 py-3 text-sm font-medium
                text-[var(--text-secondary)] transition-all hover:border-[var(--accent-red)] hover:bg-[var(--accent-red-bg)] hover:text-[var(--text-primary)]
                sm:w-auto sm:px-8
              "
            >
              Чытаць кнігі
            </Link>

            <Link
              to="/articles"
              className="
                w-full rounded-md border border-[var(--border-color)] bg-transparent px-6 py-3 text-sm font-medium
                text-[var(--text-secondary)] transition-all hover:border-[var(--accent-red)] hover:bg-[var(--accent-red-bg)] hover:text-[var(--text-primary)]
                sm:w-auto sm:px-8
              "
            >
              Чытаць артыкулы
            </Link>

            <Link
              to="/register"
              className="
                w-full rounded-md bg-[var(--accent-red)] px-6 py-3 text-sm font-medium text-white transition-all
                hover:bg-[var(--accent-red-hover)] hover:shadow-red-glow
                sm:w-auto sm:px-8
              "
            >
              Дадаць сваё
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-[var(--border-color)] pt-8 sm:pt-12 lg:pt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InfoBlock
            title="Кнігі ад карыстальнікаў"
            text="Кожны можа дадаць любую філязофскую кнігу. Стварай бібліятэку
              разам!"
          />

          <InfoBlock
            title="Допісы і крытыка"
            text="Пішы рэцэнзіі, разважай над прачытаным, спрачайся і шукай праўду.
"
          />
          <InfoBlock
            title="Уласныя артыкулы"
            text="Дзяліся сваімі думкамі, эсэ і філязофскімі адкрыцьцямі з усімі.
"
          />
          <InfoBlock
            title="Прастора безь межаў"
            text="Бяз цэнзуры, без абмежаваньняў. Толькі свабодная думка і пошук
              праўды.
"
          />
        </div>

        <div className="mt-8 rounded-lg border border-[var(--border-color)] bg-[var(--bg-tertiary)] p-6 text-center sm:mt-10 sm:p-8">
          <blockquote className="text-sm italic text-[var(--text-secondary)] sm:text-base">
            <span className="text-[var(--accent-red)]">"</span>
            Філязофія пачынаецца там, дзе чалавек задае сабе пытаньне — а ці так
            усё насамрэч?
            <span className="text-[var(--accent-red)]">"</span>
          </blockquote>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Далучайся да супольнасьці — дадавай кнігі, пішы артыкулы,
            прасьвятляйся
          </p>
        </div>

        <div className="mt-8 text-center sm:mt-10">
          <p className="mb-3 text-sm text-[var(--text-secondary)]">
            Усё чытальнае — бясплатна. Але каб дадаваць і пісаць — ствары
            акаўнт.
          </p>
          <Link
            to="/register"
            className="
              inline-block rounded-md border border-[var(--accent-red)]/30 px-6 py-2 text-sm font-medium
              text-[var(--text-secondary)] transition-all hover:border-[var(--accent-red)] hover:bg-[var(--accent-red-bg)] hover:text-[var(--text-primary)]
            "
          >
            Стварыць акаўнт →
          </Link>
        </div>
      </section>
    </div>
  );
};
