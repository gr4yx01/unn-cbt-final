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
  

const page = () => {
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
    <TableRow>
      <TableCell className="font-medium">COS 444</TableCell>
      <TableCell>Computer Network Security</TableCell>
      <TableCell>45</TableCell>
    </TableRow>
  </TableBody>
</Table>

    </div>
  )
}

export default page
