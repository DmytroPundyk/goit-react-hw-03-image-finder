import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

const Modall = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    image: PropTypes.objectOf(PropTypes.string),
    toggleModal: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseKeyEvent);
  }

  onCloseKeyEvent = e => {
    const { toggleModal } = this.props;
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  onCloseOverlay = e => {
    const { toggleModal } = this.props;
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  render() {
    const { src, name } = this.props.image;
    return createPortal(
      <Overlay onClick={this.onCloseOverlay}>
        <Modall>
          <img src={src} alt={name} />
        </Modall>
      </Overlay>,
      modalRoot,
    );
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseKeyEvent);
  }
}
