import React, { Component } from 'react';
import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';
import {
  SearchbarWrap,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from 'components/Searchbar/Searchbar.styled';
import { Toaster } from 'react-hot-toast';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchName: '',
  };

  onInputChange = e => {
    this.setState({ searchName: e.currentTarget.value.trim().toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName === '') {
      toast.error('Введіть значення для пошуку!');
      //   alert('Введіть значення для пошуку!');
      return;
    }

    this.props.onSubmit(this.state.searchName);
  };

  render() {
    return (
      <SearchbarWrap>
        <Toaster position="top-right" />
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <BiSearch fontSize="20" />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            value={this.state.value}
            onChange={this.onInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarWrap>
    );
  }
}

export default Searchbar;
