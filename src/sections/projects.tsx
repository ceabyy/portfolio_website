// PROJECTS SECTION /PAGE
import ProjectCard from '../components/project-card.tsx';

function Projects() {
    return (
        <div className = "h-dvh flex flex-col items-center justify-center snap-y">
            <h1 className="text-[20px] md:text-[25px] font-bold text-[#904C7E] pb-[2%]"> PROJECTS </h1>
            <div className="project-card-container 
            
                            flex 
                            flex-col
                            items-center 
                            justify-start 
                            w-[90%] 
                            h-[80%] 
                            bg-[#FFD0D0]/35 
                            rounded-[50px] 
                            shadow-xl 
                            p-[2%]
                            pt-[5%] 
                            gap-[5%] 
                            overflow-y-scroll
                            
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
                            md:overflow-x-scroll">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                {/*  map function for each project card below */}
            </div>
        </div>
    )
}

export default Projects