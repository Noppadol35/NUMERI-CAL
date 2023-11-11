import * as math from 'mathjs';
export function Regression_simple(x, fx, mOrder, xValue) {
    let matrix_X = new Array(mOrder + 1);

    for (let i = 0; i <= mOrder; i++) {
        matrix_X[i] = new Array(mOrder + 1);
        for (let j = 0; j <= mOrder; j++) {
            if (i == 0 && j == 0) {
                matrix_X[i][j] = x.length;
            }
            else {
                matrix_X[i][j] = math.sum(x.map((val) => math.pow(val, i + j)));
            }
        }
    }
    // console.log(matrix_X);

    let matrix_Y = new Array(mOrder + 1);
    for (let i = 0; i <= mOrder; i++) {
        matrix_Y[i] = [math.sum(x.map((val, idx) => math.pow(val, i) * fx[idx]))];
    }
    // console.log(matrix_Y);

    let ans = math.lusolve(matrix_X, matrix_Y);
    console.log(ans);
    let sum = 0;
    for (let i = 0; i <= mOrder; i++) {
        sum += (math.pow(xValue, i) * ans[i]);
    }
    return sum;
}

let x = [10, 15, 20, 30, 40, 50, 60, 70, 80];
let fx = [5, 9, 15, 18, 22, 30, 35, 38, 43];
let mOrder = 1;
let xValue = 65;


console.log(Regression_simple(x, fx, mOrder, xValue));