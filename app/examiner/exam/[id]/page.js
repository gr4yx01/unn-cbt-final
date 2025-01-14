'use client'
import useExamStore from '@/store/exam';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { BsCopy } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import useSWR from 'swr';

export default function Page() {
    const [isCopied, setIsCopied] = useState(false);
    const { id } = useParams()
    const optionLetters = ['A', 'B', 'C', 'D']
    const router = useRouter()
    const setSelectedExamId = useExamStore((state) => state.setSelectedExamId)

    const { data } = useSWR(`/exams/${id}`)

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
      <span className='font-bold text-2xl'>{data?.description}</span>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 mt-4 items-center'>
            <span>Course code: </span>
            <span className='border p-2 px-3 rounded-full text-sm font-semibold'>{data?.title}</span>
        </div>
        <div className='flex gap-2 items-center'>
            <span className='font-semibold text-gray-500'>{data?.exam_code}</span>
            <button onClick={handleCopy}>
                <BsCopy />  
            </button>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <button onClick={() => {
            setSelectedExamId(data?.id)
            router.push(`/examiner/exam/participants`)
            }} className='border p-2 px-3 rounded-full text-sm'>{data?.ExamTaken?.length} participant</button>
        <span className='border p-2 px-3 rounded-full text-sm'>85% avg performance</span>
        <span className='border p-2 px-3 rounded-full text-sm'>{data?.duration} minutes</span>
        <span className='border p-2 px-3 rounded-full text-sm'>{data?.noOfQuestions} Questions</span>
        <span className='border p-2 px-3 rounded-full text-sm'>{data?.examType === 'MULTIPLE_CHOICE' ? 'multiple' : 'true or false'} choice</span>
      </div>
      <div className='my-3 font-semibold text-lg'>Review Questions and Answer</div>
      <div className='flex flex-col gap-5'>
        {
            data?.questions?.map((question, index) => (
                <>
                    <div className='gap-3 flex flex-col'>
                        <div className='flex gap-3 items-center'>
                            <span className='text-lg font-semibold'>{index + 1}. {question?.title}?</span>
                            <FaRegEdit />
                        </div>
                        <div className='flex flex-col gap-3'>
                            {question?.options?.map((option, index) => (
                                <span>{optionLetters[index]}. {option?.text}</span>
                            ))}
                        </div>
                        <div className='flex gap-3'>
                            <span>Answer:</span>
                            <span className='font-semibold text-md'>{question?.answer}</span>
                        </div>
                    </div>
                </>
            ))
        }
      </div>
    </div>
  );
}