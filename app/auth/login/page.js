'use client'
import Button from '@/components/CustomButton'
import ExaminerLogin from '@/components/ExaminerLogin'
import StudentLogin from '@/components/StudentLogin'
import useHeaderStore from '@/store/header'

const page = () => {
    const selected = [StudentLogin, ExaminerLogin]
    const selectedLogin = useHeaderStore((state) => state.selectedLogin) || 0

    console.log(selectedLogin)
    const ComponentToRender = selected[selectedLogin]

  return (
    <div className='w-full flex flex-col justify-center items-center mt-10 gap-10'>
        <ComponentToRender />
    </div>
  )
}

export default page
