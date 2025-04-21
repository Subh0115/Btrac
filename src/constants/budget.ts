export const BUDGET_SUMMARY = [
    {
        id: 1,
        title: "Total Budget",
        value: "₹1,50,000",
        change: "+₹20,000",
        trend: "up",
        description: "vs. last month"
    },
    {
        id: 2,
        title: "Spent So Far",
        value: "₹95,400",
        change: "63.6%",
        trend: "neutral",
        description: "of total budget"
    },
    {
        id: 3,
        title: "Remaining",
        value: "₹54,600",
        change: "36.4%",
        trend: "neutral",
        description: "for this month"
    },
    {
        id: 4,
        title: "Savings Goal",
        value: "₹45,000",
        change: "+85%",
        trend: "up",
        description: "achieved"
    }
];

export const BUDGET_CATEGORIES = [
    {
        name: "Housing & Utilities",
        allocated: 45000,
        spent: 42000,
        remaining: 3000,
        percentage: 93,
        color: "hsl(var(--chart-1))"
    },
    {
        name: "Food & Groceries",
        allocated: 25000,
        spent: 18500,
        remaining: 6500,
        percentage: 74,
        color: "hsl(var(--chart-2))"
    },
    {
        name: "Transportation",
        allocated: 15000,
        spent: 12000,
        remaining: 3000,
        percentage: 80,
        color: "hsl(var(--chart-3))"
    },
    {
        name: "Entertainment",
        allocated: 20000,
        spent: 15000,
        remaining: 5000,
        percentage: 75,
        color: "hsl(var(--chart-4))"
    },
    {
        name: "Shopping",
        allocated: 30000,
        spent: 28000,
        remaining: 2000,
        percentage: 93,
        color: "hsl(var(--chart-5))"
    },
    {
        name: "Healthcare",
        allocated: 15000,
        spent: 5000,
        remaining: 10000,
        percentage: 33,
        color: "hsl(var(--chart-6))"
    }
];

export const MONTHLY_BUDGET_TRENDS = [
    {
        name: "January",
        allocated: 140000,
        spent: 125000,
        saved: 15000
    },
    {
        name: "February",
        allocated: 145000,
        spent: 130000,
        saved: 15000
    },
    {
        name: "March",
        allocated: 145000,
        spent: 128000,
        saved: 17000
    },
    {
        name: "April",
        allocated: 148000,
        spent: 135000,
        saved: 13000
    },
    {
        name: "May",
        allocated: 150000,
        spent: 132000,
        saved: 18000
    },
    {
        name: "June",
        allocated: 150000,
        spent: 95400,
        saved: 20000
    }
];

export const SAVINGS_GOALS = [
    {
        name: "Emergency Fund",
        target: 200000,
        current: 150000,
        percentage: 75,
        color: "hsl(var(--chart-1))",
        timeframe: "3 months left"
    },
    {
        name: "New Laptop",
        target: 80000,
        current: 45000,
        percentage: 56,
        color: "hsl(var(--chart-2))",
        timeframe: "2 months left"
    },
    {
        name: "Vacation",
        target: 120000,
        current: 90000,
        percentage: 75,
        color: "hsl(var(--chart-3))",
        timeframe: "1 month left"
    },
    {
        name: "Home Down Payment",
        target: 1000000,
        current: 450000,
        percentage: 45,
        color: "hsl(var(--chart-4))",
        timeframe: "8 months left"
    }
];

export const BUDGET_VS_ACTUAL = [
    { name: "Housing", budget: 45000, actual: 42000 },
    { name: "Food", budget: 25000, actual: 18500 },
    { name: "Transport", budget: 15000, actual: 12000 },
    { name: "Entertainment", budget: 20000, actual: 15000 },
    { name: "Shopping", budget: 30000, actual: 28000 },
    { name: "Healthcare", budget: 15000, actual: 5000 }
]; 