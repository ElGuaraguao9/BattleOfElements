//start script when html finished loading
window.addEventListener("load", startGame);
//function to start game when the player pick a pet
function startGame() {
  let buttonPetPlayer = document.getElementById("button-pets");
  buttonPetPlayer.addEventListener("click", selectPetPlayer);
}
//Function to select pet, if not alert user to do so
function selectPetPlayer() {
  let intputHipodoge = document.getElementById("Hipodoge");
  let intputCapipepo = document.getElementById("Capipepo");
  let intputRatigueya = document.getElementById("Ratigueya");
  let spanPetPlayer = document.getElementById('petUser')

  if (intputHipodoge.checked) {
    spanPetPlayer.innerHTML = 'Hipodoge'
  } else if (intputCapipepo.checked) {
    spanPetPlayer.innerHTML = 'Capipepo'
  } else if (intputRatigueya.checked) {
    spanPetPlayer.innerHTML = 'Ratigueya'
  } else {
    alert("Please select a Pet");
  }
}
