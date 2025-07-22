/* eslint-disable no-unused-vars */
import React from "react";

import { Content1, Content2, Content3 } from "./HowToApplyContent";

export enum HowToApplyTabsType {
  STUDENT = "student",
  OFFICER = "officer",
}

export interface HowToApplyDataProps {
  header_number: string;
  image: string;
  title: string;
  content: React.ElementType;
  type_content: HowToApplyTabsType;
}

export const HowToApplyData: Array<HowToApplyDataProps> = [
  // Student Criteria
  {
    header_number: "01",
    image: "/src/assets/images/image1.webp",
    title: "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    content: Content1,
    type_content: HowToApplyTabsType.STUDENT,
  },
  {
    header_number: "02",
    image: "/src/assets/images/image2.webp",
    title: "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    content: Content2,
    type_content: HowToApplyTabsType.STUDENT,
  },
  {
    header_number: "03",
    image: "/src/assets/images/image3.webp",
    title: "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    content: Content3,
    type_content: HowToApplyTabsType.STUDENT,
  },

  // Officer Criteria
  {
    header_number: "01",
    image: "/src/assets/images/image1.webp",
    title: "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    content: Content1,
    type_content: HowToApplyTabsType.OFFICER,
  },
  {
    header_number: "02",
    image: "/src/assets/images/image2.webp",
    title: "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    content: Content2,
    type_content: HowToApplyTabsType.OFFICER,
  },
  {
    header_number: "03",
    image: "/src/assets/images/image3.webp",
    title: "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    content: Content3,
    type_content: HowToApplyTabsType.OFFICER,
  },
];
