import { useState } from 'react';
import skills from '../../data/skills.js';
import { NavLink } from '../layout/Navbar.jsx';
function Skills(){

  const[activeCategory, SetactiveCategory] = useState("all");
  const categories =["All", "Frontend", "Backend", "Tools"];

    return (
            <section id="skills" className="scroll-mt-20 relative z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100  min-h-screen  px-10 py-12">
                     <div className="absolute right-10 top-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
            
        <div className="max-w-6xl mx-auto relative z-10">
            <h2 className='text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4'>Experties</h2>
                  
                    <div className='flex flex-col md:flex-row justify-center gap-4 mt-6 '>
                     { categories.map((cat) => (
                        <button
                        key={cat}
                        onClick={()=>SetactiveCategory(cat)}
                        className={`px-4 py-2  rounded-full border transition ${
                          activeCategory===cat? 'bg-purple-600 text-gray-800 shadow-sm': 'text-gray-700 hover:bg-blue-700'
                        }`}
                        >{cat}</button>
                      ) )}
                  
                    </div>



  <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10'>
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
       className=' flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm w-full max-w-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200'>
        <Icon className=" w-5 h-5 text-blue-600 group-hover:text-blue-700"/>
        <span className='text-gray-800 font-medium'>{item.name}</span>
      </div>
      
    );
  })}
  </div>

               
                
</div>
        
   </section>

            
       )

      }

export default Skills;