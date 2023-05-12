import axios from 'axios';
import PropTypes from 'prop-types';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = 'key=34422207-170011de97ccd8f3047fd820d';
// const page = 1;

// export const fetchApi = async searchName => {
//   const response = await axios.get(
//     `?${API_KEY}&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`
//   );
//   console.log(response.data);
//   return response.data;
// };

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '34422207-170011de97ccd8f3047fd820d';
const PER_PAGE = 12;

const fetchApi = async (searchName, page) => {
  const response = await axios.get(`/`, {
    params: {
      key: API_KEY,
      q: searchName,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PER_PAGE,
      page,
    },
  });

  return { ...response.data, perPage: PER_PAGE };
};

fetchApi.propTypes = {
  searchName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};

export default fetchApi;
