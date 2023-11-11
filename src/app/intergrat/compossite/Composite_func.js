import * as math from 'mathjs';
import nerdamer from 'nerdamer';
import 'nerdamer/Algebra.js';

export function Composite_func(functionText, a, b, n) {
    function f(x) {
        return math.evaluate(functionText, { x: x });
    }
    let expression = nerdamer.integrate(functionText, 'x');
    console.log("expression :", expression.toString());

    let left = math.evaluate(expression.toString(), { x: a });
    let right = math.evaluate(expression.toString(), { x: b });

    // let Ture_value = 155930.4;
    let Ture_value = right - left;
    console.log("Ture_value :", Ture_value);


    if (n > 0) {
        try {
            let h = (b - a) / n;
            console.log("h :", h);
            let sum = 0;
            for (let i = 1; i < n; i++) {
                //let s_i = a + i * h;
                sum += f(a + i * h);
            }
            let result = h / 2 * (f(a) + f(b) + 2 * sum);
            let error = Math.abs((Ture_value - result) / Ture_value) * 100;
            return { result: result, error: error + "%" };
        }
        catch (error) {
            return "ERROR: " + error;
        }
    }
    else {
        return "ERROR";
    }

    console.log(`พื้นที่ใต้กราฟของ ${functionText} ระหว่าง ${a} และ ${b} คือ ${result}`);
    console.log(`ความคลาดเคลื่อน: ${result.error}`);

}

// const functionText = '4x^5-3x^4+x^3-6x+2'; // ฟังก์ชันตัวอย่าง x^2
// const a = 2; // จุดเริ่ม
// const b = 8; // จุดจบ
// const n = 2; // จำนวนขั้นบันได

// const result = Composite_func(functionText, a, b, n);
// console.log(`พื้นที่ใต้กราฟของ ${functionText} ระหว่าง ${a} และ ${b} คือ ${result}`);
// console.log(`ความคลาดเคลื่อน: ${result.error}`);
