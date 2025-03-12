import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signIn, signOut  } from "../../../auth";
const Navbar = async() => {

    const session =await auth()
  

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/">
              <Image src="/yc_logo.png" alt="logo" width={150} height={150} />
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <form action={async() => {
                'use server';
                await signOut({ callbackUrl: "/" })}}>
                <span>Logout</span>
              </form>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form action={async ()=>{
                'use server'
                await signIn("github");
            }}>
            <button type="submit">
              Login
            </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
