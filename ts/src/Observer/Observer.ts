interface IObserver {
    Update(subject: ISubject): void;
}

class RiskyPlayer implements IObserver {
    private _boxerToPutMoneyOn: string = "";

    get BoxerToPutMoneyOn(): string {return this._boxerToPutMoneyOn;}
    set BoxerToPutMoneyOn(value: string) {this._boxerToPutMoneyOn = value;}

    Update(subject: BoxFight): void {
        let boxFight = subject
        if (boxFight.BoxerAStore > boxFight.BoxerBStore) {
            this.BoxerToPutMoneyOn = "I put on boxer B, if he win I get more!";
        } else {
            this.BoxerToPutMoneyOn = "I put on boxer A, if he win I get more!";
        }
        console.log("RiskyPlayer: ", this.BoxerToPutMoneyOn);
    }
}

class ConservativePlayer implements IObserver {
    private _boxerToPutMoneyOn: string = "";

    get BoxerToPutMoneyOn(): string {return this._boxerToPutMoneyOn;}
    set BoxerToPutMoneyOn(value: string) {this._boxerToPutMoneyOn = value;}

    Update(subject: BoxFight): void {
        let boxFight = subject
        if (boxFight.BoxerAStore < boxFight.BoxerBStore) {
            this.BoxerToPutMoneyOn = "I put on boxer B, better be safe!";
        }
        else {
            this.BoxerToPutMoneyOn = "I put on boxer A, better be safe!";
        }
        console.log("ConservationPlayer: ", this.BoxerToPutMoneyOn);
    }
}

interface ISubject {
    AttachObserver(observer: IObserver): void;
    DetachObserver(observer: IObserver): void;
    Notify(): void;

}

class BoxFight implements ISubject {
    private observers: IObserver[] = [];

    public get Observers(): IObserver[] {return this.observers;}
    private set Observers(value: IObserver[]) {this.observers = value;}

    private RoundNumber: number = 0;

    public get RoundNum(): number {return this.RoundNumber;}
    private set RoundNum(value: number) {this.RoundNumber = value;}


    public BoxerAStore: number = 0;

    public get BoxerA(): number {return this.BoxerAStore;}
    public set BoxerA(value: number) {this.BoxerAStore = value;}

    public BoxerBStore: number = 0;

    public get BoxerB(): number {return this.BoxerBStore;}
    public set BoxerB(value: number) {this.BoxerBStore = value;}

    public getRandom(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    constructor() {
        this.Observers = [];
        this.RoundNum = 0;
        this.BoxerA = 0;
        this.BoxerB = 0;
    }

    public AttachObserver(observer: IObserver): void {
        this.Observers.push(observer);
    }
    public DetachObserver(observer: IObserver): void {
        this.Observers = this.Observers.filter(o => o !== observer);

    }
    public NextRound(): void {
    this.RoundNum++;

    this.BoxerA += this.getRandom(0, 5)
    this.BoxerB += this.getRandom(0, 5)

    this.Notify();
    }
    public Notify(): void {
        for (let observer of this.Observers) {
            observer.Update(this);
        }
    }
}

let boxFight = new BoxFight();

let riskyPlayer = new RiskyPlayer();
let conservativePlayer = new ConservativePlayer();

boxFight.AttachObserver(riskyPlayer);
boxFight.AttachObserver(conservativePlayer);


boxFight.NextRound()
boxFight.NextRound()
boxFight.NextRound()
boxFight.NextRound()
