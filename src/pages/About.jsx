import certificado1 from "../assets/certificados/certificado1.jpg";
import certificado2 from "../assets/certificados/certificado2.jpg";
import certificado3 from "../assets/certificados/certificado3.jpg";

function About() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div className='max-w-xl flex flex-col gap-5 px-5'>
        <Title />
        <Text />
      </div>
      <Certificados />
    </div>
  );
}

function Title() {
  return (
    <div>
      <h2 className='md:text-center text-4xl md:text-5xl font-bold dark:text-neutral-200'>
        <span className='text-blue-800'>Tech Enthusiast</span> & Aspiring{" "}
        <span className='text-blue-800'>Developer</span>
      </h2>
    </div>
  );
}

function Text() {
  return (
    <div className='md:text-center text-2xl md:text-2xl dark:text-neutral-200'>
      <p>
        I am Damián, a technology and programming enthusiast born in Argentina.
        I master technologies such as JS, React, among others. I have a PC
        repair business and I aspire to be a great programmer, always looking to
        learn and improve in any area.
      </p>
    </div>
  );
}

function Certificados() {
  return (
    <div className='flex flex-col gap-5 p-5'>
      <Certificado
        src={certificado1}
        alt='Digital Marketing certificate'
        title='Digital Marketing'
      />
      <Certificado
        src={certificado2}
        alt='Computer Systems Technician certificate'
        title='Computer Systems Technician'
      />
      <Certificado
        src={certificado3}
        alt='META Front-End Developer certificate'
        title='META Front-End Developer'
      />
    </div>
  );
}

function Certificado({ src, alt, title }) {
  return (
    <div className=' bg-blue-800 rounded-md active:opacity-75'>
      <img src={src} alt={alt} className='w-full rounded-t-md' />
      <h3 className='p-2 text-xl text-white font-medium'>{title}</h3>
    </div>
  );
}

export default About;
