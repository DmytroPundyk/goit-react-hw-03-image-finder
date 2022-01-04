import PropTypes from 'prop-types';
import SearchForm from './SearchForm';

// import styles from './Searchbar.module.scss';

const Searchbar = ({ onSearch }) => (
  <header>
    <SearchForm onSearch={onSearch} />
  </header>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
