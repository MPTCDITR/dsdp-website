import TeamCardProps from "@/components/ui/about/AboutTeamCard";
import Structure_img from "@/assets/about/about-us/Structure Image.png";
interface AboutTeamContent {
    translations: Record<string, string>;
  }
  
export function AboutTeam({ translations }: AboutTeamContent) {
    const t = (key: string) => translations[key] || key;

    return(
        <div>
            <div>
                <h1 className="bg-gradient-to-r from-[#54A7F6] to-[#004282] text-transparent bg-clip-text text-center text-4xl md:text-5xl font-bold leading-snug mt-12 mb-8">
                    រចនាសម្ព័ន្ធលេខាធិការដ្ឋាន
                </h1>

                <img src={Structure_img.src}
                    alt="Structure Image"
                    className="w-full"/>
            </div>

            <div>
                <div className="max-w-[700px] mx-auto px-4">

                    <h1 className="text-center text-4xl md:text-4xl font-bold text-[#004282] mb-4">
                        ក្រុមការងារស្នូល
                    </h1>
                    <p className="text-center text-base md:text-base text-[#71717A]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto px-4 mt-8">
                    
                </div>
  

            </div>
        </div>
    )
}