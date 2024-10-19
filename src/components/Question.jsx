
import React, { useState } from "react";

const Question = ({ question, options, answer, onNext, increaseScore }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  const handleSubmit = () => {
    if (!answered) {
     
      if (selectedOption === answer) {
        increaseScore(); 
      }
      setAnswered(true); 
    } else {
      
      setAnswered(false); 
      setSelectedOption(null); 
      onNext(); 
    }
  };

  return (
    <div className="question-container">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => setSelectedOption(option)}
            disabled={answered} 
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!selectedOption} 
      >
        {answered ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default Question;
