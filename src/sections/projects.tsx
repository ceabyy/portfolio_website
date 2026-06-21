// PROJECTS SECTION /PAGE
import ProjectCard from '../components/project-card.tsx';

//importing images for projects
import PortfolioPreview from '../assets/portfolio-preview.png';
import HappyWoofPreview from '../assets/happywoof-preview.png';
import RemoteWorkersPreview from '../assets/remoteworkers-preview.png'
import WhatadoroPreview from '../assets/whatadoro-preview.png';

import { motion, type Variants } from 'framer-motion';

// handles animations for motion.
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const NestedContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut"
        }
    }
}

function Projects() {

    const projects = [
        {projectTitle:"Portfolio", projectLink:"",image:PortfolioPreview, projectHeader:"This website you're on right now.", projectDescription:"A website that I made with mainly React.js, Tailwind CSS and Framer Motion for displaying my skills, projects, history and experience. A great place to get to know me professionally.", skills:["React", "Typescript", "Javascript", "Framer Motion", "HTML", "CSS", "Web Development"]},
        {projectTitle:"HappyWoof", projectLink:"https://ceabyy.github.io/HappyWoof/",image:HappyWoofPreview, projectHeader:"AI-Powered Dog Emotion Interpreter", projectDescription:"Finetuned ResNet18 on a labelled dataset of dog images from kaggle to classify dog emotions. Inspired by many of my friends having dogs.", skills:["Machine Learning", "Artificial Intelligence", "Model Finetuning", "Flask", "Python", "HTML", "CSS", "Web Development"]},
        {projectTitle:"Remote Workers' Welfare", projectLink:"https://github.com/ceabyy/remoteworkersmentalhealth",image:RemoteWorkersPreview, projectHeader:"Understanding remote workers' mental health through data analysis/science", projectDescription:"Learnt and used Tableau on a Kaggle dataset to investigate how remote workers compare to their non-remote counterparts.", skills:["Data Analysis", "Data Science", "Tableau", "Dashboard Creation"]},
        {projectTitle:"whatadoro?", projectLink:"https://ceabyy.github.io/whatadoro/",image:WhatadoroPreview, projectHeader:"(IN PROGRESS) AI-Powered Pomodoro Study Timer", projectDescription:"Not sure how long your pomodoro sessions should be? Let whatadoro help you figure out by automatically adjusting to you after each session! This was my first project that I worked on after graduating from university.", skills:["HTML", "CSS", "Javascript", "Web Development"]},
    ]

    return ( 
        <motion.div variants= { container }
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className = "h-dvh flex flex-col items-center justify-center">
            <motion.h1 variants={ item } className="text-[20px] md:text-[25px] font-bold text-[#904C7E] pb-[2%]"> PROJECTS. </motion.h1>
            <motion.div variants= { NestedContainer }
                        className="project-card-container 
                            flex 
                            flex-col
                            items-center 
                            justify-start 
                            w-[90%] 
                            h-[85%] 
                            bg-[#FFD0D0]/35 
                            rounded-[50px] 
                            shadow-xl 
                            p-[2%]
                            pt-[5%] 
                            gap-[5%] 
                            overflow-y-scroll
                            snap-y
                            snap-mandatory
                            scroll-p-[4%]
                            
                            md:flex 
                            md:flex-row 
                            md:items-center 
                            md:justify-start 
                            md:w-[80%] 
                            md:h-[80%] 
                            md:bg-[#FFD0D0]/35 
                            md:rounded-[50px] 
                            md:shadow-xl 
                            md:p-[2%] 
                            md:gap-[2%] 
                            md:overflow-x-scroll
                            md:overflow-y-hidden
                            md:snap-x
                            md:scroll-p-[1.5%]">

                {projects.map((project) => (  
                    <ProjectCard key={project.projectTitle} projectTitle={project.projectTitle} projectLink={project.projectLink} image={project.image} projectHeader={project.projectHeader} projectDescription={project.projectDescription} skills={project.skills}/>
                ))}
            </motion.div>
        </motion.div>
    )
}

export default Projects