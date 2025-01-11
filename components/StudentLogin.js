import React from 'react'
import TextField from './TextField'
import Button from './CustomButton'
import { useRouter } from 'next/navigation'
import useHeaderStore from '@/store/header'


const StudentLogin = () => {
    const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)
    const router = useRouter()

  return (
    <div className='flex w-full justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Registration Number' />
        <TextField  label='Password' />
        <div className='w-full flex justify-center items-center'>
            <Button label='Sign In' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' />
        </div>
      </div>
      <button onClick={() => {
        setSelectedLogin(1)
        router.push('/auth/register')
      }} className='font-medim text-sm text-gray-500'>Don't have an account? Sign Up</button>
    </div>
  )
}

export default StudentLogin
