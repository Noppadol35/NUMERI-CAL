export function GuassJordan(matrixA, matrixB) {
    let n = A.length;
    let ans = new Array(n).fill(0); // สร้างอาร์เรย์สำหรับเก็บคำตอบ

    // ทำ Guass-Jordan Elimination
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                let factor = matrixA[j][i] / matrixA[i][i];
                for (let k = 0; k < n; k++) {
                    matrixA[j][k] -= factor * matrixA[i][k];
                }
                matrixB[j] -= factor * matrixB[i];
            }
        }
    }
    console.log("Matrix Guass Jordan A", matrixA);
    console.log("Matrix Guass Jordan B", matrixB);

    // หาคำตอบ
    for (let i = 0; i < n; i++) {
        ans[i] = matrixB[i] / matrixA[i][i];
    }

    return ans;
}

// const A = [
//     [-2, 3, 1],
//     [3, 4, -5],
//     [1, -2, 1],
// ]

// const B = [9, 0, -4];

// const ans = GuassJordan(A, B);
// console.log("Matrix Guass Jordan ans", ans );