//Global Variables
let playerAttack;
let enemyAttack;
let playerLife = 3;
let enemyLife = 3;

//start script when html finished loading
window.addEventListener("load", startGame);
//
function startGame() {
  //disable section "select-attack"
  let sectionSelectAttack = document.getElementById("select-attack");
  sectionSelectAttack.style.display = "none";
  //function to start game when the player pick a pet
  let buttonPetPlayer = document.getElementById("button-pet");
  buttonPetPlayer.addEventListener("click", selectPetPlayer);
  //button attack
  let buttonFire = document.getElementById("button-fire");
  buttonFire.addEventListener("click", fireAttack);
  let buttonWater = document.getElementById("button-water");
  buttonWater.addEventListener("click", waterAttack);
  let buttonPlant = document.getElementById("button-plant");
  buttonPlant.addEventListener("click", plantAttack);
  //Restart game
  let restartButton = document.getElementById("button-restart");
  restartButton.addEventListener("click", restartGame);
  //disable restart buttom
  let sectionSelectButtonRestart = document.getElementById("button-restart");
  sectionSelectButtonRestart.style.display = "none";
}
//Function to add pet for the user, if not alert user to do so
function selectPetPlayer() {
  //display pet button
  let sectionSelectAttack = document.getElementById("select-attack");
  sectionSelectAttack.style.display = "flex";
  //disable "select-pet" section
  let sectionSelectPet = document.getElementById("select-pet");
  sectionSelectPet.style.display = "none";
  //
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
  battle();
}
//Insert messages, battle result
function createMessages(result) {
  let insertMessages = document.getElementById("messages");
  let paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Your pet attacked with " +
    playerAttack +
    ", the enemy's Pet attacked with " +
    enemyAttack +
    " - " +
    result +
    ".";
  insertMessages.appendChild(paragraph);
}
// Start the Battle
function battle() {
  //this will replase the number of life (3) of the pets
  let spanPlayerLife = document.getElementById("player-life");
  let spanEnemyLife = document.getElementById("enemy-life");
  //Insert the massages result of the player or enemy
  if (enemyAttack == playerAttack) {
    createMessages("Draw");
  } else if (playerAttack == "fire" && enemyAttack == "plant") {
    createMessages("You win");
    enemyLife--;
    spanEnemyLife.innerHTML = enemyLife;
  } else if (playerAttack == "water" && enemyAttack == "fire") {
    createMessages("You win");
    enemyLife--;
    spanEnemyLife.innerHTML = enemyLife;
  } else if (playerAttack == "plant" && enemyAttack == "water") {
    createMessages("You win");
    enemyLife--;
    spanEnemyLife.innerHTML = enemyLife;
  } else {
    createMessages("you lose");
    playerLife--;
    spanPlayerLife.innerHTML = playerLife;
  }
  checkLife();
}
//This will check the player and enemy life
function checkLife() {
  if (enemyLife == 0) {
    createMessagesEndBattle("----------Great you won the Battle!----------");
  } else if (playerLife == 0) {
    createMessagesEndBattle("----------You Lose the Battle----------");
  }
}
//End Battle
function createMessagesEndBattle(finalResult) {
  let insertMessages = document.getElementById("messages");
  let paragraph = document.createElement("p");
  paragraph.innerHTML = finalResult;
  insertMessages.appendChild(paragraph);
  //disabled element button
  let buttonFire = document.getElementById("button-fire");
  buttonFire.disabled = true;
  let buttonWater = document.getElementById("button-water");
  buttonWater.disabled = true;
  let buttonPlant = document.getElementById("button-plant");
  buttonPlant.disabled = true;
  //display restart button
  let sectionSelectButtonRestart = document.getElementById("button-restart");
  sectionSelectButtonRestart.style.display = "block";
}
//the button "button-restart" will reload que web page
function restartGame() {
  location.reload();
}
