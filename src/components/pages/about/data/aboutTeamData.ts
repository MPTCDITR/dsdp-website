import React from "react";

import teamCard1 from "@/assets/about/about-team/team-card1.jpeg";
import teamCard2 from "@/assets/about/about-team/team-card2.jpeg";
import teamCard3 from "@/assets/about/about-team/team-card3.jpeg";
import teamCard4 from "@/assets/about/about-team/team-card4.jpeg";

export interface ContactProps {
  type: "facebook" | "instagram" | "linkedin" | "youtube";
  href: string;
  icon?: React.ReactElement;
}

export interface TeamMember {
  id?: string;
  name: string;
  position: string;
  img: string;
  contacts: ContactProps[];
}

export const team_data: TeamMember[] = [
  {
    id: "card1",
    name: "about.team.card1.name",
    position: "about.team.card1.position",
    img: teamCard1.src,
    contacts: [
      { type: "facebook", href: "https://facebook.com/apsara.finance" },
      { type: "instagram", href: "https://instagram.com/apsara_official" },
      { type: "linkedin", href: "https://linkedin.com/in/apsara-finance" },
      { type: "youtube", href: "https://youtube.com/@apsaraFinance" },
    ],
  },
  {
    id: "card2",
    name: "about.team.card1.name",
    position: "about.team.card1.position",
    img: teamCard2.src,
    contacts: [
      { type: "facebook", href: "https://facebook.com/apsara.finance" },
      { type: "instagram", href: "https://instagram.com/apsara_official" },
      { type: "linkedin", href: "https://linkedin.com/in/apsara-finance" },
      { type: "youtube", href: "https://youtube.com/@apsaraFinance" },
    ],
  },
  {
    id: "card3",
    name: "about.team.card1.name",
    position: "about.team.card1.position",
    img: teamCard3.src,
    contacts: [
      { type: "facebook", href: "https://facebook.com/apsara.finance" },
      { type: "instagram", href: "https://instagram.com/apsara_official" },
      { type: "linkedin", href: "https://linkedin.com/in/apsara-finance" },
      { type: "youtube", href: "https://youtube.com/@apsaraFinance" },
    ],
  },
  {
    id: "card4",
    name: "about.team.card1.name",
    position: "about.team.card1.position",
    img: teamCard4.src,
    contacts: [
      { type: "facebook", href: "https://facebook.com/apsara.finance" },
      { type: "instagram", href: "https://instagram.com/apsara_official" },
      { type: "linkedin", href: "https://linkedin.com/in/apsara-finance" },
      { type: "youtube", href: "https://youtube.com/@apsaraFinance" },
    ],
  },
];
