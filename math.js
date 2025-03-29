
// Trinkets collected when clicking the big trinket
function trinketCollection() {
  // collects stored uncollected trinkets and turns them into an integer
  const uncollectedTrinkets = document.getElementById("uncollectedTrinkets");
  const currentTrinkets = parseInt(uncollectedTrinkets.textContent, 10);
  
  const trinketHTML = document.getElementById("trinkets");
  
  // The 10 here makes sure its in base 10. Adds one to the value in trinkets id
  const trinket = parseInt(trinketHTML.textContent, 10) + currentTrinkets;
  document.getElementById("trinkets").textContent = trinket;
  
  // resets the stored amount of trinkets to 0 upon collection
  document.getElementById("uncollectedTrinkets").textContent = 0;
} 

// adds one to the current amount of uncollect trinkets
function trinketGeneration() {
  // gets the current amount in the element and parses (converts it) into an integer
  const uncollectedTrinkets = document.getElementById("uncollectedTrinkets");
  const currentTrinkets = parseInt(uncollectedTrinkets.textContent, 10);
  
  // gets the current trinket capacity and parses it into an integer
  const trinketCap = document.getElementById("trinketCap");
  const currentCap = parseInt(trinketCap.textContent, 10);
  
  // makes sure trinkets dont go over capacity and adds one
  if (currentTrinkets < currentCap) {
    const newUncollectedTrinkets = currentTrinkets + 1;
    uncollectedTrinkets.textContent = newUncollectedTrinkets;
  }
}

// Trinket generation speed interval. Default is 1000, meaning 1 second
const trinketSpeed = 1000;
setInterval(trinketGeneration, trinketSpeed);
