
//abstract bilder
class LaptopBilder {
    constructor() {
        if (new.target === LaptopBilder) {
            throw new Error("незя делать обэкт на подобии абс класса")
        }
    }

    SetMonitorResolution() { throw new Error('пожалуйста опишите монитор') };
    SetProcessor() { throw new Error('пожалуйста опишите процесор') };
    SetMemory() { throw new Error('пожалуйста опишите озу') };
    SetHDD() { throw new Error('пожалуйста опишите HDD') };
    SetBattery() { throw new Error('пожалуйста опишите батарею') };
}
//builder
class GamingPS extends LaptopBilder {
    constructor() {
        super()
    }
    SetMonitorResolution() {
        return "1980X1080";
    };
    SetProcessor() {
        return "i9 14700"
    };
    SetMemory() {
        return "64 gb"
    };
    SetHDD() {
        return '2 tr'
    };
    SetBattery() {
        return "10000 mAh"
    };
}
//builder
class ShitPS extends LaptopBilder {
    constructor() {
        super()
    }
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
        return null
    };
}
//builder
class NormalPS extends LaptopBilder {
    constructor() {
        super()
    }
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
    #_laptopBuilder = ""
    #_getlaptop = []
    SetLaptopBuilder(setlaptop) {
        this.#_laptopBuilder = setlaptop
    }
    GetLaptop() {
        return this.#_getlaptop
    }
    ConstructLaptop() {
        this.#_getlaptop.push(this.#_laptopBuilder.SetMonitorResolution())
        this.#_getlaptop.push(this.#_laptopBuilder.SetProcessor())
        this.#_getlaptop.push(this.#_laptopBuilder.SetMemory())
        this.#_getlaptop.push(this.#_laptopBuilder.SetHDD())
        this.#_getlaptop.push(this.#_laptopBuilder.SetBattery())
    }
}
const gamePS = new GamingPS()
const normalPS = new NormalPS()
const shitPS = new ShitPS()
const buyLaptop = new BuyLaptop()

buyLaptop.SetLaptopBuilder(shitPS)
buyLaptop.ConstructLaptop()
console.log(buyLaptop.GetLaptop());