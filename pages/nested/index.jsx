import React from 'react'
import Link from 'next/link'



export const getStaticProps = async ()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await response.json()


return{
    props:{users:json}
}


}

const Nested = ({users}) => {
    return (
    <div className=''>
        <ul className='mt-10 text-left flex-row justify-center ml-[30%] text-2xl  '>

        {users?.map((data)=><Link href={`/nested/${data.id}`} legacyBehavior key={data.id}><li id={data.id} className="p-2 hover:bg-gray-100 transition-all m-1 cursor-pointer">{data.name}</li></Link>)}
        </ul>
    </div>
  )
}

export default Nested