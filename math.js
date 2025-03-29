
// Trinkets collected when clicking the big trinket
function trinketCollection() {
  const trinketHTML = document.getElementById("trinkets");
  // The 10 here makes sure its in base 10. Adds one to the value in trinkets id
  const trinket = parseInt(trinketHTML.innerText, 10) + 1;
  document.getElementById("trinkets").innerText = trinket;
} 

// adds one to the current amount of uncollect trinkets
function generationSpeed() {
  const uncollectedTrinkets = document.getElementById("uncollectedTrinkets")
  const newUncollectedTrinkets = parseInt(uncollectedTrinkets.innerText, 10) + 1;
  document.getElementById("uncollectedTrinkets").innerText = newUncollectedTrinkets;
}

// Trinket generation speed interval. 1000 = 1000 milliseconds = 1 second
setInterval(generationSpeed, 1000);
