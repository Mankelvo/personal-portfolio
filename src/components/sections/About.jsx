import Kelvin from "../../assets/images/Kelvin.jpeg";
import Button from '../ui/Button';
import { ThumbsUp, Bug,GraduationCap } from 'lucide-react';


function About(){

    
    return (
        <section id="about" className="scroll-mt-20 relative z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100  min-h-screen  px-10 py-12">
                     <div className="absolute right-10 top-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

          <div className="max-w-6xl mx-auto"> 

             <div className="flex flex-col  items-center gap-16 mb-2 p-4 ">
            
               <div className="flex  flex-col md:flex-row  gap-10 text-center md:text-left p-4" >
              
                <div className="flex flex-col gap-4   max-w-xl " >
                  
                
        <h1 className="text-4xl md:text-6xl text-gray-800 font-bold leading-tight mb-4">Hi, I'm Kelvin</h1>
        <h2 className="text-xl md:text-2xl  text-blue-600 font-semibold mb-2">React Frontend Developer</h2>
        <p className="max-w-lg text-gray-700">I build clean, responsive, and user-friendly web applications
            using React and modern frontend technologies.
    
    </p>
 

     <div className="flex flex-wrap justify-center md:justify-start gap-4">
 <Button text="View Projects" variant="primary" href="#projects"/>
      <Button text="Email Me" href="mailto:mankelvousa@gmail.com" variant="secondary"/>
      <a 
  href="/Resume.pdf" 
  target="_blank" 
  rel="noreferrer"
  className="px-4 py-2 text-blue-600 hover:underline transition"
>
  Open Resume
</a>
     
  
     </div>

     </div>

        <div className="flex justify-center"  >
     <img className="h-72 w-72 md:w-96 md:h-96 object-cover rounded-full shadow-lg" src={Kelvin} alt="Kelvin Portrait"/>

        </div>

      
 
 </div>

  


        
       <div className="flex flex-col  md:flex-row  justify-center gap-6 px-2 py-4 items-center mt-6 ">
            <div className="flex flex-col items-center text-center gap-2 p-4">
                <ThumbsUp className="h-7 w-7 text-blue-600 shrink-0"/>
                <strong className="block text-blue-800 text-lg font-semibold">Focused</strong>
             
                <p className="text-gray-600  max-w-xs">Detail-oriented and committed to quality</p>

            </div>
             <div className="flex flex-col items-center text-center gap-2 p-4 ">
                 <Bug className="h-7 w-7 text-blue-600 shrink-0"/>

                <strong className="block text-lg text-blue-800 font-semibold">Problem Solver</strong>
             
                <p className="text-gray-600  max-w-xs">I love solving challenges and finding efficient solutions</p>

            </div>
             <div className="flex flex-col items-center text-center  gap-2 p-4 ">
               <GraduationCap className="h-7 w-7 text-blue-600 shrink-0"/>
                <strong className="block text-lg text-blue-800 font-semibold">Always Learning</strong>
                <p className="text-gray-600  max-w-xs">Continuously improving and exploring new technologies</p>

            </div>
        </div>
        
    </div>

        </div>  
        
        </section>
    )
}

export default About;