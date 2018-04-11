import React, { Component } from 'react';
import Item from './components/Item';
import Model from './components/Model';
import { connect } from 'react-redux';
import { loadImages } from './actions';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { 
      showModel: {
        active: false,
        title: '',
        description: '',
        src: ''
      },
    };
  }

  componentDidMount() {
    this.props.loadImages();
  }

  showModel(index) {
    if (!this.state.showModel.active) {
      this.setState({
        showModel: {
          active: true,
          ...this.props.images[index]
        }
      })
    }
  }

  render() {
    const { images } = this.props;
    const { showModel } = this.state;

    return (
      <div className="grid App">
        {images.map(
          (image, index) => (
            <Item 
              key={image.id}
              src={image.src}
              showModel={() => this.showModel(index)}
            />
          )
        )}
        <Model active={showModel.active}
          {...showModel} 
          close={() => {
            this.setState({ showModel: {
              ...showModel,
              active: false
            }})
          }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images.images
  };
};

export default connect(mapStateToProps, { loadImages })(App);
