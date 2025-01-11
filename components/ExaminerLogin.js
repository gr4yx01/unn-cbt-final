import React from 'react'
import TextField from './TextField'
import Button from './CustomButton'
import { useRouter } from 'next/navigation'
import useHeaderStore from '@/store/header'


const ExaminerLogin = () => {
    const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)
    const router = useRouter()

  return (
    <div className='flex w-full justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Staff Code' />
        <div className='w-full flex justify-center items-center'>
            <Button label='Sign up' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' />
        </div>
      </div>
      <button onClick={() => {
        setSelectedLogin(0)
        router.push('/auth/register')
      }} className='font-medim text-sm text-gray-500'>Don't have an account? Sign Up</button>
    </div>
  )
}

export default ExaminerLogin
