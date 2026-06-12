// PROJECTS SECTION /PAGE
import ProjectCard from '../components/project-card.tsx';

function Projects() {
    return (
        <div className = "h-dvh flex flex-col items-center justify-center snap-y">
            <h1 className="text-[20px] md:text-[25px] font-bold text-[#904C7E] pb-[2%]"> PROJECTS </h1>
            <div className="project-card-container 
                            flex 
                            flex-row 
                            items-center 
                            justify-start 
                            w-[80%] 
                            h-[80%] 
                            bg-[#FFD0D0]/35 
                            rounded-[50px] 
                            shadow-xl 
                            p-[2%] 
                            gap-[2%] 
                            overflow-x-scroll">
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