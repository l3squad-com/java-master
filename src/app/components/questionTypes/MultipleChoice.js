"use client";

import { useEffect } from "react";

const MultipleChoice = ({ question, onAnswer, userAnswer }) => {
  // Initialize answer on component mount if undefined
  useEffect(() => {
    if (userAnswer === undefined) {
      onAnswer(question.multipleAnswers ? [] : null);
    }
  }, [question.multipleAnswers, onAnswer, userAnswer]);

  const handleChange = (option) => {
    if (question.multipleAnswers) {
      const newAnswer = userAnswer?.includes(option)
        ? userAnswer.filter((a) => a !== option)
        : [...(userAnswer || []), option];
      onAnswer(newAnswer);
    } else {
      onAnswer([option]);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <p className="text-xl font-medium mb-6">{question.question}</p>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="transform transition-all duration-200 hover:scale-102"
          >
            <label className="flex items-center p-4 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
              <input
                type={question.multipleAnswers ? "checkbox" : "radio"}
                checked={userAnswer ? userAnswer.includes(option) : false}  // Initially unchecked
                onChange={() => handleChange(option)}
                className={`
                  mr-4 h-5 w-5
                  ${question.multipleAnswers
                    ? "text-blue-600 focus:ring-blue-500"
                    : "text-blue-600 focus:ring-blue-500"}
                `}
                name={question.multipleAnswers ? `option-${index}` : "question-option"}
              />
              <span className="text-lg">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleChoice;
