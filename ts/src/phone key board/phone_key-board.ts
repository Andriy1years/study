class Phone {
    constructor(private str: string) {
        this.str = str
    }
    private convertArr:string[] = []
    private numArr:number[] = [];

    public _split() {
        this.convertArr = this.str.split("")
        if (this.convertArr.length > 0) {this.getNumber()}
        else {throw new Error("Нет информации")}

    }
    public getNumber() {
        for (let i = 0; i < this.convertArr.length; i++) {
            this.convertArr[i] = this.convertArr[i].toLowerCase()

           switch (this.convertArr[i]) {
               case "a": case "b": case "c":
                   this.numArr.push(2)
                   break;
               case "d":case "e":case "f":
                   this.numArr.push(3)
                   break;
               case "g":case "h":case "i":
                   this.numArr.push(4)
                   break;
               case "j":case "k":case "l":
                   this.numArr.push(5)
                   break;
               case "m":case "n":case "o":
                   this.numArr.push(6)
                   break;
               case "p":case "q":case "r":case "s":
                   this.numArr.push(7)
                   break;
               case "t":case "u":case "v":
                   this.numArr.push(8)
                   break;
               case "w":case "x":case "y":case "z":
                   this.numArr.push(9)
                   break;
               case " ":
                   this.numArr.push(0)
                   break;
               default:
                   this.numArr.push(1)
                   break;
           }

        }

        console.log(this.numArr);
    }
}

const phone:Phone = new Phone("Lorem ipsum");
phone._split()
