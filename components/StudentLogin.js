'use client'

import React, { useState } from 'react'
import TextField from './TextField'
import Button from './CustomButton'
import { useRouter } from 'next/navigation'
import useHeaderStore from '@/store/header'
import { axiosInstance } from '@/app/layout'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'


const StudentLogin = () => {
    const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)
    const router = useRouter()
    const [detail, setDetail] = useState({
      registrationNo: '',
      password: ''
    })
  const [cookie, setCookie] = useCookies(['access_token', 'role'])

    const handleSubmit = async () => {
        try {
            const res = await axiosInstance.post('/auths/login', {registration_number: detail?.registrationNo, password: detail?.password})

            setCookie('access_token', res.data)
            setCookie('role', 'STUDENT')

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
        <TextField handleChange={(e) => setDetail({
          ...detail,
          registrationNo: e.target.value
        })}  label='Registration Number' />
        <TextField secureEntry={true} handleChange={(e) => setDetail({
          ...detail,
          password: e.target.value
        })} label='Password' />
        <div className='w-full flex justify-center items-center'>
            <Button handlePress={handleSubmit} label='Sign In' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' />
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
