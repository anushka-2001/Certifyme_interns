import React, { Component } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Cards';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card />

        <Footer />
      </div>
    );
  }
}
export default App