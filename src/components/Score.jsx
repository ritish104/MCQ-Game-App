
import React from "react";

const Score = ({ score, totalQuestions }) => {
  return (
    <div className="score-container">
      <h1>Quiz Completed!</h1>
      <p>
        Your score is {score} out of {totalQuestions}.
      </p>
    </div>
  );
};

export default Score;
