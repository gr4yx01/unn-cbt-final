'use client'
import useExamStore from '@/store/exam'
import useHeaderStore from '@/store/header'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React, { useEffect } from 'react'


const page = ({ children }) => {
    const router = useRouter()
    const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)

    useEffect(() => {
        if(parseCookies().access_token && parseCookies().role === 'EXAMINER') {
            router.push('/examiner')
        }else if(!parseCookies().access_token) {
            setSelectedLogin(0)
            router.push('/auth/login')
        }
    }, [])

  return (
    <div>
      {children}
    </div>
  )
}

export default page
