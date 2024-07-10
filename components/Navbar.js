"use client"
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const {data: session} = useSession();
  if(session)
  {
    return<>
    Signed in as {session.user.email} <br/>
    <button onClick={() => signOut()}>Sign out</button>
    </>
  }
  return (
    <nav className="bg-gray-900 text-white flex justify-between px-4 h-16 items-center">
      <div className="logo font-bold text-lg flex items-center justify-center gap-1">
        <span>
          <img src="chai.gif" width={44}></img>
        </span>{" "}
        GetMeAChai!
      </div>
      {/* <ul className='flex justify-between gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}
      <div>
        <Link href="/login">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75  dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Login
          </span>
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
