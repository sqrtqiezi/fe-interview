import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ image }) => (
  <div className="item" tabIndex="1">
    <div className="box">
      <img src={image} alt=""/>
    </div>
  </div>
)

Item.propTypes = {
  image: PropTypes.string.isRequired
};

export default Item;