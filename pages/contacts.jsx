import React from 'react'

const contacts = () => {
    let para = "Start by creating a new Next.js project if you dont have one set up already. The most common approach is to use Create Next App nstall tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js"

  return (
    <div>
        <div className='flex flex-col'>
        <h1 className='font-bold text-[50px] md:text-[60px] text-center p-8 '>Contacts</h1>
        <p className='max-w-xl text-center mx-auto'>{para}</p>
    </div>
    </div>
  )
}

export default contacts