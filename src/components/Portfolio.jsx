import React from 'react';
import { workData } from '../data/InfoList';
import { FaLocationArrow } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa';
import { motion } from "motion/react";

const Portfolio = () => {
  return (
    <motion.div id='work' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>

      <motion.h4 className='text-center mb-2 text-lg font-ovo'
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
        My Portfolio
      </motion.h4>

      <motion.h2 className='text-center text-5xl font-ovo'
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
        My latest work
      </motion.h2>

      <motion.p className='text-center mt-5 mb-12 font-ovo'
      initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.7}}>
        I am a frontend developer specializing in React.js, with experience in teaching and freelancing.
      </motion.p>
      
      <motion.div className='grid grid-cols-auto my-10 gap-5'
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.6, delay: 0.9}}>
        {workData.map((work, index) => (
          <motion.a key={index}  
            whileInView={{scale: 1.05}} transition={{duration: 0.3}}
            href={work.projectLink}
            rel='noopener noreferrer'
            target="_blank"
          className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
          style={{backgroundImage: `url(${work.bgImage})`}}>
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold dark:text-black'>{work.title}</h2>
                <p  className='text-sm text-gray-700'>{work.description} </p>
              </div>

              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#0000] group-hover:bg-purple-950 group-hover:text-white transition dark:text-black'>
                <FaLocationArrow className='w-5' />
              </div>
            </div>
            

          </motion.a>

        ))}
      </motion.div>

      {/* <motion.a 
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.5, delay: 1.1}}
      href="" 
      className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:border dark:border-white dark:text-white dark:hover:bg-darkHover'>
        Show more <FaArrowRight className='w-4 '/>
      </motion.a> */}
    </motion.div>
  )
}

export default Portfolio
