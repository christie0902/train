import Seat from "./Seat";
import { useState } from "react";

const Row = ({rowNumber, numberOfSeats, totalRows}) => {
  const seatArray = [];


  for (let i = rowNumber; i < numberOfSeats; i+totalRows) {
    seatArray.push (<Seat number = {i + 1}/>)
  }

  return <>{seatArray}</>;
};

export default Row;
