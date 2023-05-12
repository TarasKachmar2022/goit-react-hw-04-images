import PropTypes from 'prop-types';
import { BtnContsiner, MoreBtn } from 'components/Button/Button.styled';

const LoadMoreBtn = ({ addPage }) => {
  return (
    <BtnContsiner>
      <MoreBtn type="button" onClick={addPage}>
        Load More
      </MoreBtn>
    </BtnContsiner>
  );
};

LoadMoreBtn.propTypes = { addPage: PropTypes.func.isRequired };

export default LoadMoreBtn;
