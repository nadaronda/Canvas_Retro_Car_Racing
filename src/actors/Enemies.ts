import { Actor } from "./Actor";
import { Car } from "./Car";
import { CarEvil } from "./CarEvil";
import _ from "lodash";


interface InitialEnemiesProps {
    //position: Point,
    car: Car;
}
export class Enemies extends Actor {
    CarEvils: CarEvil[];
    car: Car;
    constructor(props: InitialEnemiesProps) {
        super(/*props.position*/)
        this.car = props.car;
        this.CarEvils=[];

    //Creamos infinitos actores con el setInterval llamando la funcion de abajo
    setInterval(()=>{
        this.addEnemies();
    },1000);
            
        
    }
    //add actor a un array vacio
   addEnemies(){
    const carEvil = new CarEvil({ position: { x: _.random(0, 900), y: 0 }, car: this.car })
    this.CarEvils.push(carEvil)
    console.log(`Created${carEvil.id} enemigo${this.CarEvils.length}`)
   }
   //se ven los actores que hay dentro del array
    getEnemies(){
        return this.CarEvils;
    }
    update(){
        
        //borra los enemigos que se salen del limite del canvas
        const not_expired_carEvil= this.CarEvils.filter((a)=>{
            const carEvil = a as CarEvil;
           return !carEvil.expired;

        })
        this.CarEvils = not_expired_carEvil;
    }
}