// Student Criteria
import { useTranslations } from "@/i18n/utils";

export function StudentContent1({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <article>
      {t("howToApply.student.condition1.description")}
      <ol className="list-decimal pl-5 leading-8">
        <li>{t("howToApply.student.condition1.item1")}</li>
        <li>{t("howToApply.student.condition1.item2")}</li>
        <li>{t("howToApply.student.condition1.item3")}</li>
        <li>{t("howToApply.student.condition1.item4")}</li>
        <li>{t("howToApply.student.condition1.item5")}</li>
      </ol>
    </article>
  );
}
export function StudentContent2({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <article>
      {t("howToApply.student.condition2.description")}
      <ol className="list-decimal pl-5 leading-8">
        <li>{t("howToApply.student.condition2.item1")}</li>
        <li>{t("howToApply.student.condition2.item2")}</li>
        <li>{t("howToApply.student.condition2.item3")}</li>
        <li>{t("howToApply.student.condition2.item4")}</li>
      </ol>
    </article>
  );
}

export function StudentContent3({
  t,
}: {
  t: ReturnType<typeof useTranslations>;
}) {
  return (
    <article>
      {t("howToApply.student.condition3.description")}
      <table className="w-full leading-8">
        <tr>
          <td className="sm:py-0 py-2">
            {t("howToApply.student.condition3.item1")}
          </td>
          <td className="w-[20%] text-right">{t("howToApply.quantity1")}</td>
        </tr>
        <tr>
          <td className="sm:py-0 py-2">
            {t("howToApply.student.condition3.item2")}
          </td>
          <td className="w-[20%] text-right">{t("howToApply.quantity2")}</td>
        </tr>
        <tr>
          <td className="sm:py-0 py-2">
            {t("howToApply.student.condition3.item3")}
          </td>
          <td className="w-[20%] text-right">{t("howToApply.quantity1")}</td>
        </tr>
        <tr>
          <td className="sm:py-0 py-2">
            {t("howToApply.student.condition3.item4")}
          </td>
          <td className="w-[20%] text-right">{t("howToApply.quantity1")}</td>
        </tr>
        <tr>
          <td className="sm:py-0 py-2">
            {t("howToApply.student.condition3.item5")}
          </td>
          <td className="w-[20%] text-right">{t("howToApply.quantity1")}</td>
        </tr>
        <tr>
          <td className="sm:py-0 py-2">
            {t("howToApply.student.condition3.item6")}
          </td>
          <td className="w-[20%] text-right">{t("howToApply.quantity1")}</td>
        </tr>
        <tr>
          <td className="sm:py-0 py-2">
            {t("howToApply.student.condition3.item7")}
          </td>
          <td className="w-[20%] text-right">{t("howToApply.quantity1")}</td>
        </tr>
      </table>
    </article>
  );
}
