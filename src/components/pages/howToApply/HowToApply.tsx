import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HowApplyStepByTabs from "./HowApplyStepByTabs";
import { HOWTOAPPLY_TABS } from "@/data/HowToApplyData";
import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

export function HowToApply({ lang }: { lang: keyof typeof languages }) {
  const t = useTranslations(lang);
  return (
    <div className="container mx-auto my-4 px-4 bg-muted rounded-xl h-auto flex flex-col p-6 gap-7 mb-16">
      {/* <!-- Tabs --> */}
      <Tabs defaultValue={HOWTOAPPLY_TABS.STUDENT}>
        <TabsList>
          <TabsTrigger value={HOWTOAPPLY_TABS.STUDENT}>
            {t("howToApply.studentTab")}
          </TabsTrigger>
          <TabsTrigger value={HOWTOAPPLY_TABS.OFFICER}>
            {t("howToApply.officerTab")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value={HOWTOAPPLY_TABS.STUDENT}>
          <HowApplyStepByTabs tab_type={HOWTOAPPLY_TABS.STUDENT} t={t} />
        </TabsContent>
        <TabsContent value={HOWTOAPPLY_TABS.OFFICER}>
          <HowApplyStepByTabs tab_type={HOWTOAPPLY_TABS.OFFICER} t={t} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
