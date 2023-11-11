import { evaluate } from "mathjs";

export function Flase_func(equation, xstart, xend, epsilon) {
    let data = [];
    let iteration = 0;
    let xl = xstart;
    let xr = xend;
    let xm = 0;
    let old_xm = 0;

    while (true) {
        xm = (xl * evaluate(equation, { x: xr }) - xr * evaluate(equation, { x: xl })) / (evaluate(equation, { x: xr }) - evaluate(equation, { x: xl }));
        let yk = evaluate(equation, { x: xm });
        let error = xr - xl;

        data.push({ iteration, xm, yk, error });

        if (evaluate(equation, { x: xm }) * evaluate(equation, { x: xr }) > 0) {
            xr = xm;
        } else {
            xl = xm;
        }

        if (Math.abs((xm - old_xm) / xm) * 100 < epsilon) {
            break;
        }

        old_xm = xm;
        iteration++;

        console.log("Iteration " + iteration + ": xm = " + xm);

        if (iteration >= 1000) {
            console.log("Iteration limit exceeded.");
            break;
        }
    }

    return data;
}
