//abstract bilder
class LaptopBilder {
    constructor() {

        if (new.target === LaptopBilder) {
            throw new Error("незя делать обэкт на подобии абс класса")
        }
    }

    Laptop;

    CreateNewLaptop() {
        this.Laptop = new Laptop()
    }

    GetMyLaptop() {
        return this.Laptop;
    }

    SetMonitorResolution() {
        throw new Error('пожалуйста опишите монитор')
    };

    SetProcessor() {
        throw new Error('пожалуйста опишите процесор')
    };

    setRAM() {
        throw new Error('пожалуйста опишите озу')
    };

    SetHDD() {
        throw new Error('пожалуйста опишите HDD')
    };

    SetBattery() {
        throw new Error('пожалуйста опишите батарею')
    };

}

//builder
class GamingPS extends LaptopBilder {


    SetMonitorResolution() {
        this.GetMyLaptop().MonitorResolution("1980x1080");
    };

    SetProcessor() {
        this.GetMyLaptop().Processor("i9 14700");
    };

    setRAM () {
        this.GetMyLaptop().RAM ("64gb");
    };

    SetHDD() {
        this.GetMyLaptop().HDD("2tr");
    };

    SetBattery() {
        this.GetMyLaptop().Battery("1000mAh");
    };
}

//director
class BuyLaptop {
    #_laptopBuilder;

    SetLaptopBuilder(lBuilder) {
        this.#_laptopBuilder = lBuilder

    }

    GetLaptop() {
        return this.#_laptopBuilder.GetMyLaptop()
    }

    ConstructLaptop() {
        this.#_laptopBuilder.CreateNewLaptop()
        this.#_laptopBuilder.SetMonitorResolution()
        this.#_laptopBuilder.SetProcessor()
        this.#_laptopBuilder.setRAM()
        this.#_laptopBuilder.SetHDD()
        this.#_laptopBuilder.SetBattery()

    }

}

class Laptop {
    #monitor;
    #processor;
    #ram;
    #hdd;
    #battery;

    MonitorResolution(set) {
        this.#monitor = set
    }

    Processor(set) {
        this.#processor = set
    }

    RAM(set) {
        this.#ram = set
    }

    HDD(set) {
        this.#hdd = set
    }

    Battery(set) {
        this.#battery = set
    }

    ToArray() {
        return [this.#monitor, this.#processor, this.#ram, this.#hdd, this.#battery];
    }
}

const gamePS = new GamingPS()

const buyLaptop = new BuyLaptop()


buyLaptop.SetLaptopBuilder(gamePS)
buyLaptop.ConstructLaptop()
const laptop = buyLaptop.GetLaptop()
console.log(laptop.ToArray());