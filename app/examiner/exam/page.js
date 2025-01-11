import React from 'react';

export default function Page() {
  return (
    <div className='p-4 space-y-6'>
      <span className='font-bold text-2xl'>Elementary Mathematics I</span>
      <div className='flex gap-4 mt-4 items-center'>
        <span>Course code: </span>
        <span className='border p-2 px-3 rounded-full text-sm font-semibold'>MTH121</span>
      </div>
      <div className='flex gap-4 items-center'>
        <span className='border p-2 px-3 rounded-full text-sm'>45 participant</span>
        <span className='border p-2 px-3 rounded-full text-sm'>85% avg performance</span>
        <span className='border p-2 px-3 rounded-full text-sm'>15 minutes</span>
        <span className='border p-2 px-3 rounded-full text-sm'>30 Questions</span>
        <span className='border p-2 px-3 rounded-full text-sm'>Multiple choice</span>
      </div>
    </div>
  );
}