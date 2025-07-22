import { HowToApplyData, HowToApplyTabsType } from "@/data/HowToApplyData";

interface HowApplyStepByTabsProps {
  tab_type: HowToApplyTabsType;
}

export default function HowApplyStepByTabs(props: HowApplyStepByTabsProps) {
  const data_student = HowToApplyData.filter(
    (item) => item.type_content === props.tab_type,
  );
  return (
    <>
      {data_student.map((item) => (
        <section
          key={item.header_number}
          className="grid lg:grid-cols-5 md:flex-wrap grid-cols-1 gap-6 justify-between items-end self-stretch w-full my-6"
        >
          <div className="flex flex-col items-start gap-3 lg:col-span-3 md:col-span-2 col-span-1">
            <p className="text-8xl text-gradient font-semibold mt-6">
              {item.header_number}
            </p>
            <h2 className="text-3xl leading-10 font-semibold mb-4">
              {item.title}
            </h2>
            <item.content />
          </div>
          <div className="lg:col-span-2 col-span-1">
            <img
              src={item.image}
              alt="image"
              className="rounded-lg md:object-contain md:w-auto object-cover w-full lg:h-full md:h-[295px] h-auto"
            />
          </div>
        </section>
      ))}
    </>
  );
}
