import React from 'react';

// function ListItem(props) {
//     return <li>{props.value}</li>;
// }


// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number, index) =>
//         <ListItem key={index}
//             value={number} />

//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }

function TableItem(props) {
    return <tr><td>{props.value}</td></tr>;
}

function NumberTable(props) {
    const numbers = props.numbers;
    const tableItems = numbers.map((number, index) =>
        <TableItem key={index}
            value={number} />

    );
    return (      
        <table>
          <thead>  
          <tr><th>Number</th></tr>
          </thead>  
          <tbody>  
          {tableItems}
          </tbody>
        </table>
   );
}

class ListDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [1, 3, 5, 7, 9] }
    }
    render() {
        return (
            <div >
                < NumberTable numbers={this.state.numbers} />
            </div>
        );
    }
}



export default ListDemo;