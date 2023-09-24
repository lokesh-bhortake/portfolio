import html from '../assets/icons/Html.svg'
import css from '../assets/icons/CSS3.svg'
import js from '../assets/icons/Js.svg'
import python from '../assets/icons/Python.svg'
import react from '../assets/icons/ReactJs.svg'
import tailwind from '../assets/icons/Tailwind.svg'
import mui from '../assets/icons/MUI.svg'
import figma from '../assets/icons/Figma.svg'
import rapidapi from '../assets/icons/RapidAPI.svg'
import git from '../assets/icons/Git.svg'
import linux from '../assets/icons/Linux.svg'
import stripe from '../assets/icons/Stripe.svg'
import mysql from '../assets/icons/MySQL.svg'
import vscode from '../assets/icons/VS_code.svg'
import fitflex_img from '../assets/images/fitflex.svg'
import lbank_img from '../assets/images/lbank.svg'
import portfolio_img from '../assets/images/portfolio.svg'
import github from '../assets/icons/Github.svg'
import mail from '../assets/icons/Mail.svg'
import linkedin from '../assets/icons/Linkedin.svg'
import resume from '../assets/files/Lokesh_Bhortake_Resume.pdf'

export const navlinks = [
    {
        text: 'Home',
        link: 'hero',
    },
    {
        text: 'About',
        link: 'about',
    }, 
    {
        text: 'Projects',
        link: 'projects',
    },
    {
        text: 'Contact',
        link: 'contact',
    }
]

export const about_text = <><p style={{ textIndent: '2em' }}>I am a passionate and creative frontend developer ready to turn ideas into high quality websites with use of modern technologies.</p><br /><p style={{ textIndent: '2em' }}>I have Bachelor’s degree in Computer Science and Engineering. I am on a journey to create compelling web solutions that not only look amazing but also provide seamless interactions. I enjoy developing websites and also create designs to give them a good UI.</p><br /></>

export const skills = [
    {
        icon: html,
        text: 'HTML5',
    },
    {
        icon: css,
        text: 'CSS3',
    },
    {
        icon: js,
        text: 'Javascript',
    },
    {
        icon: python,
        text: 'Python',
    },
    {
        icon: react,
        text: 'React',
    },
    {
        icon: tailwind,
        text: 'Tailwind',
    },
    {
        icon: mui,
        text: 'Material UI',
    },
    {
        icon: figma,
        text: 'Figma',
    },
    {
        icon: rapidapi,
        text: 'RapidAPI',
    },
    {
        icon: git,
        text: 'Git',
    },
    {
        icon: linux,
        text: 'Linux',
    },
    {
        icon: stripe,
        text: 'Stripe',
    },
    // {
    //     icon: mysql,
    //     text: 'MySQL',
    // },
    {
        icon: vscode,
        text: 'VS Code',
    },
]

export const projects = [
    {
        image: fitflex_img,
        title: 'FitFlex Gym Website',
        description: 'Gym website which allows you to browse exercises, view demos of exercises and purchase gym plans with help of Stripe payment gateway.',
        tech: 'React, MaterialUI, RapidAPI, Stripe.',
        btn: [
            {
                btn_text: 'Live',
                btn_link: 'https://fitflexgym.netlify.app/',
            },
            {
                btn_text: 'Code',
                btn_link: 'https://github.com/lokesh-bhortake/fitflex',
            },
        ]
    },
    {
        image: lbank_img,
        title: 'Bank Landing Page',
        description: 'A fully responsive bank landing page aimed to showcase the bank services and offerings with modern UI.',
        tech: 'React, Tailwind CSS',
        btn: [
            {
                btn_text: 'Live',
                btn_link: 'https://lbank.netlify.app/',
            },
            {
                btn_text: 'Code',
                btn_link: 'https://github.com/lokesh-bhortake/lbank',
            },
        ]
    },
    {
        image: portfolio_img,
        title: 'Portfolio Site',
        description: 'A website which showcases my coding journey and projects which is designed and is responsive for all the devices.',
        tech: 'React, TailwindCSS, Figma',
        btn: [
            {
                btn_text: 'Design',
                btn_link: 'https://www.figma.com/file/PFMzQgEjgGCPV4wMUPuSHY/Portfolio-Site?type=design&node-id=0%3A1&mode=design&t=HHqpyOHVSHqy3eib-1',
            },
            {
                btn_text: 'Code',
                btn_link: 'https://github.com/lokesh-bhortake/portfolio',
            },
        ]
    }
]

export const socials = [
    {
        text: 'Github',
        icon: github,
        link: 'https://github.com/lokesh-bhortake',
    },
    {
        text: 'Mail',
        icon: mail,
        link: 'mailto:lb5102001@gmail.com',
    },
    {
        text: 'LinkedIn',
        icon: linkedin,
        link: 'https://www.linkedin.com/in/lokesh-bhortake/',
    },
]

export const openLink = (url) => {
    window.open(url, '_blank');
}

export const handleDownload = () => {
    window.open(resume, '_blank');
};
