import { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HowApplyStepByTabs from "./HowApplyStepByTabs";
import {
  HOWTOAPPLY_TABS,
  type HowToApply as HowToApplyType,
} from "@/data/HowToApplyData";

export function HowToApply() {
  const [currentTab, setCurrentTab] = useState<HowToApplyType>(
    HOWTOAPPLY_TABS.STUDENT,
  );

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
            សម្រាប់សិស្ស-និស្សិត
          </TabsTrigger>
          <TabsTrigger value={HOWTOAPPLY_TABS.OFFICER}>
            សម្រាប់មន្ត្រីរាជការ
          </TabsTrigger>
        </TabsList>
        <TabsContent value={HOWTOAPPLY_TABS.STUDENT}>
          <HowApplyStepByTabs tab_type={HOWTOAPPLY_TABS.STUDENT} />
        </TabsContent>
        <TabsContent value={HOWTOAPPLY_TABS.OFFICER}>
          <HowApplyStepByTabs tab_type={HOWTOAPPLY_TABS.OFFICER} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
