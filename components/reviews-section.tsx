"use client"

import { Star, Laugh, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const reviews = [
    {
        name: "Sudeera Madushan",
        stars: 5,
        text: "කේන්දරේ බලන සාස්තර කාරයොන්ට වැඩිය මේක සැරයි බං. මට කෙලින්ම කිව්වනේ 'උඹට කවුරුත් කැමති වෙන්නේ නෑ, ගෙදරට වෙලා නිදාගනින්' කියලා. හිත රිදුනා හැබැයි ඇත්ත.",
        emoji: "😂"
    },
    {
        name: "Chuti Doni",
        stars: 1,
        text: "මේක හදපු කෙනා මගේ Ex (කලින් පෙම්වතා) ගේ යාලුවෙක්ද කොහෙද? මම හොරෙන් එයාව බලනවා කියලා මේ ඇප් එක දන්නේ කොහොමද? Delete කරලා දානවා. 😤",
        emoji: "😤"
    },
    {
        name: "Amila 'Kulla'",
        stars: 4,
        text: "Install කරලා විනාඩි 5න් අයින් කළා. ඇත්ත දැනගත්තම පපුව හෝස් ගාලා පත්තු වුනා. මම සිංගල් වෙන්න හේතුව මගේ මූණලු. පව්කාර ඇප්.",
        emoji: "😅"
    },
    {
        name: "Dasun Theekshana",
        stars: 5,
        text: "අඩෝ මේක මරු. මම හිතාගෙන හිටියේ මම හෙන ලස්සනයි, ඒකයි කෙල්ලෝ බය කියලා. මේකෙන් කියනවා මම ආඩම්බර වැඩිලු. දැන්වත් පොළොවේ පය ගහලා ඉන්න ඕනේ.",
        emoji: "😂"
    },
    {
        name: "Single Association",
        stars: 5,
        text: "අපේ සංගමේ කොල්ලොන්ට ගහපු මඩක් මේක. ඒ වුනාට කතාව ඇත්ත. අපි ගෙදරට වෙලා ෆිල්ම් බල බල හිටියට කෙල්ලෝ ගෙදරට එන්නේ නෑනේ. මරු ඇප් එක.",
        emoji: "😂"
    },
    {
        name: "Kasun Kalhara",
        stars: 2,
        text: "මේකේ රිසල්ට් එක දැකලා මම ෆෝන් එක පොළොවේ ගැහුවා. දැන් කෙල්ලෙක් නෑ, ෆෝන් එකත් නෑ.",
        emoji: "😭"
    },
    {
        name: "Nethmi",
        stars: 4,
        text: "මම හිතුවේ මම සිංගල් වෙලා ඉන්නේ මට ගැලපෙන කෙනෙක් නැති නිසා කියලා. බැලින්නම් මම පිස්සියෙක් වගේ හැසිරෙන නිසා ලු. Thanks හොඳේ ඇත්ත කිව්වට.",
        emoji: "😅"
    },
    {
        name: "Podi Malli",
        stars: 5,
        text: "අපේ අම්මා මේ ඇප් එක දැක්කොත් මාව ගෙදරින් එලවනවා. මම බඳින්නේ නැති හේතුව මේකේ හරියටම තියෙනවා.",
        emoji: "😂"
    },
    {
        name: "Viraj Kaushalya",
        stars: 1,
        text: "මේක හදපු ඩිවලොපර් මල්ලි මට අහු වෙන්න එපා. මම ආඩම්බරයි කිව්වා නේද? වරෙන් එළියට.",
        emoji: "😤"
    },
    {
        name: "Janith Liyanage",
        stars: 5,
        text: "දුක තමා රංජනී. මම හිතුවේ මගේ වෙලාව නරකය කියලා. බැලින්නම් මගේ කට නරකයි ලු.",
        emoji: "😂"
    }
]

export default function ReviewsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const reviewsPerPage = 4

    // Auto-scroll disabled - manual navigation only
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prev) => {
    //             const maxIndex = Math.ceil(reviews.length / reviewsPerPage) - 1
    //             return prev >= maxIndex ? 0 : prev + 1
    //         })
    //     }, 44000)

    //     return () => clearInterval(interval)
    // }, [])

    const maxIndex = Math.ceil(reviews.length / reviewsPerPage) - 1

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    }

    const currentReviews = reviews.slice(
        currentIndex * reviewsPerPage,
        (currentIndex + 1) * reviewsPerPage
    )

    return (
        <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-300 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-xl border-2 border-amber-200 rounded-full shadow-lg mb-6">
                        <Laugh className="w-5 h-5 text-amber-600" />
                        <span className="text-sm text-slate-700 font-bold">True Story</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent">
                            අනිත් අයට වෙච්ච දේවල්
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        පරිශීලක අදහස් (User Reviews) - ඇත්ත කතා විතරයි! 😅
                    </p>
                </div>

                {/* Reviews Carousel */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-20 bg-white/90 hover:bg-white border-2 border-amber-300 rounded-full p-2 md:p-3 shadow-xl hover:scale-110 active:scale-95 transition-all"
                        aria-label="Previous reviews"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-20 bg-white/90 hover:bg-white border-2 border-amber-300 rounded-full p-2 md:p-3 shadow-xl hover:scale-110 active:scale-95 transition-all"
                        aria-label="Next reviews"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                    </button>

                    {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
                        {currentReviews.map((review, index) => (
                            <div
                                key={`${currentIndex}-${index}`}
                                className="group bg-white/80 backdrop-blur-sm border-2 border-white/60 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:border-amber-300 transition-all duration-300 hover:scale-[1.02] animate-fade-in"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="pr-2">
                                        <h3 className="font-bold text-base md:text-lg text-slate-800 line-clamp-1">{review.name}</h3>
                                        <div className="flex gap-1 mt-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-3 h-3 md:w-4 md:h-4 ${i < review.stars
                                                        ? "fill-amber-400 text-amber-400"
                                                        : "fill-slate-200 text-slate-200"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="text-3xl md:text-4xl group-hover:animate-bounce shrink-0">
                                        {review.emoji}
                                    </div>
                                </div>

                                {/* Review Text */}
                                <p className="text-sm md:text-base text-slate-700 leading-relaxed font-medium">
                                    {review.text}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <p className="text-[10px] md:text-xs text-slate-400 text-right">
                                        {review.stars === 5 ? "Verified Roast ✓" : review.stars === 1 ? "Angry User 🔥" : "Honest Review ✓"}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? "w-8 bg-gradient-to-r from-amber-500 to-orange-500"
                                    : "w-2 bg-slate-300 hover:bg-slate-400"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 rounded-2xl p-6 shadow-xl">
                        <p className="text-lg font-bold text-slate-800 mb-2">
                            ඔයාගේ කතාවත් මෙහෙම වෙයිද? 🤔
                        </p>
                        <p className="text-sm text-slate-600">
                            දැන් ඔයාත් Try කරලා බලන්න! ඇත්ත දැනගන්න බයයි නම් Scroll Up කරන්න එපා 😄
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
