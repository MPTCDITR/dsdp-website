import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { TranslateKey } from "@/i18n/utils";
import { useTranslations } from "@/i18n/utils";

interface QAListProp {
  question: TranslateKey;
  answer: TranslateKey;
}

type Props = {
  lang: string;
};

const qaList: Array<QAListProp> = [
  { question: "qa.question.1", answer: "qa.answer.1" },
  { question: "qa.question.2", answer: "qa.answer.2" },
  { question: "qa.question.3", answer: "qa.answer.3" },
  { question: "qa.question.4", answer: "qa.answer.4" },
  { question: "qa.question.5", answer: "qa.answer.5" },
  { question: "qa.question.6", answer: "qa.answer.6" },
  { question: "qa.question.7", answer: "qa.answer.7" },
];

const AccordionQA: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <Accordion type="single" collapsible>
      {qaList.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="space-y-2">
          <AccordionTrigger className="font-normal text-base">
            {t(item.question)}
          </AccordionTrigger>
          <AccordionContent className="font-normal text-base">
            {t(item.answer)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionQA;
