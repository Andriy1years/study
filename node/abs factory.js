class IToyFactory {
    GetBear() {
    throw new Error('пожалуйста опишите bear')
    }
    GetCat() {
    throw new Error('пожалуйста опишите cat')
    }
}

class TeddyToysFactory extends IToyFactory {
    GetBear() {
        return new TedyBear();
    }
    GetCat() {
        return new TedyCat();
    }
}

class WoodenToysFactory extends IToyFactory {
    GetBear() {
        return new WoodenBear();
    }
    GetCat() {
        return new WoodenCat();
    }
}
class AnimalToy {
    constructor(Name) {
        this.Name = Name;
    }
    GetAnimalToy() {
        return this.Name
    }
}
class Cat extends AnimalToy {
    constructor(Name) {
        super(Name);
    }
}
class Bear extends AnimalToy {
    constructor(Name) {
        super(Name);
    }
}

class TedyBear extends Bear {
    constructor() {
        super('Teddy Bear');
    }
}
class WoodenBear extends Bear {
    constructor() {
        super('Wooden Bear');
    }
}
class TedyCat extends Cat {
    constructor() {
        super('Teddy Cat');
    }
}
class WoodenCat extends Cat {
    constructor() {
        super('Wooden Cat');
    }
}

//factory
class AbstractFactory {
    Run() {
        this.RunWoodenFactory()
        this.RunTeddyFactory()
    }
    RunTeddyFactory() {
        let toyFactory = new TeddyToysFactory();
        let bear = toyFactory.GetBear();
        let cat = toyFactory.GetCat();
        console.log("у мемя есть  " + bear.GetAnimalToy() +" и " + cat.GetAnimalToy());
    }
    RunWoodenFactory() {
        let toyFactory = new WoodenToysFactory();
        let bear = toyFactory.GetBear();
        let cat = toyFactory.GetCat();
        console.log("у мемя есть " + bear.GetAnimalToy() +" и " + cat.GetAnimalToy());
    }
}

let abstractFactory = new AbstractFactory();
abstractFactory.Run()