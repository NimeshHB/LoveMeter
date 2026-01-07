"use client"

import { Button } from "@/components/ui/button"
import { Download, Share2, ArrowLeft, Heart, Loader2, FileText } from "lucide-react"
import html2canvas from "html2canvas"
import { useRef, useState, useMemo } from "react"

interface ResultsSectionProps {
  score: number
  maxScore: number
  percentage: number
  message: string
  category: string
  onBack?: () => void
}

export default function ResultsSection({ score, maxScore, percentage, message, category, onBack }: ResultsSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)

  // Get rank/badge based on score percentage (0-100%)
  const getRankBadge = (score: number) => {
    // Calculate percentage
    const percent = (score / maxScore) * 100

    // 10 Creative Score Circle Types
    if (percent >= 95) {
      return {
        title: "මනාලයා / මනාලිය",
        subtitle: "දැන්ම කසාද බඳින්න සුදුසුයි!",
        emoji: "💍",
        color: "#FFD700" // Gold
      }
    }
    if (percent >= 85) {
      return {
        title: "ජාතික වස්තුවක්",
        subtitle: "අපරාදේ තනිකඩව ඉන්නේ.",
        emoji: "🏆",
        color: "#10B981" // Green
      }
    }
    if (percent >= 70) {
      return {
        title: "Just Miss පොඩ්ඩයි",
        subtitle: "ටිකක් සත්තු වගේ හිටියට හොඳ මනුස්සයා.",
        emoji: "😅",
        color: "#3B82F6" // Light Blue
      }
    }
    if (percent >= 55) {
      return {
        title: "කට නිසා කෙලවගත්තෙක්",
        subtitle: "කට වහගෙන හිටියොත් චාන්ස් එකක් තියෙයි.",
        emoji: "🤐",
        color: "#EC4899" // Pink
      }
    }
    if (percent >= 40) {
      return {
        title: "Friend Zone සභාපති",
        subtitle: "ඔයාට ඉතින් හැමෝම යාලුවෝනේ.",
        emoji: "🤝",
        color: "#FBBF24" // Yellow
      }
    }
    if (percent >= 30) {
      return {
        title: "Ex ගේ වහලෙක්",
        subtitle: "පරණ මඟුල් අමතක කරලා දාන්න.",
        emoji: "⛓️",
        color: "#A855F7" // Purple
      }
    }
    if (percent >= 20) {
      return {
        title: "ලොකුකම රජ වෙලා",
        subtitle: "කණ්ණාඩියක් අරන් මූණ බලන්න.",
        emoji: "👑",
        color: "#F97316" // Orange
      }
    }
    if (percent >= 10) {
      return {
        title: "හිතේ හයිය විතරයි",
        subtitle: "වැඩක් නෑ, ලකුණු දාගන්න දන්නේ නෑ.",
        emoji: "💪",
        color: "#EF4444" // Red
      }
    }
    if (percent >= 5) {
      return {
        title: "ගෙදරටම නාකි වෙන කෙනෙක්",
        subtitle: "ඇඳෙන් බැහැලා එළියට යන්න කරුණාකරන්න.",
        emoji: "🏠",
        color: "#92400E" // Brown
      }
    }
    // 0-5%
    return {
      title: "ගල් පිළිමයක්",
      subtitle: "ඔයාට හැඟීම් දැනීම් නැද්ද මනුස්සයෝ?",
      emoji: "🗿",
      color: "#6B7280" // Dark Grey
    }
  }

  // Get doctor's advice based on score
  const getDoctorAdvice = (score: number) => {
    if (score >= 140) {
      return "වෛද්‍ය උපදෙස: ඔයා හොඳයි! දැන් එළියට යන්න, කතා කරන්න, සමාජ වෙන්න. ඔයාට ඉක්මනටම කෙනෙක් හම්බවෙයි!"
    }
    if (score >= 100) {
      return "වෛද්‍ය උපදෙස: ඔයා හොඳ පැත්තේ. ටිකක් වැඩිපුර උත්සාහ කරන්න. ලස්සනට හිටියොත් හරි යනවා."
    }
    if (score >= 60) {
      return "වෛද්‍ය උපදෙස: ඔයා හොයන්නේ දෙවි කෙනෙක්ද? පොඩ්ඩක් බිමට බැහැලා වටපිට බලන්න. කණ්ණාඩියක් අරන් මූණ බලන්න."
    }
    return "වෛද්‍ය උපදෙස: කරුණාකර කාමරයෙන් එළියට බහින්න. ෆෝන් එකේ Data ඉතුරු කරගෙන මනුස්සයෙක්ට මැසේජ් එකක් දාන්න. කටුස්සෝ වගේ ඉන්න එපා."
  }

  // Calculate funny metrics based on score
  const getMetrics = (totalScore: number) => {
    // Distribute score across 4 metrics with some randomness
    const base = totalScore / 4
    return [
      {
        label: "ලොකුකම / තෝරන තරම",
        sublabel: "Arrogance/Pickiness",
        value: Math.min(100, Math.max(0, Math.round(base + (Math.random() * 20 - 10))))
      },
      {
        label: "ටෝක් කිරීමේ හැකියාව",
        sublabel: "Flirting Skills",
        value: Math.min(100, Math.max(0, Math.round(base + (Math.random() * 20 - 10))))
      },
      {
        label: "වෙලාව සහ කරුමය",
        sublabel: "Time and Karma",
        value: Math.min(100, Math.max(0, Math.round(base + (Math.random() * 20 - 10))))
      },
      {
        label: "පෙනුම ගැන උනන්දුව",
        sublabel: "Interest in Appearance",
        value: Math.min(100, Math.max(0, Math.round(base + (Math.random() * 20 - 10))))
      },
    ]
  }

  const rankBadge = useMemo(() => getRankBadge(score), [score, maxScore])
  const doctorAdvice = useMemo(() => getDoctorAdvice(score), [score])
  const metrics = useMemo(() => getMetrics(percentage), [percentage])

  const downloadAsImage = async () => {
    console.log("🔵 Download button clicked")

    if (!cardRef.current) {
      alert("කරුණාකර පිටුව Refresh කරලා නැවත උත්සාහ කරන්න")
      return
    }

    console.log("✅ Card reference found:", cardRef.current)
    setIsDownloading(true)

    try {
      // Wait for rendering to complete
      await new Promise(resolve => setTimeout(resolve, 500))

      console.log("🔵 Starting html2canvas...")

      // Capture with settings optimized for gradients
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: null, // Let the gradient show through
        windowWidth: cardRef.current.scrollWidth,
        windowHeight: cardRef.current.scrollHeight,
        onclone: (clonedDoc) => {
          // Find the cloned card element
          const clonedCard = clonedDoc.querySelector('[data-certificate-card]') as HTMLElement
          if (clonedCard) {
            // Ensure gradient is visible
            clonedCard.style.background = 'linear-gradient(to bottom right, #f472b6, #ec4899, #a855f7)'
            clonedCard.style.opacity = '1'

            // Remove any backdrop-blur and fix lab() colors
            const allElements = clonedDoc.querySelectorAll('*')
            allElements.forEach((el) => {
              const htmlEl = el as HTMLElement

              // Get computed styles to catch Tailwind CSS colors
              const computed = window.getComputedStyle(htmlEl)

              // Check and replace lab() colors in computed styles
              if (computed.backgroundColor && computed.backgroundColor.includes('lab(')) {
                htmlEl.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
              }
              if (computed.color && computed.color.includes('lab(')) {
                htmlEl.style.color = '#ffffff'
              }
              if (computed.borderColor && computed.borderColor.includes('lab(')) {
                htmlEl.style.borderColor = 'rgba(255, 255, 255, 0.3)'
              }

              // Remove backdrop blur
              htmlEl.style.backdropFilter = 'none'
                ; (htmlEl.style as any).webkitBackdropFilter = 'none'
            })
          }
          console.log("✅ Certificate styled and colors sanitized")
        }
      })

      console.log("✅ Canvas created successfully:", canvas.width, "x", canvas.height)

      // Convert to blob and download
      canvas.toBlob((blob) => {
        if (!blob) {
          console.error("❌ Failed to create blob")
          alert("Image එක create කරන්න බැරි වුනා. Screenshot එකක් ගන්න.")
          setIsDownloading(false)
          return
        }

        console.log("✅ Blob created, size:", blob.size, "bytes")

        const url = URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = `තනිකඩ-සහතිකය-${Date.now()}.png`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)

        console.log("✅ Download completed successfully!")
        setIsDownloading(false)
      }, "image/png")

    } catch (error) {
      console.error("❌ Download failed:", error)
      console.error("Error details:", {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : 'No stack trace'
      })

      alert(`Download එක අසාර්ථකයි!\n\nError: ${error instanceof Error ? error.message : String(error)}\n\nකරුණාකර screenshot එකක් ගන්න හෝ developer වෙත දන්වන්න.`)
      setIsDownloading(false)
    }
  }

  return (
    <section className="mt-8">
      {onBack && (
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-6 bg-white/60 hover:bg-white/80 border-2 border-violet-200 text-violet-700 font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          ආපසු යන්න (Go Back)
        </Button>
      )}

      <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
        {/* Main Results Card */}
        <div className="space-y-6">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-violet-600 bg-clip-text text-transparent mb-1 md:mb-2 px-2">
              ඔබේ තනිකඩ වාර්තාව
            </h2>
            <p className="text-slate-600 text-xs md:text-sm">Your Single Status Report</p>
          </div>

          {/* Score Circle */}
          <div className="rounded-2xl md:rounded-3xl border-2 border-white/60 bg-white/50 backdrop-blur-xl p-6 md:p-8 shadow-2xl mx-auto max-w-xs md:max-w-none">
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                {/* Background circle */}
                <circle cx="60" cy="60" r="50" fill="none" stroke="#e9d5ff" strokeWidth="10" />
                {/* Progress circle */}
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="10"
                  strokeDasharray={`${(percentage / 100) * 314.16} 314.16`}
                  strokeLinecap="round"
                  className="transition-all duration-700"
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#f472b6", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#a855f7", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl mb-1 md:mb-2">{rankBadge.emoji}</span>
                <span className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-violet-600 bg-clip-text text-transparent">
                  {percentage}%
                </span>
                <span className="text-xs md:text-sm text-slate-700 mt-1 md:mt-2 font-bold text-center px-4">{rankBadge.title}</span>
                <span className="text-[10px] md:text-xs text-violet-600 mt-0.5 md:mt-1">{rankBadge.subtitle}</span>
              </div>
            </div>
          </div>

          {/* Metrics Breakdown */}
          <div className="rounded-2xl md:rounded-3xl border-2 border-white/60 bg-white/50 backdrop-blur-xl p-5 md:p-6 shadow-xl">
            <h3 className="text-base md:text-lg font-bold text-slate-800 mb-3 md:mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 md:w-5 md:h-5 text-violet-600" />
              ඔබ තනිවීමට හේතු
            </h3>
            <p className="text-[10px] md:text-xs text-slate-500 mb-4">Reasons for Being Single</p>
            <div className="space-y-3 md:space-y-4">
              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1 md:space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs md:text-sm font-semibold text-slate-700">{metric.label}</span>
                      <p className="text-[10px] md:text-xs text-slate-500">{metric.sublabel}</p>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-violet-600">{metric.value}%</span>
                  </div>
                  <div className="h-2 md:h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 rounded-full transition-all duration-700"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Doctor's Advice */}
          <div className="rounded-2xl md:rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50 p-5 md:p-6 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="text-3xl md:text-4xl shrink-0">👨‍⚕️</div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold text-amber-900 mb-1 md:mb-2">වෛද්‍ය උපදෙස</h3>
                <p className="text-xs md:text-sm text-amber-800 leading-relaxed">{doctorAdvice}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Downloadable Share Card Preview */}
        <div className="space-y-4 md:space-y-6">
          <div className="overflow-x-auto pb-4 md:pb-0">
            <div
              ref={cardRef}
              data-certificate-card
              className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 p-6 md:p-10 text-white shadow-2xl mx-auto"
              style={{ minHeight: '500px', width: '100%', maxWidth: '500px' }}
            >
              {/* Certificate Header */}
              <div className="text-center pb-4 md:pb-6 mb-6 md:mb-8">
                <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                  <Heart className="w-6 h-6 md:w-7 md:h-7 fill-white" />
                  <h2 className="text-2xl md:text-3xl font-bold">නිල තනිකඩ සහතිකය</h2>
                </div>
                <p className="text-sm md:text-base opacity-95">Official Single Certificate</p>
                <p className="text-[10px] md:text-sm opacity-80 mt-1">Approved by Love Meter</p>
              </div>

              {/* Score Display */}
              <div className="text-center mb-6 md:mb-8">
                <div className="text-6xl md:text-8xl mb-3 md:mb-4">{rankBadge.emoji}</div>
                <p className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{percentage}%</p>
                <p className="text-lg md:text-xl font-bold mb-1 md:mb-2">{rankBadge.title}</p>
                <p className="text-sm md:text-base opacity-90">{rankBadge.subtitle}</p>
              </div>

              {/* Message Box */}
              <div className="bg-white/25 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 mb-6 md:mb-8">
                <p className="text-sm md:text-base leading-relaxed text-center">{message}</p>
              </div>

              {/* Metrics Grid - 2x2 */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm p-3 md:p-5 text-center"
                  >
                    <p className="text-[10px] md:text-sm font-semibold mb-1 md:mb-2 opacity-95 leading-tight">{metric.label}</p>
                    <p className="text-xl md:text-3xl font-bold">{metric.value}%</p>
                  </div>
                ))}
              </div>

              {/* Footer Quote */}
              <div className="text-center pt-4 md:pt-6 space-y-2">
                <div>
                  <p className="text-sm md:text-base font-bold">දුක සැප දෙකම මටමයි!</p>
                  <p className="text-[10px] md:text-sm opacity-80">Sadness and happiness, both for me!</p>
                </div>
                <div className="pt-3 md:pt-4 border-t border-white/20">
                  <p className="text-[9px] md:text-[10px] opacity-70">
                    © Nimesh H Bandara | 2026 - Develop for entertainment purpose only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={downloadAsImage}
              disabled={isDownloading}
              className="w-full bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-bold py-6 rounded-2xl shadow-xl"
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Download PNG
                </>
              )}
            </Button>

            <Button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "My Single Status Report",
                    text: `මගේ Score: ${score}/${maxScore} - ${rankBadge.title}`,
                    url: window.location.href,
                  })
                }
              }}
              variant="outline"
              className="w-full bg-white/60 hover:bg-white/80 border-2 border-violet-200 text-violet-700 font-bold py-6 rounded-2xl"
            >
              <Share2 className="w-5 h-5 mr-2" />
              යාලුවන්ට පෙන්නන්න Share කරන්න
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
