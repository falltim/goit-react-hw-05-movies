import { useQuery } from 'react-query';
import { movieCredits } from '../../services/films-api';

export default function Cast({ id }) {
  const query = useQuery(['cast', id], () => movieCredits(id));
  if (query.status === 'success') {
    const cast = query.data.cast;

    if (cast.length > 0) {
      return (
        <ul>
          {cast.map(({ character, name, profile_path }) => (
            <li key={name}>
              <div>
                <img
                  style={{ width: 100 }}
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
              </div>
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      );
    } else {
      return <p>We don't have any cast for this movie.</p>;
    }
  }
}
