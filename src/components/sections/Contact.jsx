
import Section from "../layout/sections";

import { Phone, Mail } from 'lucide-react';
import Button from "../ui/Button";

<i data-lucide="phone"></i>  
function Contact(){
    return (
        
        <Section id="contact">
        <h2 className='text-3xl md:text-4xl font-bold text-blue-600 text-center mb-4'>Contact Me</h2>
              <p className="max-w-lg text-gray-700 text-center my-6 mx-auto" >I'm currently open to frontend developer opportunities and freelance projects. Feel free to reach out.</p>

        <div className=" flex flex-col md:flex-row gap-10  p-4 md:text-left">
      <div className="max-w-xl flex flex-col gap-4 text-left ">

        <h2 className=" max-w-3xl md:max-w-4xl font-bold text-blue-600 text-3xl">Get in Touch</h2>
        <p className="max-w-sm md:max-w-lg text-blue-400">I'd like to hear from you</p>
        <p className="max-w-lg text-gray-700">If you have any inqueries of just want to say hi, 
             please use the contact form!</p>

   
    <div className="flex flex-col gap-2 ">

              <div className="flex items-center gap-3 ">
                 <Phone className="text-blue-800"/>
                <a href="tel: +1-508-615-0259" className="md:text-l font-medium hover:text-blue-600">
                +15086150259
                </a>
                </div> 

                <div className="flex items-center gap-3 " >
                 <Mail className="text-blue-800"/>
                <a href="mail to: kelvostudy@gmail.com" className="md:text-l font-medium hover:text-blue-600 hover:underline">
                 kelvostudy@gmail.com
                </a>
        
              
                </div> 
            </div>
      </div>

           
           

            <div className="flex md:flex-col max-w-4xl  ">
                <form className="max-w-md mx-auto">
                       <h3 className='text-xl md:text-2xl font-bold text-blue-600 text-center mb-4'>Contact Form</h3>
                    <div className="flex flex-col md:flex-row gap-2">
                     
                    <div className=" form-group ">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" id="firstName" placeholder="First name" className="form-input"/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" id="lastName" placeholder="Last name" className="form-input" />
                    </div>

                    </div>
                    <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" placeholder="email" className="form-input"/>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                        className="form-input"
                        id="messsage"
                        minLength={50}
                    
                        row={4}
                        placeholder="Write your message here..."
                        />
                        <div className="flex justify-end w-full">
                         <button type="submit" className="text-sm border font-semibold px-4 py-1 mt-4 hover:bg-blue-600 hover:text-white transition-colors ">Submit</button>

                        </div>
                        
                    </div>


                       

                </form>
        </div>

        </div>
        
    </Section>
    )
}

export default Contact;