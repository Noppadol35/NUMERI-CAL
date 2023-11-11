'use client';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {
  Forward_Difference_Oh,
  Backward_Difference_Oh,
  Central_Difference_Oh2,
  Forward_Difference_Oh2,
  Backward_Difference_Oh2,
  Central_Difference_Oh4,
} from './Differentiation_func.js'; // Replace with the actual file path
import { set } from 'nerdamer';

function Diff() {
  let [ans, setAns] = useState('');
  let [error, setError] = useState('');
  let [FdValue, setFdValue] = useState('');
  let [selectedOptions, setSelectedOptions] = useState({
    order: '',
    error: '',
    Direction: '',
  });

  let [inputValues, setInputValues] = useState({
    fx: '',
    x: '',
    h: '',
  });

  let handleOptionChange = (event) => {
    let { name, value } = event.target;
    setSelectedOptions({
      ...selectedOptions,
      [name]: value,
    });
  };

  let handleInputChange = (event) => {
    let { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  let handleCalculate = () => {
    let { order, error, Direction } = selectedOptions;
    let { fx, x, h } = inputValues;
    let result = 0;
    let errorMsg = '';

    if (order === '' || error === '' || Direction === '') {
      errorMsg = 'Please select options';
    } else if (fx === '' || x === '' || h === '') {
      errorMsg = 'Please enter values';
    } else {
      // Call the appropriate differential function based on the selected options
      if (Direction === 'Directionvalue1') {
        if (error === 'errorvalue1') {
          result = Forward_Difference_Oh(fx, parseFloat(h), parseFloat(x), parseInt(order));
        } else if (error === 'errorvalue2') {
          result = Forward_Difference_Oh2(fx, parseFloat(h), parseFloat(x), parseInt(order));
        } else if (error === 'errorvalue3') {
          result = Central_Difference_Oh4(fx, parseFloat(h), parseFloat(x), parseInt(order));
        }
      } else if (Direction === 'Directionvalue2') {
        if (error === 'errorvalue1') {
          result = Backward_Difference_Oh(fx, parseFloat(h), parseFloat(x), parseInt(order));
        } else if (error === 'errorvalue2') {
          result = Backward_Difference_Oh2(fx, parseFloat(h), parseFloat(x), parseInt(order));
        }
      } else if (Direction === 'Directionvalue3') {
        if (error === 'errorvalue1') {
          result = Central_Difference_Oh2(fx, parseFloat(h), parseFloat(x), parseInt(order));
        }
      }
    }

    if (result instanceof Array) {
      setAns(result[0]);
      setFdValue(result[1]);
      setError(result[2]);
    } else {
      errorMsg = 'Order must be less than 5';
      setError(errorMsg);
    }
  };

  return (
    <div className="m-4">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Select
            name="order"
            value={selectedOptions.order}
            onChange={handleOptionChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Order</MenuItem>
            <MenuItem value="1">First</MenuItem>
            <MenuItem value="2">Second</MenuItem>
            <MenuItem value="3">Third</MenuItem>
            <MenuItem value="4">Fourth</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12}>
          <Select
            name="error"
            value={selectedOptions.error}
            onChange={handleOptionChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Error</MenuItem>
            <MenuItem value="errorvalue1">O(h)</MenuItem>
            <MenuItem value="errorvalue2">O(h^2)</MenuItem>
            <MenuItem value="errorvalue3">O(h^4)</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12}>
          <Select
            name="Direction"
            value={selectedOptions.Direction}
            onChange={handleOptionChange}
            displayEmpty
            fullWidth
          >
            <MenuItem value="">Direction</MenuItem>
            <MenuItem value="Directionvalue1">Forward</MenuItem>
            <MenuItem value="Directionvalue2">Backward</MenuItem>
            <MenuItem value="Directionvalue3">Centered</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            type="text"
            name="fx"
            value={inputValues.fx}
            onChange={handleInputChange}
            label="f(x)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="text"
            name="x"
            value={inputValues.x}
            onChange={handleInputChange}
            label="x"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="text"
            name="h"
            value={inputValues.h}
            onChange={handleInputChange}
            label="h"
            fullWidth
          />
        </Grid>
      </Grid>
      <div className="my-4" />
      <Button variant="contained" className="bg-blue-500" onClick={handleCalculate}>
        Calculate
      </Button>
      <div className= " text-center">
      {/* resulte */}
      <div className="my-4" />
      <div className="font-bold"> 
        <p>Result :{ans}</p>
        
      </div>
      {/* คำตอบ Findable value */}
      <div className="my-4" />
      <div className='font-bold'>
        <p> Findable value : {FdValue}</p>
      </div>
      {/* คำตอบ error */}
      <div className="my-4" />
      <div className="font-bold">
        <p>Error :{error} %</p>
      </div>
      </div>
    </div>
  );
}

export default Diff;
