"use client"

import QuestionCard from "./question-card"

interface QuestionGridProps {
  questions: Array<{ id: number; text: string }>
  optionsByQuestion: Record<number, Array<{ label: string; value: string }>>
  responses: Record<number, string>
  onOptionSelect: (questionId: number, optionValue: string) => void
}

export default function QuestionGrid({ questions, optionsByQuestion, responses, onOptionSelect }: QuestionGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 py-8">
      {questions.map((question) => (
        <QuestionCard
          key={question.id}
          question={question}
          options={optionsByQuestion[question.id] || []}
          selectedOption={responses[question.id]}
          onOptionSelect={(value) => onOptionSelect(question.id, value)}
        />
      ))}
    </div>
  )
}
