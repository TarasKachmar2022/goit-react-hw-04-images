import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from 'components/Modal/Modal.styled';

const rootModal = document.querySelector('#rootModal');

export default class ModalImg extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      </Overlay>,
      rootModal
    );
  }
}
