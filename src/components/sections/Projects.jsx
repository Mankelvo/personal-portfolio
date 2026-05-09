

import projects from "../../data/projects.js"
import Section from "../layout/sections.jsx";
function Projects(){
    return (
        
       <Section id="projects">
        <h2 className='text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4'>Projects</h2>
        <p className="text-gray-500 text-center max-w-2xl mx-auto">
  A collection of projects showcasing my frontend development skills, responsive UI design, and React-based applications.
</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-10 mb-10 ">
            {
                projects.map(project=>
                (
                    <div key={project.title}
                    className=" group w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300  "
                    >
                        <div className="  overflow-hidden rounded-lg ">
                          <img src={project.image} alt={project.title} loading="lazy" className=" w-full rounded-t-lg transition-transform duration-500 group-hover:scale-105  h-48 object-cover"/>

                        </div>

                      <div className="p-5 flex flex-col h-full">

                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-center">{project.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 text-sm">{project.description}</p>
                       
                        <div className="flex flex-wrap  gap-2 mb-4">
                            {
                                project.tech.map(item=>
                                (<span key={item} className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full">{item}</span>  

                                )
                                   
                                )
                            }
                                 </div>

                                 <div className="  flex flex-wrap  gap-3 mb-4 ">
                            <a className=" group px-4 py-2 rounded bg-blue-100 text-sm  text-gray-700 font-medium hover:bg-blue-600 hover:text-white shadow-md transition-transform hover:scale-105 duration-300" href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                             <a className=" group px-4 p-2 rounded bg-blue-100 text-sm  text-gray-700 font-medium hover:bg-blue-600 hover:text-white shadow-md transition-transform hover:scale-105 duration-300" href={project.live} target="_blank" rel="noopener noreferrer">Live Project</a>
                        </div>
                            
                        </div>

                        
                    
                    </div>)
                )
            
            }
        </div>

       </Section>
    )
}

export default Projects;