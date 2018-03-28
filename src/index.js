import React from 'react';
import ReactDOM from 'react-dom';

// import ListDemo from './components/ListDemo';
// import Cars from './components/Cars';

// import NameForm from './components/NameForm';
// import EssayForm from './components/EssayForm';
// import FlavorForm from './components/FlavorForm';
// import Reservation from './components/Reservation';

// import App from './components/App';
// import JokesStore from './components/JokesStore';

import PersonApp from './components/PersonApp';
import PersonStore from './components/PersonStore';


// ReactDOM.render(<ListDemo />, document.getElementById('root'));
// ReactDOM.render(<Cars />, document.getElementById('root'));

// ReactDOM.render(<NameForm />, document.getElementById('root'));
// ReactDOM.render(<EssayForm />, document.getElementById('root'));
// ReactDOM.render(<FlavorForm />, document.getElementById('root'));
// ReactDOM.render(<Reservation />, document.getElementById('root'));

// ReactDOM.render(<App jokeStore={JokesStore}/>, document.getElementById('root'));

ReactDOM.render(<PersonApp personStore={PersonStore}/>, document.getElementById('root'));


