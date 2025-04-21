"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components";
import { Area, AreaChart, CartesianGrid, XAxis, PieChart, Pie, Cell, BarChart, Bar, ResponsiveContainer } from "recharts";
import { BUDGET_SUMMARY, BUDGET_CATEGORIES, MONTHLY_BUDGET_TRENDS, SAVINGS_GOALS, BUDGET_VS_ACTUAL } from "@/constants/budget";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ArrowDownIcon, ArrowUpIcon, WalletIcon, PiggyBankIcon, BarChart3Icon, Target } from "lucide-react";

const chartConfig = {
    allocated: {
        label: "Allocated",
        color: "hsl(var(--chart-1))",
    },
    spent: {
        label: "Spent",
        color: "hsl(var(--chart-2))",
    },
    saved: {
        label: "Saved",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig;

export default function BudgetPage() {
    return (
        <div className="p-4 w-full">
            <div className="flex flex-col w-full">
                {/* Summary Cards */}
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {BUDGET_SUMMARY.map((item, index) => (
                        <Container key={item.id} delay={index * 0.1}>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                                    {index === 0 && <WalletIcon className="h-4 w-4 text-muted-foreground" />}
                                    {index === 1 && <BarChart3Icon className="h-4 w-4 text-muted-foreground" />}
                                    {index === 2 && <Target className="h-4 w-4 text-muted-foreground" />}
                                    {index === 3 && <PiggyBankIcon className="h-4 w-4 text-muted-foreground" />}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{item.value}</div>
                                    <p className="text-xs text-muted-foreground">
                                        {item.change} {item.description}
                                        {item.trend === "up" && (
                                            <ArrowUpIcon className="ml-1 h-4 w-4 text-green-500 inline" />
                                        )}
                                        {item.trend === "down" && (
                                            <ArrowDownIcon className="ml-1 h-4 w-4 text-red-500 inline" />
                                        )}
                                    </p>
                                </CardContent>
                            </Card>
                        </Container>
                    ))}
                </div>

                {/* Budget Overview */}
                <Container delay={0.2} className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Budget Overview</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Monthly budget allocation and spending trends
                            </p>
                        </CardHeader>
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <AreaChart
                                    data={MONTHLY_BUDGET_TRENDS}
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
                                        dataKey="allocated"
                                        stroke={chartConfig.allocated.color}
                                        fill="url(#fillincome)"
                                        fillOpacity={0.4}
                                        strokeWidth={2}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="spent"
                                        stroke={chartConfig.spent.color}
                                        fill="url(#fillspent)"
                                        fillOpacity={0.4}
                                        strokeWidth={2}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="saved"
                                        stroke={chartConfig.saved.color}
                                        fill="url(#fillsaved)"
                                        fillOpacity={0.4}
                                        strokeWidth={2}
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </Container>

                {/* Budget Categories with Progress */}
                <Container delay={0.3} className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Budget Categories</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Spending progress across different categories
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6">
                                {BUDGET_CATEGORIES.map((category) => (
                                    <div key={category.name} className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="space-y-0.5">
                                                <div className="text-sm font-medium">{category.name}</div>
                                                <div className="text-xs text-muted-foreground">
                                                    ₹{category.spent.toLocaleString()} of ₹{category.allocated.toLocaleString()}
                                                </div>
                                            </div>
                                            <div className="text-sm font-medium">{category.percentage}%</div>
                                        </div>
                                        <div className="h-2 w-full bg-muted rounded-full">
                                            <div
                                                className="h-2 rounded-full transition-all duration-500"
                                                style={{
                                                    width: `${category.percentage}%`,
                                                    backgroundColor: category.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Container>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    {/* Budget vs Actual */}
                    <Container delay={0.4}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Budget vs Actual</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Comparison of planned vs actual spending
                                </p>
                            </CardHeader>
                            <CardContent>
                                <ResponsiveContainer width="100%" height={350}>
                                    <BarChart data={BUDGET_VS_ACTUAL} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" />
                                        <ChartTooltip />
                                        <Bar
                                            dataKey="budget"
                                            fill="hsl(var(--chart-1))"
                                            radius={[4, 4, 0, 0]}
                                            name="Budget"
                                        />
                                        <Bar
                                            dataKey="actual"
                                            fill="hsl(var(--chart-2))"
                                            radius={[4, 4, 0, 0]}
                                            name="Actual"
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </Container>

                    {/* Savings Goals */}
                    <Container delay={0.5}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Savings Goals</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Progress towards your savings targets
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-8">
                                    {SAVINGS_GOALS.map((goal) => (
                                        <div key={goal.name} className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <div className="text-sm font-medium">{goal.name}</div>
                                                    <div className="text-xs text-muted-foreground">
                                                        ₹{goal.current.toLocaleString()} of ₹{goal.target.toLocaleString()}
                                                    </div>
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    {goal.timeframe}
                                                </div>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full">
                                                <div
                                                    className="h-2 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: `${goal.percentage}%`,
                                                        backgroundColor: goal.color
                                                    }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-xs text-muted-foreground">
                                                <span>{goal.percentage}% completed</span>
                                                <span>₹{(goal.target - goal.current).toLocaleString()} remaining</span>
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
    );
} 