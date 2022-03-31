
import React, { useState } from "react";
import "./Quiz.css";

// import Home from "../Home/Home";
export default function Quiz(props) {
 
// const[name]=useState();
// console.log(name);
  const questions = [
    {
      questionText: " React was originally created by .....",
      answerOptions: [
        { answerText: " Rasmus Lerdorf", isCorrect: false },
        { answerText: " Miško Hevery", isCorrect: false },
        { answerText: "Jordan Walke", isCorrect: true },
        { answerText: "Guido van Rossum", isCorrect: false },
      ],
    },
    {
      questionText: "Everything in React is a_________",
      answerOptions: [
        { answerText: "Module", isCorrect: false },
        { answerText: "Package", isCorrect: false },
        { answerText: "Component", isCorrect: true },
        { answerText: "Class", isCorrect: false },
      ],
    },
    {
      questionText: "What are the two ways to handle data in React?",
      answerOptions: [
        { answerText: "State & Props", isCorrect: true },
        { answerText: "Services & Components", isCorrect: false },
        { answerText: "State & Services", isCorrect: false },
        { answerText: "State & Component", isCorrect: false },
      ],
    },
    {
      questionText: "React is used mainly for building ................",
      answerOptions: [
        { answerText: "Database", isCorrect: false },
        { answerText: "User Interface", isCorrect: true },
        { answerText: "Connectivity ", isCorrect: false },
        { answerText: "Design platform", isCorrect: false },
      ],
    },
    {
      questionText: "What is the children prop?",

      answerOptions: [
        {
          answerText: "A property that adds child values to state  ",
          isCorrect: false,
        },
        {
          answerText: "A property that lets you set an object as a property",
          isCorrect: false,
        },
        {
          answerText: "A property that lets you pass data to child components ",
          isCorrect: false,
        },
        {
          answerText:
            "A property that lets you nest components in other components  ",
          isCorrect: true,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="quiz" >
    <span className="subtitle">Welcome  </span>
  
    
    <div className="app">
      {showScore ? (
        <div className="score-section">

          <div className>
          You scored {score} out of {questions.length}</div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      
    </div>
  
    </div>
  );
}
