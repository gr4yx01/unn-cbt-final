import CustomButton from '@/components/CustomButton'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen'>
      <div className='border-r  w-2/5 flex justify-start items-center flex-col space-y-10 pt-10'>
        <span>Elementary Mathematics</span>
        <div className='rounded-full w-16 h-16 flex justify-center items-center gap-2'>
            <span className='text-2xl font-semibold'>13</span>
            <span>:</span>
            <span className='text-md'>00</span>
        </div>
        <CustomButton label={'Submit'} textStyle={'text-white font-semibold'}/>
      </div>
      <div className='flex-1 p-10'>
        <div>
            <span>1. What year was ATX manufactured?</span>
            <div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
