'use client'
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useHeaderStore from "@/store/header"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useCookies } from "react-cookie"

const Header = () => {
  const setSelectedRegister = useHeaderStore((state) => state.setSelectedRegister)
  const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)
  const router = useRouter()
  const [cookie, removeCookie] = useCookies(["access_token", "role"])

  const logOut = async () => {
    removeCookie('access_token')
    removeCookie('role')
    router.push('/')
  }

  const isLoggedIn = Boolean(cookie.access_token)

  return (
    <div className="w-full flex justify-between max-w-screen-md mx-auto p-5 border-b items-center">
      <span className="font-bold text-2xl">EXAM.UNN</span>
      <div className="flex gap-3 space-x-3">
        {
          !isLoggedIn && (
            <>
      <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">Sign in</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <button onClick={() => {
                setSelectedLogin(1)
                router.push('/auth/login')
              }}>Examiner</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <button onClick={() => {
                setSelectedLogin(0)
                router.push('/auth/login')
              }}>Student</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">Register</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <button onClick={() => {
                setSelectedRegister(1)
                router.push('/auth/register')
              }}>Examiner</button>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <button onClick={() => {
                setSelectedRegister(0)
                router.push('/auth/register')
              }}>Student</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
            </>
          )
        }
        {
          cookie.role === 'EXAMINER' ? <button onClick={() => router.push('/examiner')}>Dashboard</button> : cookie.role === 'STUDENT' ? <button onClick={() => router.push('/student')}>Dashboard</button> : ""
        }
        {
          cookie.role === 'EXAMINER' && (
            <button onClick={() => router.push('/examiner/exam/create')}>Create Exam</button>

          )
        }
        {
          cookie.role === 'STUDENT' && (
            <button onClick={() => router.push('/student/result')}>Exam Results</button>
          )
        }
        {
          isLoggedIn && <button onClick={logOut}>Log out</button> 
        }
      </div>
    </div>
  )
}

export default Header
