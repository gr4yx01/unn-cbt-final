import React from 'react'

const TextField = ({ label, secureEntry }) => {
  return (
    <div className='flex flex-col gap-2 p-3'>
      <span className='text-gray-500 text-sm'>{label}</span>
      <input type={secureEntry ? 'password' : 'text'} className='border outline-none rounded-lg p-3 w-full' />
    </div>
  )
}

export default TextField
