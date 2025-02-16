import React, { useState } from "react";
import TestList from "./tests";
import ScoreCard from "./score";

import RecommendationBox from "./recomendation";

const Dashboard = () => {
  // Mock Data
  const mockTests = [
    { id: 1, name: "Basic Alphabets", completed: true, date: "2025-02-16" },
    { id: 2, name: "Numbers & Counting", completed: true, date: "2025-02-16" },
    
  ];

  const mockScores = [
    { testName: "Basic Alphabets", score: 5 },
    { testName: "Numbers & Counting", score: 4 },
   
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
      <button className=" w-[250px] h-[40px] bg-blue-500 text-md font-semibold p-2 rounded-xl text-white mt-16 flex justify-center align-middle items-center">Generate Report</button>
  
     
    </div>
  );
};

export default Dashboard;
