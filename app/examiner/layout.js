'use client'

import useHeaderStore from '@/store/header'
import { useRouter } from 'next/navigation'
import { parseCookies } from 'nookies'
import React, { useEffect } from 'react'

const layout = ({ children }) => {
  const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)
    const router = useRouter()

    useEffect(() => {
            if(parseCookies().access_token && parseCookies().role === 'STUDENT') {
                router.push('/student')
            }else if(!parseCookies().access_token) {
                setSelectedLogin(1)
                router.push('/auth/login')
            }
        }, [])

  return (
    <div>
      { children }
    </div>
  )
}

export default layout
