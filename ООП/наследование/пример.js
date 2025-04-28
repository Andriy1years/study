// Родительский класс Fighter
class Fighter {
    constructor(name, strength) {
        this.name = name;
        this.strength = strength;
    }

    // Общий метод атаки (можно переопределить в дочерних классах)
    attack() {
        console.log(this.name + " атакует с силой " + this.strength);
    }
}

// Дочерний класс Mage (Маг) наследует от Fighter
class Mage extends Fighter {
    constructor(name, strength, mana) {
        super(name, strength);  // Вызов конструктора родительского класса
        this.mana = mana;  // Добавляем новое свойство mana для мага
    }

    // Специфичный метод для мага
    castSpell() {
        console.log(this.name + " использует магию с маной " + this.mana);
    }

    // Переопределение метода атаки для мага
    attack() {
        console.log(this.name + " атакует магией с силой " + this.strength);
    }
}

// Создание объекта Огненного Мага
const fireMage = new Mage("Огненный Маг", 50, 100);

// Вызов методов
fireMage.attack();  // Огненный Маг атакует магией с силой 50
fireMage.castSpell();  // Огненный Маг использует магию с маной 100
