import { Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGetMovieReviews } from '../Movied.js';
import {
  Container,
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  ReviewsText,
} from './Reviews.styled';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchGetMovieReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  if (!reviews) return null;

  if (reviews.length === 0) {
    return 'We don`t have any revlews for this movie';
  }
  
  return (
    <>
      <Container>
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <ReviewsItem key={id}>
              <ReviewsTitle>{author}</ReviewsTitle>
              <ReviewsText>{content}</ReviewsText>
            </ReviewsItem>
          ))}
        </ReviewsList>
      </Container>
      <Outlet />
    </>
  );
}
export default Reviews;
