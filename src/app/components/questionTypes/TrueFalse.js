"use client"

export default function TrueFalse({ question, onAnswer, userAnswer }) {
    return (
      <div>
        <p className="mb-2">{question.question}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => onAnswer(true)}
            className={`px-4 py-2 rounded ${
              userAnswer === true ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            True
          </button>
          <button
            onClick={() => onAnswer(false)}
            className={`px-4 py-2 rounded ${
              userAnswer === false ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            False
          </button>
        </div>
      </div>
    )
  }
  
  