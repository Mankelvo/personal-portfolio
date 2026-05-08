import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar'
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';






function Home(){
    return(
   <div className='bg-slate-50 text-gray-800'>
    <Navbar/>
    
    <main>

    <About/>
    <Skills/>
    <Projects/>
    <Contact/>

    </main>

   <Footer/>
   </div>
    )
}

export default Home;