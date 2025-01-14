import React, { useState } from 'react'
import TextField from './TextField'
import Button from './CustomButton'
import Link from 'next/link'
import useHeaderStore from '@/store/header'
import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
import { Loader2 } from 'lucide-react'
import CustomButton from './CustomButton'
import { toast } from 'react-toastify'
import { axiosInstance } from '@/app/layout'

const StudentRegistration = () => {
  const setSelectedRegister = useHeaderStore((state) => state.setSelectedRegister)
  const [detail, setDetail] = useState({
    fullname: '',
    registrationNumber: '',
    password: ''
  })
  const [, setCookie] = useCookies(['access_token', 'role'])
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.post('auths/register', {
        name: detail.fullname,
        registration_number: detail.registrationNumber,
        password: detail.password
      })

      setCookie('access_token', response.data.access_token)
      setCookie('role', 'STUDENT')
      
      toast.success('Successfully registered', {
        autoClose: 2000
      })

      setLoading(false)
      router.push('/')
    } catch (err) {
      toast.error('An error occured')
      setLoading(false)
      console.log(err)
    }
  }
  
  return (
    <div className='flex w-full justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Full Name' handleChange={(e) => setDetail({
          ...detail,
          fullname: e.target.value
        })}/>
        <TextField  label='Registration number' handleChange={(e) => setDetail({
          ...detail,
          registrationNumber: e.target.value
        })}/>
        <TextField  label='Password' secureEntry={'password'} handleChange={(e) => setDetail({
          ...detail,
          password: e.target.value
        })}/>
         <div className='w-full flex justify-center items-center'>
          <CustomButton handlePress={handleSubmit} label={loading ? <Loader2  className='w-6 h-6 animate-spin' /> : 'Sign up'} btnStyle={'py-1'} textStyle={'text-white font-semibold'}/>
        </div>
      </div>
      <button onClick={() => {
        setSelectedRegister(1)
        router.push('/auth/register')
      }} className='font-medim text-sm text-gray-500'>Already have an account? Sign In</button>
    </div>
  )
}

export default StudentRegistration
