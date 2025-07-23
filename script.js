function addGoal(player) {
  let currentScore = parseInt(document.getElementById(player).innerText);
  document.getElementById(player).innerText = currentScore + 1;
}
