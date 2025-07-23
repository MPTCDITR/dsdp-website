import HowToApplyContent from "@/components/pages/howToApply/HowToApplyContent";

import { HowToApplyData, type HowToApply } from "@/data/HowToApplyData";

interface HowApplyStepByTabsProps {
  tab_type: HowToApply;
}

export default function HowApplyStepByTabs(props: HowApplyStepByTabsProps) {
  const data_student = HowToApplyData.filter(
    (item) => item.type_content === props.tab_type,
  );
  return (
    <div>
      {data_student.map((item) => (
        <HowToApplyContent key={item.header_number} item={item} />
      ))}
    </div>
  );
}
