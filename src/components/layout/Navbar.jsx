function Navbar(){
    const NavLink = "hover:text-blue-600 transition "
    return(
        <nav className="flex justify-between items-center bg-white/70 backdrop-blur-md max-w-6xl mx-auto sticky top-0 z-50 ">
            <a  className="hover:text-blue-600 transition tx-xl font-bold"href="#">Kelvin</a> 
       <ul className="flex justify-around gap-8 items-center px-8 py-4">
            
                <li ><a  className={NavLink} href="#about">About</a></li>
                <li><a   className={NavLink}  href="#skills">Skills</a></li>
                <li><a  className={NavLink}>Projects</a></li>
                <li><a  className={NavLink} href="#contact">Contact</a></li>
                <li><a  className={NavLink} href="#">Resume</a></li>
            </ul>
        </nav>
 
    )
}

export default Navbar;