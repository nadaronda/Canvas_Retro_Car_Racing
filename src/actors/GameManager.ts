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
    win: boolean;
    finish: boolean;
    lost: boolean;

    constructor(props: InitialGameManagerProps) {
        super(props.position)
        this.car = props.car;
        this.enemies = props.enemies;
        this.start = false;
        this.finish = false;
        this.win = false;
        this.lost = false;

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
        if (this.gameWin()) {
            this.win = true
            this.enemies.reset()

        }
        if (this.gameLost()) {
            this.lost = true
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
        console.log(this.win)
        if (this.win) {
            ctx.translate(this.position.x, this.position.y)
            ctx.font = '62px Consolas';
            ctx.fillStyle = '#000';
            ctx.fillText("BIEN HAS GANADO", 0, 0)
            ctx.font = '50px Consolas';
            ctx.fillText("Pulse la tecla F5 para empezar", 0, 100)
        }
        ctx.font = '35px Consolas';
        ctx.fillStyle = '#000';
        ctx.fillText(`Coches adelantados: ${this.enemies.countDeadEnemies}`, this.position.x + 100, this.position.y - 465);

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