import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import instagramIcon from '../assets/instagram.svg';

export function SocialMediaAside() {
    return (
        <aside>
            <ul className="flex flex-col gap-5">
                <SocialNetwork imageUrl={linkedinIcon} alt="Damian's Linkedin" />
                <SocialNetwork imageUrl={githubIcon} alt="Damian's github" /> 
                <SocialNetwork imageUrl={whatsappIcon} alt="Damian's whatsapp" /> 
                <SocialNetwork imageUrl={instagramIcon} alt="Damian's instagram" /> 
            </ul>
        </aside>
    )
}

function SocialNetwork({imageUrl, alt}) {
    return (
        <li className='flex '>
            <a href="" className='p-5 hover:scale-110 transition-transform'>
                <img src={imageUrl} alt={alt} height={32} width={32} />
            </a>
        </li>
    )
}