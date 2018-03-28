import React from 'react';

class PersonStore {
  constructor(persons) {
    this._persons = persons;
  }
  addPerson(person) {
    this._persons.push(person);
  }
  deletePerson(id) {
    this._persons.splice(id, 1);
  }
  getPerson(id) {
    return this._persons[id];
  }
  getNumberOfPersons() {
    return this._persons.length;
  }
  
 
  get persons() {
    return this._persons;
  }
}
let startPersons = [
  {
    firstName: "Kurt",
    lastName: "Wonnegut",
    email: "kw@gmail.com"
  },
  {
    firstName: "Lars",
    lastName: "Larsen",
    email: "ll@hotmail.com"
  },
  {
    firstName: "Ole",
    lastName: "Olsen",
    email: "oleo@live.com"
  }

]

export default new PersonStore(startPersons);