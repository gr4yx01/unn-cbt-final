'use client'

import { axiosInstance } from '@/app/layout'
import CustomButton from '@/components/CustomButton'
import TextField from '@/components/TextField'
import { Button } from '@/components/ui/button'
import { SelectValue, SelectTrigger, Select, SelectItem, SelectContent } from '@/components/ui/select'
import useExamStore from '@/store/exam'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const examDetail = useExamStore((state) => state.examDetail)
  const questions = useExamStore((state) => state.questions)
  const addQuestions = useExamStore((state) => state.addQuestions)
  const [detail, setDetail] = useState({
    question: '',
    answer: ''
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [optionA, setOptionA] = useState('')
  const [optionB, setOptionB] = useState('')
  const [optionC, setOptionC] = useState('')
  const [optionD, setOptionD] = useState('')

  console.log(examDetail)


  const handleSubmit = () => {
    addQuestions({
      question: detail?.question,
      answer: detail?.answer,
      options: examDetail?.typeOfQuestion === 'MULTIPLE_CHOICE' ? [
        optionA, optionB, optionC, optionD
      ] : ['TRUE', 'FALSE']
    })

    if(questions?.length + 1 !== Number(examDetail?.numberOfQuestions)) {
  
      setDetail({
        question: '',
        answer: ''
      })
      
      setOptionA('')
      setOptionB('')
      setOptionC('')
      setOptionD('')
    } else {
      setLoading(true)
      try{
        console.log(questions)
        // questions.forEach(async (question) => {
        //   await axiosInstance.post('', {
        //     title: question.question,
        //     options: question.options,
        //     answer: question.answer
        //   })
        // })
  
        toast.success('Questions successfully uploaded')
        // router.push('/examiner')
        setLoading(false)
      } catch (err) {
        toast.error('Error uploading')
        setLoading(false)
      }
    }
  }

  return (
    <div className='flex w-full justify-center items-center flex-col space-y-4'>
        <span className='mt-5 font-semibold'>Add New Question</span>
      <div className='w-2/4 border shadow-lg p-4 px-10 rounded-lg'>
        <TextField value={detail?.question} label={`Question ${questions?.length + 1}`} handleChange={(e) => setDetail({
          ...detail,
          question: e.target.value
        })}/>
       {
        examDetail?.typeOfQuestion === 'MULTIPLE_CHOICE' && (
          <div className='w-2/4'>
              <div className='flex gap-3 items-center w-full'>
                  <span>A: </span>
                  <TextField inputStyle={''} handleChange={(e) => setOptionA(e.target.value)} />
              </div>
              <div className='flex gap-3 items-center w-full'>
                  <span>B: </span>
                  <TextField inputStyle={''} handleChange={(e) => setOptionB(e.target.value)} />
              </div>
              <div className='flex gap-3 items-center w-full'>
                  <span>C: </span>
                  <TextField inputStyle={''} handleChange={(e) => setOptionC(e.target.value)}/>
              </div>
              <div className='flex gap-3 items-center w-full'>
                  <span>D: </span>
                  <TextField inputStyle={''} handleChange={(e) => setOptionD(e.target.value)} />
              </div>
          </div>
        )
       }
        <div className='flex gap-10 items-center'>
            <span>Answer: </span>
            <Select value={detail?.answer} onValueChange={(value) => setDetail({
              ...detail,
              answer: value
            })}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pick the answer" />
                </SelectTrigger>
                <SelectContent>
                  {
                    <>
                      {optionA && (
                        <SelectItem value={optionA}>{optionA}</SelectItem>
                      )}
                      {optionB && (
                        <SelectItem value={optionB}>{optionB}</SelectItem>
                      )}
                      {optionC && (
                        <SelectItem value={optionC}>{optionC}</SelectItem>
                      )}
                      {optionD && (
                        <SelectItem value={optionD}>{optionD}</SelectItem>
                      )}
                    </>
                  }
                  {
                    examDetail?.typeOfQuestion === 'TRUE_FALSE' && (
                      <>
                        <SelectItem value="TRUE">True</SelectItem>
                        <SelectItem value="FALSE">False</SelectItem>
                      </>
                    )
                  }
                </SelectContent>
            </Select>
        </div>
        <div className='w-full justify-center items-center flex my-3'>
            <CustomButton handlePress={handleSubmit} label={questions.length + 1 === Number(examDetail.numberOfQuestions) ? loading ? <Loader2 className='w-6 h-6 animate-spin' /> : 'Finish'  : 'Next' } btnStyle={'px-10 py-2'} textStyle={'text-white font-semibold'}/>
        </div>
      </div>
    </div>
  )
}

export default page
