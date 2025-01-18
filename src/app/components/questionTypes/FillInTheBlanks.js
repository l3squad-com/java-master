"use client";

import { useState, useEffect } from "react";

export default function FillInTheBlanks({ question, onAnswer, userAnswer }) {
  const [answers, setAnswers] = useState(userAnswer || []);

  useEffect(() => {
    if (userAnswer) {
      setAnswers(userAnswer);
    } else {
      setAnswers(new Array(question.blanks.length).fill(""));
    }
  }, [question, userAnswer]);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
    onAnswer(newAnswers);
  };

  const parts = question.question.split("__");

  return (
    <div className="text-lg md:text-xl lg:text-2xl leading-relaxed">
      <div className="flex flex-wrap gap-4 mb-6">
        {parts.map((part, index) => (
          <span key={index} className="flex items-center">
            {part}
            {index < parts.length - 1 && (
              <input
                type="text"
                value={answers[index] || ""}
                onChange={(e) => handleChange(index, e.target.value)}
                className="border border-gray-300 px-4 py-2 mx-2 text-xl focus:outline-none rounded-md w-24 md:w-32 lg:w-40 transition duration-200 ease-in-out hover:border-blue-500 hover:bg-blue-50 focus:border-blue-500 focus:bg-blue-50"
                style={{
                  minWidth: "100px",
                }}
              />
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
