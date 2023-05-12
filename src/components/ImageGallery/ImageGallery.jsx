import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';

const ImageGallery = ({ items }) => {
  return (
    <ImageGalleryList>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default ImageGallery;
