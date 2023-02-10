import { Point } from "../types/Point";
export const canvas = document.getElementById('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    // Cálculo de la mitad del canvas
export const canvasMid: Point = { x: canvas.width / 2, y: canvas.height / 2 };
