'use client';
import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { Newton_func } from './Newton_func';

function Newton() {
  let [numPoints, setNumPoints] = useState(1); // จำนวนจุด
  let [data, setData] = useState([{ id: 1, x: '', fx: '' }]); // ข้อมูล x0 และ f(x0)
  let [xValue, setXValue] = useState(''); // X value
  let [ans, setAns] = useState(''); // คำตอบ

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

    let ans = Newton_func(x, y, xValue);
    console.log(ans);
    setAns(ans);
  }

  // เพิ่มจำนวนจุด
  let addPoint = () => {
    setNumPoints(numPoints + 1);
    let newData = [...data, { id: numPoints + 1, x: '', fx: '' }];
    setData(newData)
  };

  // ลดจำนวนจุด
  let removePoint = () => {
    if (numPoints > 1) {
      setNumPoints(numPoints - 1);
      let newData = [...data];
      newData.pop();
      setData(newData);
      setData(data.slice(0, -1));
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
      <h1 className="text-4xl font-bold mb-4">Newton's Divided-Difference</h1>
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
              label={`xValue`}
              value={xValue}
              onChange={(e) => updateXValue(index, 'value', e.target.value)}
            />
          </div>
          {data.map((point, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <label>{index + 1}.</label>
              <TextField
                type="text"
                label={`x${index}`}
                value={point.x}
                onChange={(e) => updateData(index, 'x', e.target.value)}
              />
              <TextField
                type="text"
                label={`f(x${index})`}
                value={point.fx}
                onChange={(e) => updateData(index, 'fx', e.target.value)}
              />
            </div>
          ))}
        </Box>
      </div>
      <Button variant="contained" color="primary" onClick={calculate}>
        Calculate
      </Button>
      <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">Result: </h2>
        {ans}
    </div>
    </div>
  );
}

export default Newton;






import React, { useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';

class NewtonCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numPoints: 1,
      data: [{ id: 1, x: '', fx: '' }],
      xValue: '',
      ans: '',
    };
  }

  calculate = () => {
    const { data, xValue } = this.state;

    let x = new Array();
    let y = new Array();

    for (let i = 0; i < data.length; i++) {
      x.push(parseFloat(data[i]['x']));
      y.push(parseFloat(data[i]['fx']));
    }

    let ans = this.Newton_func(x, y, xValue);
    this.setState({ ans });
  };

  addPoint = () => {
    const { numPoints, data } = this.state;
    this.setState({
      numPoints: numPoints + 1,
      data: [...data, { id: numPoints + 1, x: '', fx: '' }],
    });
  };

  removePoint = () => {
    const { numPoints, data } = this.state;
    if (numPoints > 1) {
      this.setState({
        numPoints: numPoints - 1,
        data: data.slice(0, -1),
      });
    }
  };

  updateData = (index, field, value) => {
    const newData = [...this.state.data];
    newData[index][field] = value;
    this.setState({ data: newData });
  };

  updateXValue = (value) => {
    this.setState({ xValue: value });
  };

  Newton_func(x, y, xValue) {
    
    let summy = 0;
    let n = x.length;
    let a = new Array(n);
    
    for(let i=0;i<n;i++){
        a[i] = y[i];
    }
    for(let j=1;j<n;j++){
        for(let i=n-1;i>=j;i--){
            a[i] = (a[i]-a[i-1])/(x[i]-x[i-j]);
        }
    }
    
    for(let i=n-1;i>=0;i--){
        let temp = a[i];
        for(let j=0;j<i;j++){
            temp = temp*(xValue-x[j]);
        }
        summy = summy+temp;
    }
    
    return summy;
  }

  render() {
    const { numPoints, data, xValue, ans } = this.state;

    return (
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold mb-4">Newton's Divided-Difference</h1>
        {/* ... (rest of the code remains unchanged) */}
      </div>
    );
  }
}

export default NewtonCalculator;


