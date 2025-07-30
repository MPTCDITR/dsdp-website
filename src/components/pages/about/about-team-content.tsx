import AboutTeamCard from "./components/AboutTeamCard";
import { team_data } from "./data/aboutTeamData";
import StructureImg from "@/assets/about/about-team/structure-image.png";
import { useTranslations } from "@/i18n/utils";

interface AboutTeamContent {
  lang: string;
}

export function AboutTeam({ lang }: AboutTeamContent) {
  const t = useTranslations(lang);

  return (
    <>
      {/* Top section */}
      <div>
        <h1 className="bg-gradient-to-r from-[#54A7F6] to-[#004282] text-transparent bg-clip-text text-center text-4xl md:text-5xl font-bold leading-snug mt-12 mb-8">
          {t("about.team.title1")}
        </h1>
        <img src={StructureImg.src} alt="Structure" className="w-full" />
      </div>

      {/* Team grid section */}
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-gray-50 py-8">
        <div className="max-w-[700px] mx-auto px-6 mb-4">
          <h1 className="text-center text-4xl font-bold text-[#004282] mb-4">
            {t("about.team.title2")}
          </h1>
          <p className="text-center text-base text-[#71717A]">
            {t("about.team.title2.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
          {team_data.map((member) => (
            <AboutTeamCard
              key={member.id}
              name={t(member.name)}
              position={t(member.position)}
              img={member.img}
              contacts={member.contacts}
            />
          ))}
        </div>
      </div>
    </>
  );
}
