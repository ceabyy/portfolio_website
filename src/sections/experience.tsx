// experience page
import ExperienceCard from '../components/experience-card.tsx';
import { motion, type Variants } from 'framer-motion';
// for motion handling, i.e. fade in and move up movement

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const NestedContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

const NestedItem: Variants = {
    hidden: { opacity: 0, y: -40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

function Experience() {

    const experience = [
        { company:"A&A Accounting", position:"Computer Science Intern", dates:"June 2026 - Present", details:["Worked on full stack creation of accounting software"]},
        { company:"Tampere University", position: "Content Crew Student Ambassador", dates:"October 2024 - December 2025", details:["Worked on posting on university social media", "Teamwork and collaboration in brainstorming ideas"] },
        { company:"Tampere University", position: "Faculty Social Media Assistant", dates:"August 2023 - June 2024", details:["Worked on posting on university faculty's social media", "Attained top-ranking posts in the accounts' history"] },
        { company:"Fandom Shop QA", position: "Owner", dates:"March 2019 - March 2020", details:["Coordinated logistics to bring K-Pop merch to Qatar", "Managed social media, directly communicating with customers"] },
    ]

    return (
        <motion.div variants={ container }
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="h-dvh 
                        flex    
                        flex-col
                        items-center 
                        justify-center 
                        p-[5%]
                        gap-[5%]
                        
                        md:pr-[10%]
                        md:pl-[10%]
                        md:h-dvh 
                        md:flex 
                        md:flex-row
                        md:items-center 
                        md:justify-center"> 
            <motion.h1  variants={ item }
                        className="text-white 
                        align-center
                        text-[20px] 
                        font-bold 
                        
                        md:pr-[5%]
                        md:text-[20px]"> EXPERIENCE. </motion.h1>
            <motion.div variants={ NestedContainer }
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="experience-card-container 
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
                            md:h-[90%] 
                            md:rounded-[50px] 
                            md:shadow-xl 
                            md:overflow-y-auto 
                            md:scroll-smooth 
                            md:p-[2%] 
                            md:gap-[5%]
                            md:h-[90%] ">   

                {experience.map((exp) => (
                    <motion.div variants={ NestedItem }>
                        <ExperienceCard
                            key={ exp.company }
                            company={ exp.company }
                            position={ exp.position }
                            dates={ exp.dates }
                            details={ exp.details }
                        />
                    </motion.div>
                ))}

            </motion.div>
        </motion.div>
    )
}

export default Experience