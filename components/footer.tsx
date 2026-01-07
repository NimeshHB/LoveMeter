import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t-2 border-white/30 bg-white/40 backdrop-blur-xl py-6 md:py-8 mt-12 mb-4 md:mb-0">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 md:gap-6 text-center">
          <div className="space-y-2">
            <p className="text-xs md:text-sm text-slate-600 font-medium">
              © <Link href="/developer" className="hover:text-violet-600 transition-colors underline decoration-violet-300 underline-offset-4">Nimesh H Bandara</Link> | 2026
            </p>
            <p className="text-[10px] md:text-xs text-slate-400">
              Develop for entertainment purpose only
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            <p className="text-[10px] md:text-xs text-slate-500">
              Made with 💖 for fun
            </p>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <Link href="/developer" className="text-[10px] md:text-xs text-violet-600 hover:text-violet-700 transition font-bold bg-violet-100/50 px-3 py-1 rounded-full border border-violet-200">
              Developer Details
            </Link>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-[10px] md:text-xs text-slate-400 hover:text-slate-600 transition">Privacy Policy</a>
            <a href="#" className="text-[10px] md:text-xs text-slate-400 hover:text-slate-600 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
