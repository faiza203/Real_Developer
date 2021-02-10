import { useState } from "react";
import questions from "../question.json";
import Result from "./Result";
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
    <div>
      <h1>#{questionNo}</h1>
      <p>{questions[questionNo]}</p>
      <button onClick={addNo}>Yep</button>
      <button onClick={nextQuestion}>Nope</button>
    </div>
  ) : (
    <Result marks={marks} />
  );
}
