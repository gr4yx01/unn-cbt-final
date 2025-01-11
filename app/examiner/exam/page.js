'use client'
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
        <div className='flex gap-2 items-center'>
            <span className='font-semibold text-gray-500'>13506</span>
            <button onClick={handleCopy}>
                <BsCopy />  
            </button>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <span className='border p-2 px-3 rounded-full text-sm'>45 participant</span>
        <span className='border p-2 px-3 rounded-full text-sm'>85% avg performance</span>
        <span className='border p-2 px-3 rounded-full text-sm'>15 minutes</span>
        <span className='border p-2 px-3 rounded-full text-sm'>30 Questions</span>
        <span className='border p-2 px-3 rounded-full text-sm'>Multiple choice</span>
      </div>
      <div className='my-3 font-semibold text-lg'>Review Questions and Answer</div>
      <div className='flex flex-col gap-5'>
        <div className='gap-3 flex flex-col'>
            <div className='flex gap-3 items-center'>
                <span className='text-lg'>1. What's year was the ATX created?</span>
                <FaRegEdit />
            </div>
            <div className='flex flex-col gap-3'>
                <span>A. 1995</span>
                <span>B. 1990</span>
                <span>C. 2001</span>
                <span>D. 1965</span>
            </div>
            <div className='flex gap-3'>
                <span>Answer:</span>
                <span className='font-semibold text-md'>1995</span>
            </div>
        </div>
        <div className='gap-3 flex flex-col'>
            <div className='flex gap-3 items-center'>
                <span className='text-lg'>2. What's year was the Mini-ITX created?</span>
                <FaRegEdit />
            </div>
            <div className='flex flex-col gap-3'>
                <span>A. 1995</span>
                <span>B. 1990</span>
                <span>C. 2001</span>
                <span>D. 1965</span>
            </div>
            <div className='flex gap-3'>
                <span>Answer:</span>
                <span className='font-semibold text-md'>2001</span>
            </div>
        </div>
        <div className='gap-3 flex flex-col'>
            <div className='flex gap-3 items-center'>
                <span className='text-lg'>3. What's year was the ATX created?</span>
                <FaRegEdit />
            </div>
            <div className='flex flex-col gap-3'>
                <span>A. 1995</span>
                <span>B. 1990</span>
                <span>C. 2001</span>
                <span>D. 1965</span>
            </div>
            <div className='flex gap-3'>
                <span>Answer:</span>
                <span className='font-semibold text-md'>1995</span>
            </div>
        </div>
      </div>
    </div>
  );
}