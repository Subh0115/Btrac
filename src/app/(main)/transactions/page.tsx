"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components";
import { Area, AreaChart, CartesianGrid, XAxis, PieChart, Pie, Cell, BarChart, Bar, LineChart, Line } from "recharts";
import { TRANSACTION_SUMMARY, TRANSACTION_TRENDS, CATEGORY_DISTRIBUTION, PAYMENT_METHODS, RECENT_TRANSACTIONS, HOURLY_TRANSACTION_VOLUME } from "@/constants/transactions";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowDownIcon, ArrowUpIcon, IndianRupeeIcon, ClockIcon, CreditCardIcon, TagIcon } from "lucide-react";

const chartConfig = {
    income: {
        label: "Income",
        color: "hsl(var(--chart-1))",
    },
    expenses: {
        label: "Expenses",
        color: "hsl(var(--chart-2))",
    },
    transactions: {
        label: "Transactions",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;

export default function TransactionsPage() {
    return (
        <div className="p-4 w-full">
            <div className="flex flex-col w-full">
                {/* Summary Cards */}
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {TRANSACTION_SUMMARY.map((item, index) => (
                        <Container key={item.id} delay={index * 0.1}>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                    {index === 0 && <TagIcon className="h-4 w-4 text-muted-foreground" />}
                                    {index === 1 && <IndianRupeeIcon className="h-4 w-4 text-muted-foreground" />}
                                    {index === 2 && <CreditCardIcon className="h-4 w-4 text-muted-foreground" />}
                                    {index === 3 && <ClockIcon className="h-4 w-4 text-muted-foreground" />}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{item.value}</div>
                                    <p className="text-xs text-muted-foreground">
                                        {item.change} {item.description}
                                        {item.trend === "up" ? (
                                            <ArrowUpIcon className="ml-1 h-4 w-4 text-green-500 inline" />
                                        ) : (
                                            <ArrowDownIcon className="ml-1 h-4 w-4 text-red-500 inline" />
                                        )}
                                    </p>
                                </CardContent>
                            </Card>
                        </Container>
                    ))}
                </div>

                {/* Transaction Trends */}
                <Container delay={0.2} className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Transaction Trends</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Monthly transaction volume and financial flow
                            </p>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <AreaChart
                                    data={TRANSACTION_TRENDS}
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
                                        dataKey="income"
                                        stroke={chartConfig.income.color}
                                        fill="url(#fillincome)"
                                        fillOpacity={0.4}
                                        strokeWidth={2}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="expenses"
                                        stroke={chartConfig.expenses.color}
                                        fill="url(#fillexpenses)"
                                        fillOpacity={0.4}
                                        strokeWidth={2}
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </Container>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    {/* Category Distribution */}
                    <Container delay={0.3}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Category Distribution</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Transaction distribution across categories
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                                    <div className="w-full lg:w-1/2">
                                        <PieChart width={250} height={250}>
                                            <Pie
                                                data={CATEGORY_DISTRIBUTION}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {CATEGORY_DISTRIBUTION.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </div>
                                    <div className="w-full lg:w-1/2 space-y-4">
                                        {CATEGORY_DISTRIBUTION.map((entry) => (
                                            <div key={entry.name} className="flex flex-col space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <div
                                                            className="w-3 h-3 rounded-full"
                                                            style={{ backgroundColor: entry.color }}
                                                        />
                                                        <span className="text-sm">{entry.name}</span>
                                                    </div>
                                                    <span className="font-medium">{entry.value}%</span>
                                                </div>
                                                <div className="w-full bg-muted rounded-full h-1.5">
                                                    <div
                                                        className="h-1.5 rounded-full"
                                                        style={{
                                                            width: `${entry.value}%`,
                                                            backgroundColor: entry.color
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Container>

                    {/* Payment Methods */}
                    <Container delay={0.4}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Payment Methods</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Distribution of payment methods used
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                                    <div className="w-full lg:w-1/2">
                                        <PieChart width={250} height={250}>
                                            <Pie
                                                data={PAYMENT_METHODS}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {PAYMENT_METHODS.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </div>
                                    <div className="w-full lg:w-1/2 space-y-4">
                                        {PAYMENT_METHODS.map((entry) => (
                                            <div key={entry.name} className="flex flex-col space-y-2">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center space-x-2">
                                                        <div
                                                            className="w-3 h-3 rounded-full"
                                                            style={{ backgroundColor: entry.color }}
                                                        />
                                                        <span className="text-sm">{entry.name}</span>
                                                    </div>
                                                    <span className="font-medium">{entry.value}%</span>
                                                </div>
                                                <div className="w-full bg-muted rounded-full h-1.5">
                                                    <div
                                                        className="h-1.5 rounded-full"
                                                        style={{
                                                            width: `${entry.value}%`,
                                                            backgroundColor: entry.color
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Container>
                </div>

                {/* Hourly Transaction Volume */}
                <Container delay={0.5} className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Hourly Transaction Volume</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Transaction activity throughout the day
                            </p>
                        </CardHeader>
                        <CardContent>
                            <LineChart
                                width={1000}
                                height={300}
                                data={HOURLY_TRANSACTION_VOLUME}
                                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="hour" />
                                <ChartTooltip />
                                <Line
                                    type="monotone"
                                    dataKey="volume"
                                    stroke="hsl(var(--chart-1))"
                                    strokeWidth={2}
                                    dot={{ fill: "hsl(var(--chart-1))" }}
                                />
                            </LineChart>
                        </CardContent>
                    </Card>
                </Container>

                {/* Recent Transactions */}
                <Container delay={0.6} className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Transactions</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Latest transaction activity across all accounts
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {RECENT_TRANSACTIONS.map((transaction) => (
                                    <div
                                        key={transaction.id}
                                        className="flex flex-col space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-1">
                                                <p className="text-sm font-medium leading-none">
                                                    {transaction.description}
                                                </p>
                                                <div className="flex items-center text-xs text-muted-foreground gap-2">
                                                    <span>{transaction.category}</span>
                                                    <span>•</span>
                                                    <span>{transaction.paymentMethod}</span>
                                                </div>
                                            </div>
                                            <div
                                                className={`text-sm font-medium ${
                                                    transaction.type === "credit"
                                                        ? "text-green-500"
                                                        : "text-red-500"
                                                }`}
                                            >
                                                {transaction.amount}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <p>{transaction.id}</p>
                                            <p>{transaction.date}</p>
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