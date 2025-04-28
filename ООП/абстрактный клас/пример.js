class Fighter {
    constructor(name, health) {
        if (new.target === Fighter) {
            throw new Error("Нельзя создавать экземпляр абстрактного класса");
        }
        this.name = name;
        this.health = health;
    }

    // Абстрактный метод (без реализации)
    attack() {
        throw new Error("Метод 'attack' должен быть реализован в дочернем классе");
    }
}

class Mage extends Fighter {
    constructor(name, health, mana) {
        super(name, health);  // Вызов конструктора родительского класса
        this.mana = mana;
    }

    // Реализация абстрактного метода
    attack() {
        console.log(this.name + " использует магическую атаку");
    }
}

class Swordsman extends Fighter {
    constructor(name, health, strength) {
        super(name, health);
        this.strength = strength;
    }

    // Реализация абстрактного метода
    attack() {
        console.log(this.name + " атакует мечом");
    }
}

const mage = new Mage("Маг", 100, 50);
const swordsman = new Swordsman("Мечник", 120, 60);

mage.attack();  // Маг использует магическую атаку
swordsman.attack();  // Мечник атакует мечом

// Невозможно создать экземпляр абстрактного класса:
// const fighter = new Fighter("Воин", 100);  // Ошибка
