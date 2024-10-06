import { Element } from 'react-scroll';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import reddit from './images/reddit.png';
import email from './images/email.png';


function Contact () {
    return (
        <Element name="contact" >
            <div className="text-white mt-10 pt-10 mb-12" >
                {/* <h1 className="text-4xl font-bold text-center pt-8">Contact Me</h1> */}
                <div className="ml-0 px-5 md:px-0 md:ml-20">
                    <p className="text-4xl font-bold" >Contact Me</p>
                    <p className="text-lg mt-8">Get in touch with me. I am active on these social media platforms.</p>
                    <p className="text-lg">Feel free to contact me anytime. I am mostly on my phone anyways.</p>
                    <p className="flex flex-row gap-4 mt-4">
                        <a href="https://www.instagram.com/devanshu_tripathi_120/" target="_blank"><img src={instagram} className="bg-white h-10 md:h-10 rounded-lg " /></a>
                        <a href="https://www.linkedin.com/in/devanshu-tripathi-479289229/" target="_blank"><img src={linkedin} className="bg-white h-10 md:h-10 rounded-lg " /></a>
                        <a href="https://www.reddit.com/user/DevanshuTripathi/" target="_blank"><img src={reddit} className="bg-white h-10 md:h-10 rounded-lg " /></a>
                        <a href="mailto:adithieprince120@gmail.com" target="_blank"><img src={email} className="bg-white h-10 md:h-10 rounded-lg " /></a>

                    </p>
                </div>
                
            </div>
        </Element>
    )
}

export default Contact;