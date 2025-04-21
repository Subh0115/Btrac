export const TRANSACTION_SUMMARY = [
    {
        id: 1,
        title: "Total Transactions",
        value: "2,945",
        change: "+12%",
        trend: "up",
        description: "vs. last month"
    },
    {
        id: 2,
        title: "Average Transaction",
        value: "₹15,200",
        change: "-5%",
        trend: "down",
        description: "vs. last month"
    },
    {
        id: 3,
        title: "Success Rate",
        value: "98.5%",
        change: "+0.5%",
        trend: "up",
        description: "vs. last month"
    },
    {
        id: 4,
        title: "Total Volume",
        value: "₹44.8L",
        change: "+8%",
        trend: "up",
        description: "vs. last month"
    }
];

export const TRANSACTION_TRENDS = [
    {
        name: "January",
        income: 850000,
        expenses: 650000,
        transactions: 480
    },
    {
        name: "February",
        income: 920000,
        expenses: 700000,
        transactions: 520
    },
    {
        name: "March",
        income: 880000,
        expenses: 680000,
        transactions: 490
    },
    {
        name: "April",
        income: 950000,
        expenses: 720000,
        transactions: 540
    },
    {
        name: "May",
        income: 1020000,
        expenses: 750000,
        transactions: 580
    },
    {
        name: "June",
        income: 1100000,
        expenses: 800000,
        transactions: 610
    }
];

export const CATEGORY_DISTRIBUTION = [
    { name: "Shopping", value: 30, color: "hsl(var(--chart-1))" },
    { name: "Bills & Utilities", value: 25, color: "hsl(var(--chart-2))" },
    { name: "Food & Dining", value: 20, color: "hsl(var(--chart-3))" },
    { name: "Transportation", value: 15, color: "hsl(var(--chart-4))" },
    { name: "Entertainment", value: 10, color: "hsl(var(--chart-5))" }
];

export const PAYMENT_METHODS = [
    { name: "UPI", value: 45, color: "hsl(var(--chart-1))" },
    { name: "Credit Card", value: 30, color: "hsl(var(--chart-2))" },
    { name: "Net Banking", value: 15, color: "hsl(var(--chart-3))" },
    { name: "Debit Card", value: 10, color: "hsl(var(--chart-4))" }
];

export const RECENT_TRANSACTIONS = [
    {
        id: "TXN001",
        description: "Amazon Shopping",
        category: "Shopping",
        amount: "-₹12,500",
        date: "Just now",
        status: "completed",
        paymentMethod: "Credit Card",
        type: "debit"
    },
    {
        id: "TXN002",
        description: "Salary Credit",
        category: "Income",
        amount: "+₹85,000",
        date: "2 hours ago",
        status: "completed",
        paymentMethod: "Bank Transfer",
        type: "credit"
    },
    {
        id: "TXN003",
        description: "Electricity Bill",
        category: "Bills & Utilities",
        amount: "-₹3,200",
        date: "5 hours ago",
        status: "completed",
        paymentMethod: "UPI",
        type: "debit"
    },
    {
        id: "TXN004",
        description: "Restaurant Payment",
        category: "Food & Dining",
        amount: "-₹2,800",
        date: "Yesterday",
        status: "completed",
        paymentMethod: "UPI",
        type: "debit"
    },
    {
        id: "TXN005",
        description: "Freelance Payment",
        category: "Income",
        amount: "+₹35,000",
        date: "Yesterday",
        status: "completed",
        paymentMethod: "Bank Transfer",
        type: "credit"
    },
    {
        id: "TXN006",
        description: "Movie Tickets",
        category: "Entertainment",
        amount: "-₹1,200",
        date: "2 days ago",
        status: "completed",
        paymentMethod: "Credit Card",
        type: "debit"
    }
];

export const HOURLY_TRANSACTION_VOLUME = [
    { hour: "00:00", volume: 15 },
    { hour: "03:00", volume: 10 },
    { hour: "06:00", volume: 25 },
    { hour: "09:00", volume: 85 },
    { hour: "12:00", volume: 95 },
    { hour: "15:00", volume: 90 },
    { hour: "18:00", volume: 75 },
    { hour: "21:00", volume: 45 }
]; 