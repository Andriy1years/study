class Player {
    // Абстрактный метод, который должен быть реализован в наследниках
    damage(hp, damage) {
        throw new Error('Метод damage должен быть реализован в дочернем классе');
    }
}

class Mage extends Player {
    damage(hp, damage) {
        console.log(`Ты получил: ${damage} урона, твое хп: ${hp - damage}`);
    }
}

const mage = new Mage();
mage.damage(100, 20); // Ты получил: 20 урона, твое хп: 80
