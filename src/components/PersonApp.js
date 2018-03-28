import React from 'react';

import AllPersons from './AllPersons';
import AddPerson from './AddPerson';


class PersonApp extends React.Component { //GRAY
  constructor(props) {
    super(props);
    this.state = { persons: props.personStore.persons, 
      person: null };
  }

  savePerson = (person) => {
    this.props.personStore.addPerson(person);
    this.setState({ persons: this.props.personStore.persons });
  }

  deletePerson = (id) => {
    this.props.personStore.deletePerson(id);
    this.setState({ persons: this.props.personStore.persons });
  }

  editPerson = (id) => {
    let editPerson = this.props.personStore.getPerson(id);
    this.props.personStore.deletePerson(id);
    this.setState({
      person : editPerson,
      persons: this.props.personStore.persons
    });
  }  

  render() {
    return (
      <div className="container row">
        <p>Total persons: <span> {this.props.personStore.getNumberOfPersons()}</span></p>
        
        <div className="col3">
          <p className="head">Add Person</p>
          <AddPerson savePerson={this.savePerson} 
          defaultPerson={this.state.person} />
        </div>
        <div className="col4">
          <p className="head">All Persons</p>
          <AllPersons persons={this.state.persons} 
          deletePerson={this.deletePerson} 
          editPerson={this.editPerson}/>
        </div>
      </div>
    );
  }
}




export default PersonApp;
