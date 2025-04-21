"use client"

import React from 'react'
import { ArrowDownIcon, MessageSquareIcon } from "lucide-react";
import { ArrowUpIcon, BarChart3Icon, Share2Icon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UsersIcon } from "lucide-react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { ANALYTICS_DATA, RECENT_SALES } from "@/constants/dashboard";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { Container } from "@/components";
import { usePathname } from "next/navigation";

const chartConfig = {
    income: {
        label: "Income",
        color: "hsl(var(--chart-1))",
    },
    expenses: {
        label: "Expenses",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const Page = () => {
    const pathname = usePathname();
    const isDashboard = pathname === "/app";

    return (
        <div className="p-4 w-full">
            <div className="flex flex-col w-full">
                {/* Dashboard Cards */}
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Container>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                                <UsersIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹18,50,000</div>
                                <p className="text-xs text-muted-foreground">
                                    +₹1,50,000 from last month
                                    <ArrowUpIcon className="ml-1 h-4 w-4 text-green-500 inline" />
                                </p>
                            </CardContent>
                        </Card>
                    </Container>
                    <Container delay={0.1}>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Monthly Savings</CardTitle>
                                <Share2Icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹90,000</div>
                                <p className="text-xs text-muted-foreground">
                                    +₹10,000 from last month
                                    <ArrowUpIcon className="ml-1 h-4 w-4 text-green-500 inline" />
                                </p>
                            </CardContent>
                        </Card>
                    </Container>
                    <Container delay={0.2}>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Active Budgets</CardTitle>
                                <BarChart3Icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">8</div>
                                <p className="text-xs text-muted-foreground">
                                    +2 from last month
                                    <ArrowUpIcon className="ml-1 h-4 w-4 text-green-500 inline" />
                                </p>
                            </CardContent>
                        </Card>
                    </Container>
                    <Container delay={0.3}>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Monthly Expenses</CardTitle>
                                <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">₹2,40,000</div>
                                <p className="text-xs text-muted-foreground">
                                    -₹15,000 from last month
                                    <ArrowDownIcon className="ml-1 h-4 w-4 text-red-500 inline" />
                                </p>
                            </CardContent>
                        </Card>
                    </Container>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-8">
                    {/* Chart */}
                    <Container delay={0.2} className="col-span-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Financial Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="py-2 w-full">
                                <ChartContainer config={chartConfig}>
                                    <AreaChart
                                        accessibilityLayer
                                        data={ANALYTICS_DATA}
                                        margin={{
                                            left: 12,
                                            right: 12,
                                        }}
                                    >
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="name"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                                        <defs>
                                            <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                                                <stop
                                                    offset="5%"
                                                    stopColor="hsl(var(--chart-1))"
                                                    stopOpacity={0.8}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="hsl(var(--chart-1))"
                                                    stopOpacity={0.1}
                                                />
                                            </linearGradient>
                                            <linearGradient id="fillExpenses" x1="0" y1="0" x2="0" y2="1">
                                                <stop
                                                    offset="5%"
                                                    stopColor="hsl(var(--chart-2))"
                                                    stopOpacity={0.8}
                                                />
                                                <stop
                                                    offset="95%"
                                                    stopColor="hsl(var(--chart-2))"
                                                    stopOpacity={0.1}
                                                />
                                            </linearGradient>
                                        </defs>
                                        <Area
                                            dataKey="expenses"
                                            type="natural"
                                            fill="url(#fillExpenses)"
                                            fillOpacity={0.4}
                                            stroke="hsl(var(--chart-2))"
                                            stackId="a"
                                        />
                                        <Area
                                            dataKey="income"
                                            type="natural"
                                            fill="url(#fillIncome)"
                                            fillOpacity={0.4}
                                            stroke="hsl(var(--chart-1))"
                                            stackId="a"
                                        />
                                    </AreaChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </Container>

                    {/* Recent Transactions */}
                    <Container delay={0.3} className="col-span-2">
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Recent Transactions</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    You made 6 transactions this week.
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {RECENT_SALES.map((sale) => (
                                        <div key={sale.email} className="flex flex-col space-y-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">{sale.name}</p>
                                                    <p className="text-xs text-muted-foreground">{sale.category}</p>
                                                </div>
                                                <div className={`text-sm font-medium ${sale.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                                    {sale.amount}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                <p>{sale.email}</p>
                                                <p>{sale.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default Page
