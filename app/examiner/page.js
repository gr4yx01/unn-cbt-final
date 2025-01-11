'use client'
import React, { useRef } from 'react'
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
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'

const page = () => {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
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
              10</span>
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
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
            <CardHeader>
              <CardTitle>COS 452</CardTitle>
              <CardDescription>Advanced Digital Laboratory</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex justify-start text-sm gap-3 items-center'>
              <span>Number of participant:</span>
              <span className='font-semibold'>45</span>
            </CardContent>
        </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
            <CardHeader>
              <CardTitle>COS 438</CardTitle>
              <CardDescription>Artificial Intelligence</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex justify-start text-sm gap-3 items-center'>
              <span>Number of participant:</span>
              <span className='font-semibold'>60</span>
            </CardContent>
        </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
            <CardHeader>
              <CardTitle>COS 444</CardTitle>
              <CardDescription>Computer Network Security</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex justify-start text-sm gap-3 items-center'>
              <span>Number of participant:</span>
              <span className='font-semibold'>12</span>
            </CardContent>
        </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
            <CardHeader>
              <CardTitle>COS 444</CardTitle>
              <CardDescription>Computer Network Security</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex justify-start text-sm gap-3 items-center'>
              <span>Number of participant:</span>
              <span className='font-semibold'>12</span>
            </CardContent>
        </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
            <CardHeader>
              <CardTitle>COS 444</CardTitle>
              <CardDescription>Computer Network Security</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex justify-start text-sm gap-3 items-center'>
              <span>Number of participant:</span>
              <span className='font-semibold'>12</span>
            </CardContent>
        </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <Card>
            <CardHeader>
              <CardTitle>COS 444</CardTitle>
              <CardDescription>Computer Network Security</CardDescription>
            </CardHeader>
            <CardContent className='w-full flex justify-start text-sm gap-3 items-center'>
              <span>Number of participant:</span>
              <span className='font-semibold'>12</span>
            </CardContent>
        </Card>
        </CarouselItem>
          </CarouselContent>
        </Carousel>
    </div>
  )
}

export default page
