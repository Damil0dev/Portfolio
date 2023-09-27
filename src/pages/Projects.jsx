import multiConvertIcon from "../assets/multiconvert-icon.png"
import rickandmortyIcon from "../assets/rickandmorty-icon.png"
import RPSIcon from "../assets/rock, paper, scissors-icon.svg"
import nasaGalleryIcon from "../assets/nasagallery-icon.png"
import pomodoroIcon from "../assets/pomodorotimer-icon.png"

function Projects() {
    return (
        <div className="w-full h-screen flex justify-center items-center md:py-24 px-4">
            <div className="w-full md:w-5/6 h-3/4 md:h-full flex flex-col md:flex-row md:flex-wrap md:justify-center gap-5 overflow-auto md:overflow-hidden">
                <Project image={multiConvertIcon} alt="MultiConvert icon" title="MultiConvert" description="A converter that displays multiple conversions at once." typeOfProject="PWA" />
                <Project image={rickandmortyIcon} alt="Rick and Morty project icon" title="Rick and Morty pokedex" description="Practice made with the Rick and Morty API." typeOfProject="Website" />
                <Project image={nasaGalleryIcon} alt="Nasa Gallery icon" title="Nasa Gallery" description="Mobile app made with the NASA API, made with React Native." typeOfProject="Mobile App" />
                <Project image={pomodoroIcon} alt="Pomodoro Timer icon" title="Pomodoro Timer" description="Mobile app that displays a pomodoro timer with 3 modes, made with React Native." typeOfProject="Mobile App" />
                <Project image={RPSIcon} alt="Rock, paper and scissors icon" title="Rock, paper and scissors game" description="A simple game made with React." typeOfProject="Website" />
            </div>
        </div>
    );
}

function Project({image, alt, title, description, typeOfProject}) {
    return (
        <div className="w-full md:w-1/4 flex flex-col rounded-md border-2 border-gray-200 shadow-md">
            <div className="w-full h-2/4 flex justify-center items-center border-b-2 rounded-t-md">
                <img src={image} alt={alt} className="my-3" width={100} height={100} />
            </div>

            <div className="px-2 py-3">
                <h3 className="text-3xl text-blue-800 font-bold">{title} <span className="text-lg text-neutral-500 font-semibold">{typeOfProject}</span></h3>
                <p className="text-xl font-semibold">{description}</p>
            </div>


        </div>
    )
}

export default Projects;