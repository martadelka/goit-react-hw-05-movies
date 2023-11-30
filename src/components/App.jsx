import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RotatingLines } from 'react-loader-spinner';
import { RotatingLinesStyle } from '../services/spinnerStyles';

import AppBar from './AppBar/AppBar';

const Home = lazy(() => import('../pages/Home/Home'));

const Movies = lazy(() => import('../pages/Movies/Movies'));

const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

const Cast = lazy(() => import('../components/Cast/Cast'));

const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <AppBar />
      {/* <ProgressBar /> */}
      <Suspense fallback={<RotatingLines {...RotatingLinesStyle} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};