"use client"
import { useSession, signIn, signOut} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Dashboard = () => {
    const { data:session }=useSession();
    const router = useRouter();
    
    if(!session)
    {
        router.push("/login")
    }
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
