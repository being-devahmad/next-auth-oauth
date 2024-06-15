import LoginForm from '@/components/LoginForm'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center m-4'>
      <h1 className='text-3xl my-3'>Hey , time to Sign in</h1>
      <LoginForm />
    </div>
  )
}

export default Home
