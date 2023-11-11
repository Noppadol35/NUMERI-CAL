'use client';

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Plot from "react-plotly.js";
import {Flase_func} from "./Flase_func.js"

function Flase() {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(0);
  let [rowsPerPage, setRowsPerPage] = useState(10);
  let [xstart, setXStart] = useState(0);
  let [xend, setXEnd] = useState(0);
  let [epsilon, setEpsilon] = useState(0.000001);
  let [equation, setEquation] = useState("");

  function calculate() {
    xstart = parseFloat(xstart);
    xend = parseFloat(xend);
    epsilon = parseFloat(epsilon);
    let result = Flase_func(equation, xstart, xend, epsilon);
    setData(result);
    setPage(0);
  }

  // Columns for the table
  let columns = [
    { id: "iteration", label: "Iteration", minWidth: 170 },
    { id: "xm", label: "Xm", minWidth: 100 },
    { id: "yk", label: "Yk", minWidth: 170 },
    { id: "error", label: "Error", minWidth: 170 },
  ];

  let handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  let handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container mx-auto px-4 py-5 text-center">
      <h1 className="text-2xl font-bold md-4">Flase Position Method</h1>
      <div className="h-8"></div>
      <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 justify-center">
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-1">
              <label htmlFor="xstart" className="text-lg font-semibold">
                X Start
              </label>
              <input
                type="number"
                id="xstart"
                name="xstart"
                placeholder="Enter X Start"
                value={xstart}
                onChange={(e) => setXStart(e.target.value)}
                className="border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="xend" className="text-lg font-semibold">
                X End
              </label>
              <input
                type="number"
                id="xend"
                name="xend"
                placeholder="Enter X End"
                value={xend}
                onChange={(e) => setXEnd(e.target.value)}
                className="border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="epsilon" className="text-lg font-semibold">
                Error & Epsilon
              </label>
              <input
                type="number"
                id="epsilon"
                name="epsilon"
                placeholder="0.0000001"
                value={epsilon}
                onChange={(e) => setEpsilon(e.target.value)}
                className="border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="equation" className="text-lg font-semibold">
              f(x)
            </label>
            <input
              type="text"
              id="equation"
              name="equation"
              placeholder="Enter f(x)"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
              className="border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
            onClick={calculate}
          >
            Calculate
          </button>
        </div>
      </div>

      {/* เว้นช่องว่างลงมา */}
      <div className="h-8"></div>
      {/* Graph section */}
      <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 justify-center">
        <div className="w-full md:w-1/2 flex flex-col space-y-4">
          <div className="flex flex-col space-y-1">
            <label htmlFor="graph" className="text-lg font-semibold">
              Graph
            </label>
            <div className="border-2 border-gray-200 p-2 rounded-lg focus:outline-none focus:border-blue-500">
              <Plot
                data={[
                  {
                    x: data.map((row) => row.xm),
                    y: data.map((row) => row.yk),
                    type: "scatter",
                    mode: "lines+markers",
                    name: "Flase Method",
                  },
                ]}
                layout={{
                  width: 600,
                  height: 400,
                  title: "Flase Method Graph",
                  xaxis: { title: "Xm" },
                  yaxis: { title: "Yk" },
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* เว้นช่องว่างลงมา */}
      <div className="h-8"></div>
      {/* ตาราง */}
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 &&
                data.map((row, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default Flase;
