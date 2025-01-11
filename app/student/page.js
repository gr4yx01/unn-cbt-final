'use client'
import CustomButton from '@/components/CustomButton'
import TextField from '@/components/TextField'
import { Button } from '@/components/ui/button'
import React from 'react'


const page = () => {
  
  return (
    <div className='flex w-full mt-10 justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Registration Number' />
        <TextField  label='Password' />
        <TextField  label='Examination Code' />
        <div className='w-full flex justify-center items-center'>
            <CustomButton label='Continue' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' />
        </div>
      </div>
      
    </div>
  )
}

export default page
