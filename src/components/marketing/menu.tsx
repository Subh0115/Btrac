"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { BarChart3Icon, Building2Icon, ShieldCheckIcon, LineChartIcon, WalletIcon, CalendarRangeIcon, CircleHelp, HashIcon, Newspaper, UsersIcon, CreditCardIcon, BanknoteIcon, HandshakeIcon, BookOpenIcon, HelpCircleIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Icons from "../global/icons";

interface ItemProps {
    title: string;
    href: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const Item = ({ title, href, children, icon, ...props }: ItemProps) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    passHref
                    href={href}
                    {...props}
                    className="grid grid-cols-[.15fr_1fr] select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                >
                    <div className="flex items-center mt-1 justify-center p-1 w-8 h-8 rounded-md border border-border/80">
                        {icon}
                    </div>
                    <div className="text-start ml-3">
                        <span className="text-sm group-hover:text-foreground font-normal leading-none">
                            {title}
                        </span>
                        <p className="text-sm mt-0.5 line-clamp-2 text-muted-foreground">
                            {children}
                        </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
};

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        How it works
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-4 p-6 md:w-[400px] lg:w-[500px] xl:w-[550px]">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                                    Simple 3-Step Process
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Get started with BtrackiFiS in minutes
                                </p>
                            </div>
                            
                            <div className="relative">
                                {/* Timeline line */}
                                <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 to-primary/10"></div>
                                
                                {/* Step 1 */}
                                <div className="relative pl-12 pb-4">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-sm font-medium text-primary">1</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Building2Icon className="w-5 h-5 text-primary" />
                                        <h4 className="text-sm font-medium">Connect Your Banks</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 pl-7">
                                        Securely link your bank accounts in seconds
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="relative pl-12 pb-4">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-sm font-medium text-primary">2</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <LineChartIcon className="w-5 h-5 text-primary" />
                                        <h4 className="text-sm font-medium">Track & Analyze</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 pl-7">
                                        Get real-time insights into your finances
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="relative pl-12">
                                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <span className="text-sm font-medium text-primary">3</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheckIcon className="w-5 h-5 text-primary" />
                                        <h4 className="text-sm font-medium">Secure & Manage</h4>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1 pl-7">
                                        Control your financial future with confidence
                                    </p>
                                </div>
                            </div>

                            <Link 
                                href="/how-it-works" 
                                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-2"
                            >
                                Learn more about our process
                                <ArrowRightIcon className="w-4 h-4" />
                            </Link>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid rounded-3xl gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        href="/"
                                        className="flex flex-col justify-end w-full h-full p-4 no-underline rounded-lg outline-none select-none bg-gradient-to-tr from-accent to-accent/50 focus:shadow-md"
                                    >
                                        <Icons.icon className="w-6 h-6" />
                                        <div className="my-2 text-lg font-normal">
                                            BtrackiFiS
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Your comprehensive financial management platform
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <Item title="Financial Dashboard" href="/features/dashboard" icon={<BarChart3Icon className="w-5 h-5" />}>
                                Comprehensive view of your financial health.
                            </Item>
                            <Item title="Budget Planning" href="/features/budget" icon={<WalletIcon className="w-5 h-5" />}>
                                Create and track your budget effectively.
                            </Item>
                            <Item title="Investment Tracking" href="/features/investments" icon={<LineChartIcon className="w-5 h-5" />}>
                                Monitor and analyze your investment portfolio.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Pricing
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px]">
                            <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                                <div className="flex items-center gap-2">
                                    <CreditCardIcon className="w-5 h-5 text-primary" />
                                    <h3 className="text-lg font-semibold">Flexible Plans</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Choose the perfect plan for your financial needs
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Link href="/pricing/personal" className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <WalletIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">Personal</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">For individual users</p>
                                </Link>
                                <Link href="/pricing/business" className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <Building2Icon className="w-4 h-4" />
                                        <span className="text-sm font-medium">Business</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">For companies</p>
                                </Link>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Integrations
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px]">
                            <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5">
                                <div className="flex items-center gap-2">
                                    <HandshakeIcon className="w-5 h-5 text-secondary" />
                                    <h3 className="text-lg font-semibold">Bank Connections</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Seamlessly connect with major banks and financial institutions
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-3 rounded-lg bg-accent/10">
                                    <span className="text-sm font-medium">Major Banks</span>
                                    <p className="text-xs text-muted-foreground mt-1">Connect with 100+ banks</p>
                                </div>
                                <div className="p-3 rounded-lg bg-accent/10">
                                    <span className="text-sm font-medium">Payment Gateways</span>
                                    <p className="text-xs text-muted-foreground mt-1">Secure payment processing</p>
                                </div>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-muted-foreground hover:text-foreground">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] xl:w-[550px]">
                            <div className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5">
                                <div className="flex items-center gap-2">
                                    <BookOpenIcon className="w-5 h-5 text-accent" />
                                    <h3 className="text-lg font-semibold">Learning Center</h3>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Everything you need to know about managing your finances
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <Link href="/resources/guides" className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <BookOpenIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">Guides</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">Financial guides & tutorials</p>
                                </Link>
                                <Link href="/resources/support" className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <HelpCircleIcon className="w-4 h-4" />
                                        <span className="text-sm font-medium">Support</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">Get help when you need it</p>
                                </Link>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
};

export default Menu;
