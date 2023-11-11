'use client';
import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { ComposSim_func } from './ComposSim_func.js';

function ComposSim() {
  let [a, setA] = useState();
  let [b, setB] = useState();
  let [functionText, setFunctionText] = useState("");
  let [error, setError] = useState(false);
  let [n, setN] = useState();

  let [result, setResult] = useState();

  function Calculate() {
    let aNumber = parseFloat(a);
    let bNumber = parseFloat(b);
    let nNumber = parseInt(n);

    if (isNaN(a) || isNaN(b)) {
      setError(true);
      setResult("Invalid input. Please enter valid numbers.");
    } else {
      try {
        let result = ComposSim_func(functionText, aNumber, bNumber, nNumber);
        setResult(result);
        setError(false);
      } catch (error) {
        setError(true);
        setResult("ERROR: " + error);
      }
    }
  }
  return (
    <div className='text-center mt-8'>
      <h1 className='text-3xl font-bold md-4'>Single ComposSim's Rule</h1>
      <div className="h-5"/>
      <div className='flex justify-center items-center space-x-4 mb-4'>
        <TextField
          label="a (x0)"
          type="number"
          variant="outlined"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <TextField
          label="b (x1)"
          type="number"
          variant="outlined"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <TextField
          label="F(x)"
          type="text"
          variant="outlined"
          value={functionText}
          onChange={(e) => setFunctionText(e.target.value)}
        />
        <TextField
          label="N(n)"
          type="number"
          variant="outlined"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center space-x-4 mb-4">
        <Button
          variant="contained"
          color="primary"
          onClick={Calculate}
        >
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
  )
}

export default ComposSim;


