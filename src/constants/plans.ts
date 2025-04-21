type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Basic",
        desc: "Perfect for individuals starting their financial journey",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Get Started",
        features: [
            "Connect up to 2 bank accounts",
            "Basic expense tracking",
            "Monthly budget planning",
            "Simple transaction history",
            "Email support",
            "Mobile app access"
        ],
        link: "/signup"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Advanced features for comprehensive financial management",
        monthlyPrice: 250,
        yearlyPrice: 2500,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Unlimited bank connections",
            "Advanced budget analytics",
            "Investment portfolio tracking",
            "Bill payment reminders",
            "Custom financial goals",
            "Priority customer support",
            "Real-time alerts",
            "Export financial reports"
        ],
        link: "/signup?plan=pro"
    },
    {
        id: "enterprise",
        title: "Business",
        desc: "Complete solution for businesses and teams",
        monthlyPrice: 450,
        yearlyPrice: 4500,
        buttonText: "Contact Sales",
        features: [
            "Everything in Pro plan",
            "Multi-user access",
            "Team collaboration tools",
            "Custom integrations",
            "Dedicated account manager",
            "API access",
            "Enhanced security features",
            "24/7 premium support"
        ],
        link: "/contact"
    }
];
