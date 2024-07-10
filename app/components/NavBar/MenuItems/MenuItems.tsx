"use client";
import Link from 'next/link';
import { useState } from "react";

import { IoMdClose, IoMdMenu } from "react-icons/io";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import NavBarLinkAPI from "../NavBarLinkAPI/NavBarLinkAPI";

const MenuItems = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "blog", name: "Blog" },
        { id: 3, path: "contact", name: "Contact Us" },
        { id: 4, path: "about", name: "About Us" },
        { id: 5, path: "register", name: "Register" },
        { id: 6, path: "FAQ", name: "FAQ" },
    ];

    return (

        <>
            <div className={`container mx-auto  duration-1000 ${open ? " h-[34rem]" : "h-16"}  `}>
                <div className="flex justify-between lg:hidden px-4 pt-4">
                    <div className="mr-10">
                        <img src="/images/logo.png" alt="" className="rounded-lg" />
                    </div>
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-4xl text-[#723EEB] "
                    >
                        {open === true ? <IoMdClose /> : <IoMdMenu />}
                    </div>
                </div>
                <div className={` duration-1000 absolute lg:static
                  ${open ? "left-0 right-0" : "-left-1/2 right-full"}
                  text-lg font-bold `} >
                    <div className="lg:flex justify-between items-center lg:py-6 ">
                        <div>
                            <ul className="lg:flex items-center">
                                <li className="mr-10">
                                    <img src="/images/logo.png" alt="" className="rounded-lg hidden lg:block" />
                                </li>

                                {routes.map((route) => (
                                    <Link key={route.id} href={route.path} > <NavBarLinkAPI key={route.id} route={route} ></NavBarLinkAPI></Link>
                                ))}

                            </ul>
                        </div>

                        <div className="lg:flex gap-5 grid justify-items-center">
                            <div className="flex">
                                <LanguageDropdown />
                            </div>
                            <div className="border border-[#723EEB] bg-[#723EEB] hover:bg-[#4d27a3] duration-500 px-4 py-2 rounded-3xl text-white font-medium">
                                <button className="flex items-center gap-2">Agent Login </button>
                            </div>
                            <div className="border border-[#723EEB] bg-[#723EEB] hover:bg-[#4d27a3] duration-500 px-4 py-2 rounded-3xl text-white font-medium">
                                <Link href="/login"> <button className="flex items-center gap-2">Login</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuItems
