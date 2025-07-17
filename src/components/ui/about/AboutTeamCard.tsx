interface TeamCardProps {
    name: string;
    position: string;
    imgUrl: string;

  }
  
  export default function AboutTeamCard({name, position, imgUrl
  }: TeamCardProps) {
    return (
      <div className="flex grid-cols-1 justify-center mb-4 relative">
        <div
          className="">
          
          <div>
            <h3 className="text-center text-2xl text-bold">{name}</h3>
            <p className="text-center text-sm">{position}</p>
          </div>
          
        </div>
      </div>
    );
  }
  