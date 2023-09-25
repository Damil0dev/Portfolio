export default function Home() {
    return (
        <div className="w-full h-screen px-64 flex justify-center items-center">
            <Welcome />
        </div>
    );
}

function Welcome() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 text-center">
            <h1 className="font-bold text-6xl border-b-4 border-blue-800" >Damian Ysla</h1>
            <p className="text-3xl text-center">I&apos;m a <h2 className="inline font-bold text-blue-800">Front End Developer</h2> and <h2 className="inline font-bold text-blue-800">Entrepreneur</h2> from Argentina</p>
        </div>

    )
}