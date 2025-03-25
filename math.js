// Trinkets collected when clicking the big trinket
function trinketCollection() {
  // Gets the current amount of trinkets (starts at zero)
  const trinketHTML = document.getElementById("trinkets");
  // The 10 here makes sure its in base 10. Just adds one per click for now, can easily be expanded upon later
  const trinket = parseInt(trinketHTML.innerText, 10) + 1;
  // Updates HTML element for total trinkets
  document.getElementById("trinkets").innerText = trinket;
} 

// This is just to get two things going at once will need to be changed later
function xpCollection() {
  const levelHTML = document.getElementById("level");
  const level = parseInt(levelHTML.innerText, 10) + 1;
  document.getElementById("level").innerText = level;
} 
