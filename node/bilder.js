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

    SetMemory() {
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
        this.Laptop.Processor("i9 14700");
    };

    SetMemory() {
        this.Laptop.OZY("64gb");
    };

    SetHDD() {
        this.Laptop.HDD("2tr");
    };

    SetBattery() {
        this.Laptop.Battery("1000mAh");
    };
}

//builder
class ShitPS extends LaptopBilder {
    SetMonitorResolution() {
        return "19X12";
    };

    SetProcessor() {
        return "i0 14700"
    };

    SetMemory() {
        return "1 mb"
    };

    SetHDD() {
        return '-1 tr'
    };

    SetBattery() {
        return "null"
    };
}

//builder
class NormalPS extends LaptopBilder {

    SetMonitorResolution() {
        return "1980X1080";
    };

    SetProcessor() {
        return "i3 10100"
    };

    SetMemory() {
        return "16 gb"
    };

    SetHDD() {
        return '1 tr'
    };

    SetBattery() {
        return "5000 mAh"
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
        this.#_laptopBuilder.SetMemory()
        this.#_laptopBuilder.SetHDD()
        this.#_laptopBuilder.SetBattery()

    }

}

class Laptop {
    #monitor;
    #processor;
    #ozy;
    #hdd;
    #battery;

    MonitorResolution(set) {
        this.#monitor = set
    }

    Processor(set) {
        this.#processor = set
    }

    OZY(set) {
        this.#ozy = set
    }

    HDD(set) {
        this.#hdd = set
    }

    Battery(set) {
        this.#battery = set
    }

    ToArray() {
        return [this.#monitor, this.#processor, this.#ozy, this.#hdd, this.#battery];
    }
}

const gamePS = new GamingPS()
// const normalPS = new NormalPS()
// const shitPS = new ShitPS()
const buyLaptop = new BuyLaptop()


buyLaptop.SetLaptopBuilder(gamePS)
buyLaptop.ConstructLaptop()
const laptop = buyLaptop.GetLaptop()
console.log(laptop.ToArray());