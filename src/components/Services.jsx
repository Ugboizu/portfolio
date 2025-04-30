import React from 'react';
import { serviceData } from '../data/InfoList.jsx';
import { ArrowRight } from '@phosphor-icons/react';
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div id='services' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1}}>

      <motion.h4 className='text-center mb-2 text-lg font-ovo'
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>
        What I Offer
      </motion.h4>

      <motion.h2 className='text-center text-5xl font-ovo'
      initial={{opacity: 0, y: -20}} whileInView={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>
        My Services
      </motion.h2>

      <motion.p className='text-center mt-5 mb-12 font-ovo'
      initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 0.7}}>
        I am a frontend developer specializing in React.js, with experience in teaching and freelancing.
      </motion.p>

      <motion.div className='grid grid-cols-auto gap-6 my-10'
      initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8}}>
        {serviceData.map((service, index) => (
          <motion.div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
          whileInView={{scale: 1.04}}>
            <div className='w-10 text-3xl text-purple-800'>{service.icon}</div>
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{service.title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{service.description} </p>
            {/* <a href="" className='flex items-center gap-2 text-sm mt-5'>Read more <ArrowRight size={16} className='w-4'/></a> */}
          </motion.div>
        ))
          
        }
      </motion.div>
      
    </motion.div>
  )
}

export default Services
