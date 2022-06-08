// React Component Import
import { Component } from 'react';

// Components Imports
import Header from './components/Header';
import Main from './components/Main';

// Styling Imports
import './styles/App.css';

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
