// bubble of skills

type Props = {
    name : string
}

function SkillsBubble({ name }: Props) {
    return (
        <div className="bg-[#F5F3FF] drop-shadow-sm rounded-[15px]">
            <p className="pl-3 pr-3 pt-1 pb-1"> { name } </p>
        </div>
    )
}

export default SkillsBubble
