import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";



function Navbar(){
    const [isOpen, setIsOpen] = useState(false);


    const NavLink = "text-sm font-medium text-gray-700 hover:text-blue-600  transition-colors duration-200 cursor-pointer"
    const ResumeLink = " rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm  hover:bg-blue-700 transition-colors  duration-200"
    return(
        <nav className=" sticky relative top-0  items-center bg-white/70 backdrop-blur-md w-full mx-auto z-50 border border-white/20 ">
           
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
                <li><a  className={ResumeLink} href="/Resume.pdf" target='_blank' rel='noreferrer'>Resume</a></li>
            </ul>

            <button
            className="md:hidden text-2xl text-gray-800 hover:text-blue-600"
            onClick={()=>setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
            >
             
            <span className="transition-transform duration-300">
          {isOpen? <RxCross1 />
            : <GiHamburgerMenu /> 

}
            </span>
              
            </button>
            </div>

         
       <ul id="mobile-menu" className={` absolute top-full left-0 w-full flex flex-col items-center gap-8 py-4 md:hidden bg-white/90 border-t backdrop-blur-md z-50 shadow-md  border-gray-200 will-change-transform transform transition-all duration-300 ease-in-out origin-top ${
       isOpen ? "scale-y-100 translate-y-0 opacity-100 pointer-events-auto" : "scale-y-0 translate-y-2 opacity-0  pointer-events-none"}`}>
            
                <li ><a  className={NavLink} href="#about" onClick={()=>setIsOpen(false)}>About</a></li>
                <li><a   className={NavLink}  href="#skills"  onClick={()=>setIsOpen(false)}>Skills</a></li>
                <li><a  className={NavLink} href="#projects"  onClick={()=>setIsOpen(false)}>Projects</a></li>
                <li><a  className={NavLink} href="#contact"  onClick={()=>setIsOpen(false)}>Contact</a></li>
                <li><a  className={ResumeLink} href="/Resume.pdf" target='_blank' rel='noreferrer'  onClick={()=>setIsOpen(false)}>Resume</a></li>
            </ul>

            
        </nav>
 
    )
}

export default Navbar;