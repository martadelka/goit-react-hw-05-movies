import { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { FormM } from './FormM.styled'

export const FormMovies = ({ onSubmit }) => {
  const [searchedValue, setSearchedValue] = useState('');

  const handleSearch = evt => {
    setSearchedValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const query = searchedValue.trim().toLowerCase();
    if (!query) return;

    onSubmit(query);
    setSearchedValue('');
  };
  
  return (
    <FormM onSubmit={handleSubmit}>
      <div>
        <button type='submit'>
          <BsSearch size={16} />
        </button>
        <input
          type="text"
          autoComplete="off"
          name={searchedValue}
          placeholder="Search movies"
          onChange={handleSearch}
        />
      </div>
    </FormM>
  );
};


