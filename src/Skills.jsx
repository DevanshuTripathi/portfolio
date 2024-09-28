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

    return (
        <Element name="skills">
            <div className="skills relative mt-16 ">
                <ul className=" flex flex-row justify-between px-32 mb-10">
                    <img src={django} className="rounded-full h-40 bg-white skill-img "></img>
                    <img src={react} className="rounded-full h-40 bg-white skill-img "></img>
                    <img src={java} className="rounded-full h-40 bg-white skill-img "></img>
                    <img src={cpp} className="rounded-full h-40 bg-white skill-img "></img>
                </ul>
                <ul className="flex flex-row justify-between px-32 mb-10">
                    <img src={python} className="rounded-full h-40 bg-white skill-img "></img>
                    <img src={javascript} className="rounded-full h-40 bg-white skill-img "></img>
                    <img src={html} className="rounded-full h-40 bg-white skill-img "></img>
                    <img src={css} className="rounded-full h-40 bg-white skill-img "></img>
                </ul>

            </div>
        </Element>
    )
}
export default Skills;