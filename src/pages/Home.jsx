import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
function Home(){
    return(
   <>
    <Navbar/>
    <main>Home Page</main>
    <Hero/>
    <About/>
   <Footer/>
   </>
    )
}

export default Home;