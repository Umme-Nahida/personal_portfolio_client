// components/Navbar.tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const session = useSession()

    return (
        <nav className=" fixed top-0 w-full backdrop-blur-xl bg-sky-400/10 border-y border-y-white/20  shadow-lg py-2 z-50 ">

            <div className="container mx-auto px-22">
                <div className="flex justify-between items-center px-6 py-3">
                    {/* Logo */}
                    <h1 className="text-xl font-bold text-white tracking-wide">
                        Nahida<span className="text-pink-400">.</span>
                    </h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex md:items-center space-x-8 text-white font-medium">
                        <Link href='/'>
                          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                            Home
                        </li>
                        </Link>
                        <Link href="#about">
                          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                            About
                        </li>
                        </Link>
                        
                        <Link href='#work'>
                          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                            Projects
                        </li>
                        </Link>
                       <Link href={"#contact"}>
                          <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                            Contact
                        </li>
                       </Link>
                        {
                            session.status === "authenticated" &&
                            <>
                                <Link href={'/blog'}>
                                    <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                                        Blog
                                    </li>
                                </Link>
                                <Link href={'/dashboard'}>
                                    <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                                        Dashboard
                                    </li>
                                </Link>
                            </>
                        }
                        {
                            session.status === "authenticated" ? 
                            <button onClick={()=>signOut()} className="bg-sky-400 hover:bg-cyan-500 text-white rounded-2xl px-3 py-1 transition-colors cursor-pointer">
                                Logout
                            </button> :
                                <Link href={'/login'}>
                                    <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                                        Login
                                    </li>
                                </Link>
                        }

                    </ul>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {open && (
                    <div className="md:hidden px-6 pb-4">
                        <ul className="flex flex-col space-y-4 text-white font-medium">
                            <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                                Home
                            </li>
                            <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                                About
                            </li>
                            <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                                Projects
                            </li>
                            <li className="hover:text-cyan-400 transition-colors cursor-pointer">
                                Contact
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
