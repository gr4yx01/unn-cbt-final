import CustomButton from '@/components/CustomButton'
import TextField from '@/components/TextField'
import { Button } from '@/components/ui/button'
import { SelectValue, SelectTrigger, Select, SelectItem, SelectContent } from '@/components/ui/select'
import React from 'react'

const page = () => {
  return (
    <div className='flex w-full justify-center items-center flex-col space-y-4'>
        <span className='mt-5 font-semibold'>Add New Question</span>
      <div className='w-2/4 border shadow-lg p-4 px-10 rounded-lg'>
        <TextField label={"Question 1"}/>
       
        <div className='w-2/4'>
            <div className='flex gap-3 items-center w-full'>
                <span>A: </span>
                <TextField inputStyle={''}/>
            </div>
            <div className='flex gap-3 items-center w-full'>
                <span>B: </span>
                <TextField />
            </div>
            <div className='flex gap-3 items-center w-full'>
                <span>C: </span>
                <TextField />
            </div>
            <div className='flex gap-3 items-center w-full'>
                <span>D: </span>
                <TextField />
            </div>
        </div>
        <div className='flex gap-10 items-center'>
            <span>Answer: </span>
            <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pick the answer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">1950</SelectItem>
                  <SelectItem value="dark">1995</SelectItem>
                  <SelectItem value="system">1920</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className='w-full justify-center items-center flex my-3'>
            <CustomButton label={'Next'} btnStyle={'px-10 py-2'} textStyle={'text-white font-semibold'}/>
        </div>
      </div>
    </div>
  )
}

export default page
