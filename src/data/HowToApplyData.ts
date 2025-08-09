import React from "react";

import { Content1, Content2, Content3 } from "./HowToApplyContent";
import image1 from "/src/assets/images/image1.webp";
import image2 from "/src/assets/images/image2.webp";
import image3 from "/src/assets/images/image3.webp";

export const HOWTOAPPLY_TABS = {
  STUDENT: "student",
  OFFICER: "officer",
};
export type HowToApply = (typeof HOWTOAPPLY_TABS)[keyof typeof HOWTOAPPLY_TABS];

export interface HowToApplyDataProps {
  header_number: string;
  image: string;
  title: string;
  content: React.ElementType;
  type_content: HowToApply;
}

export const HowToApplyData: Array<HowToApplyDataProps> = [
  // Student Criteria
  {
    header_number: "01",
    image: image1.src,
    title: "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    content: Content1,
    type_content: HOWTOAPPLY_TABS.STUDENT,
  },
  {
    header_number: "02",
    image: image2.src,
    title: "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    content: Content2,
    type_content: HOWTOAPPLY_TABS.STUDENT,
  },
  {
    header_number: "03",
    image: image3.src,
    title: "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    content: Content3,
    type_content: HOWTOAPPLY_TABS.STUDENT,
  },

  // Officer Criteria
  {
    header_number: "01",
    image: image1.src,
    title: "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    content: Content1,
    type_content: HOWTOAPPLY_TABS.OFFICER,
  },
  {
    header_number: "02",
    image: image2.src,
    title: "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    content: Content2,
    type_content: HOWTOAPPLY_TABS.OFFICER,
  },
  {
    header_number: "03",
    image: image3.src,
    title: "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    content: Content3,
    type_content: HOWTOAPPLY_TABS.OFFICER,
  },
];
