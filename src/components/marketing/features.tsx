"use client";

import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import MagicCard from "../ui/magic-card";
import { Ripple } from "../ui/ripple";
import { SectionBadge } from "../ui/section-bade";
import { BlurText } from "../ui/blur-text";

const Features = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                        <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                                <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                            </div>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            </div>
                        </div>
                        <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
                            Features
                        </span>
                    </div>
                    <div className="animate-bubble">
                        <BlurText
                            word={"Connect Your Financial Accounts Securely"}
                            className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent py-0 md:py-0 lg:!leading-snug font-bold tracking-[-0.02em] mt-0 font-heading animate-background-shine whitespace-nowrap"
                        />
                    </div>
                    <BlurText
                        word={"Track, Analyze, and Master Your Finances"}
                        className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white py-0 md:py-0 lg:!leading-snug font-semibold tracking-[-0.01em] -mt-1 font-heading"
                    />
                </div>
            </Container>
            <div className="mt-16 w-full">
                <div className="flex flex-col items-center gap-5 lg:gap-5 w-full">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_.65fr] w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start size-full bg-primary/[0.08]">
                                <div className="bento-card flex items-center justify-center min-h-72">
                                    <span className="text-muted-foreground group-hover:text-foreground mx-auto relative">
                                        <Icons.stars className="w-20 h-20" />
                                    </span>
                                    <Ripple />
                                </div>
                            </MagicCard>
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-40">
                                        <Images.analytics className="w-full h-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-xl font-heading font-medium heading animate-background-shine bg-gradient-to-r from-white via-white/90 to-white bg-[200%_auto] bg-clip-text text-transparent">
                                            Real-time Financial Analytics
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-white/90 animate-pulse">
                                            Get instant insights into your spending patterns, income trends, and financial health with our advanced analytics dashboard.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full h-52 relative">
                                        <Images.ideation className="w-full h-full" />
                                        <div className="w-40 h-40 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    </div>
                                    <div className="flex flex-col mt-auto">
                                        <h4 className="text-xl font-heading font-medium heading animate-background-shine bg-gradient-to-r from-white via-white/90 to-white bg-[200%_auto] bg-clip-text text-transparent">
                                            Smart Budget Planning
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-white/90 animate-pulse">
                                            Create and manage personalized budgets with AI-powered recommendations and automatic categorization.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                            <div className="grid grid-rows gap-5 lg:gap-5">
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-span- row-start-[0.5] h-32 bg-primary/[0.08]">
                                    <div className="bento-card w-full relative items-center justify-center">
                                        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <p className="text-base text-white/90 text-justify [mask-image:radial-gradient(50%_50%_at_50%_50%,#FFFFFF_0%,rgba(255,255,255,0)_90.69%)] animate-background-shine">
                                                BtrackiFiS helps you take control of your finances with powerful tools for tracking, analyzing, and managing your money. Our platform provides real-time insights, automated categorization, and smart recommendations to help you make better financial decisions.
                                            </p>
                                        </div>
                                        <div className="w-full h-16 relative">
                                            <Images.centeral className="w-full h-full" />
                                            <div className="w-20 h-20 rounded-full bg-primary/10 blur-2xl z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                        </div>
                                    </div>
                                </MagicCard>
                                <MagicCard particles={true} className="flex flex-col items-start w-full row-start-2 !h-max bg-primary/[0.08]">
                                    <div className="bento-card w-full gap-6 relative">
                                        <div className="w-full h-48 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </MagicCard>
                            </div>
                            <MagicCard particles={true} className="flex flex-col items-start w-full row-span-1 bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="flex flex-col mb-auto">
                                        <h4 className="text-xl font-heading font-medium heading animate-background-shine bg-gradient-to-r from-white via-white/90 to-white bg-[200%_auto] bg-clip-text text-transparent">
                                            Investment Tracking
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-white/90 animate-pulse">
                                            Monitor your investment portfolio performance and get personalized insights to optimize your returns.
                                        </p>
                                    </div>
                                    <div className="w-full h-28 relative">
                                        <Images.integration className="w-full h-full" />
                                        <div className="w-28 h-28 rounded-full bg-primary/10 blur-3xl -z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full"></div>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-[.40fr_1fr] w-full gap-5 lg:gap-5">
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full">
                                        <Images.image className="w-full h-40 lg:h-auto" />
                                    </div>
                                    <div className="flex flex-col mt-auto">
                                        <h4 className="text-xl font-heading font-medium heading animate-background-shine bg-gradient-to-r from-white via-white/90 to-white bg-[200%_auto] bg-clip-text text-transparent">
                                            Expense Categorization
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-white/90 animate-pulse">
                                            Automatically categorize your expenses and get detailed breakdowns of your spending habits.
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                            <MagicCard particles={true} className="flex flex-col items-start w-full bg-primary/[0.08]">
                                <div className="bento-card w-full flex-row gap-6">
                                    <div className="w-full">
                                        <Images.hash className="w-full h-40 lg:h-52" />
                                    </div>
                                    <div className="flex flex-col mt-auto">
                                        <h4 className="text-xl font-heading font-medium heading animate-background-shine bg-gradient-to-r from-white via-white/90 to-white bg-[200%_auto] bg-clip-text text-transparent">
                                            Financial Goals
                                        </h4>
                                        <p className="text-sm md:text-base mt-2 text-white/90 animate-pulse">
                                            Set and track your financial goals with personalized recommendations and progress tracking. Achieve milestones with:
                                        </p>
                                        <ul className="mt-3 space-y-2 text-sm text-white/80">
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                Custom goal setting and tracking
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                Automated progress monitoring
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                Smart savings recommendations
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                                                Milestone celebrations
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </MagicCard>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    )
};

export default Features
