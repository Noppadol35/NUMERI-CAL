export function Jacobi_func(matrixA, matrixB, epsilon, xValues) {
    const maxIterations = 100; // จำนวนสูงสุดของการทำซ้ำ
    let iteration = 0;
    let converged = false;
    let xNew = [...xValues]; // ค่า x ใหม่

    while (!converged && iteration < maxIterations) {
        // ทำการหาค่า x ใหม่ตามวิธี Jacobi และตรวจสอบว่าค่า x คงเดิมหรือไม่
        for (let i = 0; i < matrixA.length; i++) {
            let sum = 0;
            for (let j = 0; j < matrixA[i].length; j++) {
                if (j !== i) {
                    sum += matrixA[i][j] * xValues[j];
                }
            }
            xNew[i] = (matrixB[i] - sum) / matrixA[i][i];
        }

        converged = true;
        for (let i = 0; i < xValues.length; i++) {
            if (Math.abs(xNew[i] - xValues[i]) > epsilon) {
                converged = false;
                break;
            }
        }

        xValues = [...xNew];
        iteration++;
    }

    return xValues;
}

let matrixA = [5, 2, 0, 0,
    2, 5, 2, 0,
    0, 2, 5, 2,
    0, 0, 2, 5];
let matrixB = [12, 17, 14, 7];
let xValues = [0, 0, 0, 0];
let epsilon = 0.00000001;
console.log(Jacobi_func(matrixA, matrixB, epsilon, xValues));

