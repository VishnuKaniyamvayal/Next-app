import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=''>
        <div className='bg-slate-900 h-[60px] flex justify-between'>
            <h1 className='text-white font-bold pt-4 pl-3 text-lg md:text-[30px]'>Nextjs</h1>
            <ul className='flex my-auto '>
                <li><Link href="/" legacyBehavior><a className="text-white pr-4 md:pr-16 hover:text-blue-300">Home</a></Link></li>
                <li><Link href="/contacts" legacyBehavior><a className="text-white pr-4 md:pr-16 hover:text-blue-300">Contacts</a></Link></li>
                <li><Link href="/nested/about" legacyBehavior><a className="text-white pr-4 md:pr-16 hover:text-blue-300">About</a></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar