import { det } from 'mathjs';

export function Cramer_func(A, B) {
    let temp = [];
    let detA = det(A);
    let ans = [];


    for (let i = 0; i < A.length; i++) {

        for (let j = 0; j < A.length; j++) {
            temp[j] = A[j][i];
        }

        for (let j = 0; j < A.length; j++) {
            A[j][i] = B[j];
        }
        ans.push(det(A) / detA);

        for (let j = 0; j < A.length; j++) {
            A[j][i] = temp[j];
        }


    }

    return ans;
}

// let a = [[-2, 3, 1], [3, 4, -5], [1, -2, 1]];
// let b = [9, 0, -4];

// console.log(Cramer_rule(a, b));