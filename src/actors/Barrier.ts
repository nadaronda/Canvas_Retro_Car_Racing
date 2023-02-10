import { convertToObject } from "../../node_modules/typescript/lib/typescript";
import { Point } from "../types/Point";
import { Actor } from "./Actor";
import { Car } from "./Car";
interface InitialBarrierProps{
    position: Point;
    car: Car;
    color?: string;
    touched?: boolean;
    distance?: number;
}
export class Barrier extends Actor {
    color: string;
    car: Car;
    touched?: boolean;
    distance?: number;
     constructor(props: InitialBarrierProps) {
         super(props.position = { x: 100, y: -500 });
         this.car = props.car;
         this.color = props.color || "green"
         this.touched = props.touched || false;
         this.distance = props.distance;
       
    }
    update(delta: number): void {//add formula de distancia entre dos puntos
     this.distance = Math.sqrt(Math.pow(this.position.x - this.car.position.x, 2) + Math.pow(this.position.y - this.car.position.y, 2))
        this.position.y += 1; 
        console.log(this.distance)
         /* this.position.y += 1; 
        if (this.car.position.x < this.position.x + this.size.w) { console.log("tocado") }
        if (this.car.position.y < this.position.y + this.size.h) { console.log("tocado") }
        if (this.position.x+this.size.w> this.position.x ) { console.log("tocado") }
        if(this.position.y+this.size.h> this.position.y ){console.log("tocado")}*/
        if (this.distance==80){alert("game Over")}
    }
    draw(ctx: CanvasRenderingContext2D, delta: number): void{
        ctx.translate(this.position.x, this.position.y)
        ctx.beginPath();
        ctx.fillRect(146,884,83,83);// coordenadas del cuadrado negro para colision
        ctx.fillStyle = this.color;
        ctx.fillRect(150,940,25,25);
        ctx.fillRect(200,940,25,25);
        ctx.fillRect(150,900,25,25);
        ctx.fillRect(200,900,25,25);
        ctx.fillRect(175,885,25,25);
        ctx.fillRect(175,900,25,25);
        ctx.fillRect(175, 925, 25, 25);
        ctx.closePath();
        /*ctx.fillStyle = "pink";
        ctx.font = "40px Consolas";
        ctx.fillText (`${this.distance?.toFixed(0)}`,0,500)*/

       
    }
}