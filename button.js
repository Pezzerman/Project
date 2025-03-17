function toggleImage() {
  let img = document.getElementById("image");
  let btn = document.querySelector("button");

  if (img.style.display === "none") {
      img.style.display = "block";
      btn.innerText = "Hide Image";
  } else {
      img.style.display = "none";
      btn.innerText = "Show Image";
  }
}
