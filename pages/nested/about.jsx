import React from 'react'

const about = () => {

     let para = "Start by creating a new Next.js project if you dont have one set up already. The most common approach is to use Create Next App nstall tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js.Add the paths to all of your template files in your tailwind.config.js file"
  return (
    <div className='flex flex-col'>
        <h1 className='font-bold text-[50px] md:text-[60px] text-center p-8 '>About</h1>
        <p className='max-w-xl text-center mx-auto'>{para}</p>
    </div>
  )
}

export default about