import Container from "../global/container";
import Images from "../global/images";
import { Particles } from "../ui/particles";
import { SectionBadge } from "../ui/section-bade";
import { BlurText } from "../ui/blur-text";

const Connect = () => {
    return (
        <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
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
                            Connect Tools
                        </span>
                    </div>
                    <div className="animate-bubble">
                        <BlurText
                            word={"Connect Your Financial Accounts Securely"}
                            className="text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent py-0 md:py-0 lg:!leading-snug font-bold tracking-[-0.02em] mt-0 font-heading animate-background-shine whitespace-nowrap"
                        />
                    </div>
                    <BlurText
                        word={"One Platform, All Your Finances!"}
                        className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white py-0 md:py-0 lg:!leading-snug font-semibold tracking-[-0.01em] -mt-1 font-heading"
                    />
                </div>
            </Container>
            <Container>
                <div className="w-full relative mt-12">
                    <Images.connect className="w-full h-auto" />
                    <Particles
                        className="absolute inset-0"
                        quantity={150}
                        ease={80}
                        color="#b2a8fd"
                        refresh
                    />
                </div>
            </Container>
        </div>
    )
};

export default Connect
