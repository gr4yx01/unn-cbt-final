import React from 'react'

const CustomButton = ({ label, handlePress, btnStyle, textStyle }) => {
  return (
    <button className={`border bg-secondary p-3 px-5 cursor-pointer rounded-lg ${btnStyle}`}>
        <span className={`font-medium ${textStyle} rounded-lg`} onClick={handlePress}>
          {label}
        </span>
    </button>
  )
}

export default CustomButton
