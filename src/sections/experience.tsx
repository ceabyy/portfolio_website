// experience page
import ExperienceCard from '../components/experience-card.tsx';

function Experience() {

    const experience = [
        { company:"A&A Accounting", position:"Computer Science Intern", dates:"June 2026 - Present", details:["Worked on full stack creation of accounting software"]},
        { company:"Tampere University", position: "Content Crew Student Ambassador", dates:"October 2024 - December 2025", details:["Worked on posting on university social media", "Teamwork and collaboration in brainstorming ideas"] },
        { company:"Tampere University", position: "Social Media Assistant", dates:"August 2023 - June 2024", details:["Worked on posting on university faculty's social media", "Attained top-ranking posts in the accounts' history"] },
    ]

    return (
        <div className="h-dvh 
                        flex    
                        flex-col
                        items-center 
                        justify-center 
                        p-[5%]
                        gap-[5%]
                        
                        md:p-[2%]
                        md:h-dvh 
                        md:flex 
                        md:flex-row
                        md:items-center 
                        md:justify-center"> 
            <h1 className="text-white 
                        align-center
                        text-[20px] 
                        font-bold 
                        
                        md:text-[20px] 
                        md:p-[5%]"> EXPERIENCE. </h1>
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
                                
                {experience.map((exp) => (
                    <ExperienceCard
                        key={ exp.company }
                        company={ exp.company }
                        position={ exp.position }
                        dates={ exp.dates }
                        details={ exp.details }
                    />
                ))}
            </div>
        </div>
    )
}

export default Experience