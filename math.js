
// Trinkets collected when clicking the big trinket
function trinketCollection() {
  // Gets the current amount of trinkets (starts at zero)
  const trinketHTML = document.getElementById("trinkets");
  // The 10 here makes sure its in base 10. Just adds one per click for now, can easily be expanded upon later
  const trinket = parseInt(trinketHTML.innerText, 10) + 1;
  // Updates HTML element for total trinkets
  document.getElementById("trinkets").innerText = trinket;
} 

function generationSpeed() {
  let number = Math.floor(Math.random() * 10);
  setTimeout(repeat, 1000);
  document.getElementById("testing").innerText = number;
}
