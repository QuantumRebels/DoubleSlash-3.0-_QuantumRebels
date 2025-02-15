import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ScoreCard = ({ scores }) => {
  return (
    <div className="p-4">
      <h2 className="text-4xl font-bold mb-4  dark:text-blue-500 mt-12">📊 Your Test Scores</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={scores}>
          <XAxis dataKey="testName" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#3b82f6 " />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreCard;
