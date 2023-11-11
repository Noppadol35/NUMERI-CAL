'use client';

import React, { useEffect, useState } from "react";
import { Guss_func } from "./Guss_func.js";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Guass() {
  useEffect(function () {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  let [matrixDimension, setMatrixDimension] = useState(3);

  function updateMatrixDimension(dimension) {
    if (dimension < 2) {
      alert("Dimension must be >= 2");
      return;
    }
    setMatrixDimension(dimension);
    setMatrixA(createMatrix(dimension));

    let newMatrixB = [];
    for (let i = 0; i < dimension; i++) {
      newMatrixB.push("");
    }
    setMatrixB(newMatrixB);
  }

  function createMatrix(dimension) {
    let newMatrix = [];
    for (let i = 0; i < dimension; i++) {
      newMatrix.push(new Array(dimension).fill(""));
    }
    return newMatrix;
  }

  let [matrixA, setMatrixA] = useState(createMatrix(matrixDimension));
  let [matrixB, setMatrixB] = useState(new Array(matrixDimension).fill(""));
  let [ans, setAns] = useState([]);

  function updateCellA(row, col, value) {
    let newMatrixA = [...matrixA];
    newMatrixA[row][col] = parseFloat(value);
    setMatrixA(newMatrixA);
  }

  function updateCellB(row, value) {
    let newMatrixB = [...matrixB];
    newMatrixB[row] = parseFloat(value);
    setMatrixB(newMatrixB);
  }

  function Calculate() {
    let newMatrixA = [...matrixA];
    let newMatrixB = [...matrixB];

    for (let i = 0; i < matrixDimension; i++) {
      for (let j = 0; j < matrixDimension; j++) {
        if (newMatrixA[i][j] === "") {
          newMatrixA[i][j] = 0;
        }
      }
    }

    for (let i = 0; i < matrixDimension; i++) {
      if (newMatrixB[i] === "") {
        newMatrixB[i] = 0;
      }
    }

    let result = Guss_func(matrixA, matrixB);
    setAns(result);
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold">Guass Elimination</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <div className="card mb-5">
            <div className="text-center mb-5">
              <div className="mx-auto">
                {" "}
                {/* Center the input field */}

                <label htmlFor="matrix-dimension" className="text-lg font-bold">
                  Dimension:
                </label>
                <div className="relative ml-2">
                  <input
                    type="number"
                    id="matrix-dimension"
                    className="form-input w-16 pr-8"
                    value={matrixDimension}
                    onChange={(e) => {
                      updateMatrixDimension(parseInt(e.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="text-center font-bold mt-3">
                <strong>Matrix A</strong>
              </div>
              <table className="table-auto mx-auto mt-2">
                {matrixA.map((row, rowIndex) => {
                  return (
                    <tr key={rowIndex}>
                      {row.map((cell, colIndex) => {
                        return (
                          <td key={colIndex}>
                            <TextField
                              type="number"
                              value={cell}
                              placeholder="0"
                              onChange={(e) => {
                                updateCellA(rowIndex, colIndex, e.target.value);
                              }}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
        <div>
          <div className="card mb-5">
            <div className="card-body">
              <div className="text-center font-bold">
                <strong>Matrix B</strong>
              </div>
              <table className="table-auto mx-auto mt-2">
                {matrixB.map((cell, rowIndex) => {
                  return (
                    <tr key={rowIndex}>
                      <td>
                        <TextField
                          type="number"
                          value={cell}
                          placeholder="0"
                          onChange={(e) => {
                            updateCellB(rowIndex, e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </table>
              <div className="text-center mt-3">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    Calculate();
                  }}
                >
                  Calculate
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card mb-5">
            <div className="card-body">
              <div className="text-center font-bold">
                <strong>Answer</strong>
              </div>
              <div className="mx-auto mt-2">
                {" "}
                {/* Center the answer section */}
                {ans.map((ans, index) => (
                  <p key={index} className="text-xl font-bold">
                    x{index + 1}: {ans}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guass;
