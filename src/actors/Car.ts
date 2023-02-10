import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { converAngletoRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';


export class Car extends Actor {
    // Atributo
    color: string;
    //speed: number;


    constructor(position = {x:0 , y:1000 } , size = { w: 300, h: 600 }, color = '#d62828') {
        // Posición inicial del Car
        super(position, size);
        // Dimensiones del Car
        this.color = color;
        //this.speed = 0;
     
    }
  
    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x,this.position.y);
        //ctx.rotate(converAngletoRad(this.angle));
        ctx.beginPath();
        ctx.fillRect(146,884,83,83); //// coordenadas del cuadrado negro para colision
        ctx.fillStyle = this.color;
        ctx.fillRect(150,940,25,25);
        ctx.fillRect(200,940,25,25);
        ctx.fillRect(150,900,25,25);
        ctx.fillRect(200,900,25,25);
        ctx.fillRect(175,885,25,25);
        ctx.fillRect(175,900,25,25);
        ctx.fillRect(175,925,25,25);
        ctx.fillStyle = '#202020'; 
        ctx.closePath();

    }

    update(): void {
       
    }
    
    keyboardEventDown(key: string): void {
        switch (key) {
            case 'ArrowRight':
                
                    if (this.position.x >= -153 && this.position.x <800) this.position.x =  this.position.x +25;
                    
                break;
            case 'ArrowLeft':
                 if (this.position.x >= -127 && this.position.x <850) this.position.x =  this.position.x -25;
                    
                break;
          
            default:
                console.log('unvalid key');
                break;
        }
    }

}