import benefits_more_than_money from "@/assets/about/about-us/benefits-more-than-money.svg";
import Business_mission from "@/assets/about/about-us/business-mission.gif";
import Finding_brilliant_ideas from "@/assets/about/about-us/finding-brilliant-ideas.gif";
import return_money from "@/assets/about/about-us/return-money.svg";
import what_is_dsdp from "@/assets/about/about-us/what-is-dsdp.svg";
import type { Language } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

interface AboutUsContent {
  lang: Language;
}

export function AboutUs({ lang }: AboutUsContent) {
  const t = useTranslations(lang);
  return (
    <div className="container my-12">
      {/* Page Title */}
      <section className="relative z-10">
        <h1 className="text-left text-4xl md:text-5xl font-bold text-primary leading-snug mt-12 mb-8">
          {t("about.title")}
        </h1>
      </section>

      {/* Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="order-1 md:order-1 w-full max-w-[508px] mx-auto">
          <img
            src={Finding_brilliant_ideas.src}
            className="w-full"
            alt="Finding Ideas"
          />
        </div>

        <div className="order-2 md:order-2 w-full max-w-[508px] mx-auto">
          <h2 className="text-gradient-r text-4xl leading-relaxed font-bold mb-4">
            {t("about.visionTitle")}
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            {t("about.visionDescription")}
          </p>
          <ul className="list-decimal pl-8 space-y-3 text-base text-foreground leading-relaxed">
            <li>{t("about.vision1")}</li>
            <li>{t("about.vision2")}</li>
            <li>{t("about.vision3")}</li>
            <li>
              {t("about.vision4")}
              <ol className="list-disc pl-8 space-y-3 cursor-pointer my-3">
                <li>{t("about.vision4.1")}</li>
                <li>{t("about.vision4.2")}</li>
                <li>{t("about.vision4.3")}</li>
                <li>{t("about.vision4.4")}</li>
                <li>{t("about.vision4.5")}</li>
                <li>{t("about.vision4.6")}</li>
              </ol>
            </li>
          </ul>
        </div>
      </section>

      {/* Mission Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="order-2 md:order-1 w-full max-w-[508px] mx-auto">
          <h2 className="text-gradient-r text-4xl leading-snug font-bold mb-4">
            {t("about.mission.title")}
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            {t("about.mission.description")}
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base text-foreground leading-relaxed">
            <li>{t("about.mission1")}</li>
            <li>{t("about.mission2")}</li>
            <li>{t("about.mission3")}</li>
          </ul>
        </div>

        <div className="order-1 md:order-2 w-full max-w-[508px] mx-auto">
          <img src={Business_mission.src} className="w-full" alt="Mission" />
        </div>
      </section>

      {/* What is DSDP Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="order-1 md:order-1 w-full max-w-[508px] mx-auto">
          <img src={what_is_dsdp.src} className="w-full" alt="DSDP" />
        </div>

        <div className="order-2 md:order-2 w-full max-w-[508px] mx-auto">
          <h2 className="text-gradient-b text-4xl leading-snug  md:text-4xl font-bold mb-4">
            {t("about.whatIsDsdp.title")}
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            {t("about.whatIsDsdp.description")}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="order-2 md:order-1 w-full max-w-[508px] mx-auto">
          <h2 className="text-gradient-b text-4xl leading-snug font-bold mb-4">
            {t("about.benefits.title")}
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            {t("about.benefits.description")}
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base text-foreground leading-relaxed">
            <li>{t("about.benefits1")}</li>
            <li>{t("about.benefits2")}</li>
            <li>{t("about.benefits3")}</li>
            <li>{t("about.benefits4")}</li>
            <li>{t("about.benefits5")}</li>
          </ul>
        </div>

        <div className="order-1 md:order-2 w-full max-w-[508px] mx-auto">
          <img
            src={benefits_more_than_money.src}
            className="w-full"
            alt="Benefits"
          />
        </div>
      </section>

      {/* Condition Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
        <div className="order-1 md:order-1 w-full max-w-[508px] mx-auto">
          <img src={return_money.src} className="w-full" alt="Condition" />
        </div>

        <div className="order-2 md:order-2 w-full max-w-[508px] mx-auto">
          <h2 className="text-gradient-b text-4xl leading-snug font-bold mb-4">
            {t("about.conditionReturnMoney.title")}
          </h2>
          <p className="text-base text-muted-foreground mb-4">
            {t("about.conditionReturnMoney.description")}
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base text-foreground leading-relaxed">
            <li>{t("about.conditionReturnMoney1")}</li>
            <li>{t("about.conditionReturnMoney2")}</li>
            <li>{t("about.conditionReturnMoney3")}</li>
            <li>{t("about.conditionReturnMoney4")}</li>
            <li>{t("about.conditionReturnMoney5")}</li>
          </ul>
          <h3 className="text-gradient-b text-2xl mt-3 leading-snug md:text-2xl font-bold mb-4">
            {t("about.howToReturnMoney.title")}
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            {t("about.howToReturnMoney.description")}
          </p>
          <ul className="list-disc pl-6 space-y-3 text-base text-foreground leading-relaxed">
            <li>{t("about.howToReturnMoney1")}</li>
            <li>{t("about.howToReturnMoney2")}</li>
            <li>{t("about.howToReturnMoney3")}</li>
            <li>{t("about.howToReturnMoney4")}</li>
            <li>{t("about.howToReturnMoney5")}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
