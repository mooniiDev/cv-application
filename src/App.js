import { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
