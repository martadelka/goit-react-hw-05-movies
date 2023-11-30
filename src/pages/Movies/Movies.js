import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../../services/fetchAPI';
import FilmsList from '../../components/FilmsList/FilmsList';
import {
  toastInfoNothing,
  toastError,
  toastSuccess,
} from '../../services/toasts';
import { RotatingLines } from 'react-loader-spinner';
import { RotatingLinesStyle } from '../../services/spinnerStyles';

import { MoviesForm } from './Movies.styled';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);


  useEffect(() => {
    if (!query) {
      return;
    }

    searchMovies(query).then(res => {
      console.log(res);
      setloading(true);

      if (res.total_results === 0) {
        toastInfoNothing();
      }
      if (res.total_results > 0) {
        toastSuccess();
      }

      setTimeout(() => {
        searchMovies(query.trim())
          .then(res => {
            console.log(res);
            setMovies(res.results);
          })
          .catch(toastError)
          .finally(() => {
            setloading(false);
          });
      }, 300);
    });

    setloading(false);
  }, [query]);

  return (
    <>
      <main style={{ flexGrow: '1' }}>
        <MoviesForm
          onSubmit={event => {
            event.preventDefault();
            setQuery(event.currentTarget.querySelector('input').value);
            console.log(query);
          }}
        >
          <div>
            <input
              text="text"
              autoComplete="off"
              autoFocus
              type="search"
              placeholder="Search movie"
            />
            <button type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
              </svg>
            </button>
          </div>
          {loading && <RotatingLines {...RotatingLinesStyle} />}
          {movies !== false && <FilmsList data={movies} />}
        </MoviesForm>
      </main>
    </>
  );
}