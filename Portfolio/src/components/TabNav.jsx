export function TabNav() {
    return (
        <nav className="flex flex-row justify-around">
            <ul className="flex flex-row gap-5">
                <Tab title="Home" />
                <Tab title="About me" />
                <Tab title="Projects" />
                <Tab title="Contact" />
            </ul>
        </nav>
    )
}

function Tab({title}) {
    return (
        <li className="flex items-center justify-center text-lg font-bold hover:text-blue-800 hover:underline hover:underline-offset-2 transition-all" style={{ textDecorationThickness: '2px' }}>
            <a href="" className="p-3">{title}</a>
        </li>
    )
}