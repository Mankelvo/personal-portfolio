import skills from '../../data/skills.js';
function Skills(){
    return (
        <section>
            <h2>Skills</h2>
               <div>
                <ul>
                {
                    skills.map((skill)=>(
                     <li key ={skill.category}>
                     <h3 >{skill.category}</h3>
                     <ul>
                        {
                            skill.items.map((item)=>(
                                <li key={item}>{item}</li>
                            )) }
                     </ul>
                   
                     </li>
                    ))}
                    
                          
                </ul>
              
              </div>


        </section>
        
            
        
    )

}

export default Skills;