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
        { id:"Data Structures & Algorithms", name:"Data Structures & Algorithms" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
        { id:"CSS", name:"CSS" },
    ]

    return(
        <div className="h-dvh 
                        flex 
                        flex-col 
                        items-center 
                        justify-center 
                        snap-y 
                        gap-[5%]
                        
                        md:flex-row">
            {/* column 1 */}
            <section className="h-[50%] 
                                flex 
                                flex-col 
                                items-start 
                                justify-center 
                                pl-[20%] 
                                pr-[20%] 
                                
                                md:pl-[10%] 
                                md:pr-0 
                                md:h-full 
                                md:w-[30%]"> 

                <h1 className="text-[#1E3576] 
                                text-center 
                                font-bold 
                                pb-[3%]
                                
                                md:text-white text-[20px] "> SKILLS. </h1>
                <section className="flex 
                                    flex-wrap 
                                    gap-[10px] 
                                    gap-y-[10px]"> 

                    {/* map function */}
                    {skills.map((skill) => (
                        <SkillBubble key={skill.id} name={skill.name} /> 
                    ))}

                </section> 
            </section>

            {/* column 2 */}
            <section className="h-[50%] 
                                flex 
                                flex-col 
                                items-start 
                                justify-center 
                                pl-[20%] 
                                pr-[20%] 
                                
                                md:pl-[10%] 
                                md:pr-[15%] 
                                md:h-full 
                                md:w-[60%]">

                <h1 className="text-white 
                                text-[20px] 
                                text-center 
                                font-bold 
                                pb-[3%]"> ABOUT. </h1>
                <p className="text-white 
                            font-extralight 
                            md:text-[20px] "> Hi! My name is Ceaby. I'd say I'm very attentive, curious, self-motivated and thrive as a team leader or member. I'm a Bachelor of Science (Technology) graduate, having majored in signal processing and machine learning (ML), with a further educational background in computer science, ML and artificial intelligence (AI).</p>
            
            </section> 

            {/* potential column 3 for ascii of my photo */}
        </div>
    )
}

export default About