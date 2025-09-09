export interface FAQ {
  questionKey: string;
  answerKey?: string;
  list?: { items: string[]; title?: string }[];
}

export const qaList: FAQ[] = [
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
