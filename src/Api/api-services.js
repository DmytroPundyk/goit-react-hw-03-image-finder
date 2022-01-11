// 24139890-5ae6ab4edf9c1c1398f9b1185

import axios from 'axios';

const KEY_API = '24139890-5ae6ab4edf9c1c1398f9b1185';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchImages = (querySearch, page) => {
  return axios
    .get(
      `?image_type=photo&orientation=horizontal&q=${querySearch}&page=${page}&per_page=12&key=${KEY_API}`,
    )
    .then(response => response.data.hits);
};

export default fetchImages;
