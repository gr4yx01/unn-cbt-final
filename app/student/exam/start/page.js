'use client'

import CustomButton from '@/components/CustomButton'
import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import useExamStore from '@/store/exam'
import useSWR from 'swr'
import Timer from '@/components/Timer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { axiosInstance } from '@/app/layout'

const page = () => {
  const examToParticipateIn = useExamStore((state) => state.examToParticipateIn)
  const { data } = useSWR(`exams/${examToParticipateIn?.id}/questions`)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const participationId = useExamStore((state) => state.participationId)
  const [score, setScore] = useState(0)
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('')

  const handleSubmitExam = async () => {
    try {
      await axiosInstance.post(`exams/${participationId}/submit`, { score })
      toast.success('Exam submitted successfully')
      router.push('/student')
    } catch (err) {
      toast.error('Failed to submit exam')
    }
  }


  const computeScore = (selectedOption, answer) => {
    if(selectedOption == answer) {
      setScore((prev) => prev + 1)
    } else {
      setScore((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
    setSelectedOption('')
  }

  return (
    <div className='flex h-screen'>
      <div className='border-r  w-2/5 flex justify-start items-center flex-col space-y-10 pt-10'>
        <span className='font-semibold text-xl'>{examToParticipateIn?.description}</span>
        <Timer duration={examToParticipateIn?.duration} onTimeUp={handleSubmitExam} />
        <CustomButton handlePress={handleSubmitExam} label={'Submit'} textStyle={'text-white font-semibold'}/>
      </div>
      <div className='flex-1 p-10'>
        <div>
            <span>{currentQuestionIndex + 1}. {data && data[currentQuestionIndex]?.title}?</span>
            <RadioGroup value={selectedOption} onValueChange={(value) => {
              setSelectedOption(value)
              computeScore(value, data[currentQuestionIndex]?.answer)
            }} className="mt-4 flex flex-col space-y-5">
              {
                data && 
                examToParticipateIn?.examType === 'MULTIPLE_CHOICE' ?  data[currentQuestionIndex]?.options.map((option, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <RadioGroupItem value={option.text} id={option.id} />
                    <Label htmlFor="option-one">{option.text}</Label>
                    </div>
                )) : (
                  <>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="TRUE" id="true" />
                      <Label htmlFor="true">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="FALSE" id="false" />
                      <Label htmlFor="false">False</Label>
                    </div>
                  </>
                )
              }
            </RadioGroup>
        </div>
        <div className='my-10 gap-5 flex justify-end'>
          
            <CustomButton handlePress={currentQuestionIndex + 1 === examToParticipateIn?.noOfQuestions ? handleSubmitExam : handleNext } label={currentQuestionIndex + 1 === examToParticipateIn?.noOfQuestions ? 'Finish' : 'Next' } btnStyle={'py-2'} textStyle={'text-white font-semibold'} />
        </div>
      </div>
    </div>
  )
}

export default page
