class Fighter {
    attack() {
        console.log("Физическая атака");
    }
}

class Mage extends Fighter {
   attack() {
       // console.log("Магическая атака");
    }
}
const fighter_up = new Fighter();
fighter_up.attack();

const mage = new Mage();
mage.attack(); // Магическая атака

const fighter = new Fighter();
fighter.attack(); 
