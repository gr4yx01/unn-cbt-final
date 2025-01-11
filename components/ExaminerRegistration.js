import React from 'react'
import TextField from './TextField'
import Button from './CustomButton'
import Link from 'next/link'
import useHeaderStore from '@/store/header'
import { useRouter } from 'next/navigation'


const ExaminerRegistration = () => {
  const setSelectedRegister = useHeaderStore((state) => state.setSelectedRegister)
  const router = useRouter()
  
  return (
    <div className='flex w-full justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Full Name' />
        <TextField  label='Department' />
        <div className='w-full flex justify-center items-center'>
            <Button label='Sign up' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' />
        </div>
      </div>
      <button onClick={() => {
        setSelectedRegister(0)
        router.push('/auth/register')
      }} className='font-medim text-sm text-gray-500'>Already have an account? Sign In</button>
    </div>
  )
}

export default ExaminerRegistration
