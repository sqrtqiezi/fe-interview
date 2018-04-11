import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ src, showModel }) => (
  <div className="item">
    <div className="box">
      <img src={src} onClick={showModel} alt=""/>
    </div>
  </div>
)

Item.propTypes = {
  src: PropTypes.string.isRequired
};

export default Item;