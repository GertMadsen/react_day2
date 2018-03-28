import React from 'react';

class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      // this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange = (event) => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    handleSubmit = (event) => {
      alert(JSON.stringify(this.state));
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Name of first guest:
            <input
              name="nameOfFirstGuests"
              type="text"
              value={this.state.nameOfFirstGuests}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Name of event:
            <input
              name="nameOfEvent"
              type="text"
              value={this.state.nameOfEvent}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
          <input type="submit" value="Submit" />
          </label>
        </form>
      );
    }
  }

  export default Reservation;