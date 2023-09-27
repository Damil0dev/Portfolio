function About() {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <div className="max-w-xl flex flex-col gap-5 px-5">
                <Title />
                <Text />
            </div>
        </div>
    );
}

function Title() {
    return (
        <div>
            <h2 className="md:text-center text-4xl md:text-5xl font-bold"><span className="text-blue-800">Tech Enthusiast</span> & Aspiring <span className="text-blue-800">Developer</span></h2>
        </div>
    )
}

function Text() {
    return (
        <div className="md:text-center text-2xl md:text-2xl">
            <p>I am Damián, a technology and programming enthusiast born in Argentina. I master technologies such as JS, React, among others. I have a PC repair business and I aspire to be a great programmer, always looking to learn and improve in any area.</p>
        </div>
    )
}

export default About;