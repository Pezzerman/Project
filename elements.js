function trinketUpgradeScreen1() {
  let trinketUpgradeScreen = document.getElementById("trinket-upgrade-1-screen");
  let button = document.getElementById("trinket-upgrade-1");
  let title = document.getElementById("trinket-upgrade-1-text");
  if (trinketUpgradeScreen.style.display === "none") {
    trinketUpgradeScreen.style.display = "block";
    button.style.display = "none";
    title.style.display = "none";
  } else {
    trinketUpgradeScreen.style.display = "none";
    button.style.display = "block";
    title.style.display = "block";
  }
}
