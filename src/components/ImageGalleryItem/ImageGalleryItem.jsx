import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  ImageGalleryLi,
  ImageGalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import ModalImg from 'components/Modal';

class ImageGalleryItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  state = {
    showModal: false,
    imgForModal: '',
  };

  showLargeImage = img => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
    this.setState({ imgForModal: img });
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.item;
    const { showModal, imgForModal } = this.state;
    return (
      <>
        <ImageGalleryLi onClick={() => this.showLargeImage(largeImageURL)}>
          <ImageGalleryItemImage src={webformatURL} alt={tags} />
        </ImageGalleryLi>
        {showModal && (
          <ModalImg
            largeImageURL={imgForModal}
            tags={tags}
            onClose={this.showLargeImage}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
