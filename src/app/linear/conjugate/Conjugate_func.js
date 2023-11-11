function f(x) {
    return 4 * Math.pow(x, 5) - 3 * Math.pow(x, 4) + Math.pow(x, 3) - 6 * x + 2;
}

function singleTrapezoidalRule(a, b) {
    const h = (b - a) / n * 2;
    const result = (h / 2) * (f(a) + f(b));
    return result;
}

const a = 2;
const b = 8;
const resultSingleTrapezoidal = singleTrapezoidalRule(a, b);
console.log("Single Trapezoidal Rule:", resultSingleTrapezoidal);
