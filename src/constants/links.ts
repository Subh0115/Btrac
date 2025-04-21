import { LayoutDashboardIcon, LucideIcon, WalletIcon, ArrowLeftRightIcon, PiggyBankIcon, Settings2Icon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/app",
        label: "Dashboard",
        icon: LayoutDashboardIcon,
    },
    {
        href: "/accounts",
        label: "Accounts",
        icon: WalletIcon,
    },
    {
        href: "/transactions",
        label: "Transactions",
        icon: ArrowLeftRightIcon,
    },
    {
        href: "/budget",
        label: "Budget",
        icon: PiggyBankIcon,
    },
    {
        href: "/settings",
        label: "Settings",
        icon: Settings2Icon,
    }
];

export const FOOTER_LINKS = [
    {
        title: "Legal",
        links: [
            { name: "Privacy", href: "/privacy" },
            { name: "Terms", href: "/terms" },
            { name: "Cookies", href: "/cookies" },
        ],
    },
];
