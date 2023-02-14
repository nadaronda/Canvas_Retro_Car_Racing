import { Actor } from './actors/Actor';
import { FPSViewer } from './actors/FPSViewer';
import { Car } from './actors/Car';
import { canvas, canvasMid, ctx } from './utils/getCanvas';
import { Enemies } from './actors/Enemies';
import { Map } from './actors/Map';

window.onload = () => {
    //Actors
    const player: Car = new Car({ x: canvasMid.x, y: canvas.height - 39 }, { w: 80, h: 108 });
    const enemies = new Enemies({ position: { x: 0, y: -1020 }, car: player });
    const actors: Actor[] = [
        new Map,
        new FPSViewer(),
        player,
        //new CarEvil({ position: { x: 0, y: -1020 }, car: player }),
        ...enemies.CarEvils
    ];


    // Inicializar el primer frame
    let lastFrame = 0;

    // Renderizado
    // "time" es el tiempo transcurrido
    const render = (time: number) => {
        // "delta" es la diferencia de tiempo entre el frame anterior y el actual
        let delta = (time - lastFrame) / 1000;

        // Actualizando "lastFrame"
        lastFrame = time;

        // Actualiza la posición de los actores del canvas
        actors.forEach((actor) => {
            actor.update(delta);
        });

        // Borra lo pintado en el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        actors.forEach((actor) => {
            ctx.save();
            actor.draw(ctx, delta);
            ctx.restore();
        });
        // Dibuja o pinta los actores en el canvas




        // Recursividad para el renderizado correcto
        window.requestAnimationFrame(render);
    };

    // Primera llamada del renderizado
    window.requestAnimationFrame(render);

    // Escuchar la tecla presionada
    document.body.addEventListener('keydown', (e) => {
        actors.forEach((player) => {
            player.keyboardEventDown(e.key);
        });
    });

    // Escuchar la tecla liberada
    document.body.addEventListener('keyup', (e) => {
        actors.forEach((player) => {
            player.keyboardEventUp(e.key);
        });
    });
};