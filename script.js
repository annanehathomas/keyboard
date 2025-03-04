document.addEventListener("keydown", function (event) {
  let keyName = event.key === " " ? "Space" : event.key;
  let keyCode = event.keyCode;
  let combination = [];

  if (event.ctrlKey) combination.push("Ctrl");
  if (event.shiftKey) combination.push("Shift");
  if (event.altKey) combination.push("Alt");
  if (event.metaKey) combination.push("Meta"); // Windows key / Command key
  combination.push(keyName);

  document.getElementById("keyName").textContent = keyName;
  document.getElementById("keyCode").textContent = keyCode;
  document.getElementById("keyCombo").textContent = combination.join(" + ");

  playSound();
});

function playSound() {
  let audio = new Audio("keypress.mp3"); // Add a sound file
  audio.play();
}
