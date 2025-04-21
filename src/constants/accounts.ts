export const ACCOUNT_BALANCES = [
    {
        id: 1,
        name: "Savings Account",
        balance: 850000,
        accountNumber: "XXXX1234",
        change: 50000,
        trend: "up",
    },
    {
        id: 2,
        name: "Current Account",
        balance: 350000,
        accountNumber: "XXXX5678",
        change: -20000,
        trend: "down",
    },
    {
        id: 3,
        name: "Fixed Deposit",
        balance: 650000,
        accountNumber: "XXXX9012",
        change: 25000,
        trend: "up",
    },
    {
        id: 4,
        name: "Investment Account",
        balance: 450000,
        accountNumber: "XXXX3456",
        change: 15000,
        trend: "up",
    },
];

export const ACCOUNT_ACTIVITY = [
    {
        name: "January",
        savings: 450000,
        current: 280000,
        investment: 320000,
    },
    {
        name: "February",
        savings: 480000,
        current: 260000,
        investment: 350000,
    },
    {
        name: "March",
        savings: 520000,
        current: 290000,
        investment: 380000,
    },
    {
        name: "April",
        savings: 490000,
        current: 270000,
        investment: 400000,
    },
    {
        name: "May",
        savings: 540000,
        current: 300000,
        investment: 420000,
    },
    {
        name: "June",
        savings: 580000,
        current: 320000,
        investment: 450000,
    },
];

export const SPENDING_BY_ACCOUNT = [
    { name: "Savings", value: 45, color: "hsl(var(--chart-1))" },
    { name: "Current", value: 35, color: "hsl(var(--chart-2))" },
    { name: "Investment", value: 20, color: "hsl(var(--chart-3))" },
];

export const RECENT_ACCOUNT_ACTIVITY = [
    {
        account: "Savings Account",
        accountNumber: "XXXX1234",
        type: "Credit",
        amount: "+₹25,000",
        description: "Salary Deposit",
        date: "Just now",
        status: "Completed"
    },
    {
        account: "Current Account",
        accountNumber: "XXXX5678",
        type: "Debit",
        amount: "-₹12,500",
        description: "Utility Payment",
        date: "2 hours ago",
        status: "Completed"
    },
    {
        account: "Investment Account",
        accountNumber: "XXXX3456",
        type: "Credit",
        amount: "+₹50,000",
        description: "Investment Return",
        date: "4 hours ago",
        status: "Completed"
    },
    {
        account: "Savings Account",
        accountNumber: "XXXX1234",
        type: "Debit",
        amount: "-₹8,000",
        description: "Shopping",
        date: "Yesterday",
        status: "Completed"
    },
    {
        account: "Fixed Deposit",
        accountNumber: "XXXX9012",
        type: "Credit",
        amount: "+₹15,000",
        description: "Interest Credit",
        date: "2 days ago",
        status: "Completed"
    }
];

export const SPENDING_BREAKDOWN = {
    savings: [
        { category: "Groceries", amount: 25000, percentage: 30 },
        { category: "Utilities", amount: 15000, percentage: 20 },
        { category: "Shopping", amount: 18000, percentage: 25 },
        { category: "Entertainment", amount: 12000, percentage: 15 },
        { category: "Others", amount: 8000, percentage: 10 }
    ],
    current: [
        { category: "Rent", amount: 35000, percentage: 40 },
        { category: "Transportation", amount: 12000, percentage: 15 },
        { category: "Insurance", amount: 18000, percentage: 20 },
        { category: "Healthcare", amount: 15000, percentage: 15 },
        { category: "Others", amount: 10000, percentage: 10 }
    ],
    investment: [
        { category: "Stocks", amount: 50000, percentage: 45 },
        { category: "Mutual Funds", amount: 30000, percentage: 25 },
        { category: "Fixed Deposits", amount: 25000, percentage: 20 },
        { category: "Bonds", amount: 15000, percentage: 10 }
    ]
}; 