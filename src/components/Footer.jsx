import React from 'react';
import { CgMail } from 'react-icons/cg';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <a href="#top" className="w-36 mx-auto mb-2 font-lovers text-3xl md:text-5xl font-semibold">Ugboizu.</a>

        <div className='w-max flex items-center gap-2 mx-auto font-ovo font-semibold'>
          < CgMail className='w-6'/> 
            <a href="mailto:umezugbo@gmail.com" className="hover:underline">
              umezugbo@gmail.com
            </a>
        </div>
      </div>

      <div className='text-center sm:flex sm:gap-10 items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6 font-ovo font-semibold'>
        <p>&copy; 2025 Umezurike Ugboizu Nmachi. All rights reserved.</p>
        <ul className='flex items-center gap-6 justify-center mt-4 sm:mt-0 cursor-pointer'>
          <li><a target='_blank' href="https://github.com/Ugboizu">Github</a></li>
          <li><a target='_blank' href="https://linkedin.com/in/Ugboizu">Linkedin</a></li>
          <li><a target='_blank' href="https://medium.com/@umezugbo">Medium</a></li>
          <li><a target='_blank' href="https://x.com/bestgirlmachii">Twitter</a></li>
        </ul>
      </div>
     
      
    </div>
  )
}

export default Footer
