"use client";

import { useState, useEffect } from "react";

const MatchTheFollowing = ({ question, onAnswer, userAnswer }) => {
  const [leftItems] = useState(question.leftItems);
  const [rightItems, setRightItems] = useState(question.rightItems);
  const [draggedIndex, setDraggedIndex] = useState(null);

  useEffect(() => {
    if (userAnswer) {
      const newRightItems = Object.values(userAnswer);
      setRightItems(newRightItems);
    }
  }, [userAnswer]);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();

    if (draggedIndex === null) return;

    const newRightItems = [...rightItems];
    const [draggedItem] = newRightItems.splice(draggedIndex, 1);
    newRightItems.splice(dropIndex, 0, draggedItem);

    setRightItems(newRightItems);
    setDraggedIndex(null);

    const newAnswer = leftItems.reduce((acc, item, index) => {
      acc[item] = newRightItems[index];
      return acc;
    }, {});

    onAnswer(newAnswer);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const isCorrectMatch = (leftItem, rightItem) => {
    return question.correctMatches[leftItem] === rightItem;
  };

  return (
    <div>
      <p className="text-gray-700 mb-4">
        {question.question}
      </p>
      <div className="flex">
        <div className="w-1/2 pr-4">
          {leftItems.map((item, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
              {item}
            </div>
          ))}
        </div>
        <div className="w-1/2 pl-4">
          {rightItems.map((item, index) => (
            <div
              key={index}
              draggable={!isCorrectMatch(leftItems[index], item)} // Disable dragging if match is correct
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              className={`mb-2 p-2 rounded cursor-move ${
                isCorrectMatch(leftItems[index], item)
                  ? "bg-green-200 cursor-not-allowed"
                  : "bg-blue-100"
              } ${
                draggedIndex === index ? "opacity-50" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mt-4">
        Drag and drop from bottom to top in right side, completed? Ensure all matches are correct before proceeding.
      </p>
    </div>
  );
};

export default MatchTheFollowing;
