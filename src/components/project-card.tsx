// experience cards for container in experience page
import ProjectSkillsBubble from "../components/project-skills-bubble.tsx";
import { motion, type Variants } from 'framer-motion';

// add props here later on i.e. image and project skills bubbles string array
type Props = {
    projectTitle : string
    projectHeader : string
    projectDescription: string
}

// handles animations for motion. NestedContainer is for the mapped skill bubbbles
const NestedContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

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

function ProjectCard({projectTitle, projectHeader, projectDescription} : Props)  {
    
    return (
        <motion.div variants={ NestedItem } className="bg-[#FFE6F7] 
                        flex 
                        flex-shrink-0 
                        flex-col 
                        justify-start 
                        h-[80%] 
                        w-[90%] 
                        rounded-[40px] 
                        p-[10%]
                        shadow-2xl 
                        overflow-y-auto
                        gap-[2%] 

                        snap-start

                        md:bg-[#FFE6F7] 
                        md:flex 
                        md:flex-shrink-0 
                        md:flex-col 
                        md:w-[40%]
                        md:h-full
                        md:justify-start 
                        md:rounded-[50px] 
                        md:shadow-2xl 
                        md:p-[3%] 
                        md:overflow-y-hidden">
            <p className="text-[20px]  
                        text-[#C178B4] 
                        font-bold

                        md:text-[25px]"> {projectTitle.toUpperCase()} </p>
            <div className="bg-[#FFFFFF]
                            text-[#AAAAAA] 
                            h-[200%] 
                            w-[100%]    
                            rounded-[10px]
                            flex
                            flex-col
                            items-center
                            justify-center
                            shadow-lg"> image placeholder </div>
            <p className="text-[15px] 
                        md:text-[20px] 
                        text-[#C178B4] 

                        -mt-1 
                        md:-mt-2 
                        pt-[1%]
                        md: pt-[5%]"> {projectHeader} </p>
            <p className="h-[90%] 
                        w-full text-[10px] 
                        md:text-[15px] 
                        text-[#CB76B1] 
                        font-light 
                        pt-[0%] 
                        overflow-y-scroll
                        
                        md:pt-[0%]
                        md:overflow-y-auto
                        break-words"> { projectDescription }  </p>
        {/*  Insert skills here as bubbles */}
            <motion.div variants={ NestedContainer }
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="project-skills-bubbles flex flex-wrap items-start gap-[2%] gap-y-[0.5rem]">
                <ProjectSkillsBubble name="Skill"/>
                <ProjectSkillsBubble name="Skill Skill"/>
                <ProjectSkillsBubble name="Skill Skill Skill"/>
                <ProjectSkillsBubble name="Skill Skill"/>
                <ProjectSkillsBubble name="Skill"/>
                <ProjectSkillsBubble name="Skill Skill"/>
            </motion.div>
        </motion.div>
    )
}

export default ProjectCard