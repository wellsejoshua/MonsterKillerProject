const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

//using handler as conventrion because attached to event listener
function attackHandler(){
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;

}

attackBtn.addEventListener('click', attackHandler);

