
import projects from "../../data/projects.js"
function Projects(){
    return (
        
       <section id="projects">
        <h2>Projects</h2>
        <div>
            <ul>
                {projects.map((project)=>(
                    <li key={project.title}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                         <h4>Technologies</h4>

                        <ul>
                            {project.technologies.map((tech)=>(
                               
                               
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                        <div>
                        <a href={project.githubLink } target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                    </div>
                    </li>
                ))}
            </ul>
        </div>

       </section>
    )
}

export default Projects;