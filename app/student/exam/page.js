'use client'
import CustomButton from '@/components/CustomButton';
import useExamStore from '@/store/exam';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BsCopy } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export default function Page() {
    const [isCopied, setIsCopied] = useState(false);
    const examToParticipateIn = useExamStore((state) => state.examToParticipateIn)
    const router = useRouter()

    const handleCopy = async () => {
      const textToCopy = '135064';
      try {
        await navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    };


  return (
    <div className='p-4 space-y-6'>
      <span className='font-bold text-2xl'>{examToParticipateIn?.description}</span>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 mt-4 items-center'>
            <span>Course code: </span>
            <span className='border p-2 px-3 rounded-full text-sm font-semibold'>{examToParticipateIn?.title}</span>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <span className='border p-2 px-3 rounded-full text-sm'>{examToParticipateIn?.duration} minutes</span>
        <span className='border p-2 px-3 rounded-full text-sm'>{examToParticipateIn?.noOfQuestions} Questions</span>
        <span className='border p-2 px-3 rounded-full text-sm'>{examToParticipateIn?.examType === 'MULTIPLE_CHOICE' ? 'multiple' : 'true or false'} choice</span>
      </div>
      <CustomButton handlePress={() => router.push(`/student/exam/start`)} label={'Start Exam'} btnStyle={'bg-primary rounded-md px-5 py-2'} textStyle={'font-medium text-white'} />
    </div>
  );
}