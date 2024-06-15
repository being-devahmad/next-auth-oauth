import { auth } from '@/auth';
import LogoutForm from '@/components/LogoutForm';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = async () => {
    try {
        const session = await auth();

        // If no user is authenticated, redirect to the login page
        if (!session?.user) {
            redirect('/login');
            return null;
        }

        return (
            <div className='flex flex-col items-center m-4'>
                <h1>{session?.user?.name}</h1>
                <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={72}
                    height={72}
                    className='rounded-full'
                />
                <LogoutForm />
            </div>
        );
    } catch (error) {
        console.error('Error fetching session:', error);
        // Handle the error appropriately, e.g., show an error message or redirect
        return <div className='flex flex-col items-center m-4'>An error occurred. Please try again later.</div>;
    }
};

export default ProfilePage;
