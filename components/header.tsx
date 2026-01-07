"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Sparkles, RotateCcw, Flower } from "lucide-react"

interface HeaderProps {
  onReset: () => void
  inputValue: string
  onInputChange: (value: string) => void
}

export default function Header({ onReset, inputValue, onInputChange }: HeaderProps) {
  return (
    <header className="relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100 via-purple-100 to-blue-100"></div>

      {/* Top Navigation Bar */}
      <div className="relative border-b-2 border-white/40 bg-white/30 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 md:py-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer w-full sm:w-auto justify-center sm:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-violet-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-rose-400 via-pink-400 to-violet-400 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-xl">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 text-white fill-white animate-pulse" />
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                  LoveMeter
                </h1>
                <p className="text-[10px] md:text-xs text-slate-600 font-medium">Find Your දෝණි</p>
              </div>
            </div>

            {/* Actions removed from here */}
            <div className="flex gap-2 items-center w-full sm:w-auto justify-center">
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-r from-rose-300/30 to-pink-300/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-violet-300/30 to-purple-300/30 rounded-full blur-3xl animate-float-slow-delayed"></div>

          {/* Floating Hearts and Flowers */}
          <div className="absolute inset-0 pointer-events-none">
            <Heart className="absolute top-1/4 left-1/4 w-6 h-6 text-rose-300 fill-rose-300/20 animate-float-slow opacity-60" />
            <Heart className="absolute top-1/3 right-1/4 w-4 h-4 text-pink-300 fill-pink-300/20 animate-float-slow-delayed opacity-40" />
            <Flower className="absolute bottom-1/4 left-1/3 w-5 h-5 text-violet-300 animate-float-slow opacity-50" />
            <Flower className="absolute top-1/2 right-1/3 w-6 h-6 text-purple-300 animate-float-slow-delayed opacity-40" />
            <Heart className="absolute bottom-1/3 right-1/2 w-5 h-5 text-rose-400 fill-rose-400/10 animate-float-slow opacity-30" />
            <Flower className="absolute top-1/4 right-1/10 w-4 h-4 text-pink-400 animate-float-slow opacity-40" />
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-12 md:py-24 max-w-7xl text-center">
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {/* Badge */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/50 backdrop-blur-xl border-2 border-white/70 rounded-2xl md:rounded-full shadow-xl">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-500" />
              <span className="text-[10px] md:text-sm text-slate-700 font-bold whitespace-nowrap">18 Questions</span>
              <span className="text-slate-300 hidden md:inline">•</span>
              <span className="text-[10px] md:text-sm text-slate-700 font-bold whitespace-nowrap">5 Minutes</span>
              <span className="text-slate-300 hidden md:inline">•</span>
              <span className="text-[10px] md:text-sm text-slate-700 font-bold whitespace-nowrap">Ai Powered</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2]">
                <span className="block bg-gradient-to-r from-rose-500 via-pink-400 to-violet-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] px-2">
                  ඔබත් තනිකඩයෙක්ද?
                </span>
                <span className="block bg-gradient-to-r from-slate-800 via-purple-700 to-slate-800 bg-clip-text text-transparent mt-1">
                  මෙන්න විසදුම.
                </span>
              </h2>
              <p className="text-base md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
                ගෙදරටම වෙලා හිටියට ආදරේ හොයාගෙන එන්නේ නෑ! ඔයා තාම තනියම ඉන්න හේතුව හොයාගන්න දැන්ම මේ App එක Try කරන්න.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-4 md:gap-8 pt-2 overflow-x-auto pb-4 no-scrollbar">
              <div className="text-center min-w-[80px]">
                <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                  10+
                </div>
                <div className="text-[10px] md:text-sm text-slate-600 font-medium">Tested</div>
              </div>
              <div className="w-px h-8 md:h-12 bg-slate-300 shrink-0"></div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 to-violet-500 bg-clip-text text-transparent">
                  4.9/5
                </div>
                <div className="text-[10px] md:text-sm text-slate-600 font-medium">Rating</div>
              </div>
              <div className="w-px h-8 md:h-12 bg-slate-300 shrink-0"></div>
              <div className="text-center min-w-[80px]">
                <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                  95%
                </div>
                <div className="text-[10px] md:text-sm text-slate-600 font-medium">Accuracy</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#questions" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 rounded-2xl md:rounded-full font-bold text-white text-base md:text-lg shadow-2xl shadow-purple-400/60 hover:shadow-purple-500/80 transition-all hover:scale-105 active:scale-95">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Journey
                    <Heart className="w-5 h-5 fill-white group-hover:animate-pulse" />
                  </span>
                </button>
              </a>

              <Button
                onClick={onReset}
                className="w-full sm:w-auto bg-white/60 hover:bg-white/80 text-violet-700 border-2 border-white/80 rounded-2xl md:rounded-full px-8 py-4 md:px-10 md:py-5 h-auto shadow-lg backdrop-blur-md font-bold text-base md:text-lg transition-all hover:scale-105 active:scale-95"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Reset
              </Button>
            </div>
            <p className="text-xs md:text-sm text-slate-500 mt-4">
              Free • No signup required • Instant results
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="url(#wave-gradient)" fillOpacity="0.3" />
          <path d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,85.3C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="url(#wave-gradient)" fillOpacity="0.5" />
          <defs>
            <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </header>
  )
}
