import './App.css';

import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import fetchImages from './Api/api-services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    largeImage: null,
    page: 1,
    articles: [],
    onOpenModal: false,
    loading: false,
    querySearch: '',
    error: null,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    const nextQuery = this.state.querySearch;
    const prevQuery = prevState.querySearch;

    if (nextQuery !== prevQuery) {
      this.getFetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  getFetchImages = () => {
    const { querySearch, page, articles } = this.state;

    this.toggleLoading();
    fetchImages(querySearch, page)
      .then(hits =>
        this.setState({ articles: [...articles, ...hits], page: page + 1 }),
      )
      .catch(error => this.setState({ error }))
      .finally(this.toggleLoading);
  };

  getLargeImage = image => {
    this.setState({ largeImage: image });
    this.toggleModal();
  };

  onSearch = query =>
    this.setState({ querySearch: query, articles: [], page: 1 });

  toggleLoading = () => {
    this.setState(({ loading }) => ({
      loading: !loading,
    }));
  };

  toggleModal = () => {
    this.setState(({ onOpenModal }) => ({
      onOpenModal: !onOpenModal,
    }));
  };
  //get more img
  getLoadMore = () => {
    this.getFetchImages();
  };

  render() {
    const { onOpenModal, articles, loading, largeImage } = this.state;
    return (
      <div>
        <Searchbar onSubmitForm={this.onSearch}></Searchbar>
        <ImageGallery
          list={articles}
          onClick={this.getLargeImage}
        ></ImageGallery>
        {loading && <Loader />}
        {articles.length > 0 && (
          <Button onClick={this.getLoadMore} aria-label="Load more">
            Load more
          </Button>
        )}
        {onOpenModal && (
          <Modal image={largeImage} toggleModal={this.toggleModal} />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
