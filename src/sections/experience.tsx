// experience page
import ExperienceCard from '../components/experience-card.tsx';

function Experience() {
    return (
        <div className="h-dvh 
                        flex    
                        flex-col
                        items-center 
                        justify-center 
                        p-[5%]
                        gap-[5%]
                        
                        md:h-dvh 
                        md:flex 
                        md:flex-row
                        md:items-center 
                        md:justify-center 
                        md:p-[5%]"> 
            <h1 className="text-white 
                        align-center
                        text-[20px] 
                        font-bold 
                        
                        md:text-[20px] 
                        md:pr-[5%]"> EXPERIENCE. </h1>
            <div className="experience-card-container 

                            flex 
                            flex-col 
                            justify-start 
                            bg-[#FFD0D0]/40 
                            w-[100%]
                            h-[80%] 
                            rounded-[50px] 
                            shadow-xl 
                            overflow-y-auto 
                            scroll-smooth 
                            p-[5%] 
                            pt-[5%]
                            gap-[5%]
                            snap-mandatory
                            snap-y
                            scroll-p-[4%]
                            
                            md:flex 
                            md:flex-col 
                            md:justify-start 
                            md:bg-[#FFD0D0]/40 
                            md:w-[100%]
                            md:w-[65%] 
                            md:h-[90%] 
                            md:rounded-[50px] 
                            md:shadow-xl 
                            md:overflow-y-auto 
                            md:scroll-smooth 
                            md:p-[2%] 
                            md:gap-[5%]
                            md:h-[90%] ">
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