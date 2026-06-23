// This skill bubble will be used for each of the project cards i.e. related skills
import { motion, type Variants } from 'framer-motion';

type Props = {
    name : string
}


const NestedItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut"
        }
    }
}

function ProjectSkillsBubble({ name }: Props) {
    return (
        <motion.div variants={ NestedItem }
                    className="bg-[#F5BEE3]/60
                        shadow-md
                        rounded-[15px]">
            <p className="text-[#CB76B1]   
                        text-[12px] 
                        md:text-[15px]
                        
                        pl-3 
                        pr-3 
                        pt-1 
                        pb-1"> { name } </p>
        </motion.div>
    )
}

export default ProjectSkillsBubble

{/* ALTERNATIVE TEXT COLOURS: #CB76B1*/}