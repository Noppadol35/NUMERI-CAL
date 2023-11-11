import * as math from 'mathjs';
import nerdamer from 'nerdamer';
import 'nerdamer/Algebra.js';


export function Forward_Difference_Oh(fx, h, x, order) {
    function F(x) {
        return math.evaluate(fx, { x: x });
    }

    let diff_fx = fx;
    for (let i = 0; i < order; i++) {
        diff_fx = math.derivative(diff_fx, 'x').toString();
    }

    let True_value = math.evaluate(diff_fx, { x: x });

    let result = 0;
    if (order == 1) {
        result = (F(x + h) - F(x)) / h;
    }
    else if (order == 2) {
        result = (F(x + 2 * h) - 2 * F(x + h) + F(x)) / (h * h);
    }
    else if (order == 3) {
        result = (F(x + 3 * h) - 3 * F(x + 2 * h) + 3 * F(x + h) - F(x)) / (h * h * h);
    }
    else if (order == 4) {

        result = (F(x + 4 * h) - 4 * F(x + 3 * h) + 6 * F(x + 2 * h) - 4 * F(x + h) + F(x)) / (h * h * h * h);
    }
    else{
        return "Order must be less than 5";
    }
    
    
    let error = Math.abs((True_value - result)/True_value) * 100;
    return [result, True_value, error];

}

export function Backward_Difference_Oh(fx, h, x, order) {
    function F(x) {
        return math.evaluate(fx, { x: x });
    }

    let diff_fx = fx;
    for (let i = 0; i < order; i++) {
        diff_fx = math.derivative(diff_fx, 'x').toString();
    }

    let True_value = math.evaluate(diff_fx, { x: x });

    let result = 0;
    if (order == 1) {
        result = (F(x) - F(x - h)) / h;
    }
    else if (order == 2) {
        result = (F(x) - 2 * F(x - h) + F(x - 2 * h)) / (h * h);
    }
    else if (order == 3) {
        result = (F(x) - 3 * F(x - h) + 3 * F(x - 2 * h) - F(x - 3 * h)) / (h * h * h);
    }
    else if (order == 4) {

        result = (F(x) - 4 * F(x - h) + 6 * F(x - 2 * h) - 4 * F(x - 3 * h) + F(x - 4 * h)) / (h * h * h * h);
    }
    else{
        return "Order must be less than 5";
    }
    
    
    let error = Math.abs((True_value - result)/True_value) * 100;
    return [result, True_value, error];

}

export function Central_Difference_Oh2(fx, h, x, order) {
    function F(x) {
        return math.evaluate(fx, { x: x });
    }

    let diff_fx = fx;
    for (let i = 0; i < order; i++) {
        diff_fx = math.derivative(diff_fx, 'x').toString();
    }

    let True_value = math.evaluate(diff_fx, { x: x });

    let result = 0;
    if (order == 1) {
        result = (F(x + h) - F(x - h)) / (2 * h);
    }
    else if (order == 2) {
        result = (F(x + 2 * h) - 2 * F(x) + F(x - 2 * h)) / (2 * h * 2 * h);
    }
    else if (order == 3) {
        result = (F(x + 3 * h) - 3 * F(x + h) + 3 * F(x - h) - F(x - 3 * h)) / (2 * h * 2 * h * 2 * h);
    }
    else if (order == 4) {

        result = (F(x + 4 * h) - 4 * F(x + 2 * h) + 6 * F(x) - 4 * F(x - 2 * h) + F(x - 4 * h)) / (2 * h * 2 * h * 2 * h * 2 * h);
    }
    else{
        return "Order must be less than 5";
    }
    
    
    let error = Math.abs((True_value - result)/True_value) * 100;
    return [result, True_value, error];

}

export function Forward_Difference_Oh2(fx, h, x, order) {
    function F(x) {
        return math.evaluate(fx, { x: x });
    }

    let diff_fx = fx;
    for (let i = 0; i < order; i++) {
        diff_fx = math.derivative(diff_fx, 'x').toString();
    }

    let True_value = math.evaluate(diff_fx, { x: x });

    let result = 0;
    if (order == 1) {
        result = (-F(x + 2 * h) + 4 * F(x + h) - 3 * F(x)) / (2 * h);
    }
    else if (order == 2) {
        result = (-F(x + 3 * h) + 4 * F(x + 2 * h) - 5 * F(x + h) + 2 * F(x)) / (h * h);
    }
    else if (order == 3) {
        result = (-3 * F(x + 4 * h) + 14 * F(x + 3 * h) - 24 * F(x + 2 * h) + 18 * F(x + h) - 5 * F(x)) / (2 * h * h * h);
    }
    else if (order == 4) {       
        result = (-2 * F(x + 5 * h) + 11 * F(x + 4 * h) - 24 * F(x + 3 * h) + 26 * F(x + 2 * h) - 14 * F(x + h) + 3 * F(x)) / (h * h * h * h);
    }
    else{
        return "Order must be less than 5";
    }
    
    
    let error = Math.abs((True_value - result)/True_value) * 100;
    return [result, True_value, error];

}

export function Backward_Difference_Oh2(fx, h, x, order) {
    function F(x) {
        return math.evaluate(fx, { x: x });
    }

    let diff_fx = fx;
    for (let i = 0; i < order; i++) {
        diff_fx = math.derivative(diff_fx, 'x').toString();
    }

    let True_value = math.evaluate(diff_fx, { x: x });

    let result = 0;
    if (order == 1) {
        result = (3 * F(x) - 4 * F(x - h) + F(x - 2 * h)) / (2 * h);
    }
    else if (order == 2) {
        result = (2 * F(x) - 5 * F(x - h) + 4 * F(x - 2 * h) - F(x - 3 * h)) / (h * h);
    }
    else if (order == 3) {
        result = (5 * F(x) - 18 * F(x - h) + 24 * F(x - 2 * h) - 14 * F(x - 3 * h) + 3 * F(x - 4 * h)) / (2 * h * h * h);
    }
    else if (order == 4) {       
        result = (3 * F(x) - 14 * F(x - h) + 26 * F(x - 2 * h) - 24 * F(x - 3 * h) + 11 * F(x - 4 * h) - 2 * F(x - 5 * h)) / (h * h * h * h);
    }
    else{
        return "Order must be less than 5";
    }
    
    
    let error = Math.abs((True_value - result)/True_value) * 100;
    return [result, True_value, error];

}

export function Central_Difference_Oh4(fx, h, x, order) {
    function F(x) {
        return math.evaluate(fx, { x: x });
    }

    let diff_fx = fx;
    for (let i = 0; i < order; i++) {
        diff_fx = math.derivative(diff_fx, 'x').toString();
    }

    let True_value = math.evaluate(diff_fx, { x: x });

    let result = 0;
    if (order == 1) {
        result = (-F(x + 2 * h) + 8 * F(x + h) - 8 * F(x - h) + F(x - 2 * h)) / (12 * h);
    }
    else if (order == 2) {
        result = (-F(x + 2 * h) + 16 * F(x + h) - 30 * F(x) + 16 * F(x - h) - F(x - 2 * h)) / (12 * h * h);
    }
    else if (order == 3) {
        result = (-F(x + 3 * h) + 8 * F(x + 2 * h) - 13 * F(x + h) + 13 * F(x - h) - 8 * F(x - 2 * h) + F(x - 3 * h)) / (8 * h * h * h);
    }
    else if (order == 4) {       
        result = (-F(x + 3 * h) + 12 * F(x + 2 * h) - 39 * F(x + h) + 56 * F(x) - 39 * F(x - h) + 12 * F(x - 2 * h) - F(x - 3 * h)) / (6 * h * h * h * h);
    }
    else{
        return "Order must be less than 5";
    }
    
    
    let error = Math.abs((True_value - result)/True_value) * 100;
    return [result, True_value, error];

}
