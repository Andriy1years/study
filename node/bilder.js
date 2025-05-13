
//abstract bilder
class LaptopBilder {
    constructor() {

        if (new.target === LaptopBilder) {
            throw new Error("незя делать обэкт на подобии абс класса")
        }
    }
    laptop = {
        MonitorResolution: "",
        Processor: "",
        Memory: "",
        HDD: "",
        Battery: ""
    }
    Laptop;
    CreateNewLaptop() {
        this.Laptop = new Laptop()
    }
    GetMyLaptop() {
        console.log(this.laptop);
        return this.laptop
    }

    SetMonitorResolution() { throw new Error('пожалуйста опишите монитор') };
    SetProcessor() { throw new Error('пожалуйста опишите процесор') };
    SetMemory() { throw new Error('пожалуйста опишите озу') };
    SetHDD() { throw new Error('пожалуйста опишите HDD') };
    SetBattery() { throw new Error('пожалуйста опишите батарею') };

}
//builder
class GamingPS extends LaptopBilder {


    SetMonitorResolution() {
        this.laptop.MonitorResolution = "1980X1080";
    };
    SetProcessor() {
        this.laptop.Processor = "i9 14700";
    };
    SetMemory() {
        this.laptop.Memory = "64gb";

    };
    SetHDD() {
        this.laptop.HDD = "2tr";

    };
    SetBattery() {
        this.laptop.Battery = "1000mAh";

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
    constructor(Laptop) {
        this.Laptop = Laptop
    }

    MonitorResolution() {
        return this.Laptop.MonitorResolution
    }
    Processor() {
        return this.Laptop.Processor
    }
    Memory() {
        return this.Laptop.Memory
    }
    HDD() {
        return this.Laptop.HDD
    }
    Battery() {
        return this.Laptop.Battery
    }
    ToString() {
        return [this.MonitorResolution(),this.Processor(), this.Memory(), this.HDD(),this.Battery()];
    }
}
const gamePS = new GamingPS()


const normalPS = new NormalPS()
const shitPS = new ShitPS()
const buyLaptop = new BuyLaptop()


buyLaptop.SetLaptopBuilder(gamePS)
buyLaptop.ConstructLaptop()
const laptop = new Laptop(buyLaptop.GetLaptop())
console.log(laptop.ToString());