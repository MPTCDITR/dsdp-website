import HowToApplySection from "@/components/pages/howToApply/HowToApplySection";

import { HowToApplyData, type HowToApply } from "@/data/HowToApplyData";
import { useTranslations } from "@/i18n/utils";

interface HowApplyStepByTabsProps {
  tab_type: HowToApply;
  t: ReturnType<typeof useTranslations>;
}

export default function HowApplyStepByTabs(props: HowApplyStepByTabsProps) {
  const data_student = HowToApplyData.filter(
    (item) => item.type_content === props.tab_type,
  );
  return (
    <div>
      {data_student.map((item) => (
        <HowToApplySection key={item.header_number} item={item} t={props.t} />
      ))}
    </div>
  );
}
