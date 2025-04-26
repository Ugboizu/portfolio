import React from 'react';
import { HandWaving, DownloadSimple, ArrowRight } from '@phosphor-icons/react';
import profilepicture from '../assets/images/profilepicture.jpg';
import Wave from '../assets/images/goodbye.png';
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className='md:w-11/12 md:max-w-3xl text-center mx-auto md:h-screen flex flex-col items-center justify-center gap-4 mt-16'>
      <motion.div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type: "spring", stiffness: 100}}>
        <img src={ profilepicture } alt="Umezurike Nmachi" className="rounded-full w-32" />
      </motion.div>

      <motion.h3
      initial={{y: -20, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6 , delay: 0.3}}
      className='flex items-center gap-4 text-lg md:text-2xl md:mb-3 font-ovo'>
        Hi! I’m Umezurike Ugboizu Nmachi <img src={Wave} className="w-6 hidden md:block" />
      </motion.h3>

      <motion.h1 
      initial={{y: -30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.8, delay: 0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>
        frontend web developer.
      </motion.h1>

      <motion.p 
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.7}}
      className='max-w-2xl mx-auto font-ovo'>
        I am a frontend developer specializing in React.js, with experience in teaching and freelancing.
      </motion.p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a 
        initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1}}
        href='#contact' 
        className='px-10 py-3 border rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          contact me <ArrowRight size={16} className='w-4'/>
        </motion.a> 

        <motion.a 
        initial={{y: 30, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 0.6, delay: 1.2}}
        href='/Umezurike_Ugboizu_Nmachi__CV.pdf' download 
        className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black '>
          my resume <DownloadSimple size={16} className='w-4'/> 
        </motion.a> 

      </div>
    
      
    </div>
  )
}

export default Hero;
