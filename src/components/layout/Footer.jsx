    
    import Section from "./sections";

function Footer(){

    return(
        <footer className="border-t border-slate-900/10 ">
            <Section id="footer">

                <div className="flex flex-col items-center gap-6 py-6 text-center">
                
            <div >
        <h2 className="text-2xl font-bold text-slate-900 tracking-wide">Kelvin</h2>
            <p className="text-sm text-slate-700 pt-2">Frontend Developer</p>
            </div>
            
            
                <nav aria-label="Footer social links"className="flex flex-wrap justify-center gap-6 ">
                <a href="https://github.com/Mankelvo"
                 target="_blank"
                  rel="noopener noreferrer"
                   className=" font-medium text-slate-800 transition-colors duration-300 hover:text-slate-950"

                  >
                    GitHub
                    </a>
                <a href="https://www.linkedin.com/in/kelvin-maina-789086154"
                 target="_blank" rel="noopener noreferrer"
                 className=" font-medium text-slate-800 transition-colors duration-300 hover:text-slate-950"
                 >
                    LinkedIn
                    </a>

                <a href="mailto:kelvostudy@gmail.com"
                      className="font-medium text-slate-800 transition-colors duration-300 hover:text-slate-950"

                >
                    Email
                    </a>


                    </nav>
         
         
             <p className="text-sm text-slate-700">© {new Date().getFullYear()} Kelvin. All rights reserved.</p>
                    
</div>
  </Section>
        </footer>
      
    )
}

export default Footer;