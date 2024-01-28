"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const register = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const router = useRouter();

    const handleChange = (key, value) => {
        setUser(prev => ({...prev , [key] : value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            console.log(user);
            router.push("/login");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4'>Register</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input type="text" placeholder='Name' value={user.name} onChange={(e)=> { handleChange('name', e.target.value)}} />
                <input type="text" placeholder='Email' value={user.email} onChange={(e)=> { handleChange('email', e.target.value)}}/>
                <input type="password" placeholder='Password'value={user.password} onChange={(e)=> { handleChange('password', e.target.value)}}/>
                <button type='submit' className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Sign Up</button>
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