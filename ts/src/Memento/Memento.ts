class Game {
    private state: GameState = new GameState(100, 0);
    private tes = new GameMemento();

    public Play(): void {
        this.state = new GameState(this.state.hp * 0.9, this.state.monster + 2);
        console.log(this.state);
    }

    public GameSave() {
        this.tes.GameMementoFunk(this.state);
    }

    public LoadGame() {
        this.state = this.tes.GameLoad();
    }
}

class GameState {
    constructor(public hp: number, public monster: number) {
        this.hp = hp;
        this.monster = monster;
    }
}

class GameMemento {
    private _state!: GameState;

    public GameMementoFunk(state: GameState) {
        this._state = state;
        console.log("save ", this._state)
    }

    public GameLoad() {
        console.log("load ",this._state)
        return this._state;
    }

}

class Caretaker {
    private readonly game: Game = new Game();

    private test: void[] = []

    ShootThatDumpAss() {
        this.game.Play();
    }

    F5() {
        this.game.GameSave();
    }

    F9() {
        this.game.LoadGame();
    }
}

let caretaker = new Caretaker();
caretaker.F5();
caretaker.ShootThatDumpAss();
caretaker.F5();
caretaker.ShootThatDumpAss();
caretaker.ShootThatDumpAss();
caretaker.F9();
caretaker.ShootThatDumpAss();
