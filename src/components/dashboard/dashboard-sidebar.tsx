"use client";

import { SIDEBAR_LINKS } from "@/constants/links";
import { LogOutIcon, SearchIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../global/container";
import { Button, buttonVariants } from "../ui/button";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/functions";
import { useClerk } from "@clerk/nextjs";

const DashboardSidebar = () => {
    const { signOut } = useClerk();
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState("");

    const handleLogout = async () => {
        await signOut();
    };

    const filteredLinks = SIDEBAR_LINKS.filter(link => 
        link.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            // Handle CMD/CTRL + K
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                const searchInput = document.getElementById('nav-search') as HTMLInputElement;
                searchInput?.focus();
            }
            // Handle Escape key
            if (event.key === 'Escape' && searchQuery) {
                setSearchQuery("");
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [searchQuery]);

    return (
        <div
            id="sidebar"
            className="flex-col hidden lg:flex fixed left-0 top-16 bottom-0 z-50 bg-background border-r border-border/50 w-72"
        >
            <div className={cn(
                "flex flex-col size-full p-3"
            )}>
                <Container delay={0.2} className="h-max">
                    <div className="relative flex items-center gap-2 px-2 py-1 border rounded-md">
                        <SearchIcon className="size-4 text-muted-foreground" />
                        <input
                            id="nav-search"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search"
                            className="w-full text-sm bg-transparent focus:outline-none"
                        />
                        {searchQuery && (
                            <Button
                                variant="ghost"
                                size="sm"
                                className="h-6 w-6 p-0 hover:bg-muted"
                                onClick={() => setSearchQuery("")}
                            >
                                <XIcon className="size-4" />
                            </Button>
                        )}
                    </div>
                </Container>
                <ul className="w-full space-y-2 py-5">
                    {filteredLinks.map((link, index) => {
                        const isActive = pathname === link.href;
                        return (
                            <li key={index} className="w-full">
                                <Container delay={0.1 + index / 10}>
                                    <Link
                                        href={link.href}
                                        className={buttonVariants({
                                            variant: "ghost",
                                            className: isActive ? "bg-muted text-primary w-full !justify-start" : "text-foreground/70 w-full !justify-start",
                                        })}
                                    >
                                        <link.icon strokeWidth={2} className="size-[18px] mr-1.5" />
                                        {link.label}
                                    </Link>
                                </Container>
                            </li>
                        )
                    })}
                </ul>
                <div className="mt-auto flex flex-col gap-3 w-full">
                    <Container delay={0.3}>
                        <div className="h-10 w-full">
                            <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="w-full justify-start"
                            >
                                <LogOutIcon className="size-4 mr-1.5" />
                                Logout
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default DashboardSidebar
