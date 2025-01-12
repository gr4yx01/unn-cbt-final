'use client'

import TextField from '@/components/TextField'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from 'react-toastify'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import useExamStore from '@/store/exam'
import CustomButton from '@/components/CustomButton'
import { Loader2 } from 'lucide-react'
import { axiosInstance } from '@/app/layout'

const page = () => {
  const [examDetail, setExamDetail] = useState({
    name: '',
    duration: '',
    description: '',
    numberOfQuestions: '',
    typeOfQuestion: ''
  })
  const router = useRouter()
  const pushExamDetailToStore = useExamStore((state) => state.setExamDetail)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setExamDetail({
      ...examDetail,
      [e.target.name]: e.target.value
    })
  }

  const createExam = async () => {
    try {
      setLoading(true)
      const response = await axiosInstance.post('/exams', {
        title: examDetail.name,
        description: examDetail.description,
        duration: Number(examDetail.duration),
        examType: examDetail.typeOfQuestion,
        noOfQuestions: Number(examDetail.numberOfQuestions)
      })

      toast.success('Exam successfully created')
      pushExamDetailToStore({...examDetail, id: response.data.data.id})
      router.push('/examiner/exam/create/add')
      setLoading(false)
    } catch (err) {
      toast.error('Error creating Examination')
      console.log(err)
      setLoading(false)
    }
  }

  return (
    <div className='w-full flex justify-center items-center flex-col space-y-7 p-12'>
      <input onChange={handleChange} className='w-3/4 border rounded-lg p-2 pl-3 outline-none' placeholder='Examination name' name='name' />
      <input onChange={handleChange} className='w-3/4 border rounded-lg p-2 pl-3 outline-none' placeholder='Examination Duration' name='duration' />
      <input onChange={handleChange} className='w-3/4 border rounded-lg p-2 pl-3 outline-none' placeholder='Description' name='description' />
      <input onChange={handleChange} className='w-3/4 border rounded-lg p-2 pl-3 outline-none' placeholder='Number of Questions' name='numberOfQuestions' />
      <div className='w-3/4'>
        <Select className="" onValueChange={(value) => setExamDetail({ ...examDetail, typeOfQuestion: value })}>
          <SelectTrigger className="">
            <SelectValue placeholder="Type of Question" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MULTIPLE_CHOICE">Multiple Choice</SelectItem>
            <SelectItem value="TRUE_FALSE">True or False</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <CustomButton label={ loading ? <Loader2  className='w-6 h-6 animate-spin' /> : 'Sign up' } handlePress={createExam} textStyle={'text-white font-semibold'} btnStyle={''}/>
      {/* <button onClick={createExam}>
        <span className='text-white font-semibold text-lg'>Create</span>
      </button> */}
    </div>
  )
}

export default page
