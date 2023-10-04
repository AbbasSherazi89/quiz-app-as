import React, { useContext, useState } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Context";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen]=useState('');
  const {score, setScore, setGameState}=useContext(QuizContext);
  const nextQuestion=()=>{
    if(Questions[currentQuestion].answer===optionChoosen){
        setScore(score+1);
    }
    alert(score);
    
    setCurrentQuestion(currentQuestion+1);
  }

  const finishQuiz=()=>{
    if(Questions[currentQuestion].answer===optionChoosen)
    {
        setScore(score+1);
    }
    setGameState('endScreen');
  }
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={()=>setOptionChoosen('A')}> {Questions[currentQuestion].optionA} </button>
        <button onClick={()=>setOptionChoosen('B')}> {Questions[currentQuestion].optionB} </button>
        <button onClick={()=>setOptionChoosen('C')}> {Questions[currentQuestion].optionC} </button>
        <button onClick={()=>setOptionChoosen('D')}> {Questions[currentQuestion].optionD} </button>
      </div>
      {
        currentQuestion===Questions.length-1?(<button onClick={finishQuiz}>Finish Quiz</button>):<button onClick={nextQuestion}>Next Question</button>
      }
      
    </div>
  );
};

export default Quiz;
