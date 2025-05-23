import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { BlurText } from "../ui/blur-text";
import { Button } from "../ui/button";
import Image from "next/image";
import Container from "../global/container";

const Hero = () => {
    return (
        <div className="flex flex-col items-center text-center w-full max-w-5xl my-8 sm:my-12 md:my-16 lg:my-24 mx-auto z-40 relative px-4 sm:px-6 md:px-8">
            <Container delay={0.0}>
                <div className="pl-2 pr-1 py-1 rounded-full border border-foreground/10 hover:border-foreground/15 backdrop-blur-lg cursor-pointer flex items-center gap-2.5 select-none w-max mx-auto">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary/40 flex items-center justify-center relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary/60 flex items-center justify-center animate-ping"></div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        </div>
                    </div>
                    <span className="inline-flex items-center justify-center gap-2 animate-text-gradient animate-background-shine bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-sm text-transparent">
                        Financial Freedom Starts Here
                        <span className="text-xs text-secondary-foreground px-1.5 py-0.5 rounded-full bg-gradient-to-b from-foreground/20 to-foreground/10 flex items-center justify-center">
                            New Platform
                            <ArrowRightIcon className="w-3.5 h-3.5 ml-1 text-foreground/50" />
                        </span>
                    </span>
                </div>
            </Container>
            <div className="animate-bubble">
                <BlurText
                    word={"BtrackiFiS"}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent py-0 md:py-0 lg:!leading-snug font-bold tracking-[-0.02em] mt-2 font-heading animate-background-shine"
                />
            </div>
            <BlurText
                word={"Smart Banking, Smarter Tracking!"}
                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white py-0 md:py-0 lg:!leading-snug font-semibold tracking-[-0.01em] -mt-2 font-heading"
            />
            <Container delay={0.2}>
                <div className="flex items-center justify-center gap-x-3 md:gap-x-6 mt-6 sm:mt-8">
                    <Button asChild size="lg" className="bg-gradient-to-r from-[#b2a8fd] to-[#8678f9] hover:from-[#8678f9] hover:to-[#b2a8fd] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link href="/auth/signup">
                            Sign Up
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="hidden md:flex border-[#b2a8fd] text-[#b2a8fd] hover:bg-[#b2a8fd]/10">
                        <Link
                            href="/how-it-works"
                            className="text-sm font-medium hover:text-foreground/80"
                        >
                            How it works
                        </Link>
                    </Button>
                </div>
            </Container>
            <Container delay={0.4}>
                <div className="relative mx-auto w-full max-w-[120rem] rounded-lg sm:rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 sm:p-3 md:p-4 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-6 lg:p-8 mt-8 sm:mt-12 md:mt-16">
                    <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

                    <div className="rounded-md sm:rounded-lg lg:rounded-[24px] border p-2 sm:p-3 md:p-4 border-neutral-700 bg-black">
                        <Image
                            src="/images/dashboard-dark.png"
                            alt="dashboard dark mode"
                            width={3840}
                            height={2160}
                            className="rounded-md sm:rounded-lg lg:rounded-[20px] w-full h-auto"
                            priority
                            quality={100}
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Hero
