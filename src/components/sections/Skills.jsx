import { useState } from 'react';
import skills from '../../data/skills.js';
import Section from '../layout/sections.jsx';
function Skills(){

  const[activeCategory, setActiveCategory] = useState("All");
  const categories =["All", "Frontend", "Backend", "Tools"];

    return (
            <Section id="skills"  >
            
        <div className=" relative z-10">
            <h2 className='text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4'>Technical Skills</h2>
            <p className='text-slate-600 text-center max-w-2xl mx-auto'>
  Technologies and tools I use to build modern, scalable, and responsive applications.
</p>
                  
                    <div className='flex flex-wrap justify-center gap-4 mt-6 '>
                     { categories.map((cat) => (
                        <button
                        key={cat}
                        onClick={()=>setActiveCategory(cat)}
                        className={`px-4 py-2  rounded-full border transition-all duration-300 ${
                          activeCategory===cat? 'bg-blue-600 text-white border-blue-600 shadow-sm': 'text-slate-700 font-medium border-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600'
                        }`}
                        >{cat}</button>
                      ) )}
                  
                    </div>



  <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,260px))] justify-center gap-6 mt-10'>
  {
    skills.
    filter(skill =>activeCategory ==="All" || 
      skill.category===activeCategory)
    .flatMap((skill) =>skill.items)
  .map((item)=> {
    const Icon = item.icon;
    
    return (
      <div
      key={item.name}
       className=' group flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300'>
        <Icon className=" w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors duration-300"/>
        <span className='text-slate-800 font-medium'>{item.name}</span>
      </div>
      
    );
  })}
  </div>

               
                
</div>
        
   </Section>

            
       )

      }

export default Skills;