// server actions - async functions running on  using for form submitting
'use server'

import { signIn, signOut } from "@/auth";

export async function doSocialLogin(formData) {
    const action = formData.get('action');
    await signIn(action , {
        redirectTo : '/profile'
    })
    console.log(action)
}


export async function doLogout() {

    await signOut({redirectTo : '/'})
}