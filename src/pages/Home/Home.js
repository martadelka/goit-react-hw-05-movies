import { useState, useEffect } from 'react';
import { getTrending } from '../../services/fetchAPI';

import FilmsList from '../../components/FilmsList/FilmsList';
import { toastError } from '../../services/toasts';

import { HomeTitle } from './Home.styled';
import { Box } from '../../components/Box';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      .then(res => {
        setMovies(res.results);
      })
      .catch(toastError);
  }, []);

  return (
    <>
      <Box style={{ flexGrow: '1' }}>
        <HomeTitle>20 Most Popular Movies Right Now</HomeTitle>
        <FilmsList data={movies} />
      </Box>
    </>
  );
}