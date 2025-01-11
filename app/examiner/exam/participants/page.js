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
    <div className='p-8'>
        <span className='font-semibold text-xl'>Elementary Mathematics</span>
        
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
