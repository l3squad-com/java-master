"use client"

import { useState } from 'react'

export default function WriteSentence({ question, onAnswer, userAnswer }) {
  const [answer, setAnswer] = useState(userAnswer || '')

  const handleChange = (e) => {
    const newAnswer = e.target.value
    setAnswer(newAnswer)
    onAnswer(newAnswer)
  }

  return (
    <div>
      <p className="mb-2">{question.question}</p>
      <textarea
        value={answer}
        onChange={handleChange}
        className="w-full p-2 border rounded-md"
        rows="3"
        placeholder="Write your answer here..."
      />
    </div>
  )
}
