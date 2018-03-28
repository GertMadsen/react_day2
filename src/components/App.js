import React from 'react';

class AllJokes extends React.Component { 
  constructor(props) {
    super(props);
  }
  render() {
    const jokeList = this.props.jokes.map((joke, index) => (<li key={index}>{joke}</li>))
    return (
      <ul>
        {jokeList}
      </ul>
    );
  }
}

class AddJoke extends React.Component { 
  constructor() {
    super();
    this.state = { joke: "" }
  }
  handleChange = (evt) => {
    this.setState({ joke: evt.target.value })
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.saveJoke(this.state.joke);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.joke} onChange={this.handleChange} /><br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

class App extends React.Component { //GRAY
  constructor(props) {
    super(props);
    this.state = { jokes: props.jokeStore.jokes };
  }
  saveJoke = (joke) => {
    this.props.jokeStore.addJoke(joke);
    this.setState({ jokes: this.props.jokeStore.jokes });
  }
  render() {
    return (
      <div className="container row">
        <p>Random Joke: <span> {this.props.jokeStore.getRandomJoke()}</span></p>
        <div className="col1">
          <p className="head">Add Joke</p>
          <AddJoke saveJoke={this.saveJoke} />
        </div>
        <div className="col2">
          <p className="head">All Jokes</p>
          <AllJokes jokes={this.state.jokes} />
        </div>
      </div>
    );
  }
}




export default App;
