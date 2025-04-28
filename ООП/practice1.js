class Calculator {
    add(a, b) {
        return a + b;
    }

    multiply(a, b) {
        return a * b;
    }
}

// Создаем калькулятор
const calculator = new Calculator();

// Сохраняем результаты
const sum = calculator.add(5, 7);      // 5 + 7 = 12
const product = calculator.multiply(3, 4); // 3 * 4 = 12

console.log("Сумма:", sum);           // Сумма: 12
console.log("Произведение:", product); // Произведение: 12