import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { useState } from 'react';
 
function NavBar() {

    const [isShowing, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!isShowing);
    }

    const goToTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <div className="navbar mr-0 fixed overflow-hidden top-0 ">
            <ul className="hidden text-sm md:flex-row md:text-lg md:flex px-10 gap-10 py-5 nav ">
                <li>
                    Devanshu Tripathi
                </li>
                <li>
                    <Link to="introduction" smooth={true} duration={500}>
                        Introduction
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>


            <div className="flex items-center justify-center md:hidden">
            <div className="py-5 text-xl">Devanshu Tripathi</div>
            <button className="md:hidden absolute right-6 text-2xl" onClick={toggleMenu}>☰</button>
            <div className="nav-mob-div ">
            <ul className={`${isShowing ? 'flex' : 'hidden'} mt-2 text-sm flex-col gap-5 px-10 py-5 nav-mob`}>
                <li>
                    <Link to="introduction" smooth={true} duration={500}>
                        Introduction
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            </div>
            </div>


        </div>
    )
}

export default NavBar;