import { Actor } from "./Actor";
import { Car } from "./Car";
import { CarEvil } from "./CarEvil";
import _ from "lodash";

interface InitialEnemiesProps {
    car: Car;
}
export class Enemies extends Actor {
    CarEvils: CarEvil[];
    car: Car;
    startGame: boolean;
    countDeadEnemies: number;
    win: boolean;
    lost: boolean;

    constructor(props: InitialEnemiesProps) {
        super()
        this.car = props.car;
        this.CarEvils = [];
        this.startGame = false;
        this.countDeadEnemies = 0;
        this.win = false;
        this.lost = false;
        //Creamos infinitos actores con el setInterval llamando la funcion de abajo
        setInterval(() => {
            this.addEnemies();
        }, 1000);
    }
    contar() {
        if (this.CarEvils.filter((element) => {
            element.expired && this.countDeadEnemies++
        })
        ) { }
    }
    //add actor a un array vacio
    addEnemies() {
        if (!this.win) {
            const carEvil = new CarEvil({ position: { x: _.random(0, 900), y: 0 }, car: this.car })
            this.startGame && this.CarEvils.push(carEvil)
        } else if (this.lost = true) {
            const carEvil = new CarEvil({ position: { x: _.random(0, 900), y: 0 }, car: this.car })
            this.startGame && this.CarEvils.push(carEvil)
        }



        // console.log(`Created${carEvil.id} enemigo${this.CarEvils.length}`)
    }
    //se ven los actores que hay dentro del array
    getEnemies() {
        return this.CarEvils;
    }
    update(delta: number): void {
        this.contar()
        //borra los enemigos que se salen del limite del canvas
        const not_expired_carEvil = this.CarEvils.filter((a) => {
            const carEvil = a as CarEvil;
            return !carEvil.expired;
        })
        this.CarEvils = not_expired_carEvil;


    }
    //reset enemies
    reset() {
        this.CarEvils = []
        this.win = true
        this.countDeadEnemies = 0

    }
    //para comenzar a crear los enemigos 
    setStartGame() {
        this.startGame = true
    }
}