import { useState } from "react";
import fs from "fs";

export default function Quiz() {
  const [question, setQuestion] = useState("");
  fs.readFile("question.json", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
  });
  return <div>Quiz</div>;
}
