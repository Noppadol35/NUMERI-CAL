'use client';
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { trapezoidal_func } from "./Trapezoidal_func.js";

function Trapezoidal() {
  let [a, setA] = useState();
  let [b, setB] = useState();
  let [functionText, setFunctionText] = useState("");
  let [error, setError] = useState(false);

  let [result, setResult] = useState();

  function Calculate() {
    try {
      let result = trapezoidal_func(functionText, a, b);
      setResult(result);
      setError(false);
    } catch (error) {
      setError(true);
      setResult("ERROR: " + error);
    }
  }

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold md-4">Single Trapezoidal Rule</h1>
      <div className="h-5" />
      <div className="flex justify-center items-center space-x-4 mb-4">
        <TextField
          label="a (x0)"
          type="number"
          variant="outlined"
          placeholder="a"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <TextField
          label="b (x1)"
          type="number"
          variant="outlined"
          placeholder="b"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <TextField
          label="F(x)"
          type="text"
          variant="outlined"
          placeholder="F(x)"
          value={functionText}
          onChange={(e) => setFunctionText(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <Button variant="contained" color="primary" onClick={Calculate}>
          Calculate
        </Button>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <label>Result : {result && result.result}</label>
      </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <label>
          Error : {typeof result === "object" ? result.error : result}
        </label>
      </div>
    </div>
  );
}

export default Trapezoidal;
