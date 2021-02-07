export default function Context() {
  let title;

  setTimeout(function () {
    title = "A";
    document.getElementById("title").innerText = title;
  }, 100);
  setTimeout(function () {
    title = "AM";
    document.getElementById("title").innerText = title;
  }, 200);
  setTimeout(function () {
    title = "AM I";
    document.getElementById("title").innerText = title;
  }, 300);
  setTimeout(function () {
    title = "AM I A R";
    document.getElementById("title").innerText = title;
  }, 400);
  setTimeout(function () {
    title = "AM I A RE";
    document.getElementById("title").innerText = title;
  }, 500);
  setTimeout(function () {
    title = "AM I A REA";
    document.getElementById("title").innerText = title;
  }, 600);
  setTimeout(function () {
    title = "AM I A REAL";
    document.getElementById("title").innerText = title;
  }, 700);
  setTimeout(function () {
    title = "AM I A REAL <br /> D";
    document.getElementById("title").innerHTML = title;
  }, 800);
  setTimeout(function () {
    title = "AM I A REAL <br /> DE";
    document.getElementById("title").innerHTML = title;
  }, 900);
  setTimeout(function () {
    title = "AM I A REAL <br /> DEV";
    document.getElementById("title").innerHTML = title;
  }, 1000);
  setTimeout(function () {
    title = "AM I A REAL <br /> DEVE";
    document.getElementById("title").innerHTML = title;
  }, 1100);
  setTimeout(function () {
    title = "AM I A REAL <br /> DEVEL";
    document.getElementById("title").innerHTML = title;
  }, 1200);
  setTimeout(function () {
    title = "AM I A REAL <br /> DEVELO";
    document.getElementById("title").innerHTML = title;
  }, 1300);
  setTimeout(function () {
    title = "AM I A REAL <br /> DEVELOP";
    document.getElementById("title").innerHTML = title;
  }, 1400);
  setTimeout(function () {
    title = "AM I A REAL <br /> DEVELOPE";
    document.getElementById("title").innerHTML = title;
  }, 1500);
  setTimeout(function () {
    title = "AM I A REAL <br /> DEVELOPER";
    document.getElementById("title").innerHTML = title;
  }, 1600);
  setTimeout(function () {
    document.getElementById("titleDiv").classList.add("borderTopPurple");
  }, 1700);
  setTimeout(function () {
    document.getElementById("title").classList.add("borderTop");
  }, 1800);
  setTimeout(function () {
    document.getElementById("titleDiv").classList.add("borderRightPurple");
  }, 1900);
  setTimeout(function () {
    document.getElementById("title").classList.add("borderRight");
  }, 2000);
  setTimeout(function () {
    document.getElementById("titleDiv").classList.add("borderBottomPurple");
  }, 2100);
  setTimeout(function () {
    document.getElementById("title").classList.add("borderBottom");
  }, 2200);
  setTimeout(function () {
    document.getElementById("titleDiv").classList.add("borderLeftPurple");
  }, 2300);
  setTimeout(function () {
    document.getElementById("title").classList.add("borderLeft");
  }, 2400);
  return (
    <div id="context">
      <div className="titleDiv" id="titleDiv">
        <h1 id="title" className="title"></h1>
      </div>
    </div>
  );
}
