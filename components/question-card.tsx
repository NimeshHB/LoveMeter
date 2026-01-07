"use client"

import { Button } from "@/components/ui/button"

interface QuestionCardProps {
  question: { id: number; text: string }
  options: Array<{ label: string; value: string }>
  selectedOption?: string
  onOptionSelect: (value: string) => void
}

export default function QuestionCard({ question, options, selectedOption, onOptionSelect }: QuestionCardProps) {
  return (
    <div className="rounded-2xl border-2 border-white/40 bg-white/50 backdrop-blur-xl p-4 md:p-6 hover:bg-white/60 hover:border-white/60 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.01] md:hover:scale-[1.02] duration-300">
      <div className="mb-4">
        <h3 className="text-sm md:text-base font-bold text-slate-800 leading-relaxed min-h-[40px] md:min-h-0">
          {question.id}. {question.text}
        </h3>
      </div>

      <div className="space-y-2">
        {options.map((option) => (
          <Button
            key={option.value}
            onClick={() => onOptionSelect(option.value)}
            variant={selectedOption === option.value ? "default" : "outline"}
            className={`w-full justify-start text-left text-[11px] md:text-sm transition-all rounded-xl font-medium py-3 h-auto whitespace-normal ${selectedOption === option.value
              ? "bg-gradient-to-r from-rose-400 to-violet-400 hover:from-rose-500 hover:to-violet-500 border-0 text-white shadow-lg shadow-purple-300/50"
              : "border-2 border-slate-300 bg-white/60 text-slate-700 hover:bg-white/80 hover:border-violet-300"
              }`}
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-white/40 pt-3">
        <span className="text-[10px] md:text-xs text-slate-500 font-medium">Choose your answer</span>
        {selectedOption && <span className="text-[10px] md:text-xs font-bold text-violet-600 flex items-center gap-1">✓ Selected</span>}
      </div>
    </div>
  )
}
