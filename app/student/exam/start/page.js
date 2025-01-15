'use client'

import CustomButton from '@/components/CustomButton'
import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'
import useExamStore from '@/store/exam'
import useSWR from 'swr'
import Timer from '@/components/Timer'

const page = () => {
  const examToParticipateIn = useExamStore((state) => state.examToParticipateIn)
  const { data } = useSWR(`exams/${examToParticipateIn?.id}/questions`)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  console.log(data)
  console.log(examToParticipateIn)

  const handleSubmitExam = async () => {
    console.log('submitted')
  }

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1)
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
            <RadioGroup className="mt-4 flex flex-col space-y-5">
              {
                data && data[currentQuestionIndex]?.options.map((option, index) => (
                  <div className="flex items-center space-x-2" key={index}>
                    <RadioGroupItem value={option.text} id={option.id} />
                    <Label htmlFor="option-one">{option.text}</Label>
                    </div>
                ))
              }
            </RadioGroup>
        </div>
        <div className='my-10 gap-5 flex justify-end'>
          {/* {
            currentQuestionIndex === examToParticipateIn?.noOfQuestions && <CustomButton handlePress={handleSubmit} label={'Finish'} btnStyle={'py-2'} textStyle={'text-white font-semibold'} />
          } */}
            <CustomButton handlePress={currentQuestionIndex + 1 === examToParticipateIn?.noOfQuestions ? handleNext : handleSubmitExam } label={currentQuestionIndex + 1 === examToParticipateIn?.noOfQuestions ? 'Finish' : 'Next' } btnStyle={'py-2'} textStyle={'text-white font-semibold'} />
        </div>
      </div>
    </div>
  )
}

export default page
