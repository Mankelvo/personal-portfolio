import Kelvin from "../../assets/images/Kelvin.jpeg";
import Button from '../ui/Button';


function Hero(){

    const ResumeButton =({text,href,download,target, rel, ...props}) =>{
       const className = "px-4 py-2 text-blue-600 hover:underline transition"; 

         
        if (href){
            return (
<a href={href} download={download} className={className} target={target} rel={rel}>{text}</a>
            );
        }
        return <button className={className} {...props}>{text}</button>
    }
    return (
        <section className="relative z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-10 py-12">
             <div className="absolute right-10 top-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20"></div>
               <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-lg md:text-xl text-gray-600">Hi, I'm Kelvin</p>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">React Frontend Developer</h1>
        <p className="max-w-lg text-gray-700">I build responsive, user-friendly web applications with React,
        JavaScript, and modern frontend tools.</p>

     <div className="flex flex-wrap justify-center md:justify-start gap-4">
 <Button text="View Projects" variant="primary"/>
      <Button text="Contact Me" variant="secondary"/>
      <ResumeButton  href="/Documents/Resume.pdf" text="Download Resume"  target="_blank"/>
  
     </div>
       </div>
        <div  >
                    <img className="h-64 w-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg" src={Kelvin} alt="Kelvin Portrait"/>

        </div>
        
        </section>
    )
}

export default Hero;