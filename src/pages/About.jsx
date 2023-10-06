import certificado1 from "../assets/certificados/certificado1.jpg";
import certificado2 from "../assets/certificados/certificado2.jpg";
import certificado3 from "../assets/certificados/certificado3.jpg";

function About() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-5 py-20 dark:bg-neutral-800'>
      <div className='max-w-xl flex flex-col gap-5 px-5'>
        <Title />
        <Text />
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='w-fit m-2 text-4xl text-neutral-800 dark:text-neutral-200 border-b-4 border-blue-800 text-center font-semibold'>
          Certificates
        </h2>
        <Certificados />
      </div>
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
    <div className='flex flex-col md:flex-row md:justify-center gap-5 p-5'>
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
    <div className='md:w-1/5 bg-white dark:bg-neutral-600 rounded-lg active:opacity-75 md:hover:scale-110 md:hover:cursor-pointer md:transition-all'>
      <img src={src} alt={alt} className='w-full rounded-t-lg' />
      <h3 className='p-2 text-xl dark:text-neutral-200 font-medium'>{title}</h3>
    </div>
  );
}

export default About;
