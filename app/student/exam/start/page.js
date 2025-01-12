import CustomButton from '@/components/CustomButton'
import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label'

const page = () => {
  return (
    <div className='flex h-screen'>
      <div className='border-r  w-2/5 flex justify-start items-center flex-col space-y-10 pt-10'>
        <span className='font-semibold text-xl'>Elementary Mathematics</span>
        <div className='rounded-full w-16 h-16 flex justify-center items-center gap-2'>
            <span className='text-2xl font-semibold'>13</span>
            <span>:</span>
            <span className='text-md'>00</span>
        </div>
        <CustomButton label={'Submit'} textStyle={'text-white font-semibold'}/>
      </div>
      <div className='flex-1 p-10'>
        <div>
            <span>1. What year was ATX manufactured?</span>
            <RadioGroup defaultValue="option-one" className="mt-4 flex flex-col space-y-5">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">1990</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">1995</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">2001</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">2021</Label>
              </div>
            </RadioGroup>
        </div>
        <div className='my-10 gap-5 flex justify-end'>
            <CustomButton label={'Previous'} btnStyle={'py-2'} textStyle={'text-white font-semibold'} />
            <CustomButton label={'Next'} btnStyle={'py-2'} textStyle={'text-white font-semibold'} />
        </div>
      </div>
    </div>
  )
}

export default page
