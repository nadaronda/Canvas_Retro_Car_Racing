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
    id: number;
    expired: boolean;
    gameLost: boolean;
    countDead: boolean;
    constructor(props: InitialEvilProps) {
        super(props.position);
        this.car = props.car;
        this.color = props.color || "green"
        this.touched = props.touched || false;
        this.id = parseInt((Math.random() * 10000).toFixed(0))
        this.expired = false;
        this.gameLost = false;
        this.countDead = false;

    }
    update(delta: number): void {//add formula de distancia entre dos puntos

        this.distance = distancia({ x: this.position.x, y: this.position.y }, { x: this.car.position.x, y: this.car.position.y });
        this.position.y += 5;

        //console.log(this.distance)

        if (this.distance <= this.car.size.w && this.distance <= this.car.size.h) {
            this.gameLost = true;
        };

        // console.log(this.distance)
        //if CarEvil sale del canvas eliminalo
        if (this.position.y >= 1000) {
            // (console.log(`${this.id} ha sido eliminado`))
            this.countDead = true

        };
        if (this.position.y >= 1050) {
            // (console.log(`${this.id} ha sido eliminado`))

            this.expired = true
        };

    }

    draw(ctx: CanvasRenderingContext2D, delta: number): void {

        ctx.translate(this.position.x, this.position.y)
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillStyle = this.color;
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

    }
}