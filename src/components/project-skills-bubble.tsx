// This skill bubble will be used for each of the project cards i.e. related skills

type Props = {
    name : string
}

function ProjectSkillsBubble({ name }: Props) {
    return (
        <div className="bg-[#F5BEE3] 
                        drop-shadow-sm 
                        rounded-[15px]">
            <p className="pl-3 
                        pr-3 
                        pt-1 
                        pb-1"> { name } </p>
        </div>
    )
}

export default ProjectSkillsBubble
