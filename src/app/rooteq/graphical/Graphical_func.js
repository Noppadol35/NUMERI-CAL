import { evaluate } from "mathjs";

export function Graphical_func(equation, xstart, xend, epsilon) {
    let data = [];
    let x = xstart; 
    let yk = evaluate(equation, { x }); 
    let state = yk > 0 ? 1 : -1;
    let now = state;
    let error = 0;

    while (x <= xend) { 
        data.push({ x, yk, error }); 
        if (Math.abs(yk) < epsilon) { 
            break;
        }

        x += 0.000001; 
        yk = evaluate(equation, { x }); 
        error = Math.abs(yk); 
        now = yk > 0 ? 1 : -1; 
    }

    return data;
}
