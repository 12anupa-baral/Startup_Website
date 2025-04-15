import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BadgePlus, LogOut } from "lucide-react";
import { auth, signIn, signOut } from "../../auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-workSans">
      <nav className="flex justify-between items-center">
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={150} height={150} />
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden font-bold">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ callbackUrl: "/" });
                }}
              >
                <button
                  type="submit"
                  className="font-bold p-2 rounded-xl  text-red-500"
                >
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
                {/* <span>Logout</span> */}
              </form>
              <Link href={`/user/${session?.id}`}>
                {/* <span>{session?.user?.name}</span> */}
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
