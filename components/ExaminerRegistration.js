'use client'
import React, { useState } from 'react'
import TextField from './TextField'
import useHeaderStore from '@/store/header'
import { useRouter } from 'next/navigation'
// import { axiosInstance } from '@/app/layout'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog"
import { Label } from './ui/label'
import { Copy, Loader2 } from 'lucide-react'
import CustomButton from './CustomButton'
import { toast } from 'react-toastify'
import { useCookies } from 'react-cookie'
import { Button } from './ui/button'
import axios from 'axios'
import { axiosInstance } from '@/app/layout'


const ExaminerRegistration = () => {
  const setSelectedRegister = useHeaderStore((state) => state.setSelectedRegister)
  const [showCode, setShowCode] = useState({
    code: '',
    status: false
  })
  const router = useRouter()
  const [examinerDetail, setExaminerDetail] = useState({
    fullName: '',
    department: ''
  })
  const [, setCookie] = useCookies(['access_token', 'role'])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setExaminerDetail({
      ...examinerDetail,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.post('auths/register/examiner', {
        name: examinerDetail.fullName,
        department: examinerDetail.department,
      })

      setCookie('access_token', response.data.access_token)
      setCookie('role', 'EXAMINER')
      
      toast.success('Successfully registered', {
        autoClose: 2000
      })

      setShowCode({
        code: response.data.staff_code,
        status: true
      })
      setLoading(false)
    } catch (err) {
      toast.error('Error in registration', {
        autoClose: 2000
      })
    }
  }

  console.log(showCode.code)

  return (
    <div className='flex w-full justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Full Name' name='fullName' handleChange={handleChange}/>
        <TextField  label='Department' name='department' handleChange={handleChange} />
        <div className='w-full flex justify-center items-center'>
            <Button onClick={handleRegister} className='text-white font-semibold'>
              {loading ? <Loader2  className='w-6 h-6 animate-spin' /> : 'Sign up'}
            </Button>
        </div>
      </div>
      {/* <Button label='Show Code' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' handlePress={() => setShowCode({status: true})}/> */}
      <button onClick={() => {
        setSelectedRegister(0)
        router.push('/auth/register')
      }} className='font-medim text-sm text-gray-500'>Already have an account? Sign In</button>
      <Dialog open={showCode.code}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogDescription>
            Staff Code
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
           {
             showCode.code
           }
          </div>
            <span className="sr-only">Copy</span>
            <Copy />
        </div>
        <DialogFooter className="sm:justify-end">
          <CustomButton label={'Continue'} textStyle={'text-white'} handlePress={() => router.push('/')}/>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default ExaminerRegistration
