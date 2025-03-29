
// Trinkets collected when clicking the big trinket
function trinketCollection() {
  const uncollectedTrinkets = document.getElementById("uncollectedTrinkets");
  const currentTrinkets = parseInt(uncollectedTrinkets.textContent, 10);
  const trinketHTML = document.getElementById("trinkets");
  // The 10 here makes sure its in base 10. Adds one to the value in trinkets id
  const trinket = parseInt(trinketHTML.textContent, 10) + currentTrinkets;
  document.getElementById("trinkets").textContent = trinket;
  document.getElementById("uncollectedTrinkets").textContent = 0;
} 

// adds one to the current amount of uncollect trinkets
function generationSpeed() {
  // gets the current amount in the element and parses (converts it) into an integer
  const uncollectedTrinkets = document.getElementById("uncollectedTrinkets");
  const currentTrinkets = parseInt(uncollectedTrinkets.textContent, 10);
  
  // if statement is here to cap it at 10
  if (currentTrinkets < 10) {
    const newUncollectedTrinkets = currentTrinkets + 1;
    uncollectedTrinkets.textContent = newUncollectedTrinkets;
  }
}

// Trinket generation speed interval. 1000 = 1000 milliseconds = 1 second
setInterval(generationSpeed, 1000);
