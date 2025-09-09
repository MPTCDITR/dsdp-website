import Facebook from "@/assets/footer/facebook.svg";
import Telegram from "@/assets/footer/telegram.svg";
import Tiktok from "@/assets/footer/tiktok.svg";
import Youtube from "@/assets/footer/youtube.svg";
import { Instagram, Mail } from "lucide-react";

export const SOCIAL_MEDIA_DATA = [
  {
    href: "https://www.facebook.com/profile.php?id=61578662390111",
    label: "Facebook",
    icon: Facebook,
  },
  { href: "/#", label: "Youtube", icon: Youtube },
  { href: "/#", label: "Telegram", icon: Telegram },
  { href: "/#", label: "Instagram", icon: Instagram },
  { href: "/#", label: "Tiktok", icon: Tiktok },
  { href: "/#", label: "Email", icon: Mail },
];
