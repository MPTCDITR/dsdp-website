import { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HowApplyStepByTabs from "./HowApplyStepByTabs";
import {
  HOWTOAPPLY_TABS,
  type HowToApply as HowToApplyType,
} from "@/data/HowToApplyData";
import { languages } from "@/i18n/ui";
import { useTranslations } from "@/i18n/utils";

export function HowToApply({ lang }: { lang: keyof typeof languages }) {
  const [currentTab, setCurrentTab] = useState<HowToApplyType>(
    HOWTOAPPLY_TABS.STUDENT,
  );

  const t = useTranslations(lang);

  useEffect(() => {
    const tab = new URLSearchParams(window.location.search).get("tab");
    if (tab) {
      setCurrentTab(tab as HowToApplyType);
    }
  }, []);

  return (
    <div className="container mx-auto my-4 px-4 bg-muted rounded-xl h-auto flex flex-col p-6 gap-7 mb-16">
      <Tabs
        defaultValue={HOWTOAPPLY_TABS.STUDENT}
        value={currentTab}
        onValueChange={setCurrentTab}
      >
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
