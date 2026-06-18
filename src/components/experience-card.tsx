// experience cards for container in experience page

// add props here later on

// can convert this into list of strings

type Props = {
    company : string
    position : string
    dates : string
    details : string
}

function ExperienceCard({company, position, dates, details} : Props) {
    return (
        <div className="bg-[#FFDADB] 
                        flex 
                        flex-shrink-0 
                        flex-col 
                        justify-start 
                        h-[35%] 
                        md:h-[35%] 
                        w-full 
                        rounded-[30px] 
                        md:rounded-[50px] 
                        pt-[5%] 
                        p-[8%] 
                        md:p-[3%] 
                        shadow-xl 
                        overflow-y-auto 
                        md:overflow-y-hidden 
                        snap-start">

            <p className="text-[20px] 
                        md:text-[25px] 
                        text-[#B73854] 
                        font-bold "> { company.toUpperCase() } </p>

            <p className="text-[15px] 
                        md:text-[20px] 
                        text-[#B73854] 
                        font-light 
                        -mt-1 
                        md:-mt-2"> { position } </p>

            <p className="text-[15px] 
                        md:text-[20px] 
                        text-[#B73854] 
                        font-light 
                        -mt-1 
                        md:-mt-2"> { dates } </p>

            <p className="h-[90%] 
                        w-full 
                        text-[10px]
                        md:text-[15px] 
                        text-[#B73854] 
                        font-light 
                        pt-[2%] 
                        md:pt-[1%]
                        break-words"> { details } </p>
        </div>
    )
}

export default ExperienceCard