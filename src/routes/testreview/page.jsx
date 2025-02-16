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

  const showReport=()=>{
    axios.post('http://localhost:5000/generate-report',{
      "overall_performance": {
          "Student ID": "S1",
          "Student Name": "Student 1",
          "Total Modules Completed": 4,
          "Overall Accuracy Rate (%)": 85.5,
          "Overall Time Spent (minutes)": 450,
          "Progress Percentage (%)": 80.0
      },
      "module_wise_performance": [
          {
              "Module ID": 1,
              "Module Name": "Module 1",
              "Module Completion Status": "Completed",
              "Quiz Score": 90,
              "Quiz Accuracy Rate (%)": 90,
              "Time Taken for Quiz (minutes)": 30
          },
          {
              "Module ID": 2,
              "Module Name": "Module 2",
              "Module Completion Status": "In Progress",
              "Quiz Score": 80,
              "Quiz Accuracy Rate (%)": 80,
              "Time Taken for Quiz (minutes)": 25
          }
      ]
  })
  }
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
      <button onClick={showReport} className=" w-[250px] h-[40px] bg-blue-500 text-md font-semibold p-2 rounded-xl text-white mt-16 flex justify-center align-middle items-center">Generate Report</button>
  
     
    </div>
  );
};

export default Dashboard;
