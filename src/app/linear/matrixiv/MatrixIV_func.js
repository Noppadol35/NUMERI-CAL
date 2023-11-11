export function MatrixIV_func(A) {
    let n = A.length;
    let I = [];

    // สร้าง identity matrix
    for (let i = 0; i < n; i++) {
        I[i] = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                I[i][j] = 1;
            } else {
                I[i][j] = 0;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        // หา pivot
        let pivot = A[i][i];
        if (pivot === 0) {
            throw new Error("Matrix is not invertible");
        }

        // Scale the row to make the pivot 1
        for (let j = 0; j < n; j++) {
            A[i][j] /= pivot;
            I[i][j] /= pivot;
        }

        // Zero out other rows
        for (let k = 0; k < n; k++) {
            if (k !== i) {
                let factor = A[k][i];
                for (let j = 0; j < n; j++) {
                    A[k][j] -= factor * A[i][j];
                    I[k][j] -= factor * I[i][j];
                }
            }
        }
    }

    return I; // I เป็น matrix ที่ถกกลับของ A
}
