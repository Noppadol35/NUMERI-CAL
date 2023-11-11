'use client';

import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { Regression_simple } from "./Regression_simple.js";
import { Regression_multiple } from "./Regression_Multiple.js";

function Regression() {
  let [numPoints, setNumPoints] = useState(1);
  let [data, setData] = useState([{ id: 1, x: "", fx: "" }]);
  let [xValue, setXValue] = useState("");
  let [mOrder, setMOrder] = useState("");
  let [ans, setAns] = useState("");
  let [selectedMethod, setSelectedMethod] = useState("Simple_Regression");
  let [kValue, setKValue] = useState("");

  function calculate() { 
    let x = [];
    let fx = [];

    for (let i = 0; i < data.length; i++) {
      x.push(parseFloat(data[i]["x"]));
      fx.push(parseFloat(data[i]["fx"]));
    }

    if(selectedMethod === "Simple_Regression"){
    let result = Regression_simple(x,fx, xValue, mOrder);
    setAns(result);
    }
    else{
      let result = Regression_multiple(x, y, xValue);
      setAns(result);
    }
  }

  let addPoint = () => {
    setNumPoints(numPoints + 1);
    let newData = [...data, { id: numPoints + 1, x: "", fx: "" }];
    setData(newData);
  };

  let removePoint = () => {
    if (numPoints > 1) {
      setNumPoints(numPoints - 1);
      let newData = [...data];
      newData.pop();
      setData(newData);
    }
  };

  let updateData = (index, field, value) => {
    let newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  let updateXValue = (value) => {
    setXValue(value);
  };

  let updateMOrder = (value) => {
    setMOrder(value);
  };

  let updateKValue = (value) => {
    setKValue(value);
  };

  let updateSelectedMethod = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">Regression Interpolation</h1>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <label htmlFor="method" className="block">
          Method:
        </label>
        <select
          id="method"
          className="block px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none focus:border-blue-300"
          onChange={(e) => updateSelectedMethod(e.target.value)}
        >
          <option value="Simple_Regression">Simple Regression</option>
          <option value="Multiple_Regression">Multiple Regression</option>
        </select>
      </div>

      {/* Corrected placement of the "Number of points" label and buttons */}
      <div className="flex justify-center mb-4">
      {selectedMethod === "Multiple_Regression" ? (
          <div className="flex items-center space-x-10 mb-2">
            <label>K (Number of x):</label>
            <TextField
              type="text"
              label="kValue"
              value={kValue}
              onChange={(e) => updateKValue(e.target.value)}
            />
          </div>
        ) : (
          <div className="flex items-center space-x-10 mb-2">
            <label>M Order:</label>
            <TextField
              type="text"
              label="mOrder"
              value={mOrder}
              onChange={(e) => updateMOrder(e.target.value)}
            />
          </div>
        )}
        </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
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
            <label>X Value :</label>
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

export default Regression;


