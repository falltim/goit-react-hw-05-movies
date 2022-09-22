import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { trendMovies } from '../../services/films-api';

export default function HomePage() {
  const query = useQuery('movies', trendMovies);

  if (query.status === 'success') {
    const films = query.data.results;

    return (
      <>
        {films && (
          <ul>
            {films.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`movies/${id}`}>{original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
