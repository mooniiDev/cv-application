// React Component Import
import { Component } from 'react';

// Components Imports
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
        <Footer />
      </div>
    );
  }
}

export default App;
