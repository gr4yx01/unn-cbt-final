'use client'
import CustomButton from '@/components/CustomButton'
import TextField from '@/components/TextField'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { axiosInstance } from '../layout'
import useExamStore from '@/store/exam'
import { useRouter } from 'next/navigation'


const page = () => {
  const [detail, setDetail] = useState({
    regNo: "",
    code: ""
  })
  const setExamToParticipateIn = useExamStore((state) => state.setExamToParticipateIn)
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await axiosInstance.post('/exams/student', {
      exam_code: detail.code
    })

    setExamToParticipateIn(res.data)
    router.push('/student/exam')
  }

  return (
    <div className='flex w-full mt-10 justify-center items-center flex-col gap-4'>
      <div className='border rounded-lg w-2/4 p-4'>
        <TextField  label='Registration Number' handleChange={(e) => setDetail({
          ...detail,
          regNo: e.target.value
        })}/>
        <TextField  label='Examination Code' handleChange={(e) => setDetail({
          ...detail,
          code: e.target.value
        })}/>
        <div className='w-full flex justify-center items-center'>
            <CustomButton handlePress={handleSubmit} label='Continue' btnStyle='bg-secondary rounded-md px-5 py-2' textStyle='font-medium text-white' />
        </div>
      </div>
      
    </div>
  )
}

export default page
