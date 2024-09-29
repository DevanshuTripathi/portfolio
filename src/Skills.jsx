import { Element } from 'react-scroll';
import react from './images/react.png';
import django from './images/django.png';
import java from './images/java.png';
import cpp from './images/cpp.png';
import python from './images/python.png';
import javascript from './images/javascript.png';
import html from './images/html.png';
import css from './images/css.png';

function Skills(){

    window.addEventListener("scroll", function() {
        const skillImages = document.querySelectorAll('.skill-img');
        
        skillImages.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
    
            if (inView) {
                img.classList.add('rotated');  // Add rotation class when scrolled into view
            } else {
                img.classList.remove('rotated');  // Remove class when scrolled out of view
            }
        });
    });

    return (
        <Element name="skills">
            <h1 className="flex justify-center text-4xl font-bold pt-16 ">Skills</h1>
            <div className="skills flex flex-row md:flex-col justify-center relative mt-16 ">
                <ul className=" flex flex-col md:flex-row justify-between px-4 md:px-32 mb-10">
                    <div className="relative text-center img-container">
                        <img src={django} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0 ">
                        <div className="absolute content text-sm md:text-lg font-bold">Back-End Development</div>
                        </div>
                    </div>
                    <div className="relative text-center img-container hidden md:block">
                        <img src={html} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0">
                        <div className="absolute content text-sm md:text-lg font-bold">Mastered Web Development</div>
                        </div>
                    </div>
                    <div className="relative text-center img-container">
                        <img src={react} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0">
                        <div className="absolute content text-sm md:text-lg font-bold">Front-End Development</div>
                        </div>
                    </div>
                    <div className="relative text-center img-container hidden md:block">
                        <img src={css} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0">
                        <div className="absolute content text-sm md:text-lg font-bold">Tailwind CSS and Bootstrap</div>
                        </div>
                    </div>
                </ul>
                <ul className="flex flex-col md:flex-row justify-between px-4 md:px-32 mb-10">
                <div className="relative text-center img-container">
                        <img src={cpp} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0">
                        <div className="absolute content text-sm md:text-lg font-bold">Object Oriented Programming</div>
                        </div>
                    </div>
                    <div className="relative text-center img-container">
                        <img src={python} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0">
                        <div className="absolute content text-sm md:text-lg font-bold">Machine Learning and Data Science</div>
                        </div>
                    </div>
                    <div className="relative text-center img-container hidden md:block">
                        <img src={java} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0">
                        <div className="absolute content text-sm md:text-lg font-bold">Basics of Java and OOPS</div>
                        </div>
                    </div>
                    <div className="relative text-center img-container hidden md:block">
                        <img src={javascript} className="rounded-full mb-5 h-32 w-32 md:h-40 md:w-40 bg-white skill-img "></img>
                        <div className="overlay t-0 l-0 opacity-0">
                        <div className="absolute content text-sm md:text-lg font-bold">Experienced in JS frameworks</div>
                        </div>
                    </div>
                </ul>

            </div>
        </Element>
    )
}
export default Skills;