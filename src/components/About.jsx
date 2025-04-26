import React from 'react';
import djangogirl from '../assets/images/djangogirl.jpg';
import { infolist, toolsData } from '../data/InfoList.jsx';
import { motion } from "motion/react";

const About = () => {

  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>

      <motion.h4 className='text-center mb-2 text-lg font-ovo' 
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.2}}>  
        Introduction
      </motion.h4>

      <motion.h2 className='text-center text-5xl font-ovo'
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
        About me
      </motion.h2>

      <motion.div className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}}>
        <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
        initial={{scale: 0.9, opacity: 0}} whileInView={{scale: 1, opacity: 1}} transition={{duration: 0.6}}>
          <img src={ djangogirl } alt="User" className="rounded-3xl w-full" />
        </motion.div>

        <div className='flex-1'>
          <motion.p className='mb-10 max-w-2xl font-ovo'
          initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.4}}> 
            I am a frontend developer specializing in React, JavaScript, and TailwindCSS. 
            I love crafting clean, user-friendly interfaces and bringing designs to life with smooth interactivity. 
            With experience in teaching, freelancing, and mentoring, I enjoy sharing knowledge and helping others grow in tech.
          </motion.p>

          <motion.ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
          initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, delay: 0.5}}>
            {infolist.map((item, index) => (
              <motion.li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
              whileInView={{scale: 1.04}}
              key={index} >
                <div className='w-7 mt-3'>{item.icon}</div>  
                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{item.title}</h3>
                <p className='text-gray-600 text-xs font-medium dark:text-white/80'>{item.description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4 className='my-6 text-gray-700 font-ovo dark:text-white/80'
          initial={{opacity: 0, y: 20}} whileInView={{opacity : 1, y: 0}} transition={{duration: 0.5, delay: 0.6}}>
            Tools I Use
          </motion.h4> 
          <motion.ul className='flex items-center gap-3 sm:gap-5'
          initial={{opacity: 0, y: 20}} whileInView={{opacity : 1, y: 0}} transition={{duration: 0.5, delay: 0.7}}>
            {toolsData.map((tool, index) => (
              <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-white' key={index}>
                <div className=''>{tool.icon}</div>
              </li>
            ))} 
          </motion.ul>
        </div> 
      </motion.div>
    </motion.div>
  )
}

export default About
