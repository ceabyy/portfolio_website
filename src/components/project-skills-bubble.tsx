// This skill bubble will be used for each of the project cards i.e. related skills

type Props = {
    name : string
}

function ProjectSkillsBubble({ name }: Props) {
    return (
        <div className="bg-[#F5BEE3]/75
                        shadow-md
                        rounded-[15px]">
            <p className="text-white
                        text-[15px]
                        pl-3 
                        pr-3 
                        pt-1 
                        pb-1"> { name } </p>
        </div>
    )
}

export default ProjectSkillsBubble
