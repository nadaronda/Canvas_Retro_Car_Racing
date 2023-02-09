import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { converAngletoRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';

export class Car extends Actor {
    // Atributos
    size: Size;
    color: string;
    //speed: number;
    //acceleration: number;
    // maxSpeed: number;

    constructor(position = {x:0 , y:1000 } , size = { w: 300, h: 600 }, color = '#d62828') {
        // Posición inicial del Car
        super(position);
        // Dimensiones del Car
        this.size = size;
        this.color = color;
        //this.speed = 0;
        //this.acceleration = 0;
    }
 
    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x,this.position.y);
        //ctx.rotate(converAngletoRad(this.angle));
        
        ctx.fillStyle = this.color;
        ctx.fillRect(100,900,100,100);
        ctx.fillRect(300,900,100,100);
        ctx.fillRect(200,800,100,100);
        ctx.fillRect(200,700,100,100);
        ctx.fillRect(200,600,100,100);
        ctx.fillRect(100,700,100,100);
        ctx.fillRect(300,700,100,100);
        ctx.fillStyle = '#202020'; 

    }

    update(): void {
       
    }
    
    keyboardEventDown(key: string): void {
        switch (key) {
            case 'ArrowRight':
                    if (this.position.x >= -100 && this.position.x <600) {
                        this.position.x =  this.position.x +100;
                    }{this.position.x}
                break;
            case 'ArrowLeft':
                 if (this.position.x >= 0 && this.position.x <610) {
                        this.position.x =  this.position.x -100;
                    }
                break;
          
            default:
                console.log('unvalid key');
                break;
        }
    }

}