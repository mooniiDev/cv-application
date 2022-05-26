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
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
