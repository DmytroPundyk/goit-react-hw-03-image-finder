// 24139890-5ae6ab4edf9c1c1398f9b1185

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async (query, currentPage) => {
  const API_KEY = '24139890-5ae6ab4edf9c1c1398f9b1185';
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  return data;
};

export default fetchImages;
