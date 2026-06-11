import SkillBubble from "../components/skills-bubble.tsx";

function About() {

    const skills = [
        { id:"Python", name:"Python" },
        { id:"C#", name:"C#" },
        { id:"JavaScript", name:"JavaScript" },
        { id:"React.js", name:"React.js" },
        { id:"HTML", name:"HTML" },
        { id:"C++", name:"C++" },
        { id:"Object-Oriented Programming", name:"Object-Oriented Programming" },
        { id:"Supabase", name:"Supabase" },
        { id:"Next.js", name:"Next.js" },
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
                <p className="text-white font-extralight"> Hi! My name is Ceaby. I'd say I'm very attentive, curious, self-motivated and thrive as a team leader or member. I'm a Bachelor of Science (Technology) graduate, having majored in signal processing and machine learning (ML), with a further educational background in computer science, ML and artificial intelligence (AI).</p>
            </section> 

            {/* potential column 3 for ascii of my photo */}
        </div>
    )
}

export default About