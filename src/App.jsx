
import "./App.css";
import Row from "./component/Row";

function App() {

  return (
    <>
      <div className="train-carriage">
        <div className="carriage-row">
         
          <Row rowNumber={0} numberOfSeats={40} totalRows={4}/>
          <Row rowNumber={1} numberOfSeats={40} totalRows={4}/>

        <div className="aisle-spacer"></div>

          <Row rowNumber={2} numberOfSeats={40} totalRows={4}/>
          <Row rowNumber={3} numberOfSeats={40} totalRows={4}/>

        </div>
      </div>
    </>
  );
}

export default App;


//solution
// function App() {
//   const numberOfSeats = 48;

//   return (
//       <div className="App">
//           <div className="carriage">
//               {
//                   ( new Array( numberOfSeats / 4 ) ).fill( null ).map( ( n, row ) => (
//                       <div key={row} className="carriage-row">
//                           <Seat number={row * 4 + 1}/>
//                           <Seat number={row * 4 + 2}/>

//                           <div className="aisle-spacer"></div>

//                           <Seat number={row * 4 + 3}/>
//                           <Seat number={row * 4 + 4}/>
//                       </div>
//                   ) )
//               }

//           </div>
//       </div>
//   );
// }