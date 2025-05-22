//родительский клас
class fighter { 
   //обявление функций без даных
    Attack() {
     }
    Defend() {
     }
}
//дочерние классы 
class mage extends fighter { //через extends идет наследование 
        //преопределение методов в функции
       Attack(attack) {
        console.log('маг атакует ' + attack)
        }
       Defend(defend) {
        console.log('маг защищается ' + defend)

        }
}
class Swordsman extends fighter {
    Attack(attack) {
        console.log('мечник атакует ' + attack)
        }
       Defend(defend) {
        console.log('мечник защищается ' + defend)
        }
}
//создание обьекта из дочерних класов
const Mage = new mage();
const swordsman = new Swordsman()
//вызов 
Mage.Attack("магия")
Mage.Defend("щит")
swordsman.Attack("меч")
swordsman.Defend("сила дуга")
