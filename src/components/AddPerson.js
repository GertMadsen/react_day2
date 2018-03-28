import React from 'react';

class AddPerson extends React.Component {
    constructor(props) {
        super();
        console.log("xxx",props.defaultPerson);
        if (props.defaultPerson === null) {
            this.state = {
                person: {
                    firstName: "",
                    lastName: "",
                    email: ""
                }
            };
        } else {
            this.state = { person : props.defaultPerson }
        }
    }

    componentWillReceiveProps(props) {
        if (props.defaultPerson === null) {
            this.setState = {
                person: {
                    firstName: "",
                    lastName: "",
                    email: ""
                }
            };
        } else {
            this.setState({ person : props.defaultPerson })
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var person = this.state.person;
        person[name] = value;
        this.setState({
            person
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.savePerson(this.state.person);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Firstname:
            <input
                            name="firstName"
                            type="text"
                            value={this.state.person.firstName}
                            onChange={this.handleInputChange} />
                    </label><br />
                    <label>Lastname:
            <input
                            name="lastName"
                            type="text"
                            value={this.state.person.lastName}
                            onChange={this.handleInputChange} />
                    </label><br />
                    <label>E-mail:
            <input
                            name="email"
                            type="text"
                            value={this.state.person.email}
                            onChange={this.handleInputChange} />
                    </label><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default AddPerson;