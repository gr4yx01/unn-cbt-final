import Button from "@/components/CustomButton";
import Image from "next/image";
import { parseCookies } from "nookies";

export default function Home() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-10 mt-10'>
        <Image
          src='/exam.png'
          className=""
          alt=''
          width={300}
          height={300}
        />
      <div className="font-medium text-xl w-2/3 text-center">Seamless Computer-Based Exams for Universities – Scalable, Secure, and Smart!</div>
      <Button label='Get Started' btnStyle='bg-secondary' textStyle='text-white'/>
    </div>
  );
}
