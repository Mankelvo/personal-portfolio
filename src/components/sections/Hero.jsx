import Kelvin from "../../assets/images/Kelvin.jpeg";
import Button from '../ui/Button';

function Hero(){
    return (
        <section className=" max-w-6xl mx-auto min-h-screen flex   flex-col md:flex-row items-center justify-center gap-10 px-10 py-12 ">
               <div className="flex flex-col gap-4 text-center md:text-left">
        <p className="text-lg md:text-xl text-gray-600">Hi, I'm Kelvin</p>
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 leading-tight">React Frontend Developer</h1>
        <p className="max-w-lg text-gray-700">I build responsive, user-friendly web applications with React,
        JavaScript, and modern frontend tools.</p>

     <div className="flex  flex-wrap justify-center md:justify-start gap-4 ">
 <Button text="View Projects" variant="primary"/>
      <Button text="Contact Me" variant="secondary"/>
       <Button text="Download Resume" variant="tertiary"/>
     </div>
       
        </div>
        <div  >
                    <img className="h-64 w-64 md:w-80 md:h-80 object-cover rounded-full shadow-lg" src={Kelvin} alt="Kelvin Portrait"/>

        </div>
        </section>
    )
}

export default Hero;