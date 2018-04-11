import React, { Component } from 'react';
import Item from './components/Item';
import Model from './components/Model';
import './App.css';

class App extends Component {
  constructor() {
    super();

    // mock images
    const images = [];
    for(let i = 0; i < 14; i++) {
      images.push({
        title: 'What is Lorem Ipsum?',
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        src: `https://picsum.photos/640/480/?image=${i+10}`
      });
    }

    this.state = { 
      images, 
      showModel: false,
      index: 0
    };
  }

  showModel(index) {
    if (!this.state.showModel) {
      this.setState({
        index, showModel: true
      })
    }
  }

  render() {
    const { showModel, images } = this.state;

    return (
      <div className="grid App">
        {images.map(
          (image, index) => (
            <Item 
              key={index}
              src={image.src}
              showModel={() => this.showModel(index)}
            />
          )
        )}
        <Model active={showModel}
          {...images[this.state.index]} 
          close={() => {
            this.setState({ showModel: false })
          }} />
      </div>
    );
  }
}

export default App;
