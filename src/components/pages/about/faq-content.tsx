import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import background_style from "@/assets/about/q-and-a/background-style.svg";
import FAQ_image from "@/assets/about/q-and-a/FAQ-Image.png";
import { BadgeAlert, SquareUser } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "@/i18n/utils";
import type { defaultLang, ui } from "@/i18n/ui";

type translatekey =  keyof (typeof ui)[typeof defaultLang];

type Props = {
  lang: string;
};

interface QAListProp {
  question: translatekey;
  answer: translatekey;
}
const qaList: Array<QAListProp> = [
  {
    question: "qa.question.1",
    answer: "qa.answer.1",
  },
{
    question: "qa.question.2",
    answer: "qa.answer.2",
  },
{
    question: "qa.question.3",
    answer: "qa.answer.3",
  },
{
    question: "qa.question.4",
    answer: "qa.answer.4",
  },
  {
    question: "qa.question.5",
    answer: "qa.answer.5",
  },
    {
    question: "qa.question.6",
    answer: "qa.answer.6",
  },
      {
    question: "qa.question.7",
    answer: "qa.answer.7",
  },

];

const QuestionAndAnswer = ({ lang }: Props) => {
  const t = useTranslations(lang)

  return (
      <div className="container my-20">
        
        {/* title section */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-2xl lg:max-w-3xl flex flex-col items-center gap-3">
            
            <Badge className="bg-secondary/30 text-secondary rounded-full">
              <BadgeAlert />
              QA of DSDP
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold text-gradient leading-snug">
              {t("qa.title.1")}
            </h1>

            <p className="text-center text-muted-foreground text-sm md:text-base max-w-2xl px-4">
              {t("qa.title.2")}
            </p>
          </div>
        </div>
        
        
        {/* FAQ section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-6 max-w-5xl mx-auto">
          
          <div className="order-2 lg:order-1 ">
            <h2 className="text-2xl text-primary lg:text-3xl mb-8">
              {t("qa.title.3")}
            </h2>
            
            <Accordion type="single" collapsible >
                {qaList.map((item, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="space-y-2 ">
                    <AccordionTrigger className="font-normal">{t(item.question)}</AccordionTrigger>
                    <AccordionContent className="font-normal">{t(item.answer)}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>
          
          <div className="order-1 lg:order-2 flex items-center justify-center ">
            <img
              src={FAQ_image.src}
              alt="FAQ image"
              className="w-full max-w-md lg:max-w-lg h-auto object-cover"
            />
          </div>

        </div>
       

        {/* contact section */}
        <div className="gap-6 my-8 lg:my-28 max-w-5xl mx-auto">
          <Card className="relative bg-primary text-center text-white overflow-hidden px-8 py-20 md:py-18">
            <img
              src={background_style.src}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 object-cover opacity-50"
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-relaxed text-center">
                {t("qa.title.4")}
              </h3>
              <Button variant="secondary" className="text-white rounded-full">
                <SquareUser />
                Contact us
              </Button>
            </div>
          </Card>
        </div>
        

      </div>
   
  );
};

export default QuestionAndAnswer;
