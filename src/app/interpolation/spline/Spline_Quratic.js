function Spline_Quratic(x, y, xValue) {
    //function Spline_Quratic(x, y, xValue) {
    let n = x.length;
    let a = [];
    let b = [];
    let c = [];
    let d = [];
    let h = [];
    let alpha = [];
    let l = [];
    let mu = [];
    let z = [];
    let c2 = [];
    let c3 = [];
    for (let i = 0; i < n - 1; i++) {
        h[i] = x[i + 1] - x[i];
    }
    for (let i = 1; i < n - 1; i++) {
        alpha[i] = (3 / h[i]) * (y[i + 1] - y[i]) - (3 / h[i - 1]) * (y[i] - y[i - 1]);
    }
    l[0] = 1;
    mu[0] = 0;
    z[0] = 0;
    for (let i = 1; i < n - 1; i++) {
        l[i] = 2 * (x[i + 1] - x[i - 1]) - h[i - 1] * mu[i - 1];
        mu[i] = h[i] / l[i];
        z[i] = (alpha[i] - h[i - 1] * z[i - 1]) / l[i];
    }
    l[n - 1] = 1;
    z[n - 1] = 0;
    c[n - 1] = 0;
    for (let j = n - 2; j >= 0; j--) {
        c[j] = z[j] - mu[j] * c[j + 1];
        b[j] = (y[j + 1] - y[j]) / h[j] - h[j] * (c[j + 1] + 2 * c[j]) / 3;
        d[j] = (c[j + 1] - c[j]) / (3 * h[j]);
    }
    for (let i = 0; i < n - 1; i++) {
        if (xValue >= x[i] && xValue <= x[i + 1]) {
            let xMinusXi = xValue - x[i];
            let result = y[i] + b[i] * xMinusXi + c[i] * Math.pow(xMinusXi, 2) + d[i] * Math.pow(xMinusXi, 3);
            return result;
        }
    }

    return NaN;
}
let x = [2, 4, 6, 8, 10];
let y = [9.5, 8.0, 10.5, 39.5, 72.5];
let xValue = 4.5;
let resultQuadratic = Spline_Quratic(x, y, xValue);
console.log("Quadratic Spline Result:", resultQuadratic);
