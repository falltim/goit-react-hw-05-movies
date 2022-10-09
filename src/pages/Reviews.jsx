import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getReviews } from 'services/API';
import { ReviewList } from 'components/ResultList/ResultList.styled';
import {
  ReviewAuthor,
  ReviewItem,
  ReviewContent,
  NoReviews,
} from 'components/ResultItem/ResultItem.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useLocation();

  useEffect(() => {
    getReviews(movieId).then(reviews => {
      setReviews(reviews.slice(0, 21));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {(reviews.length > 0 && (
        <ReviewList>
          {reviews.map(review => {
            const { author, name, username, content } = review;
            return (
              <ReviewItem key={author || name || username}>
                <ReviewAuthor>{author || name || username}</ReviewAuthor>
                <ReviewContent>{content}</ReviewContent>
              </ReviewItem>
            );
          })}
        </ReviewList>
      )) || <NoReviews>There are no reviews for this movie</NoReviews>}
    </div>
  );
};

export default Reviews;
