import { Actor } from "./Actor";
import { Car } from "./Car";
import { Enemies } from "./Enemies";
import { Point } from "../types/Point";


interface InitialGameManagerProps {
    position: Point;
    enemies: Enemies;
    car: Car;
}

export class GameManager extends Actor {
    enemies: Enemies;
    car: Car;
    start: boolean;
    finish: boolean;
    constructor(props: InitialGameManagerProps) {
        super(props.position)
        this.car = props.car;
        this.enemies = props.enemies;
        this.start = false;
        this.finish = false;
    }
    startGame() {
        this.car.setStartGame()
        this.enemies.setStartGame()

        //presionar tecla para que el juego se inicie
    }
    gameWin() {
        //que pase un determinado numero de carEvil y gane y vuelva empezar
        return this.enemies.countDeadEnemies === 10
    }
    gameLost() {
        //que salte un msg Game Over, aceptar para volver a empezar como que salta un alert
        return this.enemies.CarEvils.find((element) => element.gameLost)
    }

    update() {
        if (this.gameLost() || this.gameWin()) {
            this.resetActors()
        }
    }
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        if (!this.start) {
            ctx.translate(this.position.x, this.position.y)
            ctx.font = '62px Consolas';
            ctx.fillStyle = '#000';
            ctx.fillText("Pulsa Enter para empezar", 0, 0)
        }
    }
    keyboardEventDown(key: string): void {
        switch (key) {
            case 'Enter':
                this.startGame();
                console.log(key, "enter");
                this.start = true;
                break;
        }
    }
    resetActors() {
        this.car.reset()
        this.enemies.reset()
    }
}