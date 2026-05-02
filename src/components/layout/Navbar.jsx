import logo from "../../assets/images/logo.png";

function Navbar(){
    const NavLink = "text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
    const ResumeLink = " rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm  hover:bg-blue-700 transition-colors  duration-200"
    return(
        <nav className=" items-center bg-white/70 backdrop-blur-md w-full mx-auto sticky top-0 z-50 border border-white/20 ">
           
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <div className ="flex items-center gap-2">
               <img src={logo} alt="Kelvin Logo" className="w-8 h-8"/>
       
            <a  className="hover:text-blue-600 transition text-xl md:text-xl font-semibold text-gray-900 "href="#">Kelvin </a> 
     
</div>
       
       <ul className="flex justify-around gap-8 items-center px-8 py-4">
            
                <li ><a  className={NavLink} href="#about">About</a></li>
                <li><a   className={NavLink}  href="#skills">Skills</a></li>
                <li><a  className={NavLink} href="#projects">Projects</a></li>
                <li><a  className={NavLink} href="#contact">Contact</a></li>
                <li><a  className={ResumeLink} href="Documents/Resume.pdf" target='_blank' rel='noreferrer'>Resume</a></li>
            </ul>
            </div>

        
        </nav>
 
    )
}

export default Navbar;