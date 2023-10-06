import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css-3.svg";
import jsIcon from "../assets/js.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import reactIcon from "../assets/react.svg";
import tauriIcon from "../assets/tauri.png";
import vitejsIcon from "../assets/vitejs.svg";
import pwaIcon from "../assets/pwa.svg";

function Skills() {
  return (
    <div className='w-full h-screen flex justify-center items-center px-3 '>
      <div className='w-fit h-3/4 md:h-2/4 px-3 flex flex-row flex-wrap justify-center gap-5 md:gap-8 bg-white dark:bg-neutral-700 rounded-lg shadow-lg'>
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
    </div>
  );
}

function Title() {
  return (
    <p className='text-2xl'>
      I mainly make websites, but I also have experience in mobile apps, desktop
      apps and PWAs
    </p>
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

export default Skills;
