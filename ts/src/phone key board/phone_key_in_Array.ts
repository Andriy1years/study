class GetNumbers {
    constructor(private str: string) {
        this.str = str;
    }

    private template: { [key: string]: number } = {
        'a': 2, 'b': 2, 'c': 2,
        'd': 2, 'e': 2, 'f': 3,
        'g': 4, 'h': 4, 'i': 4,
        'j': 5, 'k': 5, 'l': 5,
        'm': 6, 'n': 6, 'o': 6,
        'p': 7, 'q': 7, 'r': 7, 's': 7,
        't': 8, 'u': 8, 'v': 8,
        'w': 9, 'x': 9, 'y': 9, 'z': 9,
        ' ': 0,
        '.': 1, ',': 1
    };
    private numArr: number[] = [];
    private convertArr: string[] = [];

    public start() {
        this.convertArr = this.str.split("")
        if (this.convertArr.length > 0) {
            this.getNumbers()
        } else {
            throw new Error("Нет информации");
        }

    };

    getNumbers() {
        for (let i = 0; this.convertArr.length > i; i++) {
            this.convertArr[i] = this.convertArr[i].toLowerCase();
            this.numArr.push(this.template[this.convertArr[i]])
        }
        console.log(this.numArr);
    };
}

const phones: GetNumbers = new GetNumbers("Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,");

phones.start();