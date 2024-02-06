import { useState } from "react";
import "./App.css";
import Row from "./component/Row";

function App() {

  return (
    <>
      <div className="train-carriage">
        <div className="carriage-row">
         <Row rowNumber={0} numberOfSeats={30} totalRows={4}/>
         <Row rowNumber={1} numberOfSeats={30} totalRows={4}/>
         
        <div className="aisle-spacer"></div>

         <Row rowNumber={2} numberOfSeats={30} totalRows={4}/>
         <Row rowNumber={3} numberOfSeats={30} totalRows={4}/>

        </div>
      </div>
    </>
  );
}

export default App;
