import AboutTeamCard from "./components/AboutTeamCard";
import { team_data } from "./data/aboutTeamData";
import StructureImg from "@/assets/about/about-team/structure-image.png";
import type { Language } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

export function AboutTeam({ lang }: { lang: Language }) {
  const t = useTranslations(lang);

  return (
    <div>
      {/* Top section */}
      <section className="text-center mt-12 mb-8">
        <h1 className="text-gradient-r text-4xl font-bold leading-snug mb-4">
          {t("about.team.title1")}
        </h1>
        <img
          src={StructureImg.src}
          alt="Structure"
          className="w-full"
          loading="lazy"
        />
      </section>

      <section className="bg-gray-50 py-8">
        <div className="container relative mx-auto">
          <header className="mx-auto mb-4 max-w-5xl">
            <h2 className="text-center text-4xl font-bold text-primary mb-4">
              {t("about.team.title2")}
            </h2>
            <p className="text-center text-base text-muted-foreground">
              {t("about.team.title2.description")}
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team_data.map(({ id, name, position, img, contacts }) => (
              <AboutTeamCard
                key={id}
                name={t(name)}
                position={t(position)}
                img={img}
                contacts={contacts}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
