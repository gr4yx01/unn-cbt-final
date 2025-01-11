import React from 'react'

const TextField = ({ label, secureEntry, placeholder, inputStyle}) => {
  return (
    <div className='flex flex-col gap-2 p-3'>
      <span className='text-gray-500 text-sm'>{label}</span>
      <input placeholder={placeholder} type={secureEntry ? 'password' : 'text'} className={`border outline-none rounded-lg p-3 ${inputStyle}`} />
    </div>
  )
}

export default TextField
