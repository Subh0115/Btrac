"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components";
import { Area, AreaChart, CartesianGrid, XAxis, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { ACCOUNT_ACTIVITY, ACCOUNT_BALANCES, RECENT_ACCOUNT_ACTIVITY, SPENDING_BY_ACCOUNT, SPENDING_BREAKDOWN } from "@/constants/accounts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowDownIcon, ArrowUpIcon, CreditCard, Wallet } from "lucide-react";

const chartConfig = {
    savings: {
        label: "Savings",
        color: "hsl(var(--chart-1))",
    },
    current: {
        label: "Current",
        color: "hsl(var(--chart-2))",
    },
    investment: {
        label: "Investment",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;

export default function AccountsPage() {
    return (
        <div className="p-4 w-full">
            <div className="flex flex-col w-full">
                {/* Account Balance Cards */}
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {ACCOUNT_BALANCES.map((account, index) => (
                        <Container key={account.id} delay={index * 0.1}>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{account.name}</CardTitle>
                                    {account.id === 1 ? <Wallet className="h-4 w-4 text-muted-foreground" /> : <CreditCard className="h-4 w-4 text-muted-foreground" />}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">₹{(account.balance / 1000).toFixed(1)}K</div>
                                    <div className="flex items-center">
                                        <p className="text-xs text-muted-foreground">
                                            {account.accountNumber} •{" "}
                                            <span className={account.trend === "up" ? "text-green-500" : "text-red-500"}>
                                                {account.trend === "up" ? "+" : "-"}₹{Math.abs(account.change / 1000)}K
                                                {account.trend === "up" ? (
                                                    <ArrowUpIcon className="ml-1 h-4 w-4 text-green-500 inline" />
                                                ) : (
                                                    <ArrowDownIcon className="ml-1 h-4 w-4 text-red-500 inline" />
                                                )}
                                            </span>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Container>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mt-8">
                    {/* Account Activity Chart */}
                    <Container delay={0.2} className="lg:col-span-7">
                        <Card>
                            <CardHeader>
                                <CardTitle>Spending Distribution</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Breakdown of spending across different accounts
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                                    <div className="w-full lg:w-1/3">
                                        <PieChart width={300} height={300}>
                                            <Pie
                                                data={SPENDING_BY_ACCOUNT}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {SPENDING_BY_ACCOUNT.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </div>
                                    <div className="w-full lg:w-2/3 space-y-6">
                                        {SPENDING_BY_ACCOUNT.map((entry) => (
                                            <div key={entry.name} className="flex flex-col space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-3">
                                                        <div
                                                            className="w-4 h-4 rounded-full"
                                                            style={{ backgroundColor: entry.color }}
                                                        />
                                                        <div>
                                                            <span className="font-medium text-base">{entry.name}</span>
                                                            <p className="text-sm text-muted-foreground">
                                                                {entry.name === "Savings" && "Primary account for daily expenses and savings"}
                                                                {entry.name === "Current" && "Business transactions and regular payments"}
                                                                {entry.name === "Investment" && "Long-term investments and portfolio management"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="font-bold text-lg">{entry.value}%</span>
                                                        <p className="text-sm text-muted-foreground">
                                                            of total spending
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="w-full bg-muted rounded-full h-2.5">
                                                    <div
                                                        className="h-2.5 rounded-full transition-all duration-500 ease-in-out"
                                                        style={{
                                                            width: `${entry.value}%`,
                                                            backgroundColor: entry.color
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <div className="pt-4 border-t">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium">Distribution Analysis</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Most spending occurs through the Savings account (45%), followed by Current account (35%).
                                                        Investment account shows conservative spending at 20%.
                                                    </p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-medium">Total Transactions</p>
                                                    <p className="text-2xl font-bold">2,945</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Container>

                    {/* Account Activity Chart */}
                    <Container delay={0.3} className="lg:col-span-7">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Activity</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    6-month account balance trends across all accounts
                                </p>
                            </CardHeader>
                            <CardContent className="py-2">
                                <ChartContainer config={chartConfig}>
                                    <AreaChart
                                        data={ACCOUNT_ACTIVITY}
                                        margin={{ left: 12, right: 24, top: 20, bottom: 8 }}
                                        height={400}
                                        width={1000}
                                    >
                                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                                        <XAxis
                                            dataKey="name"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                        <defs>
                                            {Object.entries(chartConfig).map(([key, config]) => (
                                                <linearGradient key={key} id={`fill${key}`} x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor={config.color} stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor={config.color} stopOpacity={0.1} />
                                                </linearGradient>
                                            ))}
                                        </defs>
                                        <Area
                                            type="monotone"
                                            dataKey="investment"
                                            stroke={chartConfig.investment.color}
                                            fill="url(#fillinvestment)"
                                            fillOpacity={0.4}
                                            strokeWidth={2}
                                            stackId="1"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="current"
                                            stroke={chartConfig.current.color}
                                            fill="url(#fillcurrent)"
                                            fillOpacity={0.4}
                                            strokeWidth={2}
                                            stackId="1"
                                        />
                                        <Area
                                            type="monotone"
                                            dataKey="savings"
                                            stroke={chartConfig.savings.color}
                                            fill="url(#fillsavings)"
                                            fillOpacity={0.4}
                                            strokeWidth={2}
                                            stackId="1"
                                        />
                                    </AreaChart>
                                </ChartContainer>
                                <div className="mt-6 flex justify-between items-center px-2">
                                    <div className="flex gap-6">
                                        {Object.entries(chartConfig).map(([key, config]) => (
                                            <div key={key} className="flex items-center gap-2">
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: config.color }}
                                                />
                                                <span className="text-sm text-muted-foreground">
                                                    {config.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Total Balance Growth: +32% since January
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Container>
                </div>

                {/* Spending Breakdown by Account */}
                <Container delay={0.4} className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Savings Account Breakdown */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.savings.color }} />
                                    Savings Account Breakdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {SPENDING_BREAKDOWN.savings.map((item) => (
                                        <div key={item.category} className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">{item.category}</span>
                                                <span className="font-medium">₹{(item.amount / 1000).toFixed(1)}K</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-1.5">
                                                <div
                                                    className="h-1.5 rounded-full"
                                                    style={{
                                                        width: `${item.percentage}%`,
                                                        backgroundColor: chartConfig.savings.color
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Current Account Breakdown */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.current.color }} />
                                    Current Account Breakdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {SPENDING_BREAKDOWN.current.map((item) => (
                                        <div key={item.category} className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">{item.category}</span>
                                                <span className="font-medium">₹{(item.amount / 1000).toFixed(1)}K</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-1.5">
                                                <div
                                                    className="h-1.5 rounded-full"
                                                    style={{
                                                        width: `${item.percentage}%`,
                                                        backgroundColor: chartConfig.current.color
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Investment Account Breakdown */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm font-medium flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: chartConfig.investment.color }} />
                                    Investment Breakdown
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {SPENDING_BREAKDOWN.investment.map((item) => (
                                        <div key={item.category} className="space-y-2">
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-muted-foreground">{item.category}</span>
                                                <span className="font-medium">₹{(item.amount / 1000).toFixed(1)}K</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-1.5">
                                                <div
                                                    className="h-1.5 rounded-full"
                                                    style={{
                                                        width: `${item.percentage}%`,
                                                        backgroundColor: chartConfig.investment.color
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </Container>

                {/* Recent Activity */}
                <Container delay={0.4} className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {RECENT_ACCOUNT_ACTIVITY.map((activity, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {activity.account}
                                                </p>
                                                <p className="text-xs text-muted-foreground">
                                                    {activity.description}
                                                </p>
                                            </div>
                                            <div
                                                className={`text-sm font-medium ${
                                                    activity.type === "Credit"
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }`}
                                            >
                                                {activity.amount}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <p>{activity.accountNumber}</p>
                                            <p>{activity.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Container>
            </div>
        </div>
    );
} 