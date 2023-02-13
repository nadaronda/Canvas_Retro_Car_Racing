import { convertToObject } from "../../node_modules/typescript/lib/typescript";
import { Point } from "../types/Point";
import { distancia } from "../utils/distance";
import { Actor } from "./Actor";
import { Car } from "./Car";
import { CarEvil } from "./CarEvil";
import _ from "lodash";

interface InitialEnemiesProps {
    position: Point,
    car: Car;
}
export class Enemies extends Actor {
    CarEvils: CarEvil[] = [];
    car: Car;
    constructor(props: InitialEnemiesProps) {
        super(props.position)
        this.car = props.car;
        //con un for crearemos los actores malos
        for (let i = 0; i < 35; i++) {

            const carEvil = new CarEvil({ position: { x: 0 + i + _.random(0, 900), y: 0 + i * -400 }, car: props.car })
            this.CarEvils.push(carEvil)
        }
    }
    update(delta: number): void {
    }
    draw(ctx: CanvasRenderingContext2D, delta: number): void {
    }

}