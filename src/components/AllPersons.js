import React from 'react';

class AllPersons extends React.Component {
  constructor(props) {
    super(props);
  }
  
  onDelete = (event) => {
    const target = event.target;
    const id = target.id;
    this.props.deletePerson(id);
    event.preventDefault();
  }

  onEdit = (event) => {
    const target = event.target;
    const id = target.id;
    this.props.editPerson(id);
    event.preventDefault();
  }

  render() {
    const personList = this.props.persons.map((person, index) => 
    (<tr key={index}><td>{person.firstName}</td><td>{person.lastName}</td><td>{person.email}</td>
    <td>(<a href="" onClick={this.onDelete} id={index}>delete</a>,
    <a href="" onClick={this.onEdit} id={index}>edit</a>)</td></tr>))
    return (
      <table>
        <thead>
          <tr><th>Firstname</th><th>Lastname</th><th>email</th></tr>
        </thead>
        <tbody>
          {personList}
        </tbody>
      </table>
    );
  }
}

export default AllPersons;