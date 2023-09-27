export default function Home() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="max-w-xl flex flex-col gap-5 px-5">
                <Welcome />
            </div>

        </div>
    );
}

function Welcome() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 text-center">
            <h1 className="font-bold text-4xl md:text-6xl border-b-4 border-blue-800" >Damian Ysla</h1>
            <p className="text-2xl md:text-3xl text-center">I&apos;m a <span className="inline font-bold text-blue-800">Front End Developer</span> and <span className="inline font-bold text-blue-800">Entrepreneur</span> from Argentina</p>
        </div>

    )
}