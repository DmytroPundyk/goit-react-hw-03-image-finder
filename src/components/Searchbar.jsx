import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchForm.styled';

const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export default class Searchbar extends Component {
  static propTypes = {
    onSubmitForm: PropTypes.func,
  };

  state = {
    query: '',
  };

  notify = () =>
    toast.info('Please write somethink!!!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;

    query.trim() ? this.props.onSubmitForm(query) : this.notify();

    this.resetState();
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  resetState = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
