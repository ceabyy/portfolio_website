import SkillBubble from "../components/skills-bubble.tsx";

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
        <div className="h-dvh grid grid-cols-1 md:grid-cols-[2fr_2.5fr] items-center justify-center snap-y">
            {/* column 1 */}
            <section className = "flex flex-col items-start p-[20%]"> 
                <h1 className="text-white text-[20px] text-center font-bold pb-[3%]"> SKILLS </h1>
                <section className="flex flex-wrap gap-[10px] gap-y-[5px]"> 

                    {/* map function */}
                    {skills.map((skill) => (
                        <SkillBubble key={skill.id} name={skill.name} /> 
                    ))}

                </section> 
            </section>

            {/* column 2 */}
            <section className="flex flex-col items-start pl-[20%] md:pl-[5%] pr-[15%]">
                <h1 className="text-white text-[20px] text-center font-bold pb-[3%]"> ABOUT </h1>
                <p className="text-white font-extralight"> A paragraph about me here. A paragraph about me here. A paragraph about me here. A paragraph about me here. A paragraph about me here. A paragraph about me here. A paragraph about me here. A paragraph about me here.</p>
            </section> 

            {/* potential column 3 for ascii of my photo */}
        </div>
    )
}

export default About