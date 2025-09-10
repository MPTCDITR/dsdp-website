import React from "react";

import {
  OfficerContent1,
  OfficerContent2,
  OfficerContent3,
} from "./HowToApplyOfficerContent";
import {
  StudentContent1,
  StudentContent2,
  StudentContent3,
} from "./HowToApplyStudentContent";
import image3 from "/src/assets/how-to-apply-data/discussion.webp";
import image2 from "/src/assets/how-to-apply-data/screenshot-form.webp";
import image1 from "/src/assets/how-to-apply-data/students.webp";

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
    title: "howToApply.student.condition1.title",
    content: StudentContent1,
    type_content: HOWTOAPPLY_TABS.STUDENT,
  },
  {
    header_number: "02",
    image: image2.src,
    title: "howToApply.student.condition2.title",
    content: StudentContent2,
    type_content: HOWTOAPPLY_TABS.STUDENT,
  },
  {
    header_number: "03",
    image: image3.src,
    title: "howToApply.student.condition3.title",
    content: StudentContent3,
    type_content: HOWTOAPPLY_TABS.STUDENT,
  },

  // Officer Criteria
  {
    header_number: "01",
    image: image1.src,
    title: "howToApply.officer.condition1.title",
    content: OfficerContent1,
    type_content: HOWTOAPPLY_TABS.OFFICER,
  },
  {
    header_number: "02",
    image: image2.src,
    title: "howToApply.officer.condition2.title",
    content: OfficerContent2,
    type_content: HOWTOAPPLY_TABS.OFFICER,
  },
  {
    header_number: "03",
    image: image3.src,
    title: "howToApply.officer.condition3.title",
    content: OfficerContent3,
    type_content: HOWTOAPPLY_TABS.OFFICER,
  },
];
