import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { converAngletoRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';


export class Car extends Actor {
    // Atributo
    color: string;
    //speed: number;


    constructor(position = { x: 0, y: 1000 }, size = { w: 300, h: 600 }, color = '#d62828') {
        // Posición inicial del Car
        super(position, size);
        // Dimensiones del Car
        this.color = color;
        //this.speed = 0;

    }

    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        //ctx.rotate(converAngletoRad(this.angle));
        //if(){}
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillStyle = '#202020';
        ctx.fillRect(-2, -80, 80, 108);//cuadrado negro
        ctx.fillStyle = 'yellow';
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
        /*if (this.position.x >= -153 && this.position.x < 800)this.position.x = this. position.x + 25;*/
    }

    keyboardEventDown(key: string): void {
        switch (key) {
            case 'ArrowRight':


                this.position.x = this.position.x + 25

                break;
            case 'ArrowLeft':
                /*if (this.position.x >= -127 && this.position.x < 850) this.position.x = this.position.x - 25;*/
                this.position.x = this.position.x - 25
                break;

            default:
                console.log('unvalid key');
                break;
        }
    }

}