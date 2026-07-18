import {
  User,
  BookOpen,
  PenTool,
  Mail,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Edit3,
  FileText,
} from "lucide-react";
import { ProfileCounter } from "../components/ProfileCounter";
import { ProfileNav } from "../components/ProfileNav";

export const Profile = () => {
  const user = {
    name: "Янка Купала",
    username: "jankakupala",
    avatar: null,
    bio: "Філязоф, пісьменьнік, шукальнік праўды. Займаюся беларускай філязофіяй і літаратурай. Веру ў сілу слова і свабоднай думкі.",
    email: "jankakupala@bfk.by",
    location: "Беларусь",
    joined: "Студзень 2026",
    website: "https://jankakupala.by",
    booksCount: 12,
    postsCount: 34,
    articlesCount: 8,
  };

  return (
    <div className="mx-auto max-w-8xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="relative mb-10">
        <div className="h-40 w-full rounded-t-lg bg-gradient-to-r from-[var(--accent-red)]/20 to-[var(--bg-tertiary)] sm:h-56" />

        <div className="relative px-4 sm:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-end sm:gap-8">
            <div className="relative -mt-16 sm:-mt-20">
              <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-[var(--bg-secondary)] bg-[var(--bg-tertiary)] text-5xl text-[var(--text-muted)] sm:h-40 sm:w-40">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <User size={56} strokeWidth={1.5} />
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center gap-3 sm:items-start">
              <div className="flex flex-col items-center gap-1 sm:items-start">
                <h1 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
                  {user.name}
                </h1>
                <span className="text-base text-[var(--text-secondary)]">
                  @{user.username}
                </span>
              </div>

              <button className=" cursor-pointer flex items-center gap-2 rounded-md border border-[var(--border-color)] px-5 py-2 text-sm font-medium text-[var(--text-secondary)] transition-all hover:border-[var(--accent-red)] hover:text-[var(--text-primary)] sm:absolute sm:right-0 sm:top-2">
                <Edit3 size={18} strokeWidth={1.5} />
                Рэдагаваць профіль
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8">
            <div className="mb-6">
              <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                {user.bio}
              </p>
            </div>

            <div className="space-y-4 border-t border-[var(--border-color)] pt-6">
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="text-[var(--text-muted)]"
                />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <Mail
                  size={18}
                  strokeWidth={1.5}
                  className="text-[var(--text-muted)]"
                />
                <span>{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <Calendar
                  size={18}
                  strokeWidth={1.5}
                  className="text-[var(--text-muted)]"
                />
                <span>Далучыўся: {user.joined}</span>
              </div>
              {user.website && (
                <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                  <LinkIcon
                    size={18}
                    strokeWidth={1.5}
                    className="text-[var(--text-muted)]"
                  />
                  <a
                    href={user.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-red)] transition-colors hover:underline"
                  >
                    {user.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="mt-[18px] grid grid-cols-3 gap-3">
            <ProfileCounter name="Кнігі" count={user.booksCount} />
            <ProfileCounter name="Допісы" count={user.postsCount} />
            <ProfileCounter name="Артыкулы" count={user.articlesCount} />
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          <ProfileNav
            icon={BookOpen}
            title="Кнігі"
            counter={user.booksCount}
            subtitle="Кнігі, якія дадаў карыстальнік"
            route="/profile/books"
          />
          <ProfileNav
            icon={PenTool}
            title="Допісы"
            counter={user.postsCount}
            subtitle="Допісы і крытыка карыстальніка"
            route="/profile/posts"
          />
          <ProfileNav
            icon={FileText}
            title="Артыкулы"
            counter={user.articlesCount}
            subtitle="Артыкулы аўтарства карыстальніка"
            route="/profile/articles"
          />
        </div>
      </div>
    </div>
  );
};
