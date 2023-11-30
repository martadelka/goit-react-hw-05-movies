import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';
import { RotatingLinesStyle } from '../../services/spinnerStyles';
import { toastError } from '../../services/toasts';

import { getMovieReviews } from '../../services/fetchAPI';
import { DelayedRender } from '../../services/DelayedRender';

import { ReviewsList, EmptyReviews } from './Reviews.styled';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    let timeoutId;
    setLoading(true);

    async function fetchData() {
      try {
        const res = await getMovieReviews(movieId);
        setReviews(res.results);
      } catch (error) {
        toastError();
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    }

    fetchData();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [movieId]);

  return (
    <>
      {loading && <RotatingLines {...RotatingLinesStyle} />}
      {reviews && reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => {
            return (
              <div key={id}>
                <h3>
                  Author: <span>{author}</span>
                </h3>
                <p>{content}</p>
              </div>
            );
          })}
        </ReviewsList>
      ) : (
        <DelayedRender delay={300}>
          <EmptyReviews>
            Sorry, we don't have any reviews for this movie...
          </EmptyReviews>
        </DelayedRender>
      )}
    </>
  );
}