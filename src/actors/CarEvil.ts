import { convertToObject } from "../../node_modules/typescript/lib/typescript";
import { Point } from "../types/Point";
import { distancia } from "../utils/distance";
import { Actor } from "./Actor";
import { Car } from "./Car";
interface InitialEvilProps {
    position: Point;
    car: Car;
    color?: string;
    touched?: boolean;

}
export class CarEvil extends Actor {
    color: string;
    car: Car;
    touched?: boolean;
    distance?: number;
    constructor(props: InitialEvilProps) {
        super(props.position);
        this.car = props.car;
        this.color = props.color || "green"
        this.touched = props.touched || false;


    }
    update(delta: number): void {//add formula de distancia entre dos puntos
        this.distance = distancia({ x: this.position.x, y: this.position.y }, { x: this.car.position.x, y: this.car.position.y });
        if (this.position.y > -2022 && this.position.y < 1093) { this.position.y += 5; }

        //console.log(this.distance)

        if (this.distance <= this.car.size.w && this.distance <= this.car.size.h) {
            location.reload()
        }
        console.log(this.distance)
    }
    draw(ctx: CanvasRenderingContext2D, delta: number): void {

        ctx.translate(this.position.x, this.position.y)
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        //ctx.fillStyle = '#202020';
        //ctx.fillRect(-2, -80, 80, 108);//cuadrado negro
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 25, 25);
        ctx.fillRect(26, -26, 25, 25);
        ctx.fillRect(26, -52, 25, 25);
        ctx.fillRect(26, -78, 25, 25);
        ctx.fillRect(52, -52, 25, 25);
        ctx.fillRect(0, -52, 25, 25);
        ctx.fillRect(52, 0, 25, 25);
        ctx.closePath();
        ctx.closePath();
        // ctx.fillStyle = "pink";
        // ctx.font = "40px Consolas";
        // ctx.fillText(`${this.distance?.toFixed(0)}`, 80, -20)


    }
}