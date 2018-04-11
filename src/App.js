import React, { Component } from 'react';
import Item from './components/Item'
import './App.css';

class App extends Component {
  constructor() {
    super();

    // mock images
    const images = [];
    for(let i = 0; i < 14; i++) {
      images.push(`https://picsum.photos/640/480/?image=${i+10}`);
    }

    this.state = { images };
  }
  render() {
    return (
      <div className="grid App">
        {this.state.images.map((image, index) => (<Item key={index} image={image} />))}
      </div>
    );
  }
}

export default App;
