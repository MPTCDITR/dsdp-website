
import AboutTeamCard from "./components/AboutTeamCard";
import Structure_img from "@/assets/about/about-us/Structure Image.png";
import GERHARDT_KELLERMANN from "@/assets/about/about-team/GERHARDT KELLERMANN.jpeg";
import download from "@/assets/about/about-team/download.jpeg";
import Gorgeous_smile_of_Alexis_Petit from "@/assets/about/about-team/Gorgeous smile of Alexis Petit.jpeg";
import Bewerbungsfoto_selber_machen from "@/assets/about/about-team/Bewerbungsfoto selber machen - Tipps und Ausrüstung_.jpeg";

interface AboutTeamContent {
    translations: Record<string, string>;
  }
  
export function AboutTeam({ translations }: AboutTeamContent) {
    const t = (key: string) => translations[key] || key;
    return(
        <div>
            <div>
                <h1 className="bg-gradient-to-r from-[#54A7F6] to-[#004282] text-transparent bg-clip-text text-center text-4xl md:text-5xl font-bold leading-snug mt-12 mb-8">
                    {t("about.team.title1")}
                </h1>

                <img src={Structure_img.src}
                    alt="Structure Image"
                    className="w-full"/>
            </div>

            <div className="bg-gray-50 py-12 px-4">
                <div className="max-w-[700px] mx-auto px-6 mb-4">

                    <h1 className="text-center text-4xl md:text-4xl font-bold text-[#004282] mb-4">
                        {t("about.team.title2")}
                    </h1>
                    <p className="text-center text-base md:text-base text-[#71717A]">
                        {t("about.team.title2.description")}  
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
                    <AboutTeamCard
                        img={GERHARDT_KELLERMANN.src}
                        contacts={{ facebook: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    instagram: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    linkedin: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    youtube: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr" }}
                        name={t("about.team.card1.name")}
                        position={t("about.team.card1.position")}
                    />

                    <AboutTeamCard
                        img={download.src}
                        contacts={{ facebook: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    instagram: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    linkedin: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    youtube: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr" }}
                        name={t("about.team.card2.name")}
                        position={t("about.team.card2.position")}
                    />

                    <AboutTeamCard
                        img={Gorgeous_smile_of_Alexis_Petit.src}
                        contacts={{ facebook: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    instagram: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    linkedin: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    youtube: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr" }}
                        name={t("about.team.card3.name")}
                        position={t("about.team.card3.position")}
                    />

                    <AboutTeamCard
                        img={Bewerbungsfoto_selber_machen.src}
                        contacts={{ facebook: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    instagram: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    linkedin: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr",
                                    youtube: "https://www.facebook.com/share/1XztBBxh2W/?mibextid=wwXIfr" }}
                        name={t("about.team.card4.name")}
                        position={t("about.team.card4.position")}
                    />
                </div>
            </div>
        </div>
    )
}