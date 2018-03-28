import React from 'react';

var carList = {"cars":[
  {"id": 1,"make": "VW", "model": "Golf", "year": 1948},
  {"id": 2,"make": "VW", "model": "Golf", "year": 1988},
  {"id": 3,"make": "Opel", "model": "Corsa", "year": 1998},
  {"id": 4,"make": "Opel", "model": "Kadett", "year": 1978},
  {"id": 5,"make": "Opel", "model": "Kadett", "year": 1991},
  {"id": 6,"make": "VW", "model": "UP", "year": 2008},
  {"id": 7,"make": "Opel", "model": "Corsa", "year": 2011},
  {"id": 8,"make": "Saab", "model":"Sonett", "year": 1965},
  {"id": 9,"make": "VW", "model":"UP", "year": 2004},
  {"id": 10,"make": "VW", "model":"Passat", "year": 2006},
  {"id": 11,"make": "Audi", "model":"A6", "year": 2008},
  {"id": 12,"make": "Saab", "model":"Sonett", "year": 2006},
  {"id": 13,"make": "Volvo", "model":"S90", "year": 2001},
  {"id": 14,"make": "Audi", "model":"A6", "year": 1999},
  {"id": 15,"make": "Volvo", "model":"S60", "year": 2011},
  {"id": 16,"make": "Audi", "model": "A3", "year": 2002}
]}

function TableItem(props) {
    return (
        <tr><td>{props.value.make}</td>
        <td>{props.value.model}</td>
        <td>{props.value.year}</td></tr>
    )
}

function CarsTable(props) {
    const cars = props.cars;
    const tableItems = cars.map((car, index) =>
        <TableItem key={index}
            value={car} />

    );
    return (      
        <table>
          <thead>  
          <tr><th>Make</th><th>Model</th><th>Year</th></tr>
          </thead>  
          <tbody>  
          {tableItems}
          </tbody>
        </table>
   );
}

class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = carList;
    }
    render() {
        return (
            <div >
                < CarsTable cars={this.state.cars} />
            </div>
        );
    }
}

export default Cars;

