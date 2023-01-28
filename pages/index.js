import Image from "next/image"
import Link from "next/link"



export default function Home() {
  let intro = "Welcome to the Next.js Foundations course! This beginner-friendly, example-led course will guide you through the prerequisite knowledge for Next.js. You will build a simple project step-by-step; starting with a JavaScript application, then migrating it to React and Next.js."
  return (
   <div className="">
    <img className='max-w-xs mx-auto md:max-w-sm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png" alt="NEXT JS" />
    <div className='max-w-xl mx-auto'>
    <h1 className='font-semibold pl-5 text-[20px]'>Introduction:</h1>
    <p className=' text-left mx-auto px-5 lg:text-xl pt-4'>{intro}</p>
    </div>
    <div className='text-center mt-8'>
      <Link href="/nested" legacyBehavior className=''><button className='bg-gray-300 hover:bg-gray-400 hover:shadow-md py-2 transition-[500ms] text-black px-7 rounded-full hover:text-white mx-auto hover:text-[20px]'>GO</button></Link>
    </div>
   </div>
  )
}
