"use client"

export default function QuizSelection({ selectQuizType }) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Select Quiz Type</h2>
        <button
          onClick={() => selectQuizType('easy')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
        >
          Easy
        </button>
        <button
          onClick={() => selectQuizType('medium')}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 mr-2"
        >
          Medium
        </button>
        <button
          onClick={() => selectQuizType('hard')}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Hard
        </button>
      </div>
    )
  }
  
  