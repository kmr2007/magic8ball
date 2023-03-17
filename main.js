// Magic 8 Ball

// Variables
let outputEl = document.getElementById("output");

//Event Listener and Function
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Variables
  let question = document.getElementById("question-in").value.toLowerCase();
  let randNum = Math.random();

  // Determine response and output it
  if (
    question === "does a magic 8 ball actually work?" ||
    question === "does a magic 8 ball actually work"
  ) {
    outputEl.innerHTML = "How dare you doubt me!";
  } else if (
    question === "is javascript awesome?" ||
    question === "is javascript awesome"
  ) {
    outputEl.innerHTML = "Of Course!";
  } else if (randNum < 0.2) {
    outputEl.innerHTML = "Without a Doubt.";
  } else if (randNum < 0.4) {
    outputEl.innerHTML = "As I see it, yes.";
  } else if (randNum < 0.6) {
    outputEl.innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    outputEl.innerHTML = "Don't count on it.";
  } else {
    outputEl.innerHTML = "Outlook not so good.";
  }
}
