import SkillBubble from "@/components/SkillBubble";

function About() {

    const skills = [
        { id:"Python", name:"Python" },
        { id:"C#", name:"C#" },
        { id:"JavaScript", name:"JavaScript" },
        { id:"React.JS", name:"React.JS" },
        { id:"HTML", name:"HTML" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
    ]

    return(
        <div className="h-dvh grid grid-cols-[1fr_2fr] items-center justify-center snap-y">
            <section className = "flex flex-col items-start p-[20%]"> 
                <h1 className="text-white text-[20px] text-center font-bold pb-[3%]"> SKILLS </h1>
                <section className="flex flex-wrap gap-[10px] gap-y-[5px]"> 

                    {/* map function */}
                    {skills.map((skill) => (
                        <SkillBubble key={skill.id} name={skill.name} /> 
                    ))}

                </section> 
            </section>
            <section className="flex flex-col items-start pl-[5%] pr-[20%]">
                <h1 className="text-white text-[20px] text-center font-bold pb-[3%]"> ABOUT </h1>
                <p className="text-white font-extralight"> A paragraph about me here. A paragraph about me here. A paragraph about me here. A paragraph about me here.</p>
            </section> 
        </div>
    )
}

export default About