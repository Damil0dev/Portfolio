/* eslint-disable react/prop-types */
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css-3.svg";
import jsIcon from "../assets/js.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import reactIcon from "../assets/react.svg";
import tauriIcon from "../assets/tauri.png";
import vitejsIcon from "../assets/vitejs.svg";
import pwaIcon from "../assets/pwa.svg";
import certificado2 from "../assets/certificados/certificado2.jpg";
import certificado3 from "../assets/certificados/certificado3.jpg";

function Skills() {
  return (
    <div className='w-full h-fit flex flex-col items-center gap-5 py-20 md:pb-0 px-5 dark:bg-neutral-800'>
      <h2 className='w-fit text-4xl text-neutral-800 dark:text-neutral-200 border-b-4 border-blue-800 text-center font-semibold'>
        Technologies
      </h2>

      <SkillsSection />

      <h2 className='w-fit text-4xl text-neutral-800 dark:text-neutral-200 border-b-4 border-blue-800 text-center font-semibold'>
        Certificates
      </h2>

      <Certificados />
    </div>
  );
}

function SkillsSection() {
  return (
    <div className='min-h-screen md:h-96 md:min-h-0 px-3 flex flex-row flex-wrap justify-center gap-5 md:gap-8 bg-neutral-50 dark:bg-neutral-700 rounded-lg shadow'>
      <SkillBar
        icon={htmlIcon}
        alt='excellent level with html'
        percentaje='80%'
        firstBarHeight='h-1/6'
        secondBarHeight='h-5/6'
      />
      <SkillBar
        icon={cssIcon}
        alt='excellent level with css'
        percentaje='80%'
        firstBarHeight='h-1/6'
        secondBarHeight='h-5/6'
      />
      <SkillBar
        icon={tailwindIcon}
        alt='excellent level with tailwind'
        percentaje='80%'
        firstBarHeight='h-1/6'
        secondBarHeight='h-5/6'
      />
      <SkillBar
        icon={jsIcon}
        alt='good level with javascript'
        percentaje='60%'
        firstBarHeight='h-2/6'
        secondBarHeight='h-4/6'
      />
      <SkillBar
        icon={reactIcon}
        alt='good level with react'
        percentaje='60%'
        firstBarHeight='h-2/6'
        secondBarHeight='h-4/6'
      />
      <SkillBar
        icon={tauriIcon}
        alt='decent level with tauri'
        percentaje='40%'
        firstBarHeight='h-4/6'
        secondBarHeight='h-2/6'
      />
      <SkillBar
        icon={vitejsIcon}
        alt='decent level with vite'
        percentaje='40%'
        firstBarHeight='h-4/6'
        secondBarHeight='h-2/6'
      />
      <SkillBar
        icon={pwaIcon}
        alt='decent level with PWAs'
        percentaje='40%'
        firstBarHeight='h-4/6'
        secondBarHeight='h-2/6'
      />
    </div>
  );
}

function SkillBar({ icon, alt, percentaje, firstBarHeight, secondBarHeight }) {
  return (
    <div className='flex flex-col justify-center items-center select-none'>
      <p className='font-semibold text-center text-xl dark:text-neutral-200'>
        {percentaje}
      </p>
      <div className='h-3/4 w-2/4 flex flex-col justify-center rounded-xl'>
        <div className={`${firstBarHeight} bg-blue-200 rounded-t-xl`}></div>
        <div className={`${secondBarHeight} bg-blue-700 rounded-b-xl`}></div>
      </div>
      <img src={icon} alt={alt} width={50} height={50} className='p-2' />
    </div>
  );
}

function Certificados() {
  return (
    <div className='flex flex-col md:flex-row md:justify-center gap-5'>
      <Certificado
        src={certificado2}
        alt='Computer Systems Technician certificate'
        title='Computer Systems Technician'
        link='https://capacitateparaelempleo.org/verifica/8a18da4c-3aed-4a87-a84b-aedfcd8b5643/d7b0d7a4-fd94-4e0f-b904-028e6deba692'
      />
      <Certificado
        src={certificado3}
        alt='META Front-End Developer certificate'
        title='META Front-End Developer'
        link='https://coursera.org/share/1c24be7b334617fc2cb4e1e0fc685c05'
      />
    </div>
  );
}

function Certificado({ src, alt, title, link }) {
  return (
    <div className='md:w-1/5 bg-neutral-50 dark:bg-neutral-700 rounded-lg active:opacity-75 md:hover:scale-110 md:hover:cursor-pointer md:transition-all shadow'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={src} alt={alt} className='w-full rounded-t-lg' />
        <h3 className='p-2 text-xl dark:text-neutral-200 font-medium'>
          {title}
        </h3>
      </a>
    </div>
  );
}

export default Skills;
