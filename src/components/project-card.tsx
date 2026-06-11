
type Props = {
    title: string;
    subtitle: string;
    details: string;  /* replace with string[] later on */ 
}


function ProjectCard({ title, subtitle, details }: Props) {
    return (
        <article className="project-card">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{details}</p>
        </article>
    )
}

export default ProjectCard