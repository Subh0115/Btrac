import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import RetroGrid from "../ui/retro-grid";

const CTA = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center w-full px-4 md:px-0 mx-auto h-[500px] border border-foreground/10 rounded-3xl overflow-hidden relative">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-12 bg-violet-500 blur-[10rem]"></div>
                    <div className="flex flex-col items-center justify-center w-full z-20">
                        <h2 className="text-4xl md:text-6xl font-heading heading font-semibold !leading-tight mt-6 
                            [text-shadow:_0_0_30px_#b2a8fd40] 
                            animate-pulse-slow
                            [background:linear-gradient(to_right,#b2a8fd,#8678f9,#c7d2fe,#b2a8fd)]
                            [-webkit-background-clip:text]
                            [-webkit-text-fill-color:transparent]
                            [background-size:200%_auto]
                            [animation:shine_3s_linear_infinite]
                            [@keyframes_shine{to{background-position:200%_center}}]">
                            Take Control of Your <br className="hidden md:block" /> Financial Future Today
                        </h2>
                        <p className="text-base md:text-lg text-center max-w-xl mx-auto mt-6
                            bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/80
                            [text-shadow:_0_0_10px_rgba(255,255,255,0.3)]
                            animate-pulse">
                            Join thousands of users who trust BtrackiFiS to manage their finances. Start your journey to financial freedom now.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6 mt-6">
                            <Button asChild size="lg" className="w-full md:w-max bg-gradient-to-r from-[#b2a8fd] to-[#8678f9] hover:from-[#8678f9] hover:to-[#b2a8fd] text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <Link href="/auth/signup" className="relative z-10 flex items-center justify-center">
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                    Start Free Trial
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="w-full md:w-max bg-white border-[#b2a8fd] hover:bg-white relative overflow-hidden group">
                                <Link
                                    href="/schedule-demo"
                                    className="relative z-10 flex items-center justify-center text-[#8678f9] hover:text-[#b2a8fd] animate-background-shine bg-[length:200%_auto] transition-colors"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#b2a8fd]/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                                    Schedule Demo
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <RetroGrid />
                    <Particles
                        className="absolute inset-0"
                        quantity={50}
                        ease={100}
                        color="#b2a8fd"
                        refresh
                    />
                </div>
            </Container>
        </div>
    )
};

export default CTA
