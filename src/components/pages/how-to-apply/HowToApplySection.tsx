import type { HowToApplyDataProps } from "@/data/HowToApplyData";
import { useTranslations } from "@/i18n/utils";

export default function HowToApplySection({
  item,
  t,
}: {
  item: HowToApplyDataProps;
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <section
      key={item.header_number}
      className="grid lg:grid-cols-5 md:flex-wrap grid-cols-1 gap-6 justify-between items-end self-stretch w-full mb-6 lg:mb-12 xl:mb-16"
    >
      <div className="flex flex-col items-start gap-3 lg:col-span-3 md:col-span-2 col-span-1">
        <p className="text-8xl text-gradient font-semibold">
          {item.header_number}
        </p>
        <h2 className="text-3xl leading-10 font-semibold mb-4">
          {t(item.title)}
        </h2>
        <item.content t={t} />
      </div>
      <div className="lg:col-span-2 col-span-1">
        <img
          src={item.image}
          alt="image"
          className="object-cover rounded-lg w-full h-auto md:object-contain md:w-auto md:h-auto lg:object-cover lg:w-full lg:h-auto xl:h-auto xl:object-cover"
        />
      </div>
    </section>
  );
}
