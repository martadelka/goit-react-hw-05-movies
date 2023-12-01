import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../../services/fetchAPI';
import FilmsList from '../../components/FilmsList/FilmsList';
import {
  toastInfoNothing,
//   toastError,
//   toastSuccess,
} from '../../services/toasts';
import { RotatingLines } from 'react-loader-spinner';
import { RotatingLinesStyle } from '../../services/spinnerStyles';
import { FormMovies } from '../../components/Form/FormMovies';

export default function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setloading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const querySearched = searchParams.get('query');

  useEffect(() => {
    if (!querySearched) return;
    async function getFilms() {
      try {
        setloading(true);

        const { results } = await searchMovies(querySearched);

        setSearchedMovies(results);
      } catch (error) {
        toastInfoNothing();;
      } finally {
        setloading(false);
      }
    }
    getFilms();
  }, [querySearched]);

  const handleOnSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <>
    <main style={{ flexGrow: '1' }}>
    {loading && <RotatingLines {...RotatingLinesStyle} />}
    <FormMovies onSubmit={handleOnSubmit} />
    {searchedMovies !== false && <FilmsList data={searchedMovies} />}
    </main>
    </>
  );
}


