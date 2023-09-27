import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import instagramIcon from '../assets/instagram.svg';

export function SocialMediaAside() {
    return (
        <aside className='fixed bottom-1 md:bottom-1/2 md:translate-y-1/2'>
            <ul className="flex md:flex-col justify-around md:justify-center md:gap-5">
                <SocialNetwork imageUrl={linkedinIcon} alt="Damian's Linkedin" link="https://www.linkedin.com/in/damian-ysla-a31054267/" />
                <SocialNetwork imageUrl={githubIcon} alt="Damian's github" link="https://github.com/Damil0dev" /> 
                <SocialNetwork imageUrl={whatsappIcon} alt="Damian's whatsapp" link="https://wa.me/543456467547" /> 
                <SocialNetwork imageUrl={instagramIcon} alt="Damian's instagram" link="https://instagram.com/chino_ysla?igshid=OGQ5ZDc2ODk2ZA==" /> 
            </ul>
        </aside>
    )
}

function SocialNetwork({imageUrl, alt, link}) {
    return (
        <li className='flex select-none'>
            <a href={link} target='_blank' className='p-5 hover:scale-110 transition-transform' rel="noreferrer">
                <img src={imageUrl} alt={alt} height={32} width={32} />
            </a>
        </li>
    )
}