import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export default class ImageGallery extends Component {
  static propTypes = {
    list: PropTypes.array,
    onClick: PropTypes.func,
  };

  handleShowLargeImage = (imageUrl, name) => {
    this.props.onClick({ src: imageUrl, name: name });
  };

  render() {
    const { list } = this.props;
    return (
      <Gallery>
        {list &&
          list.map(({ id, webformatURL, largeImageURL, tags }, index) => (
            <GalleryItem
              key={index}
              onClick={() => this.handleShowLargeImage(largeImageURL, tags)}
            >
              <ImageGalleryItem image={webformatURL} name={tags} />
            </GalleryItem>
          ))}
      </Gallery>
    );
  }
}
