import { Point } from './../types/Point';

export const checkLimits = (position: Point): boolean => {
    return position.x > 0 && position.x < 1022 && position.y > 0 && position.y < 1022;
};