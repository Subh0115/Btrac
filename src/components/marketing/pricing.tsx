"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PLANS } from "@/constants/plans";
import { cn } from "@/functions/cn";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import NumberTicker from "../ui/number-ticker";
import { BlurText } from "../ui/blur-text";

type PlanType = "monthly" | "yearly";

interface PlanProps {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    buttonText: string;
    features: string[];
    index: number;
    plan: PlanType;
}

const Plan = ({
    id,
    title,
    desc,
    monthlyPrice,
    yearlyPrice,
    buttonText,
    features,
    index,
    plan,
}: PlanProps) => {
    const getDisplayedPrice = (plan: string, monthlyPrice: number, yearlyPrice: number) => {
        if (plan === "monthly") {
            return monthlyPrice;
        } else if (plan === "yearly") {
            return Math.round((yearlyPrice / 12) * 100) / 100;
        }
        return 0;
    };

    const displayedPrice = getDisplayedPrice(plan, monthlyPrice, yearlyPrice);
    const buttonClassName = "w-full text-center";

    return (
        <div key={index} className="w-full relative flex flex-col saturate-150 rounded-2xl">
            <div
                className={cn(
                    "flex flex-col size-full border rounded-2xl relative p-3 [background-image:linear-gradient(345deg,rgba(255,255,255,0.01)_0%,rgba(255,255,255,0.03)_100%)]",
                    id === "pro" ? "border-primary/80" : "border-border/60",
                )}
            >
                {id === "pro" && (
                    <div className="max-w-fit min-w-min inline-flex items-center whitespace-nowrap px-1 h-7 rounded-full bg-gradient-to-r from-primary to-violet-500 absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                        <span className="flex-1 text-sm px-2 font-medium bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent bg-[length:250%_100%] animate-background-shine">
                            Most Popular
                        </span>
                    </div>
                )}
                <div className="flex flex-col p-3 w-full">
                    <h2 className="text-xl font-medium">
                        {title}
                    </h2>
                    <p className="text-sm mt-2 text-muted-foreground break-words">
                        {desc}
                    </p>
                </div>
                <hr className="shrink-0 border-none w-full h-px bg-border" role="separator" />
                <div className="relative flex flex-col flex-1 align-top w-full p-3 h-full break-words text-left gap-4">
                    <div className="flex items-end gap-2">
                        <div className="flex items-end gap-1">
                            <span className="text-3xl md:text-4xl font-bold">
                                ₹{displayedPrice === 0 ? "0" : displayedPrice.toFixed(0)}
                            </span>
                            <div className="flex flex-col mb-1 text-muted-foreground">
                                <span className="text-sm">per</span>
                                <span className="text-sm -mt-1">month</span>
                            </div>
                        </div>
                        <AnimatePresence>
                            {(id !== "free" && plan === "yearly") && (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.2 }}
                                    aria-hidden="true"
                                    className="text-xs px-2 py-0.5 rounded mb-1 text-foreground bg-primary font-medium"
                                >
                                    -20%
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                    <ul className="flex flex-col gap-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <CheckIcon aria-hidden="true" className="w-5 h-5 text-primary" />
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="p-3 mt- h-auto flex w-full items-center">
                    <Button
                        asChild
                        variant={id === "pro" ? "default" : "tertiary"}
                        className="w-full hover:scale-100 hover:translate-y-0 shadow-none"
                    >
                        {buttonText === "Upgrade to Pro" ? (
                            <Link href="/pricing/upgrade" className={buttonClassName}>
                                {buttonText}
                            </Link>
                        ) : buttonText === "Contact Sales" ? (
                            <Link href="/contact-sales" className={buttonClassName}>
                                {buttonText}
                            </Link>
                        ) : (
                            <Link href="/auth/signup" className={buttonClassName}>
                                {buttonText}
                            </Link>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const Pricing = () => {
    return (
        <Container className="py-20">
            <div className="flex flex-col items-center">
                <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        </div>
                    </div>
                    <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
                        Pricing
                    </span>
                </div>
                <div className="animate-bubble">
                    <BlurText
                        word={"Choose Your Financial Freedom"}
                        className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent py-0 md:py-0 lg:!leading-snug font-bold tracking-[-0.02em] mt-0 font-heading animate-background-shine whitespace-nowrap"
                    />
                </div>
                <BlurText
                    word={"Track, Analyze, and Master Your Finances"}
                    className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white py-0 md:py-0 lg:!leading-snug font-semibold tracking-[-0.01em] -mt-1 font-heading"
                />
            </div>
            <div className="mt-8 w-full relative flex flex-col items-center justify-center">
                <div className="absolute hidden lg:block top-1/2 right-2/3 translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 blur-[10rem] -z-10"></div>
                <div className="absolute hidden lg:block top-1/2 left-2/3 -translate-x-1/4 -translate-y-1/2 w-96 h-96 bg-violet-500/15 blur-[10rem] -z-10"></div>
                <Container>
                    <Tabs defaultValue="monthly" className="w-full flex flex-col items-center justify-center">
                        <TabsList>
                            <TabsTrigger value="monthly">
                                Monthly
                            </TabsTrigger>
                            <TabsTrigger value="yearly">
                                Yearly
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="monthly">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
                                {PLANS.map((plan, index) => (
                                    <Plan
                                        key={index}
                                        index={index}
                                        {...plan}
                                        plan="monthly"
                                    />
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="yearly">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-14">
                                {PLANS.map((plan, index) => (
                                    <Plan
                                        key={index}
                                        index={index}
                                        {...plan}
                                        plan="yearly"
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </Container>
            </div>
        </Container>
    );
};
