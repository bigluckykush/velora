    "use client"
import Link from "next/link";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";


export default function Navbar () {
    const [menuopen, setMenuOpen] = useState (false);
    const toggleMenu = () => {
        setMenuOpen(!menuopen);
    }
    return (
        <main className="bg-white shadow shadow-gray-200 w-full">
            <div className="flex justify-between items-center pt-3 px-5 h-[60px]">
                <p className="text-2xl font-bold text-blue-500">Velora</p>
                <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/dashboard/create-post">Create-post</Link></li>
                    <li><Link  href="/dashboard/post">Post</Link></li>
                    <li><Link  href="/dashboard/profile">Profile</Link></li>
                </ul>
                <p className="hidden md:block w-[80px] h-[40px] bg-blue-500 text-white text-center pt-1"><Link href="/auth/signin">SignIn</Link></p>
                <div className="block md:hidden">
                <FaGripLines className="relative text-x1 cursor-pointer text-blue-500" 
                onClick={toggleMenu} />
                </div>
            </div>
            {menuopen && (
                <div className="absolute bg-white md:hidden px-5 pb-1">
                    <ul className="flex flex-col gap-2">
                    <li><Link  href="/">Home</Link></li>
                    <li><Link  href="/dashboard/create-post">create-Post</Link></li>
                    <li><Link  href="/dashboard/post">post</Link></li>
                    <li><Link  href="/dashboard/profile">profile</Link></li>
                    </ul>
                    <p  className="mt-2"><Link href="/auth/signin">SignIn</Link></p>
                </div>
            )}

        </main>
    )
}