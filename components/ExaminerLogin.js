import React, { useState } from 'react'
import TextField from './TextField'
import Button from './CustomButton'
import { useRouter } from 'next/navigation'
import useHeaderStore from '@/store/header'
import { axiosInstance } from '@/app/layout'
import { toast } from 'react-toastify'
import { useCookies } from 'react-cookie'

const ExaminerLogin = () => {
    const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)
    const router = useRouter()
    const [staffCode, setStaffCode] = useState('')
    const [cookie, setCookie] = useCookies(['access_token', 'role'])

    const handleSubmit = async () => {
        try {
            const res = await axiosInstance.post('/auths/login/examiner', {staff_code: staffCode})

            setCookie('access_token', res.data)
            setCookie('role', 'EXAMINER')

            router.push('/')
            toast.success('Login successful', {
              autoClose: 2000
            })
        } catch (error) {
            toast.error('An error occured')
        }
    }

  return (
    <div className='flex w-full justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Staff Code' handleChange={(e) => setStaffCode(e.target.value)}/>
        <div className='w-full flex justify-center items-center'>
            <Button handlePress={handleSubmit} label='Sign up' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' />
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