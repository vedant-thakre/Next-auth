import Link from 'next/link'
import React from 'react'

const register = () => {
  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4'>Register</h1>

            <form className='flex flex-col gap-3'>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Login</button>
            </form>

            <div className='bg-red-500 py-1 px-3 text-white w-fit text-sm rounded-md mt-2'>
                Error Message
            </div>

            <Link href={"/login"} className='text-sm mt-3 text-right' > 
                Already have an account ? <span className='underline'> Login</span>
            </Link>
        </div>
    </div>
  )
}

export default register