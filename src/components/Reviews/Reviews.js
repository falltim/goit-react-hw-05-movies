import { useQuery } from 'react-query';
import { movieReviews } from '../../services/films-api';

export default function Reviews({ id }) {
  const query = useQuery(['reviews', id], () => movieReviews(id));

  if (query.status === 'success') {
    const reviews = query.data.results;

    if (reviews.length > 0) {
      return (
        <ul>
          {reviews.map(({ author, content }) => (
            <li key={author}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>We don't have any reviews for this movie.</p>;
    }
  }
}
