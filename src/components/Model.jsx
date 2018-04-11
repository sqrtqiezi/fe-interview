import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModel = styled.div`
  position: fixed;
  display: ${props => props.active ? 'flex' : 'none' };
  flex-direction: column;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 10px;
  background-color: white;
  border-radius: 5px;
  overflow-x: hidden;
  overflow-y: auto;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 750px) {
    width: 640px;
    max-height: 480px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CloseButton = styled.span`
  position: fixed;
  top: 10px;
  right: 20px;
  font-size: 2em;

  &:hover {
    color: #5CC9F5;
  }

  &::after {
    display: inline-block;
    content: 'x';
    cursor: pointer;
  }
`;

const Model = ({ active, src, title, description, close }) => (
  <StyledModel active={active}>
    <h2>{title}</h2>
    <img src={src} alt="title"/>
    <p>{ description }</p>
    <CloseButton onClick={close}/>
  </StyledModel>
);

Model.propTypes = {
  active: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired
};

export default Model;