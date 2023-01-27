import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const PageNotFound = () => {

    const router = useRouter()

    useEffect(()=>{
        const id = setTimeout(()=>{
            router.push("/")
        },5000)

        return ()=>clearTimeout(id)
    },[])
  return (
    <div>
        <h1 className='text-center font-bold text-xl p-10 md:text-3xl '>404 Page Not Found</h1>
        <div className='text-center '>
            <Link href="/" legacyBehavior className=''><button className='bg-gray-300 hover:bg-gray-400 hover:shadow-md transition-[500ms] text-black px-7 py-2 rounded-full hover:text-white mx-auto hover:text-[20px]'>Go to home</button></Link>
        </div>
    </div>
  )
}

export default PageNotFound