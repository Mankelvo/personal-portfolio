import Kelvin from "../../assets/images/Kelvin.jpeg";


function Hero(){
    return (
        <section>
               <div>
        <p>Hi, I'm Kelvin</p>
        <h1 className="text-4x1 font-bold text-blue-600">React Frontend Developer</h1>
        <p>I build responsive, user-friendly web applications with React,
        JavaScript, and modern frontend tools.</p>

     <div>
 <button>View Projects</button>
        <button>Contact Me</button>
        <button>Download Resume</button>
     </div>
       
        </div>
        <div>
                    <img src={Kelvin} alt="Kelvin Portrait"/>

        </div>
        </section>
    )
}

export default Hero;