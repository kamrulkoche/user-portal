"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SideBarNavLinkProps {
    href: string;
    text: string;
    activeClasses: string;
    inactiveClasses: string;
    activeIcon: string;
    inactiveIcon: string;
}

const SideBarNavLink = ({
    href,
    text,
    activeClasses,
    inactiveClasses,
    activeIcon,
    inactiveIcon,
}: SideBarNavLinkProps) => {
    const path = usePathname();
    const isActive = path === href;

    return (
        <Link href={href}>
            <div className={`flex items-center w-full ${isActive ? activeClasses : inactiveClasses}`}>
                <span className={`${isActive ? '' : 'bg-[#EBE6FA]'} p-2 rounded-full mr-2`}>
                    <img src={isActive ? activeIcon : inactiveIcon} alt={`${text} Icon`} className="h-4 w-auto" />
                </span>
                <span>{text}</span>
            </div>
        </Link>
    );
};

export default SideBarNavLink;
