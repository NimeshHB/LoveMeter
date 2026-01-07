"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import QuestionGrid from "@/components/question-grid"
import ResultsSection from "@/components/results-section"
import ReviewsSection from "@/components/reviews-section"
import Footer from "@/components/footer"

export default function Home() {
  const [responses, setResponses] = useState<Record<number, string>>({})
  const [inputValue, setInputValue] = useState("")
  const [totalScore, setTotalScore] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const questions = [
    // Section 1: Lifestyle & Approach (ජීවන රටාව)
    { id: 1, text: "නිවාඩු දවසට ඔයා සාමාන්‍යයෙන් කරන්නේ මොනවද?" },
    { id: 2, text: "පාටි එකකදි හෝ උත්සවයකදි ඔයා හැසිරෙන්නේ කොහොමද?" },
    { id: 3, text: "ඔයා අලුතෙන් කෙනෙක්ව අඳුරගත්තම චැට් (Chat) කරන්නේ කොහොමද?" },
    { id: 4, text: "ඔයා ආස කරන විදිහේ කෙනෙක් දැක්කොත් මොකද කරන්නේ?" },
    { id: 5, text: "ඔයාගේ පෙනුම සහ ඇඳුම් ගැන ඔයා කොච්චර හිතනවද?" },

    // Section 2: Standards & Expectations (බලාපොරොත්තු)
    { id: 6, text: "ඔයාගේ අනාගත සහකරු/සහකාරිය ගැන ඔයාට හිතෙන්නේ මොකක්ද?" },
    { id: 7, text: "කෙනෙක්ගේ පොඩි අඩුපාඩුවක් දැක්කම ඔයාට මොකද හිතෙන්නේ?" },
    { id: 8, text: "කෙනෙක් ඔයාට කැමතියි කියලා යෝජනාවක් ගෙනාවොත්?" },
    { id: 9, text: "ඔයාගේ වයසේ අනිත් අය විවාහ වෙනකොට ඔයාට දැනෙන්නේ මොකක්ද?" },

    // Section 3: Fear & Past (අතීතය සහ බිය)
    { id: 10, text: "පරණ ආදර සම්බන්ධතා (Ex-lovers) ගැන ඔයාට දැනෙන්නේ කොහොමද?" },
    { id: 11, text: "අලුත් සම්බන්ධයක් පටන් ගන්න ඔයා බයද?" },
    { id: 12, text: "ඔයාට කෙනෙක්ව විශ්වාස කරන්න කොච්චර කල් යනවද?" },
    { id: 13, text: "යාලුවෝ ඔයා ගැන කියන්නේ මොකක්ද?" },

    // Section 4: Communication & Habits (සන්නිවේදනය)
    { id: 14, text: "ඔයාට කේන්ති ගියාම මොකද කරන්නේ?" },
    { id: 15, text: "ඔයාගේ හිතේ තියෙන ආදරේ ප්‍රකාශ කරන්න ඔයාට පුලුවන්ද?" },
    { id: 16, text: "කෙනෙක් ඔයාට උදව්වක් කළොත්?" },
    { id: 17, text: '"සමාවෙන්න" (Sorry) කියලා කියන්න ඔයාට පුලුවන්ද?' },
    { id: 18, text: "අන්තිම ප්‍රශ්නය: ඇත්තටම ඔයාට ආදරයක් ඕනෙද?" },
  ]

  const optionsByQuestion: Record<number, Array<{ label: string; value: string }>> = {
    1: [
      { label: "A) යාලුවෝ එක්ක එළියට යනවා / පාටි කරනවා.", value: "A" },
      { label: "B) ගෙදරට වෙලා ෆිල්ම් එකක් බලනවා.", value: "B" },
      { label: "C) කාමරේට වෙලා නිදාගන්නවා.", value: "C" },
      { label: "D) ෆෝන් එක ඕෆ් කරලා ලෝකෙන් හැංගෙනවා.", value: "D" },
    ],
    2: [
      { label: "A) හැමෝම එක්ක හිනාවෙලා කතා කරනවා.", value: "A" },
      { label: "B) දන්න අය එක්ක විතරක් කතා කරනවා.", value: "B" },
      { label: "C) පැත්තකට වෙලා ෆෝන් එක ඔබනවා.", value: "C" },
      { label: "D) පුලුවන් තරම් ඉක්මනට ගෙදර දුවනවා.", value: "D" },
    ],
    3: [
      { label: "A) එයාට රිප්ලයි කරන්න කලින් මම මැසේජ් කරනවා.", value: "A" },
      { label: "B) එයා මැසේජ් කළොත් විතරක් රිප්ලයි කරනවා.", value: "B" },
      { label: "C) පැය ගාණක් පරක්කු වෙලා රිප්ලයි කරනවා.", value: "C" },
      { label: "D) සීන් (Seen) කරලා රිප්ලයි නොකර ඉන්නවා.", value: "D" },
    ],
    4: [
      { label: "A) ගිහින් කතා කරන්න ට්‍රයි කරනවා.", value: "A" },
      { label: "B) යාලුවෙක් ලවා විස්තර හොයනවා.", value: "B" },
      { label: "C) ඈත ඉඳන් හොරෙන් බලන් ඉන්නවා විතරයි.", value: "C" },
      { label: "D) දැක්කේ නෑ වගේ අහක බලාගන්නවා.", value: "D" },
    ],
    5: [
      { label: "A) මම හැමවෙලේම ලස්සනට පිළිවෙලට ඉන්නවා.", value: "A" },
      { label: "B) විශේෂ තැන්වලට යද්දි විතරක් සැලකිලිමත් වෙනවා.", value: "B" },
      { label: "C) ලොකුවට හිතන්නේ නෑ, පහසුව තමා වැදගත්.", value: "C" },
      { label: "D) කොණ්ඩේ පීරන්නෙත් කලාතුරකින්.", value: "D" },
    ],
    6: [
      { label: "A) මාව තේරුම් ගන්න කෙනෙක් වුනාම ඇති.", value: "A" },
      { label: "B) පෙනුමයි රස්සාවයි දෙකම හොඳ වෙන්න ඕනේ.", value: "B" },
      { label: "C) මම හිතපු ලිස්ට් එකේ හැමදේම එයාට තියෙන්න ඕනේ.", value: "C" },
      { label: "D) මට හරියන කෙනෙක් මේ ලෝකේ නෑ.", value: "D" },
    ],
    7: [
      { label: "A) කවුරුත් සම්පූර්ණ නෑනේ, ඒක ප්‍රශ්නයක් නෑ.", value: "A" },
      { label: "B) ඒක හදාගන්න කියලා මම එයාට කියනවා.", value: "B" },
      { label: "C) මට එයාව එපා වෙනවා / ආසාව අඩු වෙනවා.", value: "C" },
      { label: "D) එයා මට ගැලපෙන්නේ නෑ කියලා මම අයින් වෙනවා.", value: "D" },
    ],
    8: [
      { label: "A) මම ඒ ගැන සතුටින් හිතලා බලනවා.", value: "A" },
      { label: "B) ගෙදර අය කැමති නම් මමත් කැමති වෙනවා.", value: "B" },
      { label: "C) එයාගේ අඩුපාඩු හොයන්න පටන් ගන්නවා.", value: "C" },
      { label: "D) මම දැන්ම බඳින්න ලෑස්ති නෑ කියනවා.", value: "D" },
    ],
    9: [
      { label: "A) මටත් ඉක්මනට මගේ කෙනා හොයාගන්න ඕනේ.", value: "A" },
      { label: "B) පොඩි දුකක් එනවා, ඒත් මම ඉවසනවා.", value: "B" },
      { label: "C) අපෝ එයාලා ඉක්මන් වුනා වැඩියි.", value: "C" },
      { label: "D) මට නම් ඕවා වැඩක් නෑ, මම තනියම සැපෙන් ඉන්නවා.", value: "D" },
    ],
    10: [
      { label: "A) ඒක ඉවරයි, මම දැන් අලුත් ජීවිතයක් හොයනවා.", value: "A" },
      { label: "B) ඉඳලා හිටලා එයාව මතක් වෙනවා.", value: "B" },
      { label: "C) මම තාම හොරෙන් එයාගේ ප්‍රොෆයිල් එක බලනවා.", value: "C" },
      { label: "D) මට එයාව කවදාවත් අමතක කරන්න බෑ.", value: "D" },
    ],
    11: [
      { label: "A) නැහැ, මම ආදරේ කරන්න ආසයි.", value: "A" },
      { label: "B) පොඩි චකිතයක් තියෙනවා.", value: "B" },
      { label: "C) ඔව්, රැවටෙයි කියලා ලොකු බයක් තියෙනවා.", value: "C" },
      { label: "D) ඔව්, මගේ නිදහස නැතිවෙයි කියලා බයයි.", value: "D" },
    ],
    12: [
      { label: "A) දවස් කීපයක් කතා කළාම විශ්වාස කරනවා.", value: "A" },
      { label: "B) මාස කීපයක් යනවා.", value: "B" },
      { label: "C) අවුරුද්දක්වත් ආශ්‍රය කරන්න ඕනේ.", value: "C" },
      { label: "D) මම කාටවත් 100% ක් විශ්වාස කරන්නේ නෑ.", value: "D" },
    ],
    13: [
      { label: "A) මම හරිම ෆ්‍රෙන්ඩ්ලි කෙනෙක් කියලා.", value: "A" },
      { label: "B) මම ටිකක් පාඩුවේ ඉන්න කෙනෙක් කියලා.", value: "B" },
      { label: "C) මම හිතාගන්න අමාරු චරිතයක් කියලා.", value: "C" },
      { label: "D) මට කේන්ති යනවා / ආඩම්බරයි කියලා.", value: "D" },
    ],
    14: [
      { label: "A) ඉක්මනටම නිවෙනවා.", value: "A" },
      { label: "B) ටික වෙලාවක් කතා නොකර ඉන්නවා.", value: "B" },
      { label: "C) කෑ ගහලා බනිනවා.", value: "C" },
      { label: "D) දවස් ගාණක් තරහ වෙලා ඉන්නවා.", value: "D" },
    ],
    15: [
      { label: "A) ඔව්, මම කෙලින්ම මගේ හැඟීම් කියනවා.", value: "A" },
      { label: "B) මට ලැජ්ජයි, මම ඉඟි (Hints) විතරයි දෙන්නේ.", value: "B" },
      { label: "C) මම කැමති වුනත් අකමැති වගේ පෙන්නනවා.", value: "C" },
      { label: "D) මම හැඟීම් හංගගෙන ගල් පිළිමයක් වගේ ඉන්නවා.", value: "D" },
    ],
    16: [
      { label: "A) මම ගොඩක් ස්තූති වන්ත වෙනවා.", value: "A" },
      { label: 'B) "Thank you" කියලා නිකන් ඉන්නවා.', value: "B" },
      { label: "C) මම උදව් ඉල්ලුවේ නෑනේ කියලා හිතනවා.", value: "C" },
      { label: "D) එයාලා උදව් කරන්නේ වාසියකට කියලා සැක කරනවා.", value: "D" },
    ],
    17: [
      { label: 'A) මගේ අතේ වැරැද්දක් නම් මම සමාව ගන්නවා.', value: "A" },
      { label: "B) සමාව ගන්න මට ටිකක් අමාරුයි.", value: "B" },
      { label: "C) මම කවදාවත් කාටවත් සොරි කියන්නේ නෑ.", value: "C" },
      { label: "D) මම වරදක් කරත් ඒක පිළිගන්නේ නෑ.", value: "D" },
    ],
    18: [
      { label: "A) ඔව්, මට තනිකම පාළුයි.", value: "A" },
      { label: "B) ලැබුනොත් හොඳයි, නැතත් කමක් නෑ.", value: "B" },
      { label: "C) මට තාම හිතාගන්න බෑ.", value: "C" },
      { label: "D) එපා, මට තනියම ඉන්න එක සැපයි.", value: "D" },
    ],
  }

  const handleOptionSelect = (questionId: number, optionValue: string) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: optionValue,
    }))
  }

  const handleReset = () => {
    setResponses({})
    setInputValue("")
    setTotalScore(0)
    setIsSubmitted(false)
  }

  const handleSubmit = () => {
    if (Object.keys(responses).length > 0) {
      // Calculate total score based on points
      const pointsMap: Record<string, number> = {
        'A': 10,
        'B': 7,
        'C': 3,
        'D': 0,
      }

      let totalPoints = 0
      Object.values(responses).forEach((answer) => {
        totalPoints += pointsMap[answer] || 0
      })

      setTotalScore(totalPoints)
      setIsSubmitted(true)

      // Scroll to top when results are shown
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const scoreCalculation = useMemo(() => {
    const answered = Object.keys(responses).length

    // Calculate points
    const pointsMap: Record<string, number> = {
      'A': 10,
      'B': 7,
      'C': 3,
      'D': 0,
    }

    let totalPoints = 0
    Object.values(responses).forEach((answer) => {
      totalPoints += pointsMap[answer] || 0
    })

    // Maximum possible score is 180 (18 questions × 10 points)
    const maxScore = questions.length * 10
    const percentage = Math.round((totalPoints / maxScore) * 100)

    // Get message based on score percentage - 10 different messages
    let message = ""
    let category = ""

    if (percentage >= 95) {
      message = "ඔයා ලෑස්තියි! ඔයාට ඉක්මනටම ආදරයක් ලැබෙයි. දැන්ම කසාද බඳින්න සුදුසුයි!"
      category = "Ready to Marry"
    } else if (percentage >= 85) {
      message = "ඔයා හොඳ කෙනෙක්! අපරාදේ තනිකඩව ඉන්නේ. ඉක්මනටම කෙනෙක් හම්බවෙයි."
      category = "National Treasure"
    } else if (percentage >= 70) {
      message = "ටිකක් සත්තු වගේ හිටියට හොඳ මනුස්සයා. පොඩි වෙනසක් කළොත් හරි යනවා."
      category = "Just Missed"
    } else if (percentage >= 55) {
      message = "කට වහගෙන හිටියොත් චාන්ස් එකක් තියෙයි. කතා කරන විදිය වෙනස් කරන්න."
      category = "Ruined by Mouth"
    } else if (percentage >= 40) {
      message = "ඔයාට ඉතින් හැමෝම යාලුවෝනේ. ටිකක් වෙනස්ව හැසිරෙන්න ඕනේ."
      category = "Friend Zone President"
    } else if (percentage >= 30) {
      message = "පරණ මඟුල් අමතක කරලා දාන්න. Ex එක ගැන හිතන එක නවත්තන්න."
      category = "Slave to Ex"
    } else if (percentage >= 20) {
      message = "කණ්ණාඩියක් අරන් මූණ බලන්න. ලොකුකම අඩු කරගන්න ඕනේ."
      category = "King of Arrogance"
    } else if (percentage >= 10) {
      message = "වැඩක් නෑ, ලකුණු දාගන්න දන්නේ නෑ. හිතේ හයිය විතරයි තියෙන්නේ."
      category = "Only Confidence"
    } else if (percentage >= 5) {
      message = "ඇඳෙන් බැහැලා එළියට යන්න කරුණාකරන්න. ගෙදරට වෙලා ඉන්න එපා."
      category = "Home-bound Elder"
    } else {
      message = "ඔයාට හැඟීම් දැනීම් නැද්ද මනුස්සයෝ? ගල් පිළිමයක් වගේ ඉන්න එපා."
      category = "Stone Statue"
    }

    return {
      answered,
      score: totalPoints,
      maxScore,
      percentage,
      message,
      category
    }
  }, [responses, questions.length])

  const isCompleted = Object.keys(responses).length === questions.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-slate-800">
      {/* Only show header when not submitted */}
      {!isSubmitted && (
        <Header onReset={handleReset} inputValue={inputValue} onInputChange={setInputValue} />
      )}

      <main id="questions" className="container mx-auto px-4 pb-8 max-w-7xl">
        {!isSubmitted ? (
          <>
            <QuestionGrid
              questions={questions}
              optionsByQuestion={optionsByQuestion}
              responses={responses}
              onOptionSelect={handleOptionSelect}
            />
            <div className="flex justify-center mt-8 px-4">
              <button
                onClick={handleSubmit}
                disabled={Object.keys(responses).length === 0}
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-rose-400 via-pink-400 to-violet-400 hover:from-rose-500 hover:to-violet-500 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed text-white font-bold rounded-2xl md:rounded-full transition-all shadow-2xl shadow-purple-400/50 hover:shadow-purple-500/70 hover:scale-105 active:scale-95 transform duration-300"
              >
                Calculate Love Score ✨
              </button>
            </div>
          </>
        ) : (
          <ResultsSection
            score={scoreCalculation.score}
            maxScore={scoreCalculation.maxScore}
            percentage={scoreCalculation.percentage}
            message={scoreCalculation.message}
            category={scoreCalculation.category}
            onBack={() => {
              setIsSubmitted(false)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          />
        )}
      </main>

      {/* Only show reviews when results are submitted */}
      {isSubmitted && <ReviewsSection />}

      <Footer />
    </div>
  )
}
