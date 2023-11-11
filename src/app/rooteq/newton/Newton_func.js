import { evaluate, derivative } from "mathjs";

export function Newton_func(equation, xstart, epsilon) {
    let data = [];
    let iteration = 0;
    let xm = xstart;
    let yk;
    let error;
    let F;
    let Fd;

    while (iteration < 100) { // You can adjust the number of iterations as needed
        F = evaluate(equation, { x: xm });
        Fd = derivative(equation, 'x').evaluate({ x: xm });
        yk = evaluate(equation, { x: xm });
        error = Math.abs(F / Fd);

        data.push({ iteration, xm, yk, error });

        if (error < epsilon) {
            break;
        }

        xm = xm - (F / Fd);
        iteration++;
    }

    return data;
}
