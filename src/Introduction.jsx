import { Element } from 'react-scroll';
import profilePic from './images/profilePic.jpeg'

function Introduction(){
    return (
        <Element name="introduction">
        <div className="intro">
            <div>
            <img className="profile-pic " src={profilePic} />
            </div>

            <div className="intro-content">
            <p className="text-3xl md:text-4xl font-bold to-animate">
                Hi, I am Devanshu Tripathi
            </p>
            <p className="text-base md:text-lg block">
                I am a passionate web developer and also a pretty lazy person.
                I like to code and make websites.

            </p>
            </div>
        </div>
        </Element>
    )
}

export default Introduction;