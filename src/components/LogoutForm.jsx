import { doLogout } from '@/app/actions'
import React from 'react'

const LogoutForm = () => {
    return (
        <form action={doLogout}>
            <button className='bg-blue-400 text-white p-1 rounded-md m-1 text-lg' type='submit' name='action' value='logout'>Logout</button>
        </form>
    )
}

export default LogoutForm
