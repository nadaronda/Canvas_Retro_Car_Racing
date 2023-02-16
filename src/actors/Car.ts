import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Actor } from './Actor';
import { canvas, canvasMid } from '../utils/getCanvas';
import { Size } from '../types/Size';

interface InitialCarProps {
    position?: Point;
    size: Size;
    color?: string[];
}
export class Car extends Actor {
    // Atributo
    color: string[];
    size: Size;
    startGame: boolean;
    constructor(props: InitialCarProps) {
        // Posición inicial del Car
        super(props.position = { x: canvasMid.x, y: canvas.height - 39 });
        // Dimensiones del Car
        this.size = props.size || { w: 300, h: 600 };
        this.color = props.color || ['#d62828', "green"];
        this.startGame = false;

    }
    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        ctx.beginPath();
        ctx.fillStyle = (this.color[parseInt(Math.random().toFixed(0))]);
        ctx.fillStyle = '4f000b';
        ctx.fillRect(0, 0, 25, 25);
        ctx.fillRect(26, -26, 25, 25);
        ctx.fillRect(26, -52, 25, 25);
        ctx.fillRect(26, -78, 25, 25);
        ctx.fillRect(52, -52, 25, 25);
        ctx.fillRect(0, -52, 25, 25);
        ctx.fillRect(52, 0, 25, 25);
        ctx.closePath();

    }

    update(): void {
        if (this.startGame) {
            let newPosition: Point = { x: this.position.x, y: 0 }
            if (checkLimits(newPosition)) this.position = newPosition;
        }
    }

    keyboardEventDown(key: string): void {
        switch (key) {
            case 'ArrowRight':
                if (this.position.x >= 0 && this.position.x < 930 && this.startGame) this.position.x = this.position.x + 25;
                break;
            case 'ArrowLeft':
                if (this.position.x >= 20 && this.position.x < 1050 && this.startGame) this.position.x = this.position.x - 25;
                break;
        }
    }
    reset() {
        this.position = { x: canvasMid.x, y: canvas.height - 39 }
    }
    setStartGame() {
        this.startGame = true
    }

}