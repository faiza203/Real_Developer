import { useState } from "react";
import questions from "../json/Question.json";
import Result from "../components/Result";
import "../css/Quiz.css";
export default function Quiz() {
  let [questionNo, setQuestionNo] = useState(1);
  let [marks, setMarks] = useState(0);
  let addNo = () => {
    nextQuestion();
    setMarks((marks += 1));
  };
  let nextQuestion = () => {
    setQuestionNo((questionNo += 1));
  };
  return questionNo < 8 ? (
    <div id="QuestionDiv">
      <h1 id="questionNo"># {questionNo}</h1>
      <p id="question">{questions[questionNo]}</p>
      <button onClick={addNo} className="takeQuiz">
        Yep
      </button>
      <button onClick={nextQuestion} className="takeQuiz">
        Nope
      </button>
    </div>
  ) : (
    <Result marks={marks} />
  );
}
