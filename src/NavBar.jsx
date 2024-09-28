import { Link } from 'react-scroll';

function NavBar() {
    return (
        <div className="navbar">
            <ul className="flex flex-row justify-end gap-10 py-5 text-xl">
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
    )
}

export default NavBar;