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
            <h1 className="flex justify-center text-4xl font-bold pt-20 ">Skills</h1>
            <div className="skills flex flex-row md:flex-col relative mt-16 ">
                <ul className=" flex flex-col md:flex-row justify-between px-4 md:px-32 mb-10">
                    <img src={django} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                    <img src={react} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                    <img src={java} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                    <img src={cpp} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                </ul>
                <ul className="flex flex-col md:flex-row justify-between px-4 md:px-32 mb-10">
                    <img src={python} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                    <img src={javascript} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                    <img src={html} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                    <img src={css} className="rounded-full mb-5 h-40 w-40 bg-white skill-img "></img>
                </ul>

            </div>
        </Element>
    )
}
export default Skills;