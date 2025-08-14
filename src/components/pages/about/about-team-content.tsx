import AboutTeamCard from "./components/AboutTeamCard";
import { team_data } from "./data/aboutTeamData";
import StructureImg from "@/assets/about/about-team/structure-img.svg";
import type { Language } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

export function AboutTeam({ lang }: { lang: Language }) {
  const t = useTranslations(lang);

  return (
    <div className="container mx-auto">
      <img
        src={StructureImg.src}
        alt="Structure"
        className="w-full my-16"
        loading="lazy"
      />
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-gray-50 py-8">
        <div className="container mx-auto my-8">
          <header className="mx-auto max-w-5xl text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              {t("about.team.title2")}
            </h2>
            <p className="text-base text-muted-foreground mb-6">
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
