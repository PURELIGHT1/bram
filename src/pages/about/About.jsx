import React from 'react'

const About = ({ about : { title, text, btn1 }}) => {
  return (
   <>
      <div className='flex flex-col bg-gradient-to-b from-blue-500 to-white h-auto w-auto'>
        <div className='my-container grid items-start justify-items-center'>
          <div className='grid items-center justify-items-center mt-36 mb-5 md:mt-28 md:mb-5'>
            <h1 className='text-6xl font-bold lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl text-black filter drop-shadow-lg'>{title}</h1>
            <p className='text-base my-5 text-center sm:text-sm'>{text}</p>
            <div className='flex items-center justify-center gap-11 sm:gap-3 sm:flex-col sm:w-full'>
              <a href="https://drive.google.com/file/d/1ru6P8-wOOnVjsZNp0h4vSF8s719Cxjye/view?usp=sharing"><button type='button' className='button-light'>{btn1}</button></a>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default About
