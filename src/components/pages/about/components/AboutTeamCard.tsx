import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

interface TeamCardProps {
  img: string;
  contacts?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
  name: string;
  position: string;
}

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

      <div className="flex gap-3 mb-4 ">
        {contacts?.facebook && (
          <a
            href={contacts.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary hover:bg-blue-950 transition-colors"
          >
            <Facebook className="w-5 h-5 text-white" />
          </a>
        )}

        {contacts?.instagram && (
          <a
            href={contacts.instagram}
            target="_blank"
            rel="noopener noreferrer "
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary hover:bg-blue-950 transition-colors"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
        )}

        {contacts?.linkedin && (
          <a
            href={contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary hover:bg-blue-950 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-white" />
          </a>
        )}

        {contacts?.youtube && (
          <a
            href={contacts.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary hover:bg-blue-950 transition-colors"
          >
            <Youtube className="w-5 h-5 text-white" />
          </a>
        )}
      </div>

      <div>
        <h3 className="text-center text-2xl font-bold">{name}</h3>
        <p className="text-center text-sm">{position}</p>
      </div>
    </div>
  );
}
