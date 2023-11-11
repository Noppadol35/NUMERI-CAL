function Spline_Linear(x,y,xValue) {
    for (let i = 0; i < x.length - 1; i++) {
        if (xValue >= x[i] && xValue  <= x[i + 1]) {
            let slope = (y[i + 1] - y[i]) / (x[i + 1] - x[i]);
            return y[i] + slope * (xValue - x[i]);
        }
    }
    return NaN;
}

// let x = [2,4,6,8,10];
// let y = [9.5,8.0,10.5,39.5,72.5];
// let xValue = 4.5;
// console.log("LinearSpline Result: ", Spline_Linear(x,y,xValue));