class Fighter {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }

    attack() {
        throw new Error("Метод attack должен быть реализован в дочернем классе");
    }
}

class Mage extends Fighter {
    attack() {
        console.log(this.name + " использует магическую атаку");
    }
}
class Mage1 extends Fighter {
    attack() {
        console.log(this.health + " использует магическую атаку");
    }
}
const mage = new Mage("Маг", 80);
const mage1 = new Mage1("Маг1", 80);

mage.attack();
mage1.attack();  
  