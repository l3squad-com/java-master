"use client"

import FillInTheBlanks from './questionTypes/FillInTheBlanks';
import MultipleChoice from './questionTypes/MultipleChoice';
import MatchTheFollowing from './questionTypes/MatchTheFollowing';

export default function QuestionComponent({ question, onAnswer, userAnswer }) {
  return (
    <div className="space-y-4">
      {/* Render the question type-specific component */}
      {(() => {
        switch (question.type) {
          case 'fill-in-the-blanks':
            return (
              <FillInTheBlanks
                question={question}
                onAnswer={onAnswer}
                userAnswer={userAnswer}
              />
            );
          case 'multiple-choice':
            return (
              <MultipleChoice
                question={question}
                onAnswer={onAnswer}
                userAnswer={userAnswer}
              />
            );
          case 'matching':
            return (
              <MatchTheFollowing
                question={question}
                onAnswer={onAnswer}
                userAnswer={userAnswer}
              />
            );
          default:
            return <div>Unsupported question type</div>;
        }
      })()}

      {/* Display the hint if the note exists */}
      {question.note && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
          <p className="font-semibold">Hint:</p>
          <p>{question.note}</p>
        </div>
      )}
    </div>
  );
}
