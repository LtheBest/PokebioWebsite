const progressBar = document.getElementsByClassName('progress-bar')[0]
setInterval(() => {
  const computedStyle = getComputedStyle(progressBar)
  const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
  progressBar.style.setProperty('--width', width + .1)

  var monBouton = document.getElementById("load");
  var maClasse = document.querySelector(".progress-bar");
  


monBouton.addEventListener("click", function() {
  maClasse.style.display = "block";

  // if (maDiv.style.display === "none") {
  //   maDiv.style.display = "block";
  // } else {
  //   maDiv.style.display = "none";
  // }
});

}, 10)