import { useState } from "react";
import questions from "../question.json";

export default function Quiz() {
  let [questionNo, setQuestionNo] = useState(1);
  let [no, setNo] = useState(0);
  let addNo = () => {
    setQuestionNo((questionNo += 1));
    setNo((no += 1));
    document.getElementById("question").innerText = questions[questionNo];
    return "added";
  };
  console.log(questionNo, no, questions[questionNo]);
  return questionNo < 8 ? (
    <div>
      <h1 id="question">{questions[questionNo]}</h1>
      <button onClick={addNo}>Yep</button>
      <button>Nope</button>
    </div>
  ) : null;
}
