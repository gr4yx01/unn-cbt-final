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
import useSWR from 'swr'

const page = () => {
  const { data } = useSWR('/exams/student/written')

  console.log(data)

  return (
    <div className='p-10 flex flex-col space-y-5'>
        <span className='font-semibold text-xl'>My Results.</span>
      <Table>
  <TableCaption>Examination results.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="">Examination</TableHead>
      <TableHead className="">Description</TableHead>
      <TableHead>Score</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      data?.map((result) => (
        <>
          <TableRow>
            <TableCell className="font-medium">{result.exam?.title}</TableCell>
            <TableCell>{result?.exam?.description}</TableCell>
            <TableCell>{result.score}</TableCell>
          </TableRow>
        </>
      ))
    }
  </TableBody>
</Table>

    </div>
  )
}

export default page
