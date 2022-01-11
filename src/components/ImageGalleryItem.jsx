import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GalleryItemImg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export default class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    const { image, name } = this.props;
    return <GalleryItemImg src={image} alt={name} />;
  }
}
