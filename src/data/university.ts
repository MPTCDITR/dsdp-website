import aupp from "@/assets/logo/AUPP Main Logo.png";
import cadt from "@/assets/logo/CADT_logo.png";
import itc from "@/assets/logo/ITC_logo.png";
import num from "@/assets/logo/NUM_logo.png";
import paragon from "@/assets/logo/Paragon_Logo.png";
import rupp from "@/assets/logo/RUPP_logo.png";
import type { ImageMetadata } from "astro";

export interface University {
  image: ImageMetadata;
  alt: string;
  hoverTitleKey: string;
  hoverItemKeys: string[];
}

export const universities: University[] = [
  {
    image: rupp,
    alt: "RUPP Logo",
    hoverTitleKey: "RUPP.title",
    hoverItemKeys: [
      "Uni.description",
      "RUPP.major_1",
      "RUPP.major_2",
      "RUPP.major_3",
      "RUPP.major_4",
    ],
  },
  {
    image: itc,
    alt: "ITC Logo",
    hoverTitleKey: "ITC.title",
    hoverItemKeys: ["Uni.description", "ITC.major_1", "ITC.major_2"],
  },
  {
    image: num,
    alt: "NUM Logo",
    hoverTitleKey: "NUM.title",
    hoverItemKeys: [
      "Uni.description",
      "NUM.major_1",
      "NUM.major_2",
      "NUM.major_3",
      "NUM.major_4",
    ],
  },
  {
    image: aupp,
    alt: "AUPP Logo",
    hoverTitleKey: "AUPP.title",
    hoverItemKeys: [
      "Uni.description",
      "AUPP.major_1",
      "AUPP.major_2",
      "AUPP.major_3",
      "AUPP.major_4",
      "AUPP.major_5",
      "AUPP.major_6",
      "AUPP.major_7",
      "AUPP.major_8",
    ],
  },
  {
    image: paragon,
    alt: "Paragon Logo",
    hoverTitleKey: "Paragon.title",
    hoverItemKeys: [
      "Uni.description",
      "Paragon.major_1",
      "Paragon.major_2",
      "Paragon.major_3",
    ],
  },
  {
    image: cadt,
    alt: "CADT Logo",
    hoverTitleKey: "CADT.title",
    hoverItemKeys: [
      "Uni.description",
      "CADT.major_1",
      "CADT.major_2",
      "CADT.major_3",
      "CADT.major_4",
      "CADT.major_5",
    ],
  },
];
