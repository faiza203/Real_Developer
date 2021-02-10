export default function Pass({marks}) {
  return (
    <div id="result">
      <h1 className="title">CONGRATS!</h1>
      <h2>Looks like you ARE a real developer! </h2>
      <p>Are you a real developer? 💩 yeah.</p>
      <a href="https://twitter.com/intent/tweet?text=https://am-i-a-real-developer.herokuapp.com/ Your Marks Are Awesome ">
        <button className="takeQuiz">Share on the twitters ✌️️</button>
      </a>
    </div>
  );
}
