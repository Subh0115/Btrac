"use client";

import Link from "next/link";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Particles } from "../ui/particles";
import { BarChart2, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import FooterPopup from "./footer-popup";
import { FOOTER_POPUPS } from "@/constants/footer-popups";

const Footer = () => {
    return (
        <footer className="w-full py-10 relative">
            <Container className="max-w-7xl mx-auto px-8">
                <Wrapper className="relative flex flex-col md:flex-row justify-between pb-40 overflow-hidden footer">
                    <Particles
                        className="absolute inset-0 w-full -z-10"
                        quantity={40}
                        ease={10}
                        color="#b2a8fd"
                        refresh
                    />
                    <div className="flex flex-col items-start max-w-48">
                        <div className="flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-[#b2a8fd]" />
                            <span className="text-xl font-medium bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-clip-text text-transparent">
                                BtrackiFiS
                            </span>
                        </div>
                        <p className="text-base max-w mt-4 text-foreground/80">
                            Your trusted partner in financial tracking and management.
                        </p>
                        <Button asChild className="mt-8 bg-gradient-to-r from-[#b2a8fd] to-[#8678f9] hover:from-[#8678f9] hover:to-[#b2a8fd]">
                            <Link href="/auth/signup">
                                Start Free Trial
                            </Link>
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-8 mt-8 md:mt-0 md:ml-20">
                        <div className="space-y-4">
                            <h3 className="font-medium text-base">Product</h3>
                            <div className="flex flex-col space-y-3">
                                <FooterPopup {...FOOTER_POPUPS.product.features}>Features</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.product.pricing}>Pricing</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.product.scheduleDemo}>Schedule Demo</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.product.security}>Security</FooterPopup>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-base">Resources</h3>
                            <div className="flex flex-col space-y-3">
                                <FooterPopup {...FOOTER_POPUPS.resources.blog}>Blog</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.resources.userGuides}>User Guides</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.resources.webinars}>Webinars</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.resources.apiDocs}>API Docs</FooterPopup>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-base">Company</h3>
                            <div className="flex flex-col space-y-3">
                                <FooterPopup {...FOOTER_POPUPS.company.aboutUs}>About Us</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.company.careers}>Careers</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.company.press}>Press</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.company.contact}>Contact</FooterPopup>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium text-base">Legal</h3>
                            <div className="flex flex-col space-y-3">
                                <FooterPopup {...FOOTER_POPUPS.legal.privacyPolicy}>Privacy Policy</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.legal.termsOfService}>Terms of Service</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.legal.securityPolicy}>Security Policy</FooterPopup>
                                <FooterPopup {...FOOTER_POPUPS.legal.compliance}>Compliance</FooterPopup>
                            </div>
                        </div>
                    </div>
                </Wrapper>

                <div className="flex flex-col md:flex-row justify-between items-center mt-20 pt-8 border-t border-foreground/10 px-4">
                    <p className="text-sm text-foreground/60">
                        © {new Date().getFullYear()} BtrackiFiS. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <Link href="https://twitter.com/BtrackiFiS" className="text-foreground/60 hover:text-foreground/80">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com/company/BtrackiFiS" className="text-foreground/60 hover:text-foreground/80">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://facebook.com/BtrackiFiS" className="text-foreground/60 hover:text-foreground/80">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="https://instagram.com/BtrackiFiS" className="text-foreground/60 hover:text-foreground/80">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
};

export default Footer;
