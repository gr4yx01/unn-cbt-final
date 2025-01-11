import TextField from '@/components/TextField'
import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const page = () => {
  return (
    <div className='p-4 w-full flex justify-center items-center flex-col space-y-3'>
      <span className='font-semibold text-lg'>Enter Examination name: </span>
      <input className='w-3/4 border rounded-lg p-2 pl-3 outline-none' placeholder='Examination name' />
      <input className='w-3/4 border rounded-lg p-2 pl-3 outline-none' placeholder='Description' />
      <input className='w-3/4 border rounded-lg p-2 pl-3 outline-none' placeholder='Number of Questions' />
      <div className='w-3/4'>
        <Select className="">
          <SelectTrigger className="">
            <SelectValue placeholder="Type of Question" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Multiple Choice</SelectItem>
            <SelectItem value="dark">True or False</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button>
        <span className='text-white font-semibold'>Create</span>
      </Button>
    </div>
  )
}

export default page
