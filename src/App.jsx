
import React, { useState } from "react";
import Question from "./components/Question";
import Score from "./components/Score";
import questions from "./data/questions";
import './App.css';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="App">
      {!gameOver ? (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          answer={questions[currentQuestionIndex].answer}
          onNext={handleNextQuestion}
          increaseScore={increaseScore}
        />
      ) : (
        <Score score={score} totalQuestions={questions.length} />
      )}
    </div>
  );
}

export default App;
