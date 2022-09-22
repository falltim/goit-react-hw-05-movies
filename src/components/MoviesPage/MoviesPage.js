import { useState } from 'react';
import { useQuery } from 'react-query';
import { useSearchParams, Link } from 'react-router-dom';
import { searchMovie } from '../../services/films-api';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  let films = [];
  let searchQuery = searchParams.get('query');
  const queryToFind = useQuery(['moviesF', searchQuery], () =>
    searchMovie(searchQuery)
  );

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = query.trim().toLowerCase();
    if (searchQuery === '') {
      alert('Empty');
      return;
    }
    setSearchParams({ query: searchQuery });
  };
  const handleChange = e => {
    setQuery(e.currentTarget.value);
  };
  if (queryToFind.status === 'success') {
    if (searchQuery) {
      films = queryToFind.data.results;
    }

    return (
      <>
        <form
          style={{ margin: 20 }}
          className="search-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="find"
            size="20"
            autoComplete="off"
            onChange={handleChange}
          ></input>
          <button style={{ margin: 10, cursor: 'pointer' }} type="submit">
            Search
          </button>
        </form>
        {films && (
          <ul>
            {films.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`${id}`}>{original_title}</Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
