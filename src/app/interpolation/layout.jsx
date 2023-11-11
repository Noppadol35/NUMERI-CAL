import React from "react";
import IterpolationBtn from "./iterpolationBtn.jsx";
function Iterpolantion({children}) {
  return (
    <>
      <IterpolationBtn />
      {children}
    </>
  );
}

export default Iterpolantion;