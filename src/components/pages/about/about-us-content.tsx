import benefits_more_than_money from "@/assets/about/about-us/benefits-more-than-money.png";
import Finding_brilliant_ideas from "@/assets/about/about-us/Finding brilliant ideas.gif";
import Business_mission from "@/assets/about/about-us/Business mission.gif";
import return_money from "@/assets/about/about-us/return-money.png";

interface AboutUsContent {
  translations: Record<string, string>;
}

export function AboutUs({ translations }: AboutUsContent) {
  const t = (key: string) => translations[key] || key;
  return (
    <div className="w-auto container mx-auto">
      <section className="relative container mx-auto space-x-24 z-10">

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Page Title */}
          <h1 className="text-left text-3xl md:text-5xl font-bold text-primary leading-snug mt-12 mb-8">
            អំពីកម្មវិធី
          </h1>
        
          {/* Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-4">
            <div className="w-full max-w-[508px] mx-auto">
              <img
                src={Finding_brilliant_ideas.src}
                className="w-full"
                alt="Finding Ideas"
              />
            </div>

            <div className="w-full max-w-[508px] mx-auto">
              <h2 className="bg-gradient-to-r from-[#54A7F6] to-[#004282] text-transparent bg-clip-text text-4xl leading-relaxed md:text-4xl font-bold mb-4">
                ចក្ខុវិស័យ៖
              </h2>
              <p className="text-base text-zinc-500 mb-4">{t("about.visionDescription")}</p>
              <ul className="list-disc pl-6 space-y-2 text-base text-foreground leading-relaxed">
                <li>{t("about.vision1")}</li>
                <li>{t("about.vision2")}</li>
                <li>{t("about.vision3")}</li>
                <li>{t("about.vision4")}</li>
              </ul>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-4">
            <div className="w-full max-w-[508px] mx-auto">
              <h2 className="bg-gradient-to-r from-[#54A7F6] to-[#004282] text-transparent bg-clip-text text-4xl leading-snug md:text-4xl font-bold mb-4">
                បេសកកម្ម៖
              </h2>
              <p className="text-base text-zinc-500 mb-4">{t("about.missionDescription")}</p>
              <ul className="list-disc pl-6 space-y-2 text-base leading-relaxed">
                <li>{t("about.mission1")}</li>
                <li>{t("about.mission2")}</li>
              </ul>
            </div>

            <div className="w-full max-w-[508px] mx-auto">
              <img src={Business_mission.src} className="w-full" alt="Mission" />
            </div>
          </div>

          {/* What is DSDP Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-4">
            <div className="w-full max-w-[508px] mx-auto">
              <img
                src={benefits_more_than_money.src}
                className="w-full"
                alt="DSDP"
              />
            </div>

            <div className="w-full max-w-[508px] mx-auto">
              <h2 className="bg-gradient-to-b from-[#004282] to-[#027DAC] text-transparent bg-clip-text text-4xl leading-snug  md:text-4xl font-bold mb-4">
                កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ឌ.)
              </h2>
              <p className="text-base text-foreground leading-relaxed">
                {t("about.whatIsDsdp.description")}
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-4">
            <div className="w-full max-w-[508px] mx-auto">
              <h2 className="bg-gradient-to-b from-[#004282] to-[#027DAC] text-transparent bg-clip-text text-4xl leading-snug md:text-4xl font-bold mb-4">
                តើ ក.អ.ជ.ឌ. ជួយដល់សិស្ស-និស្សិតដូចម្តេច?
              </h2>
              <p className="text-base leading-relaxed">
                {t("about.benefits.description")}
              </p>
            </div>

            <div className="w-full max-w-[508px] mx-auto">
              <img
                src={benefits_more_than_money.src}
                className="w-full"
                alt="Benefits"
              />
            </div>
          </div>

          {/* Condition Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-4">
            <div className="w-full max-w-[508px] mx-auto">
              <img src={return_money.src} className="w-full" alt="Condition" />
            </div>

            <div className="w-full max-w-[508px] mx-auto">
              <h2 className="bg-gradient-to-b from-[#004282] to-[#027DAC] text-transparent bg-clip-text text-4xl leading-snug md:text-4xl font-bold mb-4">
                លក្ខខណ្ឌនៃការសងថវិកាមក ក.អ.ជ.ឌ. វិញ!
              </h2>
              <p className="text-base leading-relaxed mb-4">
                {t("about.conditionTitle1.description")}
              </p>
              <h3 className="bg-gradient-to-b from-[#004282] to-[#027DAC] text-transparent bg-clip-text text-2xl leading-snug md:text-2xl font-bold mb-4">
                តើត្រូវសងដោយរបៀបណា?
              </h3>
              <p className="text-base leading-relaxed">
                {t("about.conditionTitle2.description")}
              </p>
          </div>
          </div>
        </div>
      </section>
    </div>
   
  );
}
