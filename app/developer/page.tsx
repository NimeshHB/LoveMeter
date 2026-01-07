"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, Linkedin, Mail, Facebook, Code2, Cpu, Globe, Rocket } from "lucide-react"
import Link from "next/link"

export default function DeveloperPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white selection:bg-rose-500/30">
            {/* Animated Background Elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-500/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="relative container mx-auto px-4 py-8 md:py-12 max-w-4xl">
                {/* Back Button */}
                <div className="animate-in fade-in slide-in-from-left duration-700">
                    <Link href="/">
                        <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/10 mb-8 md:mb-12 gap-2 group h-auto py-2">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to App
                        </Button>
                    </Link>
                </div>

                {/* Profile Section */}
                <div className="space-y-8 md:space-y-12">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom duration-1000">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-violet-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-800 border-4 border-white/10 flex items-center justify-center overflow-hidden">
                                <img
                                    src="/nhb.jpg"
                                    alt="Nimesh H Bandara"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="text-center md:text-left space-y-3 md:space-y-4">
                            <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
                                Nimesh H <span className="block md:inline bg-gradient-to-r from-rose-400 to-violet-500 bg-clip-text text-transparent">Bandara</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 font-medium px-4 md:px-0">Vibe coder | Brand identity & UI/UX Designer</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 pt-2">
                                <a href="#" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors shadow-lg shadow-rose-500/10 active:scale-95">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/nimesh-h-bandara-3b2077232/" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors shadow-lg shadow-rose-500/10 active:scale-95">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://web.facebook.com/nimesh.bandara.7543" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors shadow-lg shadow-rose-500/10 active:scale-95">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="mailto:contact@example.com" className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors shadow-lg shadow-rose-500/10 active:scale-95">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3 md:space-y-4 hover:border-white/20 transition-all group animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-rose-500/20 flex items-center justify-center border border-rose-500/20 group-hover:scale-110 transition-transform">
                                <Code2 className="w-5 h-5 md:w-6 md:h-6 text-rose-400" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold">About Me</h3>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                I'm a passionate developer dedicated to creating high-quality web applications with stunning user interfaces and seamless experiences. Specialized in modern technologies like Next.js, React, and Tailwind CSS.
                            </p>
                        </div>

                        <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-3 md:space-y-4 hover:border-white/20 transition-all group animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-violet-500/20 flex items-center justify-center border border-violet-500/20 group-hover:scale-110 transition-transform">
                                <Rocket className="w-5 h-5 md:w-6 md:h-6 text-violet-400" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold">Project Vision</h3>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                                The Love Meter project was created for entertainment purposes, combining humorous Sri Lankan cultural elements with modern web technology to provide a fun, shareable experience for everyone.
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                        <h3 className="text-xl md:text-2xl font-bold flex items-center gap-3">
                            <Cpu className="w-5 h-5 md:w-6 md:h-6 text-rose-400" />
                            Technologies Used
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                            {[
                                { name: "Next.js", icon: Globe },
                                { name: "React", icon: Rocket },
                                { name: "Tailwind CSS", icon: Code2 },
                                { name: "TypeScript", icon: Cpu }
                            ].map((tech) => (
                                <div key={tech.name} className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center gap-2 md:gap-3 hover:bg-white/10 hover:border-white/20 transition-all group">
                                    <tech.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-white transition-colors" />
                                    <span className="text-xs md:text-sm font-semibold">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer of Developer Page */}
                    <div className="pt-8 md:pt-12 border-t border-white/10 text-center space-y-4 animate-in fade-in duration-1000 delay-700">
                        <p className="text-xs md:text-sm text-slate-500">© 2026 Nimesh H Bandara. All rights reserved.</p>
                        <div className="flex justify-center gap-4 md:gap-6">
                            <a href="#" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors">Portfolio</a>
                            <a href="#" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors">Resume</a>
                            <a href="#" className="text-xs md:text-sm text-slate-400 hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

