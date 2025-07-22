import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import HowApplyStepByTabs from "./HowApplyStepByTabs";
import { HowToApplyTabsType } from "@/data/HowToApplyData";

export function HowToApply() {
  const [tabs, setTabs] = useState<string>(HowToApplyTabsType.STUDENT);
  return (
    <>
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-4 mt-16 text-[#004282]">
        ជំហានងាយៗនៃការដាក់ពាក្យ <br /> ស្នើសុំថវិកាគម្រោងរបស់ ក.អ.ជ.ឌ.
      </h1>
      <p className="text-center mb-8 opacity-60">
        កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ផ្តល់ឱកាសដល់ សិស្ស និស្សិត និង
        មន្ត្រីរាជការ ដែលបំពេញលក្ខខណ្ឌដូចខាងក្រោម៖
      </p>
      {/* Container */}
      <div className="bg-muted rounded-xl h-auto flex flex-col p-6 gap-7 mb-16">
        {/* <!-- Tabs --> */}
        <Tabs
          value={tabs}
          defaultValue={HowToApplyTabsType.STUDENT}
          onValueChange={setTabs}
        >
          <TabsList>
            <TabsTrigger value={HowToApplyTabsType.STUDENT}>
              សម្រាប់សិស្ស-និស្សិត
            </TabsTrigger>
            <TabsTrigger value={HowToApplyTabsType.OFFICER}>
              សម្រាប់មន្ត្រីរាជការ
            </TabsTrigger>
          </TabsList>
          <TabsContent value={HowToApplyTabsType.STUDENT}>
            <HowApplyStepByTabs tab_type={HowToApplyTabsType.STUDENT} />
          </TabsContent>
          <TabsContent value={HowToApplyTabsType.OFFICER}>
            <HowApplyStepByTabs tab_type={HowToApplyTabsType.OFFICER} />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
