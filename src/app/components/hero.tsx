"use client";

import Image from "next/image";
import logoDark from "../../../public/SR logo dark bg.png";
import keyboardImg from "../../../public/keyboard.jpg";
import useTypingEffect from "../hooks/useTypingEffect";
import { useState } from "react";

export default function HeroArea() {
    const text = "  I'm Sabina. I'm a Software Engineer.";
    const typedText = useTypingEffect(text, 100);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className="">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav className="flex items-center justify-between py-6 px-4 xl:px-0 max-w-7xl mx-auto" aria-label="Global">
                        <a href="#" className="-m-1.5 p-1.5">
                            <Image className="h-10 lg:h-14 w-auto" src={logoDark} alt="logo" />
                        </a>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                                onClick={toggleMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-cyan-300">About me</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-cyan-300">My tech stack</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-cyan-300">Projects</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-white hover:text-cyan-300">Contact me</a>
                        </div>
                    </nav>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden" role="dialog" aria-modal="true">
                            <div className="fixed inset-0 z-50"></div>
                            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-cyan-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5">
                                        <Image className="h-8 w-auto" src={logoDark} alt="logo" />
                                    </a>
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-400"
                                        onClick={toggleMenu}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y ">
                                        <div className="space-y-2 py-6">
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-cyan-900">About me</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-cyan-900">My tech stack</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-cyan-900">Projects</a>
                                            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-white hover:bg-cyan-900">Contact me</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </header>

                <div className="relative isolate overflow-hidden pt-14">
                    <Image src={keyboardImg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black opacity-45"></div> {/* Dark tint layer */}
                    <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56 relative z-10">
                        <div className="text-center">
                            <h1 className="text-balance text-4xl font-medium text-white sm:text-6xl">{typedText}</h1>
                            <p className="mt-6 text-3xl leading-8 text-white">Code like an artist, debug like a warrior!</p>
                            <div className="mt-10 flex items-center justify-center gap-x-6 opacity-70 hover:opacity-90">
                                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-pink-200 rounded-lg group bg-gradient-to-br from-cyan-400 to-pink-500  hover:text-white dark:text-white focus:ring-2 focus:outline-none hover:from-cyan-600 hover:to-pink-800 focus:ring-pink-600 dark:focus:ring-purple-800">
                                    <a href="/SabinaRasulovaResume.pdf" download className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 tracking-wide">Download my resume</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
