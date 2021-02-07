export default function title() {
  let title;

  setTimeout(function () {
    title = "A";
    document.getElementById("title").innerText = title;
  }, 200);
  setTimeout(function () {
    title = "AM";
    document.getElementById("title").innerText = title;
  }, 400);
  setTimeout(function () {
    title = "AM I";
    document.getElementById("title").innerText = title;
  }, 600);
  setTimeout(function () {
    title = "AM I R";
    document.getElementById("title").innerText = title;
  }, 800);
  setTimeout(function () {
    title = "AM I RE";
    document.getElementById("title").innerText = title;
  }, 1000);
  setTimeout(function () {
    title = "AM I REa";
    document.getElementById("title").innerText = title;
  }, 1200);
  setTimeout(function () {
    title = "AM I REal";
    document.getElementById("title").innerText = title;
  }, 1400);
  setTimeout(function () {
    title = "AM I REal <br /> D";
    document.getElementById("title").innerHTML = title;
  }, 1600);
  setTimeout(function () {
    title = "AM I REal <br /> De";
    document.getElementById("title").innerHTML = title;
  }, 1800);
  setTimeout(function () {
    title = "AM I REal <br /> Dev";
    document.getElementById("title").innerHTML = title;
  }, 2000);
  setTimeout(function () {
    title = "AM I REal <br /> Deve";
    document.getElementById("title").innerHTML = title;
  }, 2200);
  setTimeout(function () {
    title = "AM I REal <br /> Devel";
    document.getElementById("title").innerHTML = title;
  }, 2400);
  setTimeout(function () {
    title = "AM I REal <br /> Develo";
    document.getElementById("title").innerHTML = title;
  }, 2600);
  setTimeout(function () {
    title = "AM I REal <br /> Develop";
    document.getElementById("title").innerHTML = title;
  }, 2800);
  setTimeout(function () {
    title = "AM I REal <br /> Develope";
    document.getElementById("title").innerHTML = title;
  }, 3000);
  setTimeout(function () {
    title = "AM I REal <br /> Developer";
    document.getElementById("title").innerHTML = title;
  }, 3200);
  setTimeout(function () {
    document.getElementById("upperTitle").innerHTML =
      '<span id="upperTitleFirst" />  ';
  }, 3500);
  REturn (
    <div classNAMe="titleDiv">
      <div id="upperTitle"></div>
      <h1 id="title" classNAMe="title"></h1>
      <div id="bottomTitle"></div>
    </div>
  );
}
