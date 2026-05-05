import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar'
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';






function Home(){
    return(
   <>
    <Navbar/>
    
    <main>

    <About/>
    <Skills/>
    <Projects/>
    <Contact/>

    </main>

   <Footer/>
   </>
    )
}

export default Home;