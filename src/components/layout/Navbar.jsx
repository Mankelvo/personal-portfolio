import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";



function Navbar(){
    const [isOpen, setIsOpen] = useState(false);


    const NavLink = "text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
    const ResumeLink = " rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm  hover:bg-blue-700 transition-colors  duration-200"
    return(
        <nav className=" items-center bg-white/70 backdrop-blur-md w-full mx-auto sticky top-0 z-50 border border-white/20 ">
           
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <div className ="flex items-center gap-2">
               <img src={logo} alt="Kelvin Logo" className="w-8 h-8"/>
       
            <a  className="hover:text-blue-600 transition text-xl md:text-xl font-semibold text-gray-900 "href="#">Kelvin </a> 
     
</div>
         
       <ul className="hidden md:flex  gap-8 items-center">
            
                <li ><a  className={NavLink} href="#about">About</a></li>
                <li><a   className={NavLink}  href="#skills">Skills</a></li>
                <li><a  className={NavLink} href="#projects">Projects</a></li>
                <li><a  className={NavLink} href="#contact">Contact</a></li>
                <li><a  className={ResumeLink} href="Documents/Resume.pdf" target='_blank' rel='noreferrer'>Resume</a></li>
            </ul>

            <button
            className="md:hidden text-2xl text-gray-800 hover:text-blue-600"
            onClick={()=>setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu" >
            <span className="transition-transform duration-300">
          {isOpen? <RxCross1 />
            : <GiHamburgerMenu /> 

}
            </span>
              
            </button>
            </div>

         {
       <ul className={`flex flex-col items-center gap-8 py-4 md:hidden bg-white/90 border-t border-gray-100 transition-all duration-300 ease-in-out ${
       isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
            
                <li ><a  className={NavLink} href="#about" onClick={()=>setIsOpen(false)}>About</a></li>
                <li><a   className={NavLink}  href="#skills"  onClick={()=>setIsOpen(false)}>Skills</a></li>
                <li><a  className={NavLink} href="#projects"  onClick={()=>setIsOpen(false)}>Projects</a></li>
                <li><a  className={NavLink} href="#contact"  onClick={()=>setIsOpen(false)}>Contact</a></li>
                <li><a  className={ResumeLink} href="Documents/Resume.pdf" target='_blank' rel='noreferrer'  onClick={()=>setIsOpen(false)}>Resume</a></li>
            </ul>

            }
        </nav>
 
    )
}

export default Navbar;