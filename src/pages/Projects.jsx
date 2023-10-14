/* eslint-disable react/prop-types */
import multiConvertIcon from "../assets/projects/multiconvert-icon.png"
import PcProsIcon from "../assets/projects/pc-pros-logo.png"

function Projects() {
  return (
    <div className="w-full h-screen flex justify-center items-center md:py-20 px-4">
      <div className="w-full md:w-5/6 h-3/4 md:h-fit flex flex-col md:flex-row md:flex-wrap md:justify-center md:py-20 gap-5 overflow-auto ">
        <Project image={PcProsIcon} alt="Pc Pros icon" title="Pc Pros" description="Pc repair business" typeOfProject="Entrepreneurship" url="https://instagram.com/pc_pros1?igshid=OGQ5ZDc2ODk2ZA==" />
        <Project image={multiConvertIcon} alt="MultiConvert icon" title="MultiConvert" description="A converter that displays multiple conversions at once." typeOfProject="PWA" url="https://multi-convert-by-damian-ysla.web.app/" />
      </div>
    </div>
  );
}

function Project({ image, alt, title, description, typeOfProject, url }) {
  return (
    <div
      className='w-full md:w-1/4 flex flex-col bg-neutral-50 dark:bg-neutral-700 rounded-lg active:opacity-25 md:hover:scale-110 md:hover:cursor-pointer md:transition-all'
      onClick={() => window.open(url, "_blank")}
    >
      <div className='w-full h-2/4 flex justify-center items-center rounded-t-md'>
        <img
          src={image}
          alt={alt}
          className='p-5'
          width={100}
          height={100}
        />
      </div>

      <div className='flex flex-col px-5 pb-4'>
        <h3 className='text-xl text-blue-800 dark:text-blue-600 font-bold'>
          {title}{" "}
          <span className='text-sm text-neutral-500 dark:text-neutral-400 font-semibold'>
            {typeOfProject}
          </span>
        </h3>
        <p className='font-semibold dark:text-neutral-200'>
          {description}
        </p>
      </div>
    </div>
  );
}

export default Projects;