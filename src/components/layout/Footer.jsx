    
    import Section from "./sections";

function Footer(){

    return(
        <footer className="border-t border-gray/10 ">
            <Section id="footer">

                <div className="flex flex-col items-center gap-6 py-10 text-center">
                
            <div >
        <h2 className="text-2xl font-bold text-blue-600 tracking-wide">Kelvin</h2>
            <p className="text-sm text-gray-400 pt-2">Frontend Developer</p>
            </div>
            
            
                <nav aria-label="Footer social links"className="flex gap-6 ">
                <a href="https://github.com/Mankelvo"
                 target="_blank"
                  rel="noopener noreferrer"
                   className="text-blue-400 transition hover:text-blue-800"

                  >
                    GitHub
                    </a>
                <a href="https://www.linkedin.com/in/kelvin-maina-789086154"
                 target="_blank" rel="noopener noreferrer"
                 className="text-blue-400 transition hover:text-blue-800"
                 >
                    LinkedIn
                    </a>

                <a href="mailto:kelvostudy@gmail.com"
                      className="text-blue-400 transition hover:text-blue-800"

                >
                    Email
                    </a>


                    </nav>
         
         
             <p className="text-sm text-blue-500">© {new Date().getFullYear()} Kelvin. All rights reserved.</p>
                    
</div>
  </Section>
        </footer>
      
    )
}

export default Footer;