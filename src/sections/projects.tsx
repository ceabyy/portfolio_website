// PROJECTS SECTION /PAGE
import ProjectCard from '../components/project-card.tsx';
import { motion, type Variants } from 'framer-motion';

// handles animations for motion.
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
            staggerChildren: 0.15
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

function Projects() {

    const projects = [
        {projectTitle:"Project", projectHeader:"Small subheader of what project is", projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum."},
        {projectTitle:"Project", projectHeader:"Small subheader of what project is", projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum."},
        {projectTitle:"Project", projectHeader:"Small subheader of what project is", projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum."},
        {projectTitle:"Project", projectHeader:"Small subheader of what project is", projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum."},
        {projectTitle:"Project", projectHeader:"Small subheader of what project is", projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum."},
        {projectTitle:"Project", projectHeader:"Small subheader of what project is", projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum."},
        {projectTitle:"Project", projectHeader:"Small subheader of what project is", projectDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada aliquam luctus. Fusce maximus tempor laoreet. Integer eget dolor nisl. Suspendisse ultrices sodales elementum."},
    ]

    return ( 
        <motion.div variants= { container }
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className = "h-dvh flex flex-col items-center justify-center">
            <motion.h1 variants={ item } className="text-[20px] md:text-[25px] font-bold text-[#904C7E] pb-[2%]"> PROJECTS. </motion.h1>
            <motion.div variants= { NestedContainer }
                        className="project-card-container 
                            flex 
                            flex-col
                            items-center 
                            justify-start 
                            w-[90%] 
                            h-[85%] 
                            bg-[#FFD0D0]/35 
                            rounded-[50px] 
                            shadow-xl 
                            p-[2%]
                            pt-[5%] 
                            gap-[5%] 
                            overflow-y-scroll
                            snap-y
                            snap-mandatory
                            scroll-p-[4%]
                            
                            md:flex 
                            md:flex-row 
                            md:items-center 
                            md:justify-start 
                            md:w-[80%] 
                            md:h-[80%] 
                            md:bg-[#FFD0D0]/35 
                            md:rounded-[50px] 
                            md:shadow-xl 
                            md:p-[2%] 
                            md:gap-[2%] 
                            md:overflow-x-scroll
                            md:overflow-y-hidden
                            md:snap-x
                            md:scroll-p-[1.5%]">

                {projects.map((project) => (  
                    <ProjectCard projectTitle={project.projectTitle} projectHeader={project.projectHeader} projectDescription={project.projectDescription}/>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects