import Seat from "./Seat";

const Row = ({rowNumber, numberOfSeats, totalRows}) => {
  const seatArray = [];


  for (let i = rowNumber; i < numberOfSeats; i+=4) {
    seatArray.push (<Seat number = {i + 1}/>)
  }

  return <>
  <div className="row">
  {seatArray}
  </div>
  </>;
};

export default Row;

