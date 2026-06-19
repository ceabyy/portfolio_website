import SkillBubble from "../components/skills-bubble.tsx";
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
            staggerChildren: 0.03
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

function About() {

    const skills = [
        { id:"Python", name:"Python" },
        { id:"C#", name:"C#" },
        { id:"JavaScript", name:"JavaScript" },
        { id:"React.js", name:"React.js" },
        { id:"HTML", name:"HTML" },
        { id:"C++", name:"C++" },
        { id:"Object-Oriented Programming", name:"Object-Oriented Programming" },
        { id:"Supabase", name:"Supabase" },
        { id:"Next.js", name:"Next.js" },
        { id:"Data Structures & Algorithms", name:"Data Structures & Algorithms" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
    ]

    return(
        <motion.div variants={ container }
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="h-dvh 
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    snap-y 
                    gap-[5%]
                    
                    md:flex-row">
            {/* column 1 */}
            <motion.section variants={ item }
                            className="h-[50%] 
                                flex 
                                flex-col 
                                items-start 
                                justify-center 
                                pl-[20%] 
                                pr-[20%] 
                                
                                md:pl-[10%] 
                                md:pr-0 
                                md:h-full 
                                md:w-[30%]"> 

                <h1 className="text-[#1E3576] 
                                text-center 
                                font-bold 
                                pb-[3%]
                                
                                md:text-white text-[20px] "> SKILLS. </h1>
                <motion.section variants={ NestedContainer}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                className="flex 
                                    flex-wrap 
                                    gap-[10px] 
                                    gap-y-[10px]"> 

                    {/* map function */}
                    {skills.map((skill) => (
                        <motion.div key={ skill.id } variants={ item }>
                            <SkillBubble key={skill.id} name={skill.name} /> 
                        </motion.div>
                    ))}

                </motion.section> 
            </motion.section>

            {/* column 2 */}
            <motion.section variants={ container }
                            className="h-[50%] 
                                flex 
                                flex-col 
                                items-start 
                                justify-center 
                                pl-[20%] 
                                pr-[20%] 
                                
                                md:pl-[10%] 
                                md:pr-[15%] 
                                md:h-full 
                                md:w-[60%]">

                <motion.h1 variants={ item } className="text-white 
                                text-[20px] 
                                text-center 
                                font-bold 
                                pb-[3%]"> ABOUT. </motion.h1>
                <motion.p variants={ item } className="text-white 
                            font-extralight 
                            md:text-[20px] "> Hi! My name is Ceaby. I'd say I'm very attentive, curious, self-motivated and thrive as a team leader or member. I'm a Bachelor of Science (Technology) graduate, having majored in signal processing and machine learning (ML), with a further educational background in computer science, ML and artificial intelligence (AI).</motion.p>
            
            </motion.section> 
            {/* potential column 3 for ascii of my photo */}
        </motion.div>
    )
}

export default About