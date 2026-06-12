// experience page
import ExperienceCard from '../components/experience-card.tsx';

function Experience() {
    return (
        <div className="h-dvh flex items-center justify-center snap-y p-[5%]"> 
            <h1 className="text-white text-[15px] md:text-[20px] font-bold pr-[5%] md: pr-[10%]"> EXPERIENCE </h1>
            <div className="experience-card-container flex flex-col justify-start bg-[#FFD0D0]/40 w-[100%] md:w-[65%] h-[80%] md:h-[90%] rounded-[50px] shadow-xl overflow-y-auto scroll-smooth p-[2%] gap-[5%]">
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
                <ExperienceCard />
            </div>
        </div>
    )
}

export default Experience