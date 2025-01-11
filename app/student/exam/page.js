'use client'
import CustomButton from '@/components/CustomButton';
import React, { useState } from 'react';
import { BsCopy } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

export default function Page() {
    const [isCopied, setIsCopied] = useState(false);

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

    console.log(isCopied)

  return (
    <div className='p-4 space-y-6'>
      <span className='font-bold text-2xl'>Elementary Mathematics I</span>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4 mt-4 items-center'>
            <span>Course code: </span>
            <span className='border p-2 px-3 rounded-full text-sm font-semibold'>MTH121</span>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <span className='border p-2 px-3 rounded-full text-sm'>15 minutes</span>
        <span className='border p-2 px-3 rounded-full text-sm'>30 Questions</span>
        <span className='border p-2 px-3 rounded-full text-sm'>Multiple choice</span>
      </div>
      <CustomButton label={'Start Exam'} btnStyle={'bg-primary rounded-md px-5 py-2'} textStyle={'font-medium text-white'} />
    </div>
  );
}