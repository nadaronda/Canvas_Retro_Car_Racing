import { converAngletoRad } from './../utils/convertAngleToRad';
import { Actor } from './Actor';

let backgroundMap: string[][] = `WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW............WWW............WWW............WW
WW..........................................WW
WW..........................................WW
WW..........................................WW
WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`
    .split('\n')
    .map((row) => row.split(''));

const totalRatio: number = Math.floor(1024 / backgroundMap.length);

export class Map extends Actor {
    draw(ctx: CanvasRenderingContext2D): void {
        for (let y = 0; y < backgroundMap.length; y++) {
            for (let x = 0; x < backgroundMap[y].length; x++) {
                let pos: string = backgroundMap[y][x];
                ctx.beginPath();
                if (pos === 'W') {
                    ctx.fillStyle = '#ffafcc';
                    ctx.fillRect(x * totalRatio, y * totalRatio, totalRatio, totalRatio);
                }
                if (pos === '.') {
                    ctx.fillStyle = '#bde0fe';
                    ctx.arc(x * totalRatio + totalRatio / 2, y * totalRatio + totalRatio / 2, 5, 0, converAngletoRad(360));
                    ctx.fill();
                }
                if (pos === '-') {
                    ctx.fillStyle = '#fefae0';
                    ctx.fillRect(x * totalRatio, y * totalRatio, totalRatio, totalRatio);
                }
                if (pos === 'o') {
                    ctx.fillStyle = '#8ecae6';
                    ctx.fillRect(x * totalRatio, y * totalRatio, totalRatio, totalRatio);
                }
                if (pos === '*') {
                    ctx.fillStyle = '#e63946';
                    ctx.arc(x * totalRatio + totalRatio / 2, y * totalRatio + totalRatio / 2, 5, 0, converAngletoRad(360));
                    ctx.fill();
                }
                ctx.closePath();
            }
        }
    }
}

console.log(backgroundMap);
