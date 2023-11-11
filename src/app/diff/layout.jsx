import React from "react";
import DifferentiationBtn from "./DifferentiationBtn";

function Differentiation({ children }) {
  return (
    <>
      <DifferentiationBtn />
      {children}
    </>
  );
}
export default Differentiation;
