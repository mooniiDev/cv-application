// React Component Import
import { Component } from 'react';

// Styling
import './styles/App.css';

// Components Imports
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
