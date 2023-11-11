import * as math from 'mathjs';
import nerdamer from 'nerdamer';
import 'nerdamer/Algebra.js';

export function Simpson_func(functionText, a, b) {
    function f(x) {
        return math.evaluate(functionText, { x: x });
    }
    let n = 1;
    if (n > 0) {
        let expression = nerdamer.integrate(functionText, 'x');
        let left = math.evaluate(expression.toString(),{x:a});
        let right = math.evaluate(expression.toString(),{x:b});

        let Ture_value = right - left
        console.log("Ture : ", Ture_value)
        let h = (b - a) / (n * 2);
        console.log("h :", h);
        let sum = 0;
        let x = a + h;
        for (let i = 1; x < b; i++) {

            if (i % 2 == 0) {
                sum += 2 * f(x);
                console.log("F(", x, ")x2 :", f(x));
            }
            else {
                sum += 4 * f(x);
                console.log("F(", x, ")x4 :", f(x));
            }
            x = x + h;
        }
        let result = h / 3 * (f(a) + f(b) + sum);
        let error = Math.abs((Ture_value - result) / Ture_value) * 100;
        return { result: result, error: error + "%" };
    }
    else {
        return "ERROR";
    }
}
//console.log(ComposSim_func("x^7+2x^3-1", -1, 2));