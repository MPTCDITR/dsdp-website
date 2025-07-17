import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CivilServantCriteria from "./civil-servant-criteria";
import StudentCriteria from "./student-criteria";

interface HowToApplyContent {
  translations: Record<string, string>;
}

export function HowToApply({
  translations,
  lang,
}: HowToApplyContent & { lang: "en" | "km" }) {
  const t = (key: string) => translations[key] || key;

  return (
    <>
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-4 mt-16 text-[#004282]">
        ជំហានងាយៗនៃការដាក់ពាក្យ <br /> ស្នើសុំថវិកាគម្រោងរបស់ ក.អ.ជ.ឌ.
      </h1>
      <p className="text-center mb-8 opacity-60">
        {t("nav.home")}
        <br />
        កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ផ្តល់ឱកាសដល់ សិស្ស និស្សិត និង
        មន្ត្រីរាជការ ដែលបំពេញលក្ខខណ្ឌដូចខាងក្រោម៖
      </p>
      {/* Container */}
      <div className="bg-muted rounded-xl h-auto flex flex-col p-6 gap-7 mb-16">
        {/* <!-- Tabs --> */}
        <Tabs defaultValue="account">
          <TabsList>
            <TabsTrigger value="account">សម្រាប់សិស្ស-និស្សិត</TabsTrigger>
            <TabsTrigger value="password">សម្រាប់មន្ត្រីរាជការ</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <StudentCriteria />
          </TabsContent>
          <TabsContent value="password">
            <CivilServantCriteria />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
