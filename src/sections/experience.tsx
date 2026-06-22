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
        { company:"A&A Accounting", position:"Computer Science Intern", dates:"June 2026 - Present", details:["Full stack work on the company's own accounting software",
                                                                                                            "Implemented new features to enhance user experience",
                                                                                                            "Relevant skills: React.js, Tailwind CSS, TypeScript, JavaScript, PostgreSQL, Next.js, Supabase, Vercel"]},
        { company:"Tampere University", position: "Content Crew Student Ambassador", dates:"October 2024 - December 2025", details:["Cooperated in a team setting to devise and create promotional content for various social media platforms.", 
                                                                                                                                    "Increased engagement in multiple facets and attained top-ranking posts.", 
                                                                                                                                    "Provided perspectives to advocate for the inclusion of the international student experience in marketing."] },
        { company:"Tampere University", position: "Faculty Social Media Assistant", dates:"August 2023 - June 2024", details:["Strategized posts of multiple formats to promote the university faculty on multiple social media platforms", 
                                                                                                                            "Improved engagement and achieved high-performing posts, especially Instagram Reels",
                                                                                                                        	"Attained top-performing posts, doubling interactions relative to previous peaks"] },
        { company:"Fandom Shop QA", position: "Owner", dates:"March 2019 - March 2020", details:["Coordinated logistics to bring K-Pop merch to Qatar, filling a market gap", 
                                                                                                "Managed social media using various strategies, directly communicating with customers, gaining market share",
                                                                                                ]},
        { company:"Roblox Game Studio", position: "Owner", dates:"August 2017 - November 2019", details:["Led, managed and cooperated with a team of four members for a passion project in game development",
                                                                                                        "Involvement in multiple facets of development – scripting/programming, world building, model making, graphic design, etc."
                                                                                                        ]},                                                                                           
                                                                                                                                    
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