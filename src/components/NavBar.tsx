'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";

export default function NavBar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
                <Menu setActive={setActive}>
                    <Link href={'/'}>
                        <MenuItem active={active} item="Home" setActive={setActive}>
                        </MenuItem>
                    </Link>
                    <MenuItem active={active} item="Our Courses" setActive={setActive}>
                        <div className="flex flex-col text-sm space-y-4">
                            <HoveredLink href='/courses'>All courses</HoveredLink>
                            <HoveredLink href='/courses'>Basic Music Theory</HoveredLink>
                            <HoveredLink href='/courses'>Advanced composition</HoveredLink>
                            <HoveredLink href='/courses'>Song writing</HoveredLink>
                            <HoveredLink href='/courses'>Music production</HoveredLink>
                        </div>
                    </MenuItem>
                    <Link href={'/contact'}>
                        <MenuItem active={active} setActive={setActive} item="Contact us" />
                    </Link>
                </Menu>
            </div>
        </>
    )
}