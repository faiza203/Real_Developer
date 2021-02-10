import { Link } from "react-router-dom";

export default function Fail() {
  return (
    <div>
      <h1 className="title">NO WORRIES!</h1>
      <h2>It's ok to not be a developer.</h2>
      <p>
        If you do want to be a developer though, hit the button down thataways
        👇 and check out some awesome free resources at Codecademy.com.
      </p>
      <a href="https://codecademy.com/">
        <button className="takeQuiz">Check out Codecademy 🚀</button>
      </a>
      <a href="https://twitter.com/intent/tweet?text=">
        <button className="takeQuiz">Share on the twitters ✌️️</button>
      </a>
    </div>
  );
}
