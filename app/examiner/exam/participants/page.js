'use client'

import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import useExamStore from '@/store/exam'
import useSWR from 'swr'
  

const page = () => {
  const selectedExamId = useExamStore((state) => state.selectedExamId)
  const { data } = useSWR(`exams/${selectedExamId}/participants`)

  console.log(data)

  return (
    <div className='p-8'>
        <span className='font-semibold text-xl'>Total Number of Participant</span>
        
      <Table className='mt-8'>
  <TableCaption>List of students who participated in your exam.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Name</TableHead>
      <TableHead>Registration Number</TableHead>
      <TableHead>Score</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Henry Nnamani</TableCell>
      <TableCell>2020/244411</TableCell>
      <TableCell>70</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  )
}

export default page
