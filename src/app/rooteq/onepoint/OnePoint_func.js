import { evaluate } from "mathjs";

export function OnePoint_func(equation, xstart, epsilon) {
    let data = [];
    let iteration = 0;
    let xm = xstart;
    let yk;
    let error;

    while (error > epsilon) { // You can adjust the number of iterations as needed
        yk = evaluate(equation, { x: xm }); // Calculate the function value at xm
        error = Math.abs(yk - xm); // Calculate the error

        data.push({ iteration, xm, yk, error });

        if (error < epsilon) {
            break;
        }

        xm = yk; // Update xm for the next iteration
        iteration++;
    }

    return data;
}
