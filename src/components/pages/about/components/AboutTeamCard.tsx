import type { ContactProps } from "../data/aboutTeamData";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

interface TeamCardProps {
  img: string;
  contacts?: Array<ContactProps>;
  name: string;
  position: string;
}

const iconMap = {
  facebook: <Facebook className="w-5 h-5 text-white" />,
  instagram: <Instagram className="w-5 h-5 text-white" />,
  linkedin: <Linkedin className="w-5 h-5 text-white" />,
  youtube: <Youtube className="w-5 h-5 text-white" />,
};

export default function AboutTeamCard({
  img,
  contacts,
  name,
  position,
}: TeamCardProps) {
  return (
    <div className="flex flex-col items-center w-auto max-w-xs mx-auto">
      <div className="aspect-auto overflow-hidden rounded-2xl mb-4">
        <img
          src={img}
          alt={`${name}'s picture`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-4 ">
        {contacts?.map((contact, index) => (
          <a
            key={index}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary hover:bg-blue-950 transition-colors"
          >
            {iconMap[contact.type]}
          </a>
        ))}
      </div>

      <div>
        <h3 className="text-center text-2xl font-bold">{name}</h3>
        <p className="text-center text-sm">{position}</p>
      </div>
    </div>
  );
}
