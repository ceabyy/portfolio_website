type Props = {
    school: string
    date: string
    details: string /* replace with string[] later on */ 
}

function EducationCard({ school, date, details }: Props) {
    return (
        <div className = "pb-[4%]">
            <h1 className = "text-[20px] text-white font-bold flex items-start"> {school.toUpperCase()} </h1>
            <h1 className = "text-[20px] text-white italic flex items-start"> {date} </h1>
            <h1 className = "text-[20px] font-extralight text-white flex items-start pt-[5%]"> {details} </h1>
        </div>
    )
}

export default EducationCard