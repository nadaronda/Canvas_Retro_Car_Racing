import { Actor } from './Actor';

export class FPSViewer extends Actor {
    // Atributos
    constructor(position = { x: 10, y: 35 }) {// el constructor y position es para darle un aposicion sie esto esta ,
        super(position);                         //no es necesario pionerlo en el main
    }
    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        const FPS = (1 / delta).toFixed(0);
        ctx.font = '35px Consolas';
        ctx.fillStyle = '#000';
        ctx.fillText(`FPS: ${FPS}`, this.position.x, this.position.y);
    }
}