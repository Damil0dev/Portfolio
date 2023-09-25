import { Link } from "react-router-dom";

export function TabNav() {
    return (
        <nav className="flex flex-row justify-center">
            <ul className="flex flex-row gap-5">
                <Tab title="Home" path="/" />
                <Tab title="About me" path="/about" />
                <Tab title="Projects" path="/projects" />
                <Tab title="Contact" path="/contact" /> 
            </ul>
        </nav>
    )
}

function Tab({ title, path }) {
    return (
        <li className="flex items-center justify-center text-lg font-bold hover:text-blue-800 hover:underline hover:underline-offset-2 transition-all" style={{ textDecorationThickness: '2px' }}>
            <Link to={path} className="p-3">{title}</Link>
        </li>
    )
}