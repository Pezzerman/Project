// This defines the trinket variable, setting it at 0 initally
// let trinket = 0;
// This sets the 

function test(t) {
  return trinket + 1;
}

let testing = test(0)
document.getElementById('trinkets').innerText = testing;
