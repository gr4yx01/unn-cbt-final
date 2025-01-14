'use client'
import React, { useEffect, useRef } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import useExamStore from '@/store/exam'

const page = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    const { data  } = useSWR('exams/examiner')
    // const setSelectedExamDetail = useExamStore((state) => state.setSelectedExamDetail)
    const router = useRouter()

    // const routeToDetail = (exam) => {
    //   console.log('hello')
    //   setSelectedExamDetail(exam)
    //   router.push('/examiner/exam')
    // }

    console.log(data)

  return (
    <div className='p-3 gap-5'>
        <span>Welcome back 🖐️</span>
        <div className='flex gap-3 mt-8'>
        <Card>
            <CardHeader>
              <CardTitle>Examination Uploaded</CardTitle>
            </CardHeader>
            <CardContent className='w-full flex justify-center items-center'>
              <span className='font-semibold text-xl'>
              {data?.length}</span>
            </CardContent>
        </Card>
        </div>
        <div className='my-8 flex justify-between items-center'>
            <span className='font-semibold text-lg'>Exams uploaded</span>
            <div className='border rounded-full p-1 px-6'>
                <input placeholder='Search for exam' className='text-sm outline-none'/>
            </div>
        </div>
        <Carousel
            opts={{
                align: "start",
                loop: true,
              }}
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
             onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {
              data && data?.map((exam) => (
                <CarouselItem  className="md:basis-1/2 lg:basis-1/3">
                  <Link href={`/examiner/exam/${exam?.id}`}>
                    <Card >
                    <CardHeader>
                      <CardTitle>{exam?.title}</CardTitle>
                      <CardDescription>{exam?.description}</CardDescription>
                    </CardHeader>
                    <CardContent className='w-full flex justify-start text-sm gap-3 items-center'>
                      <span>Number of participant:</span>
                      <span className='font-semibold'>{exam?.ExamTaken?.length}</span>
                    </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default page
