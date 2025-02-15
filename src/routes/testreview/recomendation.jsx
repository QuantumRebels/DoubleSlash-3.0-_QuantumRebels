import React from "react";

const RecommendationBox = ({ recommendations }) => {
  return (
    <div className="p-4 bg-blue-100 dark:bg-slate-900  rounded-lg shadow-md  mt-12">
      <h2 className="text-3xl  dark:text-blue-500 font-bold mb-3">📌 Recommendations</h2>
      {recommendations.length > 0 ? (
        recommendations.map((rec, index) => (
          <p key={index} className="p-2 text-gray-900  dark:text-gray-50">✅ {rec}</p>
        ))
      ) : (
        <p className=" text-gray-900 dark:text-gray-50">No recommendations available yet.</p>
      )}
    </div>
  );
};

export default RecommendationBox;
