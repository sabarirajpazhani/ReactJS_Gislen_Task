import React from 'react'
import UserList from './UserList'

const UserSection = () => {
  return (
    <>
        <h1 className='mt-10 text-center text-3xl text-blue-900 font-bold underline'>User <span className='text-[#fe7062]'>Details</span></h1>
        <div className='flex w-full p-5 gap-2'>
            <UserList/>
        </div>
    </>
  )
}

export default UserSection
