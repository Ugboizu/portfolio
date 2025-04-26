import React from 'react'; // Add this line
import { FaCode, FaGraduationCap, FaProjectDiagram, FaReadme } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { GiTeacher } from "react-icons/gi";
import VsCode from '../assets/icons/visual-studio-code.svg?react';
import Github from '../assets/icons/github-icon.svg?react';
import Vercel from '../assets/icons/vercel-icon.svg?react';
import Figma from '../assets/icons/figma.svg?react';
import Git from '../assets/icons/git-icon.svg?react';
import bgImage from '../assets/images/bgImage.jpg';
import ticket from '../assets/images/ticket.png';
import Viola from '../assets/images/ai.png';


export const infolist = [
  {
    icon: <FaCode size={28} />,
    iconDark: 'path/to/code_icon_dark.png',
    title: 'Languages',
    description: 'HTML, CSS, TailwindCSS, JavaScript, React Js, Python, Django',
  },
  {
    icon: <FaGraduationCap size={28} />,
    iconDark: 'path/to/edu_icon_dark.png',
    title: 'Education',
    description: 'B.Sc in Computer Science, Babcock University',
  },
  {
    icon: <FaProjectDiagram size={28} />,
    iconDark: 'path/to/project_icon_dark.png',
    title: 'Projects',
    description: 'Built more than 5 projects',
  },
];

export const toolsData = [
  { name: 'VS Code', icon: <VsCode className="w-8 h-8" /> },
  { name: 'Github', icon: <Github className="w-8 h-8" /> },
  { name: 'Vercel', icon: <Vercel className="w-8 h-8" /> },
  { name: 'Figma', icon: <Figma className="w-8 h-8" /> },
  { name: 'Git', icon: <Git className="w-8 h-8" /> },
]

export const serviceData = [
  {
    icon: <TbWorldWww /> , 
    title: 'Web design', 
    description: 'Web development is the process of building, programming...'
  },
  {
    icon: <FaReadme /> , 
    title: 'Technical Writer', 
    description: 'Web development is the process of building, programming...'
  },
  {
    icon: <GiTeacher /> , 
    title: 'Instructor', 
    description: 'Web development is the process of building, programming...'
  },
]

export const workData = [
  {
    title: 'Ticket Maker',
    description: 'Web Design',
    bgImage: ticket,
    projectLink: 'https://conference-ticket-rose.vercel.app/',
  },
  {
    title: 'E-Logbook',
    description: 'Web Design',
    bgImage: bgImage,
    projectLink: 'https://bulogbook.vercel.app/',
  },
  {
    title: 'Viola AI',
    description: 'Web Design',
    bgImage: Viola,
    projectLink: 'https://violatextprocessing.vercel.app/',
  },
  {
    title: 'Portfolio',
    description: 'Web Design',
    bgImage: bgImage,
    projectLink: 'https://ugboizu.portfolio.vercel.app/',
  },
]