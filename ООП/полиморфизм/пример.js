class Fighter {
    attack() {
        console.log("Fighter атакует!");
    }
}

class Mage extends Fighter {
    //перезапись
    attack() {
        console.log("Маг атакует магией!");
    }
}

class Swordsman extends Fighter {
    attack() {
        console.log("Мечник атакует мечом!");
    }
}

const fighter = new Fighter();
const mage = new Mage();
const swordsman = new Swordsman();

// Все объекты вызывают метод attack, но каждый по-своему
fighter.attack();  // Fighter атакует!
mage.attack();     // Маг атакует магией!
swordsman.attack(); // Мечник атакует мечом!
