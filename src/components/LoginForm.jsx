'use client'

import { doSocialLogin } from '@/app/actions'
import React from 'react'

const LoginForm = () => {
    return (
        <>
            <form action={doSocialLogin}>
                <button
                    className='bg-pink-400 text-white p-1 rounded-md m-1 text-lg'
                    type='submit'
                    name='action'
                    value='google'>
                    Sign in with Google
                </button>
                <button
                  className='bg-black text-white p-1 rounded-md m-1 text-lg'
                    type='submit'
                    name='action'
                    value='github'>
                    Sign in with GitHub
                </button>
            </form>
        </>
    )
}

export default LoginForm
