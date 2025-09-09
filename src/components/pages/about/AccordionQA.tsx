"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { universities } from "@/data/University";
import { useTranslations } from "@/i18n/utils";

type Props = { lang: string };

export interface AnswerList {
  title?: string;
  items: string[];
}

export interface FAQ {
  questionKey: string;
  answerKey?: string;
  list?: AnswerList[];
}

const qaList: FAQ[] = [
  { questionKey: "qa.question.1", answerKey: "qa.answer.1" },
  {
    questionKey: "qa.question.2",
    answerKey: "qa.answer.2",
  },
  {
    questionKey: "qa.question.3",
    answerKey: "qa.answer.3",
    list: [
      {
        items: [
          "about.conditionReturnMoney1",
          "about.conditionReturnMoney2",
          "about.conditionReturnMoney3",
          "about.conditionReturnMoney4",
          "about.conditionReturnMoney5",
        ],
      },
    ],
  },
  { questionKey: "qa.question.4", answerKey: "qa.answer.4" },
  { questionKey: "qa.question.5", answerKey: "qa.answer.5" },
  {
    questionKey: "qa.question.6",
    answerKey: "qa.answer.6",
    list: [
      {
        items: [
          "about.howToReturnMoney1",
          "about.howToReturnMoney2",
          "about.howToReturnMoney3",
          "about.howToReturnMoney4",
          "about.howToReturnMoney5",
        ],
      },
    ],
  },
];

const AccordionQA: React.FC<Props> = ({ lang }) => {
  const t = useTranslations(lang);

  return (
    <Accordion type="single" collapsible className="w-full">
      {qaList.map((item, idx) => (
        <AccordionItem
          key={idx}
          value={`item-${idx}`}
          className="space-y-2 border-b"
        >
          <AccordionTrigger className="text-lg">
            {t(item.questionKey)}
          </AccordionTrigger>
          <AccordionContent className="text-base space-y-3">
            {item.questionKey === "qa.question.2" ? (
              <div className="space-y-5">
                {item.answerKey && <p>{t(item.answerKey)}</p>}

                {universities.map((uni, i) => (
                  <div key={i}>
                    <h4 className="font-medium text-primary">
                      {t(uni.hoverTitleKey)}
                    </h4>
                    <ul className="list-disc pl-6 space-y-1">
                      {uni.hoverItemKeys
                        .filter((key) => key !== "Uni.description")
                        .map((key, j) => (
                          <li key={j}>{t(key)}</li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {item.answerKey && <p>{t(item.answerKey)}</p>}

                {item.list?.map((listBlock, i) => (
                  <div key={i} className="space-y-1">
                    {listBlock.title && (
                      <h4 className="font-medium">{t(listBlock.title)}</h4>
                    )}
                    <ul className="list-disc pl-6 space-y-1 ">
                      {listBlock.items.map((ans, j) => (
                        <li key={j}>{t(ans)}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionQA;
