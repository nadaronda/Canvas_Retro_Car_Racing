import { checkLimits } from './../utils/checkLimits';
import { Point } from '../types/Point';
import { Size } from '../types/Size';
import { converAngletoRad } from '../utils/convertAngleToRad';
import { Actor } from './Actor';

export class Car extends Actor {
    // Atributos
    size: Size;
    color: string;
    speed: number;
    acceleration: number;
    angle: number;
    angleSpeed: number;
    // maxSpeed: number;

    constructor(position = { x: 250, y: 250 }, size = { w: 100, h: 40 }, color = '#d62828') {
        // Posición inicial del Car
        super(position);
        // Dimensiones del Pacman
        this.size = size;
        this.color = color;
        this.speed = 0;
        this.acceleration = 0;
        this.angle = 0;
        this.angleSpeed = 0;
    }

    // Métodos
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(converAngletoRad(this.angle));

        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size.w + 20, -this.size.h / 2, this.size.w, this.size.h);
        ctx.fillStyle = '#202020';
        ctx.fillRect(-this.size.w + 20 + this.size.w - 20, -this.size.h / 2 + this.size.h - 35, 15, 30);
    }

    update(delta: number): void {
        this.angle += this.angleSpeed;
        this.angleSpeed *= 0.95;
        this.speed = this.speed * 0.95 + this.acceleration;
        let newPos: Point = {
            x: this.position.x + Math.cos(converAngletoRad(this.angle)) * this.speed * (delta * 30),
            y: this.position.y + Math.sin(converAngletoRad(this.angle)) * this.speed * (delta * 30) ,
        };
        if (checkLimits(newPos)) this.position = newPos;
    }

    keyboardEventDown(key: string): void {
        switch (key) {
            case 'ArrowRight':
                this.angleSpeed += 2.5;
                break;
            case 'ArrowLeft':
                this.angleSpeed -= 2.5;
                break;
            case 'ArrowUp':
                this.acceleration = 2;
                break;
            case 'ArrowDown':
                this.acceleration = -2;
                break;
            case ' ':
                this.speed = 0;
                break;
            default:
                console.log('unvalid key');
                break;
        }
    }

    keyboardEventUp(key: string): void {
        switch (key) {
            case 'ArrowUp':
                this.acceleration = 0;
                break;
            case 'ArrowDown':
                this.acceleration = 0;
                break;
            default:
                console.log('unvalid key');
                break;
        }
    }
}