import React, { useState } from "react";
import TestList from "./tests";
import ScoreCard from "./score";

import RecommendationBox from "./recomendation";

const Dashboard = () => {
  // Mock Data
  const mockTests = [
    { id: 1, name: "Basic Alphabets", completed: true, date: "2025-02-13" },
    { id: 2, name: "Numbers & Counting", completed: false, date: "2025-02-14" },
    { id: 3, name: "Everyday Conversations", completed: true, date: "2025-02-12" },
    { id: 4, name: "Basic Maths", completed: false, date: "2025-02-24" },
  ];

  const mockScores = [
    { testName: "Basic Alphabets", score: 85 },
    { testName: "Numbers & Counting", score: 70 },
    { testName: "Everyday Conversations", score: 90 },
    { testName: "Basic Maths", score: 60 },
  ];

  const mockReview = {
    mistakes: [
      {
        question: "How do you sign 'Hello'?",
        userAnswer: "Wave Hand",
        correctAnswer: "Touch forehead & wave",
        explanation: "The correct sign involves touching your forehead first.",
      },
      {
        question: "How do you sign 'Thank You'?",
        userAnswer: "Hand to chest",
        correctAnswer: "Hand from chin outward",
        explanation: "Thank You starts at the chin and moves outward.",
      },
    ],
  };

  const mockRecommendations = [
    "Practice basic hand positions daily.",
    "Focus on facial expressions while signing.",
    "Improve speed with interactive quizzes.",
  ];

  return (
    <div className="p-6  mx-auto">

      <TestList tests={mockTests} />
      <ScoreCard scores={mockScores} />
      <RecommendationBox recommendations={mockRecommendations} />
     
  
     
    </div>
  );
};

export default Dashboard;
