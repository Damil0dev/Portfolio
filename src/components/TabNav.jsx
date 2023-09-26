import { Link, useLocation } from "react-router-dom";

export function TabNav() {
    return (
        <nav className="flex flex-row justify-center">
            <ul className="flex flex-row gap-5">
                <Tab title="Home" path="/"/>
                <Tab title="About" path="/about" />
                <Tab title="Skills" path="/skills" />
                <Tab title="Projects" path="/projects" />
                <Tab title="Contact" path="/contact" /> 
            </ul>
        </nav>
    )
}

function Tab({ title, path }) {
    const location = useLocation();
    const isActive = path === location.pathname;

    const activeClasses = "text-lg font-bold text-blue-800 border-blue-800 border-b-4";
    const inactiveClasses = "text-lg font-bold hover:text-blue-800 hover:border-blue-800 hover:border-b-4";

    return (
        <li className={`flex items-center justify-center transition-all ${isActive ? activeClasses : inactiveClasses}`}>
            <Link to={path} className="p-3">{title}</Link>
        </li>
    )
}