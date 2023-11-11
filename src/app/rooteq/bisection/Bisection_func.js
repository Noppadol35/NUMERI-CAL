// Bisection_func.js
import { evaluate } from "mathjs";

export function Bisection_func(equation, xstart, xend, epsilon) {
    let data = [];
    let iteration = 0;
    let xm = 0;
    let yk = 0;
    let error = xend - xstart;

    while (error > epsilon) {
        xm = (xstart + xend) / 2;
        yk = evaluate(equation, { x: xm });
        data.push({ iteration, xm, yk, error });

        if (yk === 0) {
            break;
        } else if (yk * evaluate(equation, { x: xend }) > 0) {
            xend = xm;
        } else {
            xstart = xm;
        }

        error = Math.abs(xend - xstart);
        iteration++;
    }

    return data;
}
