function trinketUpgradeScreen1() {
  let trinketUpgradeScreen = document.getElementById("trinket-upgrade-1-screen");
  let button = document.getElementById("trinket-upgrade-1");
  let title = document.getElementById("trinket-upgrade-1-text");
  let image1 = document.getElementById("trinket-upgrade-base");
  let image2 = document.getElementById("trinket-icon");
  if (trinketUpgradeScreen.style.display === "none") {
    trinketUpgradeScreen.style.display = "block";
    button.style.display = "none";
    title.style.display = "none";
    image1.style.display = "none";
    image2.style.display = "none";
  } else {
    trinketUpgradeScreen.style.display = "none";
    button.style.display = "block";
    title.style.display = "block";
    image1.style.display = "block";
    image2.style.display = "block";
  }
}
