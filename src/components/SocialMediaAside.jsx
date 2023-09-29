import linkedinIcon from '../assets/socialmedia/linkedin.png';
import linkedinIcon_dark from '../assets/socialmedia/linkedin (1).png';
import githubIcon from '../assets/socialmedia/github.png';
import githubIcon_dark from '../assets/socialmedia/github (1).png';
import whatsappIcon from '../assets/socialmedia/whatsapp.png';
import whatsappIcon_dark from '../assets/socialmedia/whatsapp (1).png';
import instagramIcon from '../assets/socialmedia/instagram.png';
import instagramIcon_dark from '../assets/socialmedia/instagram (1).png';
import { useEffect } from 'react';

export function SocialMediaAside({ isDark, setIsDark }) {
    console.log("LinkedIn Icon:", isDark ? linkedinIcon_dark : linkedinIcon);

    return (
        <aside className='w-full md:w-fit fixed bottom-1 md:bottom-1/2 md:translate-y-1/2'>
            <ul className="flex md:flex-col justify-around md:justify-center md:gap-5">
                <SocialNetwork
                    imageUrl={isDark ? linkedinIcon_dark : linkedinIcon}
                    alt="Damian's Linkedin"
                    link="https://www.linkedin.com/in/damian-ysla-a31054267/"
                />
                <SocialNetwork
                    imageUrl={isDark ? githubIcon_dark : githubIcon}
                    alt="Damian's github"
                    link="https://github.com/Damil0dev"
                />
                <SocialNetwork
                    imageUrl={isDark ? whatsappIcon_dark : whatsappIcon}
                    alt="Damian's whatsapp"
                    link="https://wa.me/543456467547"
                />
                <SocialNetwork
                    imageUrl={isDark ? instagramIcon_dark : instagramIcon}
                    alt="Damian's instagram"
                    link="https://instagram.com/chino_ysla?igshid=OGQ5ZDc2ODk2ZA=="
                />
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