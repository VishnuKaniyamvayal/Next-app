import React from 'react'


export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  const json = await response.json()

  const paths = json.map((user) => {
      return {
          params: {id:user.id.toString()}
      }
  })

  return {
      paths,
      fallback:false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id

  const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

  const json = await response.json()

  return {
      props: {user: json}
  }

}



const Detail = ({user}) => {
  return (
    <div className='flex  flex-col items-center '>
      <h1 className='text-[30px] mt-8 md:text-[50px]'>{user.name}</h1>
      <h3 className='text-gray-400  '>{user.username}</h3>
      <p className='text-blue-400'>{user.email}</p>


    </div>
  )
}

export default Detail