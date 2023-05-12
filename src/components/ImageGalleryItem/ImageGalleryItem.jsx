import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  ImageGalleryLi,
  ImageGalleryItemImage,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import ModalImg from 'components/Modal';

// class ImageGalleryItem extends Component {
// static propTypes = {
//   item: PropTypes.shape({
//     webformatURL: PropTypes.string.isRequired,
//     largeImageURL: PropTypes.string.isRequired,
//     tags: PropTypes.string.isRequired,
//   }).isRequired,
// };

// state = {
//   showModal: false,
//   imgForModal: '',
// };

// showLargeImage = img => {
//   this.setState(prevState => ({ showModal: !prevState.showModal }));
//   this.setState({ imgForModal: img });
// };

// render() {
// const { tags, webformatURL, largeImageURL } = this.props.item;
// const { showModal, imgForModal } = this.state;
// return (
//   <>
//     <ImageGalleryLi onClick={() => this.showLargeImage(largeImageURL)}>
//       <ImageGalleryItemImage src={webformatURL} alt={tags} />
//     </ImageGalleryLi>
//     {showModal && (
//       <ModalImg
//         largeImageURL={imgForModal}
//         tags={tags}
//         onClose={this.showLargeImage}
//       />
//     )}
//   </>
// );
// }
// }

// export default ImageGalleryItem;

const ImageGalleryItem = ({ item }) => {
  const { tags, webformatURL, largeImageURL } = item;
  const [showModal, setShowModal] = useState(false);
  const [imgForModal, setImgForModal] = useState('');

  const showLargeImage = img => {
    setShowModal(!showModal);
    setImgForModal(img);
  };

  return (
    <>
      <ImageGalleryLi onClick={() => showLargeImage(largeImageURL)}>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryLi>
      {showModal && (
        <ModalImg
          largeImageURL={imgForModal}
          tags={tags}
          onClose={showLargeImage}
        />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
