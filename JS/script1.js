//Global Variables
let playerAttack;
let enemyAttack;

//start script when html finished loading
window.addEventListener("load", startGame);
//function to start game when the player pick a pet
function startGame() {
  let buttonPetPlayer = document.getElementById("button-pet");
  buttonPetPlayer.addEventListener("click", selectPetPlayer);
  //button attack
  let buttonFire = document.getElementById("button-fire");
  buttonFire.addEventListener("click", fireAttack);
  let buttonWater = document.getElementById("button-water");
  buttonWater.addEventListener("click", waterAttack);
  let buttonPlant = document.getElementById("button-plant");
  buttonPlant.addEventListener("click", plantAttack);
}
//Function to add pet for the user, if not alert user to do so
function selectPetPlayer() {
  let intputHipodoge = document.getElementById("Hipodoge");
  let intputCapipepo = document.getElementById("Capipepo");
  let intputRatigueya = document.getElementById("Ratigueya");
  //This will insert the pet name for the player in the span tag
  let spanPetPlayer = document.getElementById("petUser");
  //this condition give the pet name for the player
  if (intputHipodoge.checked) {
    spanPetPlayer.innerHTML = "Hipodoge";
  } else if (intputCapipepo.checked) {
    spanPetPlayer.innerHTML = "Capipepo";
  } else if (intputRatigueya.checked) {
    spanPetPlayer.innerHTML = "Ratigueya";
  } else {
    alert("Please select a Pet");
  }
  selectPetEnemy();
}
//this will give a random number
function randomE(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Enemy will receive a random pet
function selectPetEnemy() {
  let enemyPetPick = randomE(1, 3);
  let spanPetEnemy = document.getElementById("petEnemy");
  //take the number and switch to a pet name
  if (enemyPetPick == 1) {
    spanPetEnemy.innerHTML = "Hipodoge";
  } else if (enemyPetPick == 2) {
    spanPetEnemy.innerHTML = "Capipepo";
  } else {
    spanPetEnemy.innerHTML = "Ratigueya";
  }
}
//3 function for give an attack for the pet, this will give a element for the pets, player and enemy
function fireAttack() {
  playerAttack = "fire";
  enemyRandomAttack();
}
function waterAttack() {
  playerAttack = "water";
  enemyRandomAttack();
}
function plantAttack() {
  playerAttack = "plant";
  enemyRandomAttack();
}
//Give a random attack element for the enemy
function enemyRandomAttack() {
  let randomEnAtk = randomE(1, 3);

  if (randomEnAtk == 1) {
    enemyAttack = "fire";
  } else if (randomEnAtk == 2) {
    enemyAttack = "water";
  } else {
    enemyAttack = "plant";
  }
  createMessages();
}
//Insert messages, battle result
function createMessages() {
  let insertMessages = document.getElementById("messages");
  let paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Your pet attacked with " +
    playerAttack +
    ", the enemy's Pet attacked with " +
    enemyAttack +
    " - you Win";
  insertMessages.appendChild(paragraph);
}
