"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth, signIn, signOut } from "../../../auth";

const Navbar = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const userSession = await auth();
      setSession(userSession);
    };
    fetchSession();
  }, []);

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
              <button onClick={() => signOut()}>
                <span>Logout</span>
              </button>
              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <button onClick={async() =>await  signIn("github")}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
