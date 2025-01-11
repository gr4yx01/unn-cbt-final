'use client'
import Button from '@/components/CustomButton'
import ExaminerRegistration from '@/components/ExaminerRegistration'
import StudentRegistration from '@/components/StudentRegistration'
import useHeaderStore from '@/store/header'
import { useState } from 'react'

const page = () => {
    const selected = [StudentRegistration, ExaminerRegistration]
    const selectedRegister = useHeaderStore((state) => state.selectedRegister)

    const ComponentToRender = selected[selectedRegister]

  return (
    <div className='w-full flex flex-col justify-center items-center mt-10 gap-10'>
        <ComponentToRender />
    </div>
  )
}

export default page
