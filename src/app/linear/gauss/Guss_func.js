
export function Guss_func(A, B) {
    let n = A.length;
    let ans = []; // สร้างอาร์เรย์สำหรับเก็บคำตอบ

    for (let i = 0; i < n; i++) {
        // ทำการจัดการข้อมูลในเดียวกันก่อน
        for (let j = i + 1; j < n; j++) {
            let factor = A[j][i] / A[i][i];
            for (let k = i; k < n; k++) {
                A[j][k] -= factor * A[i][k];
            }
            B[j] -= factor * B[i];
        }
    }

    // ทำการคำนวณค่า x จากหลังไปหน้า (back substitution)
    for (let i = n - 1; i >= 0; i--) {
        ans[i] = B[i] / A[i][i];
        for (let j = i - 1; j >= 0; j--) {
            B[j] -= A[j][i] * ans[i];
        }
    }

    return ans;
}
