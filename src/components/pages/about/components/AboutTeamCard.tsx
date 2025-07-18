import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

interface TeamCardProps {
  img: string;
  contacts: {
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
    <div className="flex flex-col items-center p-4 w-full max-w-xs mx-auto">
      <img
        src={img}
        alt={`${name}'s picture`}
        className="w-full h-full object-cover rouned-full mb-4 rounded-2xl"
      />

      {/* <div className="flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 "> */}
      <div className="flex gap-4 mt-3 mb-4">
        {contacts.facebook && (
          <a href={contacts.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-6 h-6 bg-primary text-black hover:text-blue-800 transition-colors" />
          </a>
        )}

        {contacts.instagram && (
          <a
            href={contacts.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-yellow-600 hover:text-blue-800 transition-colors" />
          </a>
        )}

        {contacts.linkedin && (
          <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
          </a>
        )}

        {contacts.youtube && (
          <a href={contacts.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" />
          </a>
        )}
      </div>

      <div className="mb-4">
        <h3 className="text-center text-2xl font-bold">{name}</h3>
        <p className="text-center text-sm">{position}</p>
      </div>
    </div>
  );
}
