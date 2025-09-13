import React from 'react'
import HeroImage from '../assets/HeroImage.svg'
const Hero = () => {
  return (
    <>
      <div className='flex h-screen px-16'>
        <img src={HeroImage} className='w-2/4 items-end mt-5 mx-6'/>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-thin text-7xl text-blue-900'>Daily  <span className='text-[#fe7062]'>Blogs</span></h1>
          <p className=' text-center mt-8'>A blog is a type of website featuring regular posts, often in an informal, diary-like style, presented in reverse chronological order with the newest posts appearing first. Blogs are used to share content, such as writing, images, audio, and video, on various topics, from personal experiences to professional insights on technology, travel, or health. The act of writing for a blog is called "blogging". </p>
          <button type='button' className='text-white bg-blue-700 px-6 py-3 rounded-lg mx-auto block mt-7 hover:bg-[#fe7062] hover:text-gray-800'>View Blogs</button>
        </div>
      </div>
    </>
  )
}

export default Hero
