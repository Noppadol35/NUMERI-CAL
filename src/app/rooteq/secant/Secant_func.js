import { evaluate } from "mathjs";

export function Secant_func(equation, xstart, xend, epsilon) {
    //secant method
    let data = [];
    let iteration = 0;
    let xm = 0;
    let yk = 0;
    let error;

    let x0 = xstart;
    let x1 = xend;
    let f0 = evaluate(equation, { x: x0 });
    let f1 = evaluate(equation, { x: x1 });

    while (Math.abs(f1) > epsilon) {
        iteration++;
        xm = x1 - (f1 * (x1 - x0)) / (f1 - f0);
        yk = evaluate(equation, { x: xm });
        error = Math.abs(x1 - xm);

        data.push({ iteration, xm, yk, error });

        x0 = x1;
        x1 = xm;
        f0 = f1;
        f1 = yk;
    }

    return data;
}
