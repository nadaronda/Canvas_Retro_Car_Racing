import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Actor } from './Actor';


export class Car extends Actor {
    // Atributo
    color: string;
    constructor(position = { x: 0, y: 1000 }, size = { w: 300, h: 600 }, color = '#d62828') {
        // Posición inicial del Car
        super(position, size);
        // Dimensiones del Car
        this.color = color;
    }
    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        //ctx.fillStyle = '#202020';
        //ctx.fillRect(-2, -80, 80, 108);
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
        let newPosition: Point = { x: this.position.x, y: 0 }
        if (checkLimits(newPosition)) this.position = newPosition;
    }

    keyboardEventDown(key: string): void {
        switch (key) {
            case 'ArrowRight':

                if (this.position.x >= 0 && this.position.x < 930) this.position.x = this.position.x + 25;
                break;
            case 'ArrowLeft':
                if (this.position.x >= 20 && this.position.x < 1050) this.position.x = this.position.x - 25;
                break;

            default:
                console.log('unvalid key');
                break;
        }
    }

}