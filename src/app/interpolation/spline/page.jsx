'use client';
import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

function Spline() {
  let [numPoints, setNumPoints] = useState(1); // จำนวนจุด
  let [data, setData] = useState([{ id: 1, x: "", fx: "" }]); // ข้อมูล x0 และ f(x0)
  let [xValue, setXValue] = useState(""); // X value
  let [ans, setAns] = useState(""); // คำตอบ

  function calculate() {
    console.log(data);
    console.log(xValue);

    let x = new Array();
    let y = new Array();

    for (let i = 0; i < data.length; i++) {
      x.push(parseFloat(data[i]["x"]));
      y.push(parseFloat(data[i]["fx"]));
    }

    console.log(x);
    console.log(y);

    let result = Lagrange_func(x, y, xValue);
    console.log(result);
    setAns(result);
  }

  // เพิ่มจำนวนจุด
  let addPoint = () => {
    setNumPoints(numPoints + 1);
    let newData = [...data, { id: numPoints + 1, x: "", fx: "" }];
    setData(newData);
  };

  // ลดจำนวนจุด
  let removePoint = () => {
    if (numPoints > 1) {
      setNumPoints(numPoints - 1);
      let newData = [...data];
      newData.pop();
      setData(newData);
    }
  };

  // อัพเดทข้อมูล x0 และ f(x0)
  let updateData = (index, field, value) => {
    let newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  // อัพเดท X value
  let updateXValue = (value) => {
    setXValue(value);
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Spline Interpolation</h1>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <label htmlFor="method" className="block">
          Method:
        </label>
        <select
          id="method"
          className="block px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-300"
        >
          <option value="linear">Linear</option>
          <option value="quadratic">Quadratic</option>
          <option value="cubic">Cubic</option>
        </select>

        <label>Number of points: {numPoints}</label>
        <Button variant="contained" color="primary" onClick={addPoint}>
          <Add />
        </Button>
        <Button variant="contained" color="secondary" onClick={removePoint}>
          <Remove />
        </Button>
      </div>
      <div className="flex justify-center items-center mb-4">
        <Box>
          <div className="flex items-center space-x-10 mb-2">
            <label>X Value:</label>
            <TextField
              type="text"
              label="xValue"
              value={xValue}
              onChange={(e) => updateXValue(e.target.value)}
            />
          </div>
          {data.map((point, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <label>{index + 1}.</label>
              <TextField
                type="text"
                label={`x${index}`}
                value={point.x}
                onChange={(e) => updateData(index, "x", e.target.value)}
              />
              <TextField
                type="text"
                label={`f(x${index})`}
                value={point.fx}
                onChange={(e) => updateData(index, "fx", e.target.value)}
              />
            </div>
          ))}
        </Box>
      </div>
      <Button variant="contained" color="primary" onClick={calculate}>
        Calculate
      </Button>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Result:</h2>
        {ans}
      </div>
    </div>
  );
}

export default Spline;
