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


const Header = () => {
  const setSelectedRegister = useHeaderStore((state) => state.setSelectedRegister)
  const setSelectedLogin = useHeaderStore((state) => state.setSelectedLogin)
  const router = useRouter()

  return (
    <div className="w-full flex justify-between max-w-screen-md mx-auto p-5 border-b items-center">
      <span className="font-bold text-2xl">EXAM.UNN</span>
      <div className="flex gap-3 space-x-3">
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
      </div>
    </div>
  )
}

export default Header
