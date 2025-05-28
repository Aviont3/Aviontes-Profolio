
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/stack">Stack</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li>projects</li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;